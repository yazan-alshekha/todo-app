import React, { createContext, useState, useEffect } from "react";
import { compileString } from "sass";

export const ContextState = React.createContext();


export function Context({ children }) {


    const [displaySetting, setDisplaySetting] = useState({

        displayCompleatedItem: true,
        itemsPerPage: 2,
        defaultSort: "",
        currentPage: 1,
    });

    function saveToLocalStorage() {
        // function to save user Preferences to local storage
        let userPreferences = {
            displayCompleatedItem: displaySetting.displayCompleatedItem,
            itemsPerPage: displaySetting.itemsPerPage,
            defaultSort: displaySetting.defaultSort,
            currentPage: displaySetting.currentPage
        }
        localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    }
    
    useEffect(() => {

        saveToLocalStorage();

    }, [displaySetting]);



    // if  ( !localStorage.getItem('userPreferences') ) {

    //     displaySetting.saveToLocalStorage();
    //     console.log("generaL");
    // }
    // else{
    //     readFromLocalStorage();
    //     // console.log("else");
    //     // let dataFromLocalStorage=localStorage.getItem('userPreferences');

    //     // setDisplaySetting((prev)=>{
    //     //     return {
    //     //         ...prev,
    //     //         displayCompleatedItem : dataFromLocalStorage.displayCompleatedItem,
    //     //         itemsPerPage:dataFromLocalStorage.itemsPerPage,
    //     //         defaultSort : dataFromLocalStorage.defaultSort , 
    //     //         currentPage: dataFromLocalStorage.currentPage
    //     //     }
    //     // });
    //     // console.log("display",displaySetting);
    // }

    // function readFromLocalStorage(){
    //     console.log("read from local storage");
    //     localStorage.getItem("userPreferences")
    // }

    return (
        <ContextState.Provider value={{ displaySetting, setDisplaySetting , saveToLocalStorage}}>
            {children}
        </ContextState.Provider>
    );

}

export default ContextState;
