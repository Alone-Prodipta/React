import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import Piechart from './piechart.jsx';


const dataset = [
    { description: 'Office Supplies', amount: 150 },
    { description: 'Business Lunch', amount: 75.5 },
    { description: 'Travel Expenses', amount: 450.25 },
    { description: 'Client Dinner', amount: 120 },
    { description: 'Hotel', amount: 275.75 },
];

const valueFormatter = (value) => `$${value.toFixed(2)}`;

const chartSetting = {
  width: 320,
  yAxis: [
    {
      label: 'Amount ($)',
      width: 55,
      domain: [0, 'auto'],
      tickLabelStyle: { fill: '#ffffff' },
      labelStyle: { fill: '#ffffff' },
    },
  ],
  height: 340,
  margin: { top: 24, right: 16, bottom: 48, left: 64 },
};

function Charts() {
  return (
    <div className="expense-chart-wrapper mt-6 flex flex-col md:flex-row justify-center items-center gap-8 mx-70">
      <div className="chart-child">
        <BarChart
          dataset={dataset}
          xAxis={[{
            dataKey: 'description',
            scaleType: 'band',
            tickLabelStyle: { fill: '#ffffff' },
            labelStyle: { fill: '#ffffff' },
          }]}
          series={[{
            dataKey: 'amount',
            label: 'Expense amount',
            valueFormatter,
            bar: {
              barPercentage: 0.4,
              categoryPercentage: 0.6,
            },
          }]}
          {...chartSetting}
        />
      </div>
      <div className="chart-child mt-10">
        <Piechart data={dataset} />
      </div>
    </div>
  );
}

 


export default Charts;