import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex h-16 justify-between items-center border-b-2 py-4 mb-4">
      <Link href="/">
        <img
          className="inline"
          src="/icons/avocado.svg"
          alt="Navigate to home page"
        />{" "}
        Avo Store
      </Link>
      <div>
        <img className="inline" src="/icons/basket.svg" alt="" /> Basket (0)
      </div>
    </nav>
  );
};

export default Navbar;
