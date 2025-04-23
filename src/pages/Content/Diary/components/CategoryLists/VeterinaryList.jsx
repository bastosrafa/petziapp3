import DiaryList from "../DiaryList";

export default function VeterinaryList() {
  const columns = [
    { key: "vetName", label: "Veterinário" },
    { key: "procedure", label: "Procedimento" },
    { key: "reason", label: "Motivo" }
  ];

  return <DiaryList category="veterinario" columns={columns} />;
} 