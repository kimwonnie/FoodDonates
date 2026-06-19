import { useState, useEffect } from "react";

const FoodTypeDetails = () => {

  const [food, setFood] = useState(null);

  useEffect(() => {

    // Futuramente: buscar do backend
    const fetchFood = async () => {

      const mockFood = {
        nome: "Arroz",
        unidadeMedida: "kg",
        validadeDias: 365,
        status: "ATIVO"
      };

      setFood(mockFood);
    };

    fetchFood();

  }, []);

  if (!food) {
    return <p>Carregando detalhes do alimento...</p>;
  }

  return (

    <div>

      <h1>Detalhes do Alimento</h1>

      <p>
        <strong>Nome:</strong> {food.nome}
      </p>

      <p>
        <strong>Unidade:</strong> {food.unidadeMedida}
      </p>

      <p>
        <strong>Validade:</strong> {food.validadeDias} dias
      </p>

      <p>
        <strong>Status:</strong> {food.status}
      </p>

    </div>

  );

};

export default FoodTypeDetails;