import { useState } from 'react';
import axios from 'axios';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'searchTerm':
        setSearchTerm(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'minRepos':
        setMinRepos(parseInt(value, 10)); // Ensure valid number
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const params = {
        q: searchTerm,
        per_page: 10, // Adjust per page limit if needed
        page: currentPage,
      };

      if (location) {
        params.q += ` location:${location}`;
      }

      if (minRepos) {
        params.q += ` min_public_repos:${minRepos}`;
      }

      const response = await axios.get('https://api.github.com/search/users', { params });
      setUserData(response.data.items);
    } catch (error) {
      setError('Looks like we can\'t find any users matching your criteria.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (userData.length < 100) return; // Prevent unnecessary requests (limit can be adjusted)
    setCurrentPage(currentPage + 1);
    handleSubmit(); // Trigger a new search with updated page
  };

  return (
    <div className='container mx-auto bg-slate-400 shadow-lg p-2'>
      <form onSubmit={handleSubmit} className='bg-slate-500 mb-2 flex-col justify-items-center'>
        <input
          type="text"
          placeholder="Search GitHub Username"
          value={searchTerm}
          name="searchTerm"
          onChange={handleInputChange}
          className='border hover:border-slate-600 p-1 m-2'
        />
        <input
          type="text"
          placeholder="Filter by Location"
          value={location}
          name="location"
          onChange={handleInputChange}
          className='border hover:border-slate-600 p-1 m-2'
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          name="minRepos"
          onChange={handleInputChange}
          className='border hover:border-slate-600 p-1 m-2'
        />
        <button type="submit" className='bg-slate-700 text-white text-lg rounded-md p-0.5 hover:bg-green-500'>Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData.length > 0 && (
        <ul>
          {userData.map((user) => (
            <li key={user.id} className='bg-slate-500 flex-col justify-items-center p-2'>
              <img src={user.avatar_url} alt={user.login} className='rounded-md mb-1'/>
              <p className='text-white text-2xl'>{user.login}</p>
              <p>Location: {user.location || 'N/A'}</p>
              <p>Public Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className='bg-slate-700 text-white text-lg rounded-md p-0.5 hover:bg-green-500'>
                View Profile
              </a>
            </li>
          ))}
        </ul>
      )}
      {userData.length === 10 && ( // Only show "Load More" if results are full page
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default Search;

{/* fetchUserData 
    target.value 
    ["Looks like we cant find the user"]
    */}