import { FC } from 'react';

interface TransactionsPannelProps {
  transactionsData: {
    id: number;
    barcode: string;
    account: string;
    date: string;
    price: number;
  }[];
}

const TransactionsPannel: FC<TransactionsPannelProps> = ({
  transactionsData,
}) => {
  return (
    <div className="grid w-full   grid-cols-1 gap-2 overflow-y-auto lg:w-1/3">
      <div className="bg-box-bg p-[15px] text-gray">Recent Transactions</div>
      {transactionsData.map((data) => (
        <div
          key={data.id}
          className="flex w-full items-center justify-between bg-box-bg p-[15px]"
        >
          <div className="flex flex-col">
            <p className="text-primary">{data.barcode}</p>
            <p className="text-gray">{data.account}</p>
          </div>

          <p className="text-gray">{data.date}</p>
          <p className="rounded-md bg-primary px-[10px] py-[5px] text-gray">
            ${data.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionsPannel;
