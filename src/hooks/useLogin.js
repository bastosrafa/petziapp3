import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, googleProvider } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { signInWithPopup } from "firebase/auth";
import { getCookie } from "@/utils/getCookie";
import { useQuery } from "./useQuery";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const query = useQuery();

  const checkUserDoc = async (uid) => {
    const userRef = doc(db, "users", uid);
    const docSnapshot = await getDoc(userRef);

    return docSnapshot.exists();
  };

  const authenticateWithGoogle = async (action) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, googleProvider);

      if (action === "login") {
        // const userRef = doc(db, "users", res.user.uid);
        // await updateDoc(userRef, { online: true });
        dispatch({ type: "LOGIN", payload: res.user });
      } else {
        let attempts = 0;
        const maxAttempts = 10;

        while (attempts < maxAttempts) {
          const exists = await checkUserDoc(res.user.uid);

          if (exists) {
            const userRef = doc(db, "users", res.user.uid);
            
            // Criar objeto de atualização com valores padrão
            const updateData = {
              online: true,
              user_agent: navigator.userAgent,
              origin: window.location.href.split("?")[0],
            };

            // Adicionar cookies apenas se existirem
            const fbp = getCookie("_fbp");
            const fbc = getCookie("_fbc");
            if (fbp) updateData.fbp = fbp;
            if (fbc) updateData.fbc = fbc;

            // Adicionar parâmetros UTM apenas se existirem
            const utmSource = query.get("utm_source") || getCookie("utm_source");
            const utmMedium = query.get("utm_medium") || getCookie("utm_medium");
            const utmCampaign = query.get("utm_campaign") || getCookie("utm_campaign");
            const utmTerm = query.get("utm_term") || getCookie("utm_term");
            const utmContent = query.get("utm_content") || getCookie("utm_content");
            
            // Criar objeto UTM apenas com valores não vazios
            const utm = {};
            if (utmSource) utm.source = utmSource;
            if (utmMedium) utm.medium = utmMedium;
            if (utmCampaign) utm.campaign = utmCampaign;
            if (utmTerm) utm.term = utmTerm;
            if (utmContent) utm.content = utmContent;

            // Adicionar objeto UTM apenas se tiver alguma propriedade
            if (Object.keys(utm).length > 0) {
              updateData.utm = utm;
            }

            // Adicionar SCK apenas se existir
            const sck = query.get("sck") || getCookie("sck");
            if (sck) updateData.sck = sck;

            await updateDoc(userRef, updateData);
            
            dispatch({ type: "LOGIN", payload: res.user });
            break;
          }

          attempts++;
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 500ms entre tentativas
        }

        if (attempts === maxAttempts) {
          throw new Error("Max attempts reached. User doc was not created.");
        }
      }

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      console.log(err.message);
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // Atualizar documento do usuário
      const userRef = doc(db, "users", res.user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        // Criar objeto de atualização com valores padrão
        const updateData = {
          online: true,
          lastLogin: new Date(),
          user_agent: navigator.userAgent,
          origin: window.location.href.split("?")[0],
        };

        // Adicionar cookies apenas se existirem
        const fbp = getCookie("_fbp");
        const fbc = getCookie("_fbc");
        if (fbp) updateData.fbp = fbp;
        if (fbc) updateData.fbc = fbc;

        // Adicionar parâmetros UTM apenas se existirem
        const utmSource = query.get("utm_source") || getCookie("utm_source");
        const utmMedium = query.get("utm_medium") || getCookie("utm_medium");
        const utmCampaign = query.get("utm_campaign") || getCookie("utm_campaign");
        const utmTerm = query.get("utm_term") || getCookie("utm_term");
        const utmContent = query.get("utm_content") || getCookie("utm_content");
        
        // Criar objeto UTM apenas com valores não vazios
        const utm = {};
        if (utmSource) utm.source = utmSource;
        if (utmMedium) utm.medium = utmMedium;
        if (utmCampaign) utm.campaign = utmCampaign;
        if (utmTerm) utm.term = utmTerm;
        if (utmContent) utm.content = utmContent;

        // Adicionar objeto UTM apenas se tiver alguma propriedade
        if (Object.keys(utm).length > 0) {
          updateData.utm = utm;
        }

        // Adicionar SCK apenas se existir
        const sck = query.get("sck") || getCookie("sck");
        if (sck) updateData.sck = sck;

        await updateDoc(userRef, updateData);
      }

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(
    () => () => {
      setIsPending(false);
      setIsCancelled(true);
    },
    []
  );

  return { login, authenticateWithGoogle, error, isPending };
};
