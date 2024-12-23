import React, { useContext, useState } from "react";
export const UserContext=React.createContext()
export const UserContextProvider=({children})=>{
    const [userID, setUserID] = useState(() => {
        return localStorage.getItem('userID') || null;
    });

    // Update localStorage whenever userID changes
    const updateUserID = (newUserID) => {
        if (newUserID) {
            localStorage.setItem('userID', newUserID);
        } else {
            localStorage.removeItem('userID');
        }
        setUserID(newUserID);
    };
    return(
        <UserContext.Provider value={{userID,setUserID:updateUserID}}>
            {children}
        </UserContext.Provider>
    )
}
export const useAuth=()=>useContext(UserContext)
