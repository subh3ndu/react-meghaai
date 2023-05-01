import React, { useContext, useState } from "react";
import { UserDataContext } from "../context/UserDataContext";

export const EditUser = ({ currentItem, setIsEditing, id }) => {
  const [formData, setFormData] = useState(currentItem);
  const { userData, setUserData } = useContext(UserDataContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.userName &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.confirmPassword
    ) {
      if (formData.password === formData.confirmPassword)
        setUserData(userData.map((item) => (item.id === id ? formData : item)));
    }
    setIsEditing(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <div
        className="absolute top-0 w-full h-full bg-slate-900 bg-opacity-30"
        onClick={() => setIsEditing((prevState) => !prevState)}
      ></div>

      <div className="absolute top-[10%] left-[50%] -translate-x-2/4 w-[60%] bg-white rounded-md">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold p-2 m-3">Edit User</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form gap-y-4 my-4 px-8 flex flex-col">
              <input
                name="userName"
                type="text"
                value={formData.userName}
                onChange={handleChange}
                placeholder="User Name"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number(with country code: +91XXXXXXXXXX)"
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </div>

            <hr />

            <div className="flex justify-end m-2">
              <button className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-800">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
