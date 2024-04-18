import ProjectCostChart from './ProjectCostChart';
import ProjectSellChart from './ProjectSellChart';

interface overviewDashboard {
  id: number;
  title: string;
  chart: string;
}

const OverviewDashboard = () => {
  const overviewDashboardLists: overviewDashboard[] = [
    {
      id: 1,
      title: 'Project Cost',
      chart: 'ProjectCostChart',
    },
    {
      id: 2,
      title: 'Project revenue',
      chart: 'ProjectSellChart',
    },
  ];

  const chartComponents = {
    ProjectCostChart: <ProjectCostChart />,
    ProjectSellChart: <ProjectSellChart />,
  };

  return (
    <section className="grid grid-cols-4 gap-3">
      {overviewDashboardLists.map((data) => (
        <div key={data.id} className="container-box w-full">
          <header className="text-center text-black">
            <h1>{data.title}</h1>
          </header>
          {chartComponents[data.chart as keyof typeof chartComponents]}
        </div>
      ))}
    </section>
  );
};

export default OverviewDashboard;
