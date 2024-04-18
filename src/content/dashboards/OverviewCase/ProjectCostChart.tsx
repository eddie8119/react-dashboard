import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { useProjectList } from '../../../context/ProjectListContext';
import colors from '../../../data/colors.json';

const { blueDoughnutColor } = colors;

const ProjectCostChart = () => {
  const { projectListsdata } = useProjectList();

  const data = {
    labels: projectListsdata.map((data) => data.name),
    datasets: [
      {
        label: 'cost',
        data: projectListsdata.map((data) => data.cost),
        backgroundColor: blueDoughnutColor,
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={data}
        width={'30%'}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default ProjectCostChart;
