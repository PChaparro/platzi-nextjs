import React from "react";

interface IProps {
  attributes: TProductAttributes;
}

const AvocadoAttributes = ({ attributes }: IProps) => {
  // Remove description from the attributes
  const targetAttributes = Object.keys(attributes).slice(1);

  return (
    <tbody>
      {targetAttributes.map((key) => (
        <tr key={key} className="hover:bg-neutral-100">
          <td className="border-2 border-neutral-200 capitalize p-2">{key}</td>
          <td className="border-2 border-neutral-200 p-2">{attributes[key]}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default AvocadoAttributes;
