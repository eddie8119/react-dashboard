import SettingHeader from './SettingHeader';
import TitleArea from './TitleArea';
import DashboardArea from './DashboardArea';

const RightArea = () => {
  return (
    <div className="h-full flex-grow  bg-main-bg p-5">
      <SettingHeader />
      <TitleArea title="DASHBOARD" index="Welcome to your dashboard" />
      <DashboardArea />
    </div>
  );
};

export default RightArea;
