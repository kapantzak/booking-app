import Link from "next/link";
import NavBar from "@/components/NavBar";

const Header = () => {
  return (
    <header className="flex w-full justify-between">
      <Link href="/">
        <a className="p-3">Pick your time</a>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
