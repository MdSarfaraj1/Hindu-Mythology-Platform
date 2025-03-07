import React, { useContext, useState } from "react";
export const UserContext=React.createContext()
export const UserContextProvider=({children})=>{
    const [userID, setUserID] = useState(() => {
        return localStorage.getItem('userID') || null;
    });
    const [username, setUsername] = useState(() => {
        return localStorage.getItem('username') || null;
    });

    // Update localStorage whenever userID changes
    const updateUserID = (newUserID,newUsername) => {
        if (newUserID) {
            localStorage.setItem('userID', newUserID);
            localStorage.setItem('username',newUsername)
        } else {
            localStorage.removeItem('userID');
            localStorage.removeItem('username');
        }
        setUserID(newUserID);
        setUsername(newUsername);
    };
    return(
        <UserContext.Provider value={{userID,username,setUser:updateUserID}}>
            {children}
        </UserContext.Provider>
    )
}
export const useAuth=()=>useContext(UserContext)
