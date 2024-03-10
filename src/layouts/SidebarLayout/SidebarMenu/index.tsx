import { Link } from "react-router-dom";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const navLists = [
  {
    id: 0,
    title: "",
    includeLists: [
      {
        id: 0,
        index: "專案列表",
        icon: ArchitectureIcon,
        url: "/",
      },
    ],
  },
  {
    id: 1,
    title: "規劃階段",
    includeLists: [
      {
        id: 0,
        index: "材料圖書館",
        icon: ArchitectureIcon,
        url: "/plan/materiallibrary",
      },
      {
        id: 1,
        index: "編輯預算",
        icon: ArchitectureIcon,
        url: "/plan/materialbudget",
      },
    ],
  },
  {
    id: 2,
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
    id: 3,
    title: "完工階段",
    includeLists: [
      {
        id: 0,
        index: "專案利潤圖表",
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
