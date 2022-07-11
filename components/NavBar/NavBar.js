import NavLink from "./NavLink";
import LoginModal from "@/components/LoginModal";

const NavBar = () => {
  return (
    <nav className="flex">
      {/* {[
        {
          label: "Flow",
          path: "/flow",
        },
        {
          label: "Login",
          path: "/user/login",
        },
      ].map((navItem) => (
        <NavLink key={navItem.path} {...navItem} />
      ))} */}
      <NavLink label="Flow" path="/flow" />
      <LoginModal />
    </nav>
  );
};

export default NavBar;
