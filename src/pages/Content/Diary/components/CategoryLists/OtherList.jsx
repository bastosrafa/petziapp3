import DiaryList from "../DiaryList";

export default function OtherList() {
  const columns = [
    { key: "title", label: "Título" },
    { key: "description", label: "Descrição" }
  ];

  return <DiaryList category="outros" columns={columns} />;
} 