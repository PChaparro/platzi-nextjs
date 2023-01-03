import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
