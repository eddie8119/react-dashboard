import { useTranslation } from 'react-i18next';
import ProjectCostChart from './ProjectCostChart';
import ProjectSellChart from './ProjectSellChart';
import ProjectProfitChart from './ProjectProfitChart';
interface overviewDashboard {
  id: number;
  title: string;
  chart: string;
}
const OverviewDashboard = () => {
  const { t } = useTranslation();
  const overviewDashboardLists: overviewDashboard[] = [
    {
      id: 1,
      title: 'Project-Cost',
      chart: 'ProjectCostChart',
    },
    {
      id: 2,
      title: 'Project-Revenue',
      chart: 'ProjectSellChart',
    },
    {
      id: 3,
      title: 'Project-Profit',
      chart: 'ProjectProfitChart',
    },
  ];
  const chartComponents = {
    ProjectCostChart: <ProjectCostChart />,
    ProjectSellChart: <ProjectSellChart />,
    ProjectProfitChart: <ProjectProfitChart />,
  };
  return (
    <section className="grid grid-cols-3 gap-4" data-testid="OverviewDashboard">
      {overviewDashboardLists.map((data) => (
        <div key={data.id} className="container-box w-full">
          <header className="text-center text-black">
            <h1>{t(`overviewCase.overviewDashboard.${data.title}`)}</h1>
          </header>
          {chartComponents[data.chart as keyof typeof chartComponents]}
        </div>
      ))}
    </section>
  );
};
export default OverviewDashboard;
