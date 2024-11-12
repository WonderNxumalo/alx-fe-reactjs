import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';



function App() {
  return (
    <BrowserRouter>
    <div>
      <AddRecipeForm />
    </div>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
