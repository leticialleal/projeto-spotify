import React from 'react'
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router'

// Desestruturação
// const ItemList = (props) => {
//     console.log(props.title);
// }

const ItemList = ({title, items, itemsArray, path, idPath}) => {

    // const pathname = useLocation().pathname;
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    
    // let finalItems;
    // isHome ? (finalItems = items) : (finalItems = Infinity);
    const finalItems = isHome ? items : Infinity;

    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>
                {isHome ? 
                <Link className="item-list__link" to={path}>Mostrar tudo</Link>
                : <></> }
            </div>
            
            <div className="item-list__container">
                
                {/* {Array(items)
                    .fill()
                    .map((currentValue, index) => (
                        <SingleItem key={`${title}-${index}`} />
                    ))} */}

                {itemsArray
                .filter((currentValue, index) => index < finalItems)
                    .map((currentObj, index) => (
                        <SingleItem key={`${title}-${index}`}
                            idPath={idPath}
                            // id={currentObj.id}
                            // name={currentObj.name}
                            // image={currentObj.image}
                            // banner={currentObj.banner} 
                            {...currentObj} />
                ))}
                
            </div>
        </div>
    )
}

export default ItemList