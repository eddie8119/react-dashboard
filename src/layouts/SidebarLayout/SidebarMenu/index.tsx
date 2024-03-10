import { Link } from "react-router-dom";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const navLists = [
  {
    id: 0,
    title: "規劃階段",
    includeLists: [
      {
        id: 0,
        index: "專案列表",
        icon: ArchitectureIcon,
        url: "/",
      },
      {
        id: 1,
        index: "新建專案",
        icon: ArchitectureIcon,
        url: "/createcase",
      },
    ],
  },
  {
    id: 1,
    title: "工程階段",
    includeLists: [
      {
        id: 0,
        index: "材料進貨",
        icon: ArchitectureIcon,
        url: "/construction/materialstock",
      },
    ],
  },
  {
    id: 2,
    title: "完工階段",
    includeLists: [
      {
        id: 0,
        index: "專案利潤",
        icon: ArchitectureIcon,
        url: "/closeout/caseprofit",
      },
    ],
  },
];

const SidebarMenu = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {navLists.map((navList) => (
        <ul key={navList.id}>
          <p className="text-gray">{navList.title}</p>
          {navList.includeLists.map((list) => (
            <li key={list.id} className="flex items-center gap-2 h-[45px]">
              <list.icon />
              <Link to={list.url}>{list.index}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default SidebarMenu;
