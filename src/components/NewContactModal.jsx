import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

const NewContactModal = ({ setOpenModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, SetPhoneNumber] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    if ((firstName || lastName) && phoneNumber) {
      dispatch({
        type: "ADD_CONTACT",
        payload: { firstName, lastName, phoneNumber },
      });
      setOpenModal(false);
      setErrorMsg("")
    } else {
      setErrorMsg("Invalid Input")
    }
  };

  return (
    <div className="absolute bg-white md:w-[450px] max-md:w-4/5 rounded-lg shadow-lg flex flex-col p-5 gap-3">
      <RxCross2
        className="cursor-pointer absolute right-5 mt-2 hover:bg-gray-100 rounded-full"
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
        <div className="text-red-500 place-self-start ml-2">{errorMsg}</div>
        <button
          type="submit"
          className="p-2 px-3 w-fit bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default NewContactModal;
