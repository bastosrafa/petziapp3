import { createContext, useState, useEffect, useContext } from "react";
import { useDocument } from "@/hooks/useDocument";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Loading from "@/components/Loading";

export const UserDocContext = createContext();

export function UserDocProvider({ children, user }) {
  const { document: userDoc, error } = useDocument("users", user.uid);
  const [isCreating, setIsCreating] = useState(false);

  // Verificar se o documento do usuário existe e criar se não existir
  useEffect(() => {
    const checkAndCreateUserDoc = async () => {
      if (error && !isCreating) {
        setIsCreating(true);
        try {
          // Verificar se o documento existe
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (!docSnap.exists()) {
            console.log("Criando documento de usuário para:", user.uid);
            // Criar um documento básico para o usuário
            await setDoc(docRef, {
              id: user.uid,
              online: true,
              createdAt: new Date(),
              email: user.email,
              name: user.displayName || "",
              phone: "",
              user_agent: navigator.userAgent,
              origin: window.location.href.split("?")[0],
              plan: {
                status: "active",
                type: "free"
              }
            });
            console.log("Documento de usuário criado com sucesso!");
          }
        } catch (err) {
          console.error("Erro ao criar documento de usuário:", err);
        } finally {
          setIsCreating(false);
        }
      }
    };
    
    checkAndCreateUserDoc();
  }, [user, error, isCreating]);

  if (isCreating) return <Loading />;
  if (!userDoc && !isCreating) return <Loading />;

  return (
    <UserDocContext.Provider value={{ userDoc }}>
      {children}
    </UserDocContext.Provider>
  );
}

// Hook para usar o contexto
export const useUserDocContext = () => {
  const context = useContext(UserDocContext);
  if (!context) {
    throw new Error("useUserDocContext deve ser usado dentro de um UserDocProvider");
  }
  return context;
};
