import { PieChart } from '@mui/x-charts/PieChart';

function Piechart({ data }) {
  return (
    <PieChart
      series={[{
        data: data.map((expense) => ({
          id: expense.description,
          value: expense.amount,
          label: expense.description,
        })),
        innerRadius: 45,
        outerRadius: 105,
        paddingAngle: 2,
        cornerRadius: 4,
        valueFormatter: ({ value }) => `$${value.toFixed(2)}`,
      }]}
      width={320}
      height={340}
      margin={{ top: 24, right: 16, bottom: 24, left: 16 }}
      slotProps={{ legend: { labelStyle: { color: '#ffffff', fill: '#ffffff' } } }}
    />
  );
}

export default Piechart;
