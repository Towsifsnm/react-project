 
import Available from '../Available/Available'
import Seleceted from '../Selected/Seleceted'
import './Button.css'
export default function Buttons({handleIsActiveState, isActive})
 

 {
   
    return (
        <div className=''>
           
           <button onClick={()=>handleIsActiveState("cart")} className={`${isActive.cart? "btnn active": "btnn"}`}>Available</button>
           <button onClick={()=>handleIsActiveState("about")}className={`${isActive.cart? "btnn ": " active btnn"}`}>Selected</button>
           

            {
                isActive.cart? <Available></Available>:<Seleceted></Seleceted>
            }
        </div>
         
      
    );
};

  