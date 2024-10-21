import React, { useState } from 'react';
import axios from 'axios';

const AddItemComponent = ({ onItemAdded }) => {
    const [itemName, setItemName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const addItem = async (itemName) => {
        setLoading(true); // Start loading
        setError(''); // Reset error

        try {
            // Send POST request to backend
            const response = await axios.post('http://20.21.131.75:5000/items', {
                name: itemName, // Payload structure
            });
            console.log('Item added:', response.data);

            // Clear the input field
            setItemName('');

            // Notify parent component about the new item
            if (onItemAdded) {
                onItemAdded(response.data);
            }
        } catch (error) {
            console.error('Error adding item:', error);
            setError('Failed to add item. Please try again.');
        } finally {
            setLoading(false); // End loading
        }
    };

    const handleAddItem = () => {
        if (itemName.trim() !== '') {
            addItem(itemName.trim()); // Trim input before sending
        } else {
            setError('Please enter a valid item name.');
        }
    };

    return (
        <div>
            <input
                type="text"
                id="itemInput"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={handleAddItem} disabled={loading}>
                {loading ? 'Adding...' : 'Add Item'}
            </button>
            
            {/* Display error message if present */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default AddItemComponent;

