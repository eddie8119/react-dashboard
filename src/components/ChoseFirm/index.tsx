import { useState } from "react";

const firmLists = [
  "拆除",
  "機電",
  "水電",
  "地坪",
  "泥做",
  "門框",
  "輕隔間",
  "木做",
  "油漆",
];

const firmObjects = firmLists.map((firm, index) => ({
  id: index,
  name: firm,
}));

const ChoseFirm = () => {
  const [selectedFirms, setSelectedFirms] = useState([]);

  return (
    <div>
      <h1 className="text-gray">選擇工程種類</h1>

      <div className="flex flex-wrap">
        {firmObjects.map((firm) => (
          <div
            key={firm.id}
            className="m-2 p-2 bg-box-bg cursor-pointer relative"
          >
            {firm.name}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${selectedFirms.includes(firm.name) ? "bg-green-500" : "bg-gray-500"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoseFirm;
