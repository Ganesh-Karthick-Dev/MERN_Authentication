import React from "react";

const Updater = () => {
  return (
    <>
      <div className="z-10 ">
        <form>
          <label htmlFor="name">name</label>
          <input
            className="border-black border"
            type="text"
            id="name"
            name="name"
          />
          <br />
          <label htmlFor="name">email</label>
          <input
            className="border-black border"
            type="email"
            id="name"
            name="name"
          />
          <br />
          <label htmlFor="name">number</label>
          <input
            className="border-black border"
            type="number"
            id="name"
            name="name"
          />
          <br />
          <button className="bg-red-500" >
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default Updater;
