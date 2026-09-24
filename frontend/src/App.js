import Body from "./components/Body";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./utils/__redux_store__/userSlice";
import { auth } from "./utils/firebase";

const App = () => {

  return <Body></Body>;
};

export default App;
