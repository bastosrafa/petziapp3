import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Loading } from '../components/Loading';
import { Subscriptions } from '../components/Subscriptions';

const Home = () => {
  const router = useRouter();
  const [userDoc, setUserDoc] = useState(null);

  useEffect(() => {
    // Implemente a lógica para buscar o documento do usuário
    // Aqui, usamos um estado temporário para simular o documento do usuário
    setUserDoc({ plan: { status: "active" } });
  }, []);

  if (!userDoc) {
    return <Loading />;
  }

  // Verificar se userDoc tem a propriedade plan antes de acessar
  if (!userDoc.plan || userDoc.plan.status !== "active") {
    return <Subscriptions />;
  }

  return (
    <div>
      {/* Renderize o conteúdo da página */}
    </div>
  );
};

export default Home; 