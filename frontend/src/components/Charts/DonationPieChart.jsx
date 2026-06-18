import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const DonationPieChart = () => {

  const data = [

    { name: "Arroz", value: 40 },
    { name: "Feijão", value: 25 },
    { name: "Macarrão", value: 15 },
    { name: "Leite", value: 10 },
    { name: "Outros", value: 10 }

  ];

  return (

    <div className="chart-card">

      <h3>Distribuição das Doações</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          />

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

};

export default DonationPieChart;