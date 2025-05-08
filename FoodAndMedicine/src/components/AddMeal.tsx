import React, { useState } from 'react';

const AddMeal: React.FC = () => {
    const [mealName, setMealName] = useState('');
    const [mealDescription, setMealDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to add the meal goes here
        console.log('Meal added:', { mealName, mealDescription });
        setMealName('');
        setMealDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="mealName">Meal Name:</label>
                <input
                    type="text"
                    id="mealName"
                    value={mealName}
                    onChange={(e) => setMealName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="mealDescription">Meal Description:</label>
                <textarea
                    id="mealDescription"
                    value={mealDescription}
                    onChange={(e) => setMealDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Meal</button>
        </form>
    );
};

export default AddMeal;