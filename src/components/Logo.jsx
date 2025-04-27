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
    <div role="button" onClick={navigateToHome}>
      <img
        src={getLogoSrc()}
        style={{ width: width }}
        alt="Petzia"
      />
    </div>
  );
}
