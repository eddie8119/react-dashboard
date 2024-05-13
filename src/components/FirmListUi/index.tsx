import { FC } from 'react';

interface FirmListUiProps {
  firmLists: FirmObject[];
  thirdParties?: string[];
  handleChoseFirm?: (firmName: string) => Promise<void>;
}

const FirmListUi: FC<FirmListUiProps> = ({
  firmLists,
  thirdParties,
  handleChoseFirm,
}) => {
  return (
    <div className="flex w-full flex-wrap gap-2 overflow-x-auto">
      {firmLists.map((firm) => (
        <button
          key={firm.id}
          className={`${
            thirdParties?.includes(firm.name)
              ? 'bg-blue-700'
              : 'box-border text-black'
          } flex items-center justify-center rounded-md border p-4 `}
          onClick={() => handleChoseFirm && handleChoseFirm(firm.name)}
          role="firm-button"
          data-testid="firm-button"
        >
          {firm.name}
          {thirdParties?.includes(firm.name) && (
            <span className="ml-2 h-3 w-3 rounded-full bg-white" />
          )}
        </button>
      ))}
    </div>
  );
};

export default FirmListUi;
