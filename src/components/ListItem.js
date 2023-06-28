import React, { useState } from "react";

const ListItem = ({ user, id, setId }) => {
  // console.log(id);
  const [focused, setFocused] = useState(false);
  return (
    <div className="user-container">
      <a
        href="#details"
        className={`text-dark text-decoration-none`}
        onClick={() => {
          setId(id);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <input
          type="radio"
          className="col-2 d-none"
          name="user"
          id={`check${id}`}
        />
        <label
          htmlFor={`check${id}`}
          key={id}
          id={`user${id}`}
          className={`py-3 ${
            focused ? "list-item-focused" : "list-item"
          } my-1 ps-2 rounded h5 row align-items-center`}
        >
          <img
            src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
            className="img-fluid rounded-circle col-2 col-lg-1"
            alt={user.profile.userName}
          />
          <span className="col-10 col-lg-11">
            {user.profile?.firstName} {user.profile?.lastName}
          </span>
        </label>
      </a>
    </div>
  );
};

export default ListItem;
