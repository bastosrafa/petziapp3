import { useTheme } from "@/providers/ThemeProvider";
import { useNavigate } from "react-router-dom";

export default function Logo({ size, justify, isTopBar }) {
  const width = size || 190;
  const { theme } = useTheme();

  const navigate = useNavigate();

  const navigateToHome = () => navigate("/");

  // O logo da top bar é o que estava anteriormente na parte superior da tela de login
  const getLogoSrc = () => {
    return "/Logo top bar.png";
  };

  return (
    <div role="button" onClick={navigateToHome} style={{ display: 'flex', alignItems: 'center', justifyContent: justify || 'center', height: isTopBar ? 140 : 'auto' }}>
      <img
        src={getLogoSrc()}
        style={{ height: isTopBar ? 128 : 'auto', width: isTopBar ? 'auto' : width, maxHeight: '100%', objectFit: 'contain', display: 'block' }}
        alt="Petzia"
      />
    </div>
  );
}
