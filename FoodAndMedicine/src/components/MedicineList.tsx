import React from 'react';

interface Medicine {
    id: number;
    name: string;
    description: string;
    allergies?: string[]; // Added allergies field
}

interface MedicineListProps {
    medicines: Medicine[];
    onRemove: (id: number) => void;
}

const MedicineList: React.FC<MedicineListProps> = ({ medicines, onRemove }) => {
    const handleRemove = (id: number) => {
        if (window.confirm('Are you sure you want to remove this medicine?')) {
            onRemove(id);
        }
    };

    return (
        <ul>
            {medicines.map((medicine) => (
                <li key={medicine.id} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ marginRight: 'auto' }}>{medicine.name}</h3>
                        <button
                            className="remove-button"
                            onClick={() => handleRemove(medicine.id)}
                            title="Remove"
                        >
                            X
                        </button>
                    </div>
                    <p style={{ margin: '5px 0', color: '#555' }}>{medicine.description}</p>
                    {medicine.allergies && medicine.allergies.length > 0 && (
                        <p style={{ margin: '5px 0', color: 'red' }}>
                            <strong>Known Allergies:</strong> {medicine.allergies.join(', ')}
                        </p>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MedicineList;