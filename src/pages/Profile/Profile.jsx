import React, { useEffect, useState } from "react";
import { useLogout } from "@/hooks/useLogout";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/firebase/config";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useUserContext } from "@/hooks/useUserContext";
import Loading from "@/components/Loading";
import "./styles.css";
import { useOnboarding } from "../../contexts/OnboardingContext";
import { Button } from "@/shadcn/components/ui/button";
import { toast } from "@/shadcn/components/ui/use-toast";
import { ModeToggle } from "@/shadcn/components/mode-toggle";

// TODO: Trocar pela URL da sua Cloud Function
const url = "https://us-central1-petzia-f86b4.cloudfunctions.net/changePassword";

export default function Profile({ rerender, setRerender }) {
  const { user } = useAuthContext();
  const { userDoc } = useUserContext();
  const [message, setMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const isEmailProvider =
    user?.providerData &&
    user.providerData.length &&
    user.providerData[0].providerId === "google.com"
      ? false
      : true;
  const { resetOnboarding } = useOnboarding();

  const changePassword = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setMessage("As senhas não coincidem.");
      return;
    }

    const idToken = await user.getIdToken(true);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword: currentPassword,
        newPassword: password,
      }),
    });
  };

  const handleResetOnboarding = async () => {
    try {
      await resetOnboarding();
      toast({
        title: "Onboarding resetado",
        description: "O processo de onboarding foi resetado com sucesso. Faça logout e login novamente para testar.",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível resetar o onboarding.",
        variant: "destructive",
      });
    }
  };

  if (!userDoc || !user) return <Loading />;

  return (
    <div className="profile-container">
      {rerender && <span className="hidden"></span>}
      <div className="profile-header">
        <h1>Sua conta</h1>
        <p className="profile-subtitle">Altere os dados da sua conta</p>
      </div>

      <div className="profile-form">
        <div className="form-section">
          <h2>Informações Pessoais</h2>
          <div className="form-group">
            <label>Nome completo</label>
            <input disabled value={user?.displayName || ""} readOnly type="text" />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input disabled value={user?.email || ""} readOnly type="email" />
          </div>
          <div className="form-group">
            <label>Tema (claro/escuro)</label>
            <div className="theme-toggle">
              <ModeToggle />
            </div>
          </div>

          {isEmailProvider && (
            <form onSubmit={changePassword} className="password-form">
              <h2>Alterar Senha</h2>
              <div className="form-group">
                <label>Senha atual</label>
                <input
                  autoComplete="current-password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  type="password"
                />
              </div>
              <div className="form-group">
                <label>Nova senha</label>
                <input
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setMessage("");
                  }}
                  type="password"
                />
              </div>
              <div className="form-group">
                <label>Confirme a senha</label>
                <input
                  autoComplete="new-password"
                  value={passwordConfirmation}
                  onChange={(e) => {
                    setPasswordConfirmation(e.target.value);
                    setMessage("");
                  }}
                  type="password"
                />
              </div>
              {message && <p className="error-message">{message}</p>}
              <div className="form-actions">
                <button type="submit" className="save-button">
                  Alterar a senha
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="grid gap-4 mt-6">
        <Button onClick={handleResetOnboarding} variant="outline" className="w-full">
          Resetar Onboarding (Teste)
        </Button>
      </div>
    </div>
  );
}
