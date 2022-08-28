
import { useContext } from 'react';
import Context from '../context/context';

import { Button, FormGroup, Label, Navbar ,Alignment } from "@blueprintjs/core";
function Pagination(props) {

    const { displaySetting ,setDisplaySetting } = useContext(Context);

    // pageNumbers array is to know how many of oages i need and display them later as page number [1,2,3,4,5, .....]
    const pageNumbers = [];
    

    for (let i = 1; i <= Math.ceil(props.list / displaySetting.itemsPerPage); i++) {
        pageNumbers.push(i);

    }

    
    function paginate(number){
        console.log("ssssdererere",number);
        setDisplaySetting( prev => {
            return {...prev, currentPage:number} 
        })
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => {
                    return <li key={number}>
                        <a href='!#' onClick={ () => { paginate(number) } } >{number}</a>
                    </li>
                })
                }
            </ul>
            
            {
                // next button 
            displaySetting.currentPage >= 1 && displaySetting.currentPage < pageNumbers.length && <Button type="button" text="Next" className=".bp4-button "  onClick={() => { paginate( displaySetting.currentPage +1 ) } } />
            }
            {console.log(displaySetting.currentPage)}
                
            {
                // Previece button 
            displaySetting.currentPage !=1 && <Button type="button" text="Previece " className=".bp4-button" onClick={() => { paginate( displaySetting.currentPage -1 ) } } />
            }
        </nav>
    );


}

export default Pagination;