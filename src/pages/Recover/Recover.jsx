import React, { useState } from "react";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Link } from "react-router-dom";
import { ReloadIcon } from "@radix-ui/react-icons";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/config";
import styles from '../Login/Login.module.css';

export default function PasswordRecovery() {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    setIsPending(true);
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage({
        type: "success",
        message:
          "E-mail de recuperação de senha enviado com sucesso! Confira a caixa de entrada e o SPAM.",
      });
    } catch (err) {
      setMessage({
        type: "error",
        message:
          "Ocorreu um erro ao enviar o e-mail de recuperação. Contate o suporte.",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className={styles['login-bg']}>
      <div className={styles['login-container']}>
        <img src="/Logo para página de login.png" alt="Mascote Petzia" className={styles['logo-mascote']} />
        <h1 className={styles['login-title']}>Recuperar senha</h1>
        <p className={styles['login-subtitle']}>Informe seu e-mail para receber o link de redefinição de senha.</p>
        <form className={styles['login-form']} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            className={styles['login-input']}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles['login-btn']} disabled={isPending}>
            {isPending && <ReloadIcon className={styles['spin-icon']} />}
            {isPending ? "Enviando..." : "Enviar e-mail de recuperação"}
          </button>
        </form>
        {message && message.type === "success" && (
          <p className={styles['success-msg']} style={{ color: '#3A86FF', marginTop: 16 }}>{message.message}</p>
        )}
        {message && message.type === "error" && (
          <p className={styles['error-msg']} style={{ marginTop: 16 }}>{message.message}</p>
        )}
        <div style={{ marginTop: 24 }}>
          <span style={{ color: '#666', fontSize: 15 }}>Lembrou da senha?</span>
          <Link to="/login" className={styles['forgot-link']} style={{ display: 'inline', marginLeft: 6 }}>
            Entre na sua conta
          </Link>
        </div>
      </div>
    </div>
  );
}
