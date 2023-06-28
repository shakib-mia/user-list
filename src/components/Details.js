import React, { useEffect, useState } from "react";

const Details = ({ id }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <>
      <div
        className={`mx-0 mt-3 d-none d-lg-block fixed-top w-50 ms-auto px-5 ${id}`}
      >
        <div>
          <h4
            className="bg-primary py-3 my-2 rounded-top row justify-content-center text-uppercase"
            style={{ "--bs-bg-opacity": 0.3 }}
          >
            Users Details
          </h4>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "80vh" }}
        >
          {id === -1 ? (
            <h3 className="text-center">No user has been selected yet</h3>
          ) : (
            <div className="">
              {user[id].profile ? (
                <div className="card border-0" style={{ width: "30rem" }}>
                  <img
                    src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                    className="card-img-top w-25 mx-auto rounded-circle"
                    width="20px"
                    alt={user[id].username}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      @{user[id].profile.username}
                    </h5>
                    <div className="p-2">
                      <div
                        className="bg-light border rounded border-1 border-secondary form-control d-inline-block"
                        style={{ height: "5rem" }}
                      >
                        {user[id].Bio}
                      </div>
                    </div>
                    <div className="p-2">
                      <small className="fw-bold">Full Name</small>
                      <div className="bg-light border rounded border-1 border-secondary form-control">
                        {user[id].profile.firstName} {user[id].profile.lastName}
                      </div>
                    </div>
                    <div className="p-2">
                      <small className="fw-bold">Job Title</small>
                      <div className="bg-light border rounded border-1 border-secondary form-control">
                        {user[id].jobTitle}
                      </div>
                    </div>
                    <div className="p-2">
                      <small className="fw-bold">Email</small>
                      <div className="bg-light border rounded border-1 border-secondary form-control">
                        {user[id].profile.email}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="spinner-border text-center col-12"
                  role="status"
                >
                  <div className="visually-hidden">Loading...</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className={`mx-0 mt-3 d-block d-lg-none w-100 ms-auto px-5 ${id}`}
        id="details"
      >
        <div>
          <h4
            className="bg-primary py-3 my-2 rounded-top row justify-content-center text-uppercase"
            style={{ "--bs-bg-opacity": 0.3 }}
          >
            Users Details
          </h4>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "80vh" }}
        >
          {id === -1 ? (
            <h3 className="text-center">No user has been selected yet</h3>
          ) : (
            <div className="">
              {user[id].profile ? (
                <div className="card border-0" style={{ width: "30rem" }}>
                  <img
                    src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                    className="card-img-top w-25 mx-auto rounded-circle"
                    width="20px"
                    alt={user[id].username}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      @{user[id].profile.username}
                    </h5>
                    <div className="p-2">
                      <div
                        className="bg-light border rounded border-1 border-secondary form-control d-inline-block"
                        style={{ height: "5rem" }}
                      >
                        {user[id].Bio}
                      </div>
                    </div>
                    <div className="p-2">
                      <small className="fw-bold">Full Name</small>
                      <div className="bg-light border rounded border-1 border-secondary form-control">
                        {user[id].profile.firstName} {user[id].profile.lastName}
                      </div>
                    </div>
                    <div className="p-2">
                      <small className="fw-bold">Job Title</small>
                      <div className="bg-light border rounded border-1 border-secondary form-control">
                        {user[id].jobTitle}
                      </div>
                    </div>
                    <div className="p-2">
                      <small className="fw-bold">Email</small>
                      <div className="bg-light border rounded border-1 border-secondary form-control">
                        {user[id].profile.email}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="spinner-border text-center col-12"
                  role="status"
                >
                  <div className="visually-hidden">Loading...</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
