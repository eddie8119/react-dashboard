import { useState, useEffect, useContext } from 'react';
import ProjectContext from '../../context/ProjectContext';
import { editProjectThirdParty } from '../../api/project';
import { getFirmLists } from '../../api/firm';

const ChoseFirm = () => {
  const [thirdParties, setThirdParties] = useState<string[]>([]);
  const [firmLists, setFirmLists] = useState<FirmObject[]>([]);
  const { projectInfo, handlerSetUpdateProjectInfo } =
    useContext(ProjectContext);
  //projectThirdPartyLists-目前專案有的協力廠商
  const projectThirdPartyLists = projectInfo.thirdPartyLists;

  const handleChoseFirm = async (firmName: string) => {
    let updateFirmDataLists = [];

    if (thirdParties.includes(firmName)) {
      //先判斷要刪除的協力廠商是否已經有任務存在, taskLists內有資料就不能直接點擊刪除;
      const checkThirdPartyLists = projectThirdPartyLists.filter(
        (firm) => firm.name === firmName,
      );
      if (checkThirdPartyLists[0].taskLists.length !== 0) {
        alert(
          ' This firm already has task existing, cannot cancel with clicking this button directly.',
        );
        return;
      }

      updateFirmDataLists = projectThirdPartyLists.filter(
        (firm) => firm.name !== firmName,
      );

      setThirdParties((prevFirms) =>
        prevFirms.filter((firm) => firm !== firmName),
      );
    } else {
      const newFirmData: ThirdPartyData = {
        id: Date.now(),
        name: firmName,
        taskLists: [],
        sellingPrice: 0,
        cost: 0,
      };
      updateFirmDataLists = [...projectThirdPartyLists, newFirmData];

      setThirdParties((prevFirms) => [...prevFirms, firmName]);
    }

    await editProjectThirdParty(projectInfo.id, updateFirmDataLists);
    handlerSetUpdateProjectInfo();
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFirmLists();
      setFirmLists(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    //將目前專案有的協力廠商 儲存到thirdParties
    const initProjectThirdPartyLists = projectThirdPartyLists.map(
      (firm) => firm.name,
    );
    setThirdParties(initProjectThirdPartyLists);
  }, [projectInfo]);

  return (
    <section className="container-box">
      <header className="text-black">
        <h1>Create Construction Type</h1>
      </header>
      <div className="flex w-full flex-wrap gap-2 overflow-x-auto">
        {firmLists.map((firm) => (
          <button
            key={firm.id}
            className={`${
              thirdParties.includes(firm.name)
                ? 'bg-blue-700'
                : 'box-border text-black'
            } flex cursor-pointer items-center justify-center rounded-md border p-4 `}
            onClick={() => handleChoseFirm(firm.name)}
            role="button"
            tabIndex={0}
          >
            {firm.name}
            {thirdParties.includes(firm.name) && (
              <span className="ml-2 h-3 w-3 rounded-full bg-white" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ChoseFirm;
