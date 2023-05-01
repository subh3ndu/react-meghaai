import React, { useContext, useState } from "react";

import { UserDataContext } from "../context/UserDataContext";
import { CreateNewUser } from "./CreateNewUser";

import { BsArrowLeft } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { RiEditBoxLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { EditUser } from "./EditUser";

export const UserManagement = () => {
  const [isShowToggler, setIsShowToggler] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const { userData, setUserData } = useContext(UserDataContext);

  function handleDelete(name) {
    setUserData(userData.filter((item) => item.userName !== name));
  }

  return (
    <div>
      <div className="flex justify-between h-16 items-center">
        <div className="flex justify-center items-center ml-5 gap-2 font-bold">
          <BsArrowLeft />
          <h1>User Management</h1>
        </div>
        <button
          className="flex items-center justify-center bg-indigo-800 hover:bg-indigo-950 py-2 px-4 mr-5 text-white gap-2 rounded-md"
          onClick={() => setIsShowToggler((prevState) => !prevState)}
        >
          <AiOutlinePlus />
          Add User
        </button>
      </div>

      {isShowToggler && <CreateNewUser toggler={setIsShowToggler} />}
      {isEditing && (
        <EditUser
          id={currentItem.id}
          currentItem={currentItem}
          setIsEditing={setIsEditing}
        />
      )}

      <div className="px-4">
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Status</th>
              <th>QuickSight User</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, ind) => (
              <tr key={ind}>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.role}</td>
                <td>
                  <strong className="text-green-500">ok</strong>
                </td>
                <td>
                  <RxCross2 color="red" />
                </td>
                <td>
                  {item.role !== "Admin" && (
                    <RiEditBoxLine
                      color="blue"
                      className="cursor-pointer"
                      onClick={() => {
                        setIsEditing(true);
                        setCurrentItem(item);
                      }}
                    />
                  )}
                </td>
                <td>
                  {item.role !== "Admin" && (
                    <MdDeleteOutline
                      color="red"
                      className="cursor-pointer"
                      onClick={() => handleDelete(item.userName)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className=" text-white flex justify-end mr-4 mt-4">
        <button
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-800"
          onClick={() => {
            localStorage.clear();
            location.reload();
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
