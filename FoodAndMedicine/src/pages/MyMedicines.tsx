import React, { useState } from 'react';
import MedicineList from '../components/MedicineList';

interface Medicine {
    id: number;
    name: string;
    description: string;
    allergies?: string[];
}

const MyMedicines: React.FC = () => {
    const [medicines, setMedicines] = useState<Medicine[]>([
        {
            id: 1,
            name: 'Paracetamol',
            description: 'Used to treat pain and fever.',
            allergies: ['Liver issues'],
        },
        {
            id: 2,
            name: 'Ibuprofen',
            description: 'Anti-inflammatory medication.',
            allergies: ['Asthma', 'Stomach ulcers'],
        },
        {
            id: 3,
            name: 'Amoxicillin',
            description: 'Antibiotic used to treat infections.',
            allergies: ['Penicillin allergy'],
        },
    ]);

    const [newMedicineName, setNewMedicineName] = useState('');
    const [newMedicineDescription, setNewMedicineDescription] = useState('');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleRemove = (id: number) => {
        setMedicines(medicines.filter((medicine) => medicine.id !== id));
    };

    const handleAdd = () => {
        if (newMedicineName.trim() && newMedicineDescription.trim()) {
            const newMedicine: Medicine = {
                id: medicines.length + 1, // Generate a new ID
                name: newMedicineName,
                description: newMedicineDescription,
            };
            setMedicines([...medicines, newMedicine]);
            setNewMedicineName('');
            setNewMedicineDescription('');
            setIsPopupOpen(false); // Close the popup after adding
        }
    };

    return (
        <div>
            <h1>My Medicines</h1>
            <button onClick={() => setIsPopupOpen(true)}>Add Medicine</button>

            {/* Conditionally render the MedicineList only when the popup is not open */}
            {!isPopupOpen && <MedicineList medicines={medicines} onRemove={handleRemove} />}

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Add New Medicine</h2>
                        <div>
                            <input
                                type="text"
                                placeholder="Medicine Name"
                                value={newMedicineName}
                                onChange={(e) => setNewMedicineName(e.target.value)}
                            />
                            <button className="blue-button">Search</button> {/* Search button styled as blue */}
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Medicine Description"
                                value={newMedicineDescription}
                                onChange={(e) => setNewMedicineDescription(e.target.value)}
                            />
                        </div>
                        <button onClick={handleAdd}>Add</button>
                        <button onClick={() => setIsPopupOpen(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyMedicines;