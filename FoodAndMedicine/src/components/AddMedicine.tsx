import React, { useState } from 'react';

const AddMedicine: React.FC = () => {
    const [medicineName, setMedicineName] = useState('');
    const [dosage, setDosage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!medicineName || !dosage) {
            setError('Please fill in all fields');
            return;
        }
        // Logic to add medicine goes here
        console.log('Medicine added:', { medicineName, dosage });
        setMedicineName('');
        setDosage('');
        setError('');
    };

    return (
        <div>
            <h2>Add Medicine</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="medicineName">Medicine Name:</label>
                    <input
                        type="text"
                        id="medicineName"
                        value={medicineName}
                        onChange={(e) => setMedicineName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="dosage">Dosage:</label>
                    <input
                        type="text"
                        id="dosage"
                        value={dosage}
                        onChange={(e) => setDosage(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Add Medicine</button>
            </form>
        </div>
    );
};

export default AddMedicine;