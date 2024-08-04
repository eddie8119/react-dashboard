import { FC } from 'react';
import { defaults } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
// defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

interface ProjectPlanCostChartProps {
  firmTaskLists: ThirdPartyData[];
}

const ProjectPlanCostChart: FC<ProjectPlanCostChartProps> = ({
  firmTaskLists,
}) => {
  const data = {
    labels: firmTaskLists.map((data) => data.name),
    datasets: [
      {
        label: 'cost',
        data: firmTaskLists.map((data) => data.cost),
        backgroundColor: ['#1d4ed8'],
        borderRadius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        text: 'Construction Cost',
      },
    },
  };
  return (
    <div className="container-box bg-primary-light">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProjectPlanCostChart;
