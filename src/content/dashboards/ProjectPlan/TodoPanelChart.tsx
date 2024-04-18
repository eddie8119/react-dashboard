import { FC } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

interface TodoPanelChartProps {
  firmTaskLists: TaskData[];
}

const TodoPanelChart: FC<TodoPanelChartProps> = ({ firmTaskLists }) => {
  const data = {
    labels: firmTaskLists.map((data) => data.todo),
    datasets: [
      {
        label: 'quantity',
        data: firmTaskLists.map((data) => data.quantity),
        backgroundColor: '#1d4ed8',
        borderColor: '#1d4ed8',
      },
    ],
  };

  const options = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
  };
  return (
    <div className="w-full ">
      <Line data={data} options={options} />
    </div>
  );
};

export default TodoPanelChart;
