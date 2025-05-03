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
import styles from './Login.module.css';

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
    <div className={styles['login-bg']}>
      <div className={styles['login-container']}>
        <img src="/Logo para página de login.png" alt="Mascote Petzia" className={styles['logo-mascote']} />
        <h1 className={styles['login-title']}>Bem-vindo ao Petzia</h1>
        <p className={styles['login-subtitle']}>Conectando você ao seu pet, com tecnologia e amor.</p>
        <form className={styles['login-form']} onSubmit={handleLogin}>
          <input type="email" placeholder="E-mail" className={styles['login-input']} value={email} onChange={(e) => setEmail(e.target.value.trim().toLowerCase())} required />
          <div className={styles['password-input']}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className={styles['login-input']}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword === false && (
              <EyeOpenIcon
                onClick={toggleShowPassword}
                className={styles['eye-icon']}
              />
            )}
            {showPassword === true && (
              <EyeClosedIcon
                onClick={toggleShowPassword}
                className={styles['eye-icon']}
              />
            )}
          </div>
          <button type="submit" className={styles['login-btn']} disabled={isPending}>
            {isPending && isEmailLogin && (
              <ReloadIcon className={styles['spin-icon']} />
            )}
            {isPending && isEmailLogin
              ? "Entrando..."
              : "Entrar na minha conta"}
          </button>
          {errorMsg && <p className={styles['error-msg']}>{errorMsg}</p>}
        </form>
        <a href="/recuperar-senha" className={styles['forgot-link']}>Esqueceu sua senha?</a>
      </div>
    </div>
  );
}
