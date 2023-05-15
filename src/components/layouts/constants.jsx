import { Link } from "react-router-dom";


export const MENU_ITEM = [

  {
    label: <Link to="../">Home</Link>,
    key: "/home",
  },
  {
    label: <Link to="/books">Books</Link>,
    key: "/books",
  },
  {
    label: <Link to="/add-books">Upload your books</Link>,
    key: "/add-books",
  },
  {
    label: <Link to="/about">About US</Link>,
    key: "/about",
  },

];
