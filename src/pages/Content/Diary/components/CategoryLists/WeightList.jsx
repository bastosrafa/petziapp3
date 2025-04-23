import DiaryList from "../DiaryList";

export default function WeightList() {
  const columns = [
    { key: "weight", label: "Peso" },
    { key: "height", label: "Altura" },
    { key: "length", label: "Comprimento" }
  ];

  return <DiaryList category="peso" columns={columns} />;
} 