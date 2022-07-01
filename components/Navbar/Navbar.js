import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="flex">
      {[
        {
          label: "Service",
          path: "/services",
        },
        {
          label: "Login",
          path: "/user/login",
        },
      ].map((navItem) => (
        <NavLink {...navItem} />
      ))}
    </nav>
  );
};

export default NavBar;
