import { useTheme } from "@/providers/ThemeProvider";
import "./Loading.css";

export default function Loading() {
  const { theme } = useTheme();

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
    }}>
      <img
        src="/Logo icone app_Transparente_App, loading, botão início (1).png"
        alt="Carregando Petzia"
        className="petzia-logo-loading"
        style={{ width: 80, height: 80, animation: 'spin 1.2s linear infinite' }}
      />
    </div>
  );
}
