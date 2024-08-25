import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import NewContactModal from "./components/NewContactModal";
import Contact from "./components/Contact";
import { useSelector } from "react-redux";
import SearchBox from "./components/SearchBox";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const contactList = useSelector((state) => state.contactList);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const filteredContacts = contactList.filter((contact) => {
      const firstName = contact.firstName.toLowerCase();
      const lastName = contact.lastName.toLowerCase();
      const fullNameWithSpace = `${firstName} ${lastName}`;
      const fullNameWithoutSpace = `${firstName}${lastName}`;
      const search = searchInput.toLowerCase();
      return (
        fullNameWithSpace.includes(search) ||
        fullNameWithoutSpace.includes(search)
      );
    });
    setSearchResult(filteredContacts);
  }, [searchInput]);

  return (
    <div className="flex flex-col items-center md:w-[450px] max-md:w-4/5 m-auto mt-5">
      {openModal && <NewContactModal setOpenModal={setOpenModal} />}
      <div className="flex justify-between items-center w-full">
        <div className="text-3xl p-2 my-1">Contacts</div>
        <FiPlus
          className="mr-1 mt-2 cursor-pointer hover:bg-gray-100 rounded-full"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <SearchBox setSearchInput={setSearchInput} />
      <div className="place-self-end p-1 font-bold">All Contacts: {contactList.length}</div>
      <div className="w-full p-2 flex flex-col gap-2">
        {searchInput === ""
          ? contactList.map((contact) => <Contact contact={contact} />)
          : searchResult.map((contact) => <Contact contact={contact} />)}
      </div>
    </div>
  );
}

export default App;
