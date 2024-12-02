import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from URL parameters
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("src/data.json");
      const data = await response.json();
      const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
      setRecipe(foundRecipe);
    };
    fetchData();
  }, [id]);

  if (!recipe) {
    return <div>Loading recipe details...</div>;
  }

  return (
    <div className="container max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-slate-50 hover:text-slate-500">
        {recipe.title}
      </h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-auto rounded-lg mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg md:text-xl text-slate-50 mb-4 hover:text-slate-500">
            Ingredients
          </h2>
          <ul className="list-disc space-y-2">
            {recipe.ingredients?.map((ingredient) => (
              <li key={ingredient} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg md:text-xl text-slate-50 mb-4 hover:text-slate-500">
            Cooking Instructions
          </h2>
          <p className="text-gray-700 text-base">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;