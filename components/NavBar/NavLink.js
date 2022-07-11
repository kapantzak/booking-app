import PropTypes from "prop-types";
import Link from "next/link";

const NavLink = ({ label, path }) => {
  return (
    <Link href={path}>
      <a className="p-3">{label}</a>
    </Link>
  );
};

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavLink;
