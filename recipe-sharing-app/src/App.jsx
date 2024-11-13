import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'



function App() {
  return (
    <BrowserRouter>
    <div>
      <AddRecipeForm />
      <FavoritesList />
      <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
    </Routes>
    <RecommendationsList />
    </div>
    </BrowserRouter>
  );
}

export default App;
