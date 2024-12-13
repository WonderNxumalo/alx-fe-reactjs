import axios from 'axios';
import { useState, useEffect } from 'react';

function Search () {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`https://api.github.com/users/${searchTerm}`);

            setUserData(response.data);
        } catch (error)

        {
            setError('Looks like we cant find the user.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setUserData(null);
    }, [searchTerm]);
    
    return (
        <div className='bg-slate-500 shadow-md p-2'>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Search GitHub Username"
                value={searchTerm}
                onChange={handleInputChange}
                />

                <button type="submit" className='bg-blue-600 text-white rounded-md p-1'>Search</button>
            </form>

            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div className='bg-slate-700 shadow-md p-2'>
                    <img src={userData.avatar_url} alt="userData.login" />
                    <p>{userData.login}</p>
                    <a href={userData.html_url} target='_blank' rel='noopener noreferrer'>View Profile</a>
                </div>
            )}
        </div>
    );

}

export default Search;