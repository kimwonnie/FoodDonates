import { useEffect, useState } from "react";

const GeneralSettings = () => {

  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSettings = async () => {
    try {
      setLoading(true);

      // 🔌 pronto para backend
      const response = await fetch("http://localhost:3000/settings/general");

      if (!response.ok) {
        throw new Error("Erro ao buscar configurações gerais");
      }

      const data = await response.json();

      setSettings(data);

    } catch (err) {
      console.error(err);
      setError("Erro ao carregar configurações gerais");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  if (loading) return <p>Carregando configurações...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!settings) return <p>Nenhuma configuração encontrada</p>;

  return (
    <div>

      <h1>Configurações Gerais</h1>

      <hr />

      <p>
        <strong>Nome do Sistema:</strong> {settings.nomeSistema}
      </p>

      <p>
        <strong>Versão:</strong> {settings.versao}
      </p>

      <p>
        <strong>Idioma:</strong> {settings.idioma}
      </p>

    </div>
  );
};

export default GeneralSettings;