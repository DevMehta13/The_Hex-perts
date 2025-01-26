import React, { useState } from 'react';

const CreateReport = () => {
    const [formData, setFormData] = useState({
        disaster_type: '',
        city: '',
        occurrence_date: '',
        occurrence_time: '',
        severity_level: '',
        casualties: 0,
        injuries: 0,
        missing_persons: 0,
        contact_phone: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/disaster-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Include the JWT token
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Report created successfully!');
            } else {
                alert(data.error || 'Failed to create report.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>Create Disaster Report</h1>
            <form onSubmit={handleSubmit}>
                {/* Add input fields for the report data */}
                <input type="text" name="disaster_type" onChange={handleInputChange} placeholder="Disaster Type" required />
                <input type="text" name="city" onChange={handleInputChange} placeholder="City" required />
                <input type="date" name="occurrence_date" onChange={handleInputChange} required />
                <input type="time" name="occurrence_time" onChange={handleInputChange} required />
                <input type="number" name="severity_level" onChange={handleInputChange} placeholder="Severity Level" required />
                <input type="number" name="casualties" onChange={handleInputChange} placeholder="Casualties" />
                <input type="number" name="injuries" onChange={handleInputChange} placeholder="Injuries" />
                <input type="number" name="missing_persons" onChange={handleInputChange} placeholder="Missing Persons" />
                <input type="text" name="contact_phone" onChange={handleInputChange} placeholder="Contact Phone" required />
                <button type="submit">Submit Report</button>
            </form>
        </div>
    );
};

export default CreateReport;
