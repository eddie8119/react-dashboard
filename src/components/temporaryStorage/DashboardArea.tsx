const marketingData = [
  {
    id: 1,
    title: 'Total Revenue',
    amount: 12361,
    icon: '',
    difference: 14,
  },
  {
    id: 2,
    title: 'Total Revenue',
    amount: 12361,
    icon: '',
    difference: 14,
  },
  {
    id: 3,
    title: 'Total Revenue',
    amount: 12361,
    icon: '',
    difference: 14,
  },
  {
    id: 4,
    title: 'Total Revenue',
    amount: 12361,
    icon: '',
    difference: 14,
  },
];

const transactionsData = [
  {
    id: 1,
    barcode: '01e4dsa',
    account: 'johndoe',
    date: '2021-09-01',
    price: 43.95,
  },
  {
    id: 2,
    barcode: '01e4dsa',
    account: 'johndoe',
    date: '2021-09-01',
    price: 43.95,
  },
  {
    id: 3,
    barcode: '01e4dsa',
    account: 'johndoe',
    date: '2021-09-01',
    price: 43.95,
  },
  {
    id: 4,
    barcode: '01e4dsa',
    account: 'johndoe',
    date: '2021-09-01',
    price: 43.95,
  },
];

import MarketingPannel from './MarketingPannel';
import RevenuePannel from './RevenuePannel';
import TransactionsPannel from './TransactionsPannel';

const DashboardArea = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <MarketingPannel marketingData={marketingData} />
      </div>
      <div className="flex h-[300px] flex-col gap-5 lg:flex-row">
        <RevenuePannel />
        <TransactionsPannel transactionsData={transactionsData} />
      </div>
    </div>
  );
};

export default DashboardArea;
