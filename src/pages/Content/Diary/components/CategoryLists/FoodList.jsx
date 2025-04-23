import DiaryList from "../DiaryList";

export default function FoodList() {
  const columns = [
    { key: "foodType", label: "Tipo de Alimento" },
    { key: "quantity", label: "Quantidade" }
  ];

  return <DiaryList category="alimentacao" columns={columns} />;
} 