import React from 'react';
import MealList from '../components/MealList';

const LastMeals: React.FC = () => {
    return (
        <div>
            <h1>Last Meals</h1>
            <MealList meals={[]} />
        </div>
    );
};

export default LastMeals;