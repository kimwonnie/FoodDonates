const FoodTypeDetails = () => {

  const food = {

    nome: "Arroz",
    unidadeMedida: "kg",
    validadeDias: 365,
    status: "ATIVO"

  };

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