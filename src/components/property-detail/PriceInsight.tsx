import { PiArrowUpDuotone } from 'react-icons/pi';
import Chart from 'react-apexcharts';
import { RxChevronRight } from 'react-icons/rx';
import { ApexOptions } from 'apexcharts';

const PriceInsight = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    colors: ['#22c55e'],
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    tooltip: { enabled: false },
    grid: { show: false },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
  };

  const series = [{ name: 'Value', data: [10, 20, 15, 25, 35, 45, 55, 65] }];

  return (
    <div className="bg-[#FAFAFA] h-[250px] p-4 mb-4 rounded-2xl shadow">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <h3 className="text-[25px] font-semibold flex gap-2 items-center">
            10% <PiArrowUpDuotone className="text-green-500" />
          </h3>
        </div>
        <p className="text-[10px] font-normal text-gray-500">
          Increase in Property Value
        </p>
      </div>

      <div className="h-[120px] my-2">
        <Chart
          options={chartOptions}
          series={series}
          type="area"
          height={120}
        />
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-[13px] font-semibold mb-1">Price Insight</p>
          <p className="text-gray-600 text-xs">
            View the pricing trend of this property
          </p>
        </div>
        <RxChevronRight className="text-lg opacity-50" />
      </div>
    </div>
  );
};

export default PriceInsight;
