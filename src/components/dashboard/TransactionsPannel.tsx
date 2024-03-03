import { FC } from "react";

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
    <div className="w-full lg:w-1/3   grid grid-cols-1 gap-2 overflow-y-auto">
      <div className="text-gray bg-box-bg p-[15px]">Recent Transactions</div>
      {transactionsData.map((data) => (
        <div
          key={data.id}
          className="w-full p-[15px] bg-box-bg flex justify-between items-center"
        >
          <div className="flex flex-col">
            <p className="text-primary">{data.barcode}</p>
            <p className="text-gray">{data.account}</p>
          </div>

          <p className="text-gray">{data.date}</p>
          <p className="text-gray bg-primary py-[5px] px-[10px] rounded-md">
            ${data.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionsPannel;
