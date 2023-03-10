import { useContext } from "react";
import Link from "next/link";
import { BasketContext } from "@context/Basket/BasketContext";

const Navbar = () => {
  const { basket } = useContext(BasketContext);

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
      <Link href="/basket">
        <img className="inline" src="/icons/basket.svg" alt="" /> Basket (
        {basket.length})
      </Link>
    </nav>
  );
};

export default Navbar;
