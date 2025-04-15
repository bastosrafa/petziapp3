import { useState } from "react";
import styled from "styled-components";
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
import OtherForm from "./components/OtherForm";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const CategoryIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 8px;
  color: #007bff;
`;

const CategoryTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
`;

const CategoryDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
`;

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
    form: OtherForm,
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
    <Container>
      <Title>Diário do Pet</Title>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {renderForm()}
        </DialogContent>
      </Dialog>

      <CategoriesGrid>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <CategoryCard
              key={category.id}
              onClick={() => handleCategoryClick(category)}
            >
              <CategoryHeader>
                <CategoryIcon>
                  <Icon size={24} />
                </CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          );
        })}
      </CategoriesGrid>
    </Container>
  );
} 