import React, { useState } from 'react';
import recipes from '../recipes';

const Menu = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const handleOrderClick = (title) => {
        setSelectedItem(title); // Open the confirmation dialog
    };

    const handleConfirmOrder = () => {
        console.log(selectedItem, "has been ordered");
        setConfirmationMessage(`${selectedItem} has been added to the order.`);
        setTimeout(() => setConfirmationMessage(""), 3000);
        setSelectedItem(null); // Close the confirmation dialog
    };

    const handleCancelOrder = () => {
        setSelectedItem(null); // Close the confirmation dialog
    };

    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>

            {/* Menu items */}
            <div className='cards'>
                {recipes.map(recipe => (
                    <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt={recipe.title} />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h4>{recipe.title}</h4>
                                <p>${recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderbtn' onClick={() => handleOrderClick(recipe.title)}>
                                Order a delivery
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Confirmation Dialog */}
            {selectedItem && (
                <div className="confirmation-overlay">
                    <div className="confirmation-box">
                        <p>Are you sure you want to add {selectedItem} to your order?</p>
                        <div className="confirmation-buttons">
                            <button onClick={handleCancelOrder} className="cancel-btn">No</button>
                            <button onClick={handleConfirmOrder} className="confirm-btn">Yes</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirmation Message */}
            {confirmationMessage && (
                <div className="confirmation-message">
                    {confirmationMessage}
                </div>
            )}
        </div>
    );
};

export default Menu;
