import React, { useEffect, useState } from "react";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Link } from "react-router-dom";
import { useLogin } from "@/hooks/useLogin";
import { EyeClosedIcon, EyeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "@/components/GoogleLogo";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "@/firebase/config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, timestamp } from "@/firebase/config";

export default function Login() {
  const { login, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.includes("@") || !email.includes(".")) {
      setErrorMsg("Por favor, insira um e-mail válido.");
      return;
    }

    setIsEmailLogin(true);

    if (email === "token@gmail.com") {
      const customToken = password;
      try {
        await signInWithCustomToken(auth, customToken);
        navigate("/oportunidades");
      } catch (error) {
        setErrorMsg("O token fornecido é inválido.");
      }
      return;
    }

    try {
      await login(email, password);
      // Verificar e criar documento do usuário se necessário acontecerá automaticamente no AuthContext
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    if (!error) return;

    if (error.includes("auth/invalid-login-credentials")) {
      setErrorMsg(
        "As credenciais fornecidas estão incorretas. Verifique sua senha ou clique em 'Esqueci minha senha' para redefinir."
      );
    }
  }, [error]);

  return (
    <div className="flex flex-col-reverse xl:flex-row 2xl:gap-20 xl:h-screen w-full xl:px-20 2xl:px-40 xl:py-20 2xl:py-0">
      <div className="xl:w-1/2 my-auto bg-muted rounded-xl px-5 sm:p-12 py-8 flex justify-center items-center">
        <div>
          <h2 className="text-4xl leading-[44px] sm:leading-[50px] font-medium">
            Seu pet + tecnologia na palma da sua mão.
          </h2>
          <h3 className="mt-4 sm:mt-6 text-lg leading-[30px] sm:leading-[24px] font-normal">
            Conectando você ao seu pet, com tecnologia e amor.
          </h3>
          <p className="mt-4 sm:mt-6 2xl:mt-8 text-muted-foreground">
            A Petzia é a melhor maneira de cuidar do seu pet de forma inteligente, simples e eficiente, usando IA e tecnologia para deixar a relação tutor-pet mais próxima e saudável.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center xl:w-1/2 px-5 md:px-20 py-[10%] sm:h-auto">
        <div>
          <div className="w-fit mx-auto">
            <img src="/Logo para página de login.png" style={{ width: "250px" }} alt="Petzia" />
          </div>
          <h1 className="mt-8 text-3xl font-semibold text-center sm:text-left">
            Entre na sua conta
          </h1>
          <p className="mt-2 text-muted-foreground font-normal text-lg text-center sm:text-left">
            Informe os seus dados de acesso
          </p>
          <form className="mt-6" onSubmit={handleLogin}>
            <p className="mt-5 text-muted-foreground mb-2.5">E-mail</p>
            <Input
              autoComplete="off"
              className="h-12"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
            />
            <p className="mt-2.5 sm:mt-5 text-muted-foreground mb-2.5">Senha</p>
            <div className="relative items-center h-12 p-0 w-full rounded-md border border-input bg-background text-sm">
              <input
                className="h-12 bg-transparent rounded-md w-full px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword === false && (
                <EyeOpenIcon
                  onClick={toggleShowPassword}
                  className="h-5 w-5 cursor-pointer absolute right-4 bottom-3"
                />
              )}
              {showPassword === true && (
                <EyeClosedIcon
                  onClick={toggleShowPassword}
                  className="h-5 w-5 cursor-pointer absolute right-4 bottom-3"
                />
              )}
            </div>
            <p
              className="w-fit ml-auto mt-2.5 text-right text-muted-foreground underline"
              role="button"
              onClick={() => navigate("/password/recovery")}
            >
              Esqueci minha senha
            </p>
            <Button
              size="xl"
              className="mt-6 text-lg w-full py-3"
              disabled={isPending}
            >
              {isPending && isEmailLogin && (
                <ReloadIcon className="w-5 h-5 mr-2 animate-spin" />
              )}
              {isPending && isEmailLogin
                ? "Entrando..."
                : "Entrar na minha conta"}
            </Button>
            {errorMsg && <p className="text-red-500 mt-2.5">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
