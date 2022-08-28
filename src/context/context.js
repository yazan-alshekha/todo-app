import React, { createContext, useState , useEffect} from "react";
import { compileString } from "sass";

export const ContextState = React.createContext();


export function Context({ children }) {
    
   
    const [displaySetting, setDisplaySetting] = useState({

        displayCompleatedItem: true,
        itemsPerPage: 2,
        defaultSort: "",
        currentPage:1,
        saveToLocalStorage(){
            // function to save user Preferences to local storage
            let userPreferences = {
                displayCompleatedItem : this.displayCompleatedItem,
                itemsPerPage:this.itemsPerPage,
                defaultSort : this.defaultSort , 
                currentPage: this.currentPage
            }
            localStorage.setItem("userPreferences" , JSON.stringify(userPreferences)  );
        }
    });

    // useEffect(()=>{
    //     console.log("use effect");
    //         setDisplaySetting( (prev) => {
    //             return {
    //                 displayCompleatedItem: displaySetting.displayCompleatedItem,
    //                 itemsPerPage: displaySetting.itemsPerPage,
    //                 defaultSort: "",
    //                 currentPage:prev.currentPage,
    //             }
    //         } );

    //         displaySetting.saveToLocalStorage();
        
    // },[displaySetting]);



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
        <ContextState.Provider value={{ displaySetting ,setDisplaySetting }}>
            {children}
        </ContextState.Provider>
    );

}

export default ContextState;
