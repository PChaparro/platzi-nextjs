import React from "react";

interface IProps {
  image: string;
  name: string;
  price: number;
  sku: string;
}

const AvocadoHeader = ({ image, name, price, sku }: IProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <img src={image} alt={name} />
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-neutral-600">$ {price}</p>
        <p className="text-sm inline-block bg-neutral-300 py-1 px-2 rounded-md">
          SKU: {sku}
        </p>
      </div>
    </div>
  );
};

export default AvocadoHeader;
