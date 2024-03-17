import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
import options from "./options"

function LineChart({chartData}) {
  const values = chartData.datasets[0].data.slice()
  const max = values.sort()[values.length-1];
  (options.scales.y.max>max) ?  options.scales.y.max = options.scales.y.max: options.scales.y.max = max+1000;

  return (
    <Line data = {chartData} options={options}/> 
  )
}

export default LineChart;
