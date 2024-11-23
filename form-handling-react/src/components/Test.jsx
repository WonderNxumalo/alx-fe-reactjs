import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...setFormData,[name]: value,});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = {};
        if (!formData.username) {newErrors.username = 'Username is required';}
        if (!formData.email) {newErrors.email = 'Email is required';}
        if (formData.password) {newErrors.password = 'Password is required';}

        setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        console.log('Form submitted: ', formData);
    }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );

};

export default RegistrationForm;