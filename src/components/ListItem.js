import React from "react";

const ListItem = ({ user, id, setId }) => {
  // console.log(id);

  const selectedItem = (selectedId) => {
    const labels = document.getElementsByTagName("label");
    // console.log(selectedId);
    for (const label of labels) {
      if (label.id === `user${selectedId}`) {
        console.log(label.id);
        label.classList.remove("list-item");
        label.classList.add("list-item-focused");
      } else {
        label.classList.remove("list-item-focused");
        label.classList.add("list-item");
      }
    }
  };

  return (
    <div className="user-container" onClick={() => selectedItem(id)}>
      <a
        href="#details"
        className={`text-dark text-decoration-none`}
        onClick={() => {
          setId(id);
        }}
        // onFocus={() => setFocused(true)}
        // onBlur={() => setFocused(false)}
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
          className={`py-3 list-item my-1 ps-2 rounded h5 row align-items-center`}
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
