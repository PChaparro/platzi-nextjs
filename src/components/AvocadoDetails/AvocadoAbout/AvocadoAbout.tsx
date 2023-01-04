import React from "react";
import AvocadoAttributes from "../AvocadoAttributes/AvocadoAttributes";

interface IProps {
  attributes: TProductAttributes;
}

const AvocadoAbout = ({ attributes }: IProps) => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-bold">About this avocado:</h2>
      <p className="text-justify">{attributes?.description}</p>
      <table className="border-2 border-neutral-200">
        <thead className="font-bold block p-2">
          <tr>
            <th>Attributes</th>
          </tr>
        </thead>
        <AvocadoAttributes attributes={attributes} />
      </table>
    </section>
  );
};

export default AvocadoAbout;
