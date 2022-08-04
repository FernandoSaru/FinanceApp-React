import React from "react";
import GridItem from "./grid-item/gri-item.js";
import * as C from "./gridStyles.js";

const Grid = ({ item, setItem }) => {
  const onDelete = (ID) => {
    const newArray = item.filter((transaction) => transaction.id !== ID);
    setItem(newArray);
    localStorage.setItem("transaction", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Description</C.Th>
          <C.Th width={40}>Value</C.Th>
          <C.Th width={10} alignCenter>
            Type
          </C.Th>
          <C.Th width={10}>Delete</C.Th>
        </C.Tr>
      </C.Thead>

      <C.Tbody>
        {item?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;