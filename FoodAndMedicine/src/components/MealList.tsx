import React from 'react';

interface Meal {
    id: number;
    name: string;
    description: string;
    date: string;
}

interface MealListProps {
    meals: Meal[];
}

const MealList: React.FC<MealListProps> = ({ meals }) => {
    return (
        <div>
            <h2>My Last Meals</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.id}>
                        <h3>{meal.name}</h3>
                        <p>{meal.description}</p>
                        <small>{meal.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealList;