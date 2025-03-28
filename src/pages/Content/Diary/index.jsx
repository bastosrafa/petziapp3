import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/components/ui/card";
import { Button } from "@/shadcn/components/ui/button";
import { Plus, Stethoscope, Scale, Dog, Utensils, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import VeterinaryForm from "./components/VeterinaryForm";
import WeightForm from "./components/WeightForm";
import WalkForm from "./components/WalkForm";
import FoodForm from "./components/FoodForm";

const categories = [
  {
    id: "veterinario",
    title: "Visitas ao Veterinário",
    icon: Stethoscope,
    description: "Registre consultas, exames e procedimentos veterinários",
    color: "bg-blue-500",
    form: VeterinaryForm,
  },
  {
    id: "peso",
    title: "Peso e Medidas",
    icon: Scale,
    description: "Acompanhe o peso e medidas do seu pet",
    color: "bg-green-500",
    form: WeightForm,
  },
  {
    id: "passeios",
    title: "Passeios",
    icon: Dog,
    description: "Registre os passeios e atividades físicas",
    color: "bg-purple-500",
    form: WalkForm,
  },
  {
    id: "alimentacao",
    title: "Alimentação",
    icon: Utensils,
    description: "Controle a alimentação e dieta do seu pet",
    color: "bg-orange-500",
    form: FoodForm,
  },
  {
    id: "outros",
    title: "Outros Registros",
    icon: BookOpen,
    description: "Registre outros acontecimentos importantes",
    color: "bg-gray-500",
  },
];

export default function Diary() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
    if (category.form) {
      setIsDialogOpen(true);
    }
  };

  const renderForm = () => {
    const category = categories.find(c => c.id === selectedCategory);
    if (!category?.form) return null;

    const FormComponent = category.form;
    return <FormComponent onClose={() => setIsDialogOpen(false)} />;
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Diário do Pet</h1>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {renderForm()}
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedCategory === category.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {category.title}
                </CardTitle>
                <div className={`p-2 rounded-full ${category.color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
} 