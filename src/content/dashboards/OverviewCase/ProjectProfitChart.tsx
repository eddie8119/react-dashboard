import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { useProjectList } from '../../../context/ProjectListContext';
import colors from '../../../data/colors.json';

const { blueDoughnutColor } = colors;

const ProjectProfitChart = () => {
  const { projectListsdata } = useProjectList();
  const data = {
    labels: projectListsdata.map((data) => data.name),
    datasets: [
      {
        label: 'profit',
        data: projectListsdata.map(
          (data) => (data.sellingPrice - data.cost) / data.sellingPrice,
        ),
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

export default ProjectProfitChart;
