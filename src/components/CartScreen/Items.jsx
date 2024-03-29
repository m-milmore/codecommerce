import React, { useContext } from "react";
import "./Items.css";
import ItemRow from "./ItemRow";
import { HandleContext } from "../../App";

const Items = () => {
  const {
    account: { itemData },
  } = useContext(HandleContext);
  
  const tableHead = (
    <thead>
      <tr>
        <th style={{ width: "4%" }} />
        <th style={{ textAlign: "left", width: "12%", userSelect: "none" }}>
          Product
        </th>
        <th style={{ width: "36%" }} />
        <th style={{ width: "15%", userSelect: "none" }}>Price</th>
        <th style={{ width: "12%", userSelect: "none" }}>Quantity</th>
        <th style={{ padding: "10px 0", userSelect: "none" }}>Total Price</th>
      </tr>
    </thead>
  );

  return itemData && itemData.length ? (
    <table className="table-class">
      {tableHead}
      <tbody>
        {itemData.map((item) => (
          <ItemRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  ) : (
    <>
      <table className="table-class">{tableHead}</table>
      <div className="no-item-container">
        <hr />
        <span className="no-item">No item in cart...</span>
      </div>
    </>
  );
};

export default Items;
