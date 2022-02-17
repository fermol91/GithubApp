import React, {useState} from "react";
import {Link} from "react-router-dom";

const Counter = (onAdd) => {

    const stock = 8;
    const initial = 1;
    
    const [counter, setCounter] = useState(1);
        
    const handlerCounterUp = () => {
        if (counter < stock){
            setCounter(counter + 1);
        }
    };
    const handlerCounterDown = () => {
        if (counter > initial){
            setCounter(counter - 1);
        }
    };

    return (
        <div className="Contador">
            
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>+</button>
            <button onClick={handlerCounterDown}>-</button>
            <div>
                <Link to={'/Cart'}>
                    <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
                </Link>    
            </div>
        </div>
    );
};

export default Counter;