import { FC } from 'react';
import ProgressCircle from './ProgressCircle';

import DeleteIcon from '@mui/icons-material/Delete';

interface MarketingPannelProps {
  marketingData: {
    id: number;
    title: string;
    amount: number;
    icon: string;
    difference: number;
  }[];
}

const MarketingPannel: FC<MarketingPannelProps> = ({ marketingData }) => {
  return (
    <>
      {marketingData.map((data) => (
        <div
          key={data.id}
          className="flex h-[140px]  items-center justify-between bg-box-bg px-[30px]"
        >
          <div className="flex flex-col ">
            <DeleteIcon sx={{ color: '#4CCEAC' }} />
            <p className="text font-bold text-gray">{data.amount}</p>
            <p className="text text-primary">{data.title}</p>
          </div>
          <div>
            <ProgressCircle progress={data.difference} />
            <p className="text-xs  text-primary">
              {data.difference > 0 ? '+' : '-'}
              {data.difference}%
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarketingPannel;
