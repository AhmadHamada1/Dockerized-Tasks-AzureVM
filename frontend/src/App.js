import React, { useState, useEffect } from 'react';
import AddItemComponent from './AddItemComponent';
import axios from 'axios';



function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://20.21.131.75:5000/items');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleItemAdded = (newItem) => {
        // Add the new item to the items list
        setItems([...items, newItem]);
    };

    const handleDeleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:20.21.131.75/items/${id}`);
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <h1>CRUD App</h1>
            <AddItemComponent onItemAdded={handleItemAdded} />
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

