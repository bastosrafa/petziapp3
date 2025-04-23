import DiaryList from "../DiaryList";

export default function WalkList() {
  const columns = [
    { key: "duration", label: "Duração (min)" },
    { key: "location", label: "Local" }
  ];

  return <DiaryList category="passeio" columns={columns} />;
} 