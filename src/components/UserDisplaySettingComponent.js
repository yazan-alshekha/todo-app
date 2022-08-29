
import { Checkbox } from "@blueprintjs/core";
import { useContext, useEffect, useState } from "react";
import Context from "../context/context";

function UserDisplaySettingComponent() {
    const { displaySetting, setDisplaySetting ,saveToLocalStorage} = useContext(Context);

    // function to save the new user display Settings to the global context api object   
    function collectUserPreferenceFormData(event) {
        event.preventDefault();

        setDisplaySetting(prev => {
            return {
                ...prev,
                itemsPerPage: event.target.itemsPerPage.value,
                displayCompleatedItem: event.target.displayCompleatedItem.value
            }
        });
        
    }

    useEffect(() => {

        if (!localStorage.getItem("userPreferences")) {
            saveToLocalStorage();
        } else {

            setDisplaySetting(JSON.parse(localStorage.getItem("userPreferences")))
        }
    }, [])

    return (
        <form onSubmit={collectUserPreferenceFormData} >

            <label>
                choose number of items per screen
                <input type="number" name='itemsPerPage' defaultValue={displaySetting.itemsPerPage} />
            </label>

            <label>
                display Compleated Item ?
                <input type="radio" value={true} name="displayCompleatedItem" />
                yes
                <input type="radio" value={false} name="displayCompleatedItem" />
                No
            </label>


            <button type="submit" >Save</button>
        </form>
    );

}

export default UserDisplaySettingComponent;
