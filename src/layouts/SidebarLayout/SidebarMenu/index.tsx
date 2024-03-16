import { Link } from 'react-router-dom';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { useTranslation } from 'react-i18next';

const navLists = [
  {
    id: 0,
    title: '',
    includeLists: [
      {
        id: 0,
        name: '專案列表',
        icon: ArchitectureIcon,
        url: '/',
      },
    ],
  },
  {
    id: 1,
    title: 'planning-stage',
    includeLists: [
      {
        id: 0,
        name: 'material-library',
        icon: ArchitectureIcon,
        url: '/plan/materiallibrary',
      },
      {
        id: 1,
        name: '編輯預算',
        icon: ArchitectureIcon,
        url: '/plan/materialbudget',
      },
    ],
  },
  {
    id: 2,
    title: 'construction-stage',
    includeLists: [
      {
        id: 0,
        name: 'material-stock',
        icon: ArchitectureIcon,
        url: '/construction/materialstock',
      },
    ],
  },
  {
    id: 3,
    title: 'closeout-stage',
    includeLists: [
      {
        id: 0,
        name: '專案利潤圖表',
        icon: ArchitectureIcon,
        url: '/closeout/caseprofit',
      },
    ],
  },
];

const SidebarMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-4">
      {navLists.map((navList) => (
        <ul key={navList.id}>
          {navList.title && (
            <p className="text-gray">{t(`navLists.${navList.title}`)} </p>
          )}
          {navList.includeLists.map((list) => (
            <li key={list.id} className="flex h-[45px] items-center gap-2">
              <list.icon />
              <Link to={list.url}>{list.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default SidebarMenu;
