import { Link, useLocation } from 'react-router-dom';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { useTranslation } from 'react-i18next';

const navLists = [
  {
    id: 0,
    title: '',
    includeLists: [
      {
        id: 0,
        name: 'projects-overview',
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
        name: 'edit-budget',
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
        name: 'project-profit',
        icon: ArchitectureIcon,
        url: '/closeout/caseprofit',
      },
    ],
  },
];

const SidebarMenu = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-1 gap-4">
      {navLists.map((navList) => (
        <ul key={navList.id} className="text-black">
          {navList.title && <h3>{t(`navLists.${navList.title}`)}</h3>}
          {navList.includeLists.map((list) => (
            <li
              key={list.id}
              className={`${pathname === list.url ? 'from-primary-light rounded-full bg-gradient-to-r to-white ' : ''} flex h-[45px] cursor-pointer items-center gap-2 p-2`}
            >
              <list.icon />
              <Link to={list.url}>{t(`navLists.sublink.${list.name}`)}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default SidebarMenu;
