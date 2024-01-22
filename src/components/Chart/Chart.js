import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const maxTotal = Math.max(...dataPointValues);

    return <div className="chart">
        {dataPoints.map((dataPoint) => (
            <ChartBar
                value={dataPoint.value}
                maxValue={maxTotal}
                label={dataPoint.label}
                key={dataPoint.label}
            />
        ))}
    </div>;
}

export default Chart;