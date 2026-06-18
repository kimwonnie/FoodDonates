import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const StockChart = () => {

  const data = [

    { alimento: "Arroz", quantidade: 500 },
    { alimento: "Feijão", quantidade: 350 },
    { alimento: "Macarrão", quantidade: 280 },
    { alimento: "Leite", quantidade: 150 },
    { alimento: "Farinha", quantidade: 120 }

  ];

  return (

    <div className="chart-card">

      <h3>Estoque por Alimento</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="alimento" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="quantidade" />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

};

export default StockChart;