
import { useContext } from 'react';
import Context from '../context/context';

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
        <nav>
            <ul>
                {pageNumbers.map(number => {
                    return <li key={number}>
                        <a href='!#' onClick={ () => { paginate(number) } } >{number}</a>
                    </li>
                })
                }
            </ul>
        </nav>
    );


}

export default Pagination;