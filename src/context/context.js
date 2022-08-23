import React, { createContext, useState } from "react";

export const ContextState = React.createContext();


export function Context({ children }) {

    // const [globalList, setGlobalList] = useState([]);

    // const [visibleItems, setVisibleItems] = useState([]);

    const [displaySetting, setDisplaySetting] = useState({

        displayCompleatedItem: true,
        itemsPerPage: 2,
        defaultSort: 0,
        currentPage:1,
    });

    // function addToGlobalList(newItem) {

    //     setGlobalList(prev => [...prev, newItem])
    // }
    // function changeWholeGlobalList(items) {

    //     setGlobalList(items)
    //     changeNumberOfItemsPerScreen();
    // }

    // function changeNumberOfItemsPerScreen() {

    //     let array = globalList.slice(0, displaySetting.numberOfItems);
    //     setVisibleItems(array);
    // }

    return (
        <ContextState.Provider value={{ displaySetting ,setDisplaySetting }}>
            {children}
        </ContextState.Provider>
    );

}

export default ContextState;
