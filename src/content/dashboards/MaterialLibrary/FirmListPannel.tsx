import FirmList from '../../../components/FirmList';
import AddFirm from './AddFirm';

const FirmListPannel = () => {
  return (
    <section className="container-box">
      <header className="text-black">
        <h1>Construction Type</h1>
      </header>
      <AddFirm />
      <FirmList />
    </section>
  );
};

export default FirmListPannel;
