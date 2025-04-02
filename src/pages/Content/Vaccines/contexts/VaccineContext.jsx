import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { db } from "@/firebase/config";
import { collection, query, orderBy, onSnapshot, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";

const VaccineContext = createContext();

export function VaccineProvider({ children }) {
  const { user } = useAuthContext();
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      console.log("Usuário não autenticado");
      setLoading(false);
      return;
    }

    console.log("Iniciando busca de vacinas para o usuário:", user.uid);
    setLoading(true);
    setError(null);

    const q = query(
      collection(db, "users", user.uid, "health_records"),
      orderBy("date", "asc")
    );

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        console.log("Snapshot recebido:", snapshot.docs.length, "documentos");
        const vaccineList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Lista de vacinas processada:", vaccineList);
        setVaccines(vaccineList);
        setLoading(false);
        setError(null);
      }, 
      (err) => {
        console.error("Erro ao buscar vacinas:", err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const addVaccine = async (vaccineData) => {
    if (!user) return;

    try {
      console.log("Adicionando nova vacina:", vaccineData);
      const docRef = await addDoc(collection(db, "users", user.uid, "health_records"), {
        ...vaccineData,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });
      console.log("Vacina adicionada com ID:", docRef.id);
      return docRef.id;
    } catch (err) {
      console.error("Erro ao adicionar vacina:", err);
      setError(err.message);
      throw err;
    }
  };

  const updateVaccineStatus = async (vaccineId, status) => {
    if (!user) return;

    try {
      await updateDoc(doc(db, "users", user.uid, "health_records", vaccineId), {
        status,
      });
    } catch (err) {
      console.error("Erro ao atualizar status da vacina:", err);
      setError(err.message);
      throw err;
    }
  };

  return (
    <VaccineContext.Provider
      value={{
        vaccines,
        loading,
        error,
        addVaccine,
        updateVaccineStatus,
      }}
    >
      {children}
    </VaccineContext.Provider>
  );
}

export const useVaccineContext = () => {
  const context = useContext(VaccineContext);
  if (!context) {
    throw new Error("useVaccineContext deve ser usado dentro de um VaccineProvider");
  }
  return context;
}; 