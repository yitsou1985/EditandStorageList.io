import React from "react";
import "./ListItems.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from "react-flip-move";
function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
        return <div className="list" key={item.key} >
          { 
            //  <p>{item.text}
            }
            <p>
            <input type="text" id={item.key} value={item.text}
            onChange={
                (event)=>{
                    props.setUpdate(event.target.value, item.key)
                } 
             } />
         <span>
         
         <FontAwesomeIcon className="faivicons" icon='trash'
         onClick={
             ()=>props.deleteItem(item.key)
         }
         />
             
         </span>
         </p>
         </div>
    })
    return(
        <div>
        <FlipMove duration={500} easing="ease-in-out">
        {listItems}
        </FlipMove>
        
        </div>
    )
}


export default ListItems;