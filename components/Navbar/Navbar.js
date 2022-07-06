import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="flex">
      {[
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
      ))}
    </nav>
  );
};

export default NavBar;
