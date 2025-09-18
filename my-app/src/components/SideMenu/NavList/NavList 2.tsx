import { FaTasks } from 'react-icons/fa';

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    { id: 1, label: "ALL Tasks", link: "/", icon: <FaTasks /> },
  ];
  return (
    <div className="mt-24">
      <div>List1</div>
      <div>List2</div>
      <div>List3</div>
    </div>
  );
};

export default NavList;
