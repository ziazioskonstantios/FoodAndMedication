import React from 'react';
import AddMeal from '../components/AddMeal';
import MealList from '../components/MealList';

const AddOrRemoveMeal: React.FC = () => {
    return (
        <div>
            <h1>Add or Remove Meal</h1>
            <AddMeal />
            <MealList meals={[]} />
        </div>
    );
};

export default AddOrRemoveMeal;