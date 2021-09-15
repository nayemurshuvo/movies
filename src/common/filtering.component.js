import React from "react";

const Filter = ({ filterdItems, onClick, selectedItem }) => {
  return (
    <div className="col-lg-2">
      <ul className="list-group">
        {filterdItems.map((item) => (
          <li
            key={item._id}
            className={
              selectedItem === item.name
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onClick(item.name)}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Filter;
