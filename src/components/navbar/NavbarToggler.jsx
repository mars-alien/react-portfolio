import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className="text-2xl sm:text-3xl p-1 transition-all duration-300 hover:scale-105 text-[#E8F1FF] hover:text-[#4DB6FF]"
      onClick={setToggleMenu}
    >
      {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
    </button>
  );
};

export default NavbarToggler;
