import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const navLists = [
  {
    id: 1,
    title: "Data",
    includeLists: [
      {
        id: 1,
        index: "Manage Team",
        icon: PersonOutlinedIcon,
        url: "/",
      },
      {
        id: 2,
        index: "Contacts Information",
        icon: PersonOutlinedIcon,
        url: "/",
      },
      {
        id: 3,
        index: "Invoices Balances",
        icon: PersonOutlinedIcon,
        url: "/",
      },
    ],
  },
];

const NavList = () => {
  return (
    <>
      {navLists.map((navList) => (
        <ul key={navList.id}>
          <p className="text-gray">{navList.title}</p>
          {navList.includeLists.map((list) => (
            <li key={list.id} className="flex items-center gap-2 h-[45px]">
              <list.icon />
              <a href={list.url}>{list.index}</a>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

export default NavList;
