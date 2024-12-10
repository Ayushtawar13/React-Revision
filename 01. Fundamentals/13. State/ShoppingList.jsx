import { useState } from "react"

const ShoppingList  = () => {
    const [items , setItems] = useState([]);

    const [name ,setName] = useState('');
    const [quantity , setQuantity] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity)
        };

        setItems( [...items , newItem]);
        setName("");
        setQuantity("");
    }

    return(
        <div>
            <h1>Shopping List </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" value={name} onChange={ (e) => setName(e.target.value)} placeholder="Enter name of item "/>
                <input type="text" name="" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter name of item "/>
                <input type="Submit" name="" id="" />
            </form>

            <ul>
                {
                    items.map( (it , index) => (
                        <li key={index}> Name : {it.name}  --:--  Quantity :{it.quantity}</li>
                     ) )
                }
            </ul>
        </div>
    )
}

export default ShoppingList;