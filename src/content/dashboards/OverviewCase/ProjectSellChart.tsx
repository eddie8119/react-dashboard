import 'chart.js/auto';
import { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { ProjectListContext } from '../../../context/ProjectListContext';
import colors from '../../../data/colors.json';

const { blueDoughnutColor } = colors;

const ProjectSellChart = () => {
  const { projectListsdata } = useContext(ProjectListContext);

  const data = {
    labels: projectListsdata.map((data) => data.name),
    datasets: [
      {
        label: 'revenue',
        data: projectListsdata.map((data) => data.sellingPrice),
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

export default ProjectSellChart;
