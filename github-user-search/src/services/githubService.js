import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error for handling in the component
  }
};

{/* ["https://api.github.com/search/users?q", "location", "minRepos"] */}