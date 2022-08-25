
import { useContext } from 'react';
import Context from '../context/context';

import { Button, FormGroup, Label, Navbar ,Alignment } from "@blueprintjs/core";
function Pagination(props) {

    const { displaySetting ,setDisplaySetting } = useContext(Context);

    const pageNumbers = [];
    console.log("props", props);

    for (let i = 1; i <= Math.ceil(props.list / displaySetting.itemsPerPage); i++) {
        pageNumbers.push(i);

    }

    function paginate(number){
        setDisplaySetting( prev => {
            return {...prev, currentPage:number} 
        })
    }
    return (
        // <nav>
        //     <ul>
        //         {pageNumbers.map(number => {
        //             return <li key={number}>
        //                 <a href='!#' onClick={ () => { paginate(number) } } >{number}</a>
        //             </li>
        //         })
        //         }
        //     </ul>
        // </nav>


<Navbar className='.bp4-navbar'>
    {/* <Navbar.Group align={Alignment.CENTER}>
        <Navbar.Heading>blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp4-minimal" icon="home" text="Home" />
        <Button className="bp4-minimal" icon="document" text="Files" />
    </Navbar.Group> */}
      {/* <ul>
                 {pageNumbers.map(number => {
                    return <li key={number}>
                        <a href='!#' onClick={ () => { paginate(number) } } >{number}</a>
                    </li>
                })
                }
            </ul> */}
</Navbar>
    );


}

export default Pagination;