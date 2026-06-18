import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const FamilyAttendanceChart = () => {

  const data = [

    { mes: "Jan", familias: 30 },
    { mes: "Fev", familias: 45 },
    { mes: "Mar", familias: 60 },
    { mes: "Abr", familias: 80 },
    { mes: "Mai", familias: 95 },
    { mes: "Jun", familias: 120 }

  ];

  return (

    <div className="chart-card">

      <h3>Famílias Atendidas</h3>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <AreaChart data={data}>

          <XAxis dataKey="mes" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="familias"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  );

};

export default FamilyAttendanceChart;