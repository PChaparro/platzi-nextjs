import { useContext } from "react";
import { BasketContext } from "@context/Basket/BasketContext";
import BasketItem from "@components/BasketItem/BasketItem";

const cart = () => {
  const { basket } = useContext(BasketContext);

  return basket.length === 0 ? (
    <div className=" border-2 border-orange-300 bg-orange-200 text-center rounded-sm p-4">
      <p>You haven't any product on your basket yet.</p>
    </div>
  ) : (
    <main>
      <h2 className="text-xl font-bold my-2">Your basket:</h2>
      <section className="flex flex-col gap-4">
        {basket.map((avocado) => (
          <BasketItem key={avocado.id} avocado={avocado} />
        ))}
      </section>
    </main>
  );
};

export default cart;
