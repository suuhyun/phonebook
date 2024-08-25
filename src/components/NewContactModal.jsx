import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

const NewContactModal = ({ setOpenModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (e) => {
    console.log("addContact");
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { firstName, lastName, phoneNumber },
    });
    setOpenModal(false);
  };

  return (
    <div className="absolute bg-white md:w-[450px] max-md:w-4/5 rounded-lg shadow-lg flex flex-col p-5 gap-3">
      <RxCross2
        className="!cursor-pointer absolute right-5 mt-2"
        onClick={() => setOpenModal(false)}
      />
      <div className="text-center text-xl">New Contact</div>
      <form
        onSubmit={addContact}
        className="flex flex-col gap-2 w-full items-center"
      >
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full focus:outline-none border-b p-2"
          type="text"
          placeholder="First name"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          className="w-full focus:outline-none border-b p-2"
          type="text"
          placeholder="Last name"
        />
        <input
          onChange={(e) => SetPhoneNumber(e.target.value)}
          className="w-full focus:outline-none border-b p-2"
          type="text"
          placeholder="Phone"
        />
        <button
          type="submit"
          className="p-2 px-3 w-fit bg-blue-500 text-white rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NewContactModal;
