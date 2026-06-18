import { useState } from "react";

const DonationReport = () => {

  const [data] = useState({

    totalDoacoes: 320,
    totalKg: 8500,
    alimentos: [

      {
        nome: "Arroz",
        quantidade: 3000
      },

      {
        nome: "Feijão",
        quantidade: 2000
      },

      {
        nome: "Macarrão",
        quantidade: 1500
      }

    ]

  });

  return (

    <div>

      <h1>Relatório de Doações</h1>

      <h3>
        Total de Doações:
        {" "}
        {data.totalDoacoes}
      </h3>

      <h3>
        Total Distribuído:
        {" "}
        {data.totalKg} Kg
      </h3>

      <table>

        <thead>

          <tr>
            <th>Alimento</th>
            <th>Quantidade</th>
          </tr>

        </thead>

        <tbody>

          {data.alimentos.map((item, index) => (

            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidade} Kg</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default DonationReport;