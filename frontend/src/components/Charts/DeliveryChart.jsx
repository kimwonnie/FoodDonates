import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const DeliveryChart = () => {

  const data = [

    { mes: "Jan", entregas: 50 },
    { mes: "Fev", entregas: 65 },
    { mes: "Mar", entregas: 80 },
    { mes: "Abr", entregas: 95 },
    { mes: "Mai", entregas: 120 },
    { mes: "Jun", entregas: 140 }

  ];

  return (

    <div className="chart-card">

      <h3>Entregas por Mês</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <XAxis dataKey="mes" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="entregas"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

};

export default DeliveryChart;