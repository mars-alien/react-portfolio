import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
// import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import MobileMenu from "./MobileMenu";

const NavbarMain = () => {
  return (
    <>
      <nav className="w-full px-4 fixed left-1/2 -translate-x-1/2 z-50 mt-2 sm:mt-6">
        <div
          className="relative flex items-center justify-between w-full max-w-[900px] mx-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-[#050b17]/80 backdrop-blur-md border border-white/5 shadow-[0_15px_35px_rgba(5,10,23,0.65)]"
        >
          {/* Glowing background effects */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
          
          <div className="relative z-10">
            <NavbarLogo />
          </div>

          
          <div className="hidden lg:flex items-center text-base gap-6 justify-end flex-1 relative z-10">
            <NavbarLinks />
          
          </div>

          
          <div className="flex items-center gap-5 lg:hidden relative z-10">
            
            <NavbarToggler />
          </div>
        </div>
      </nav>

      
      <MobileMenu />
    </>
  );
};

export default NavbarMain;
