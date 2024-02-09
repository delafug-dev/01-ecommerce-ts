import { useContext } from "react"
import { userContext } from "../context/UserProvider";

export const UseUser = () => {
    return useContext(userContext);
}