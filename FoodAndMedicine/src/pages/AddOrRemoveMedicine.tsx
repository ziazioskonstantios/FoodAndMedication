import React from 'react';
import AddMedicine from '../components/AddMedicine';
import MedicineList from '../components/MedicineList';

const AddOrRemoveMedicine: React.FC = () => {
    return (
        <div>
            <h1>Add or Remove Medicines</h1>
            <AddMedicine />
            <MedicineList medicines={[]} onRemove={function (id: number): void {
                throw new Error('Function not implemented.');
            } } />
        </div>
    );
};

export default AddOrRemoveMedicine;