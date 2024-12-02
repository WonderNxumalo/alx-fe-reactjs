import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    /*useEffect(() => {
        const fetchData = async () => {
            const response = await fetch ('recipe-sharing-platform/src/data.json');
            const data = await response.json();
            setRecipes(data);
        };
        fetchData();
    }, []);*/

    useEffect(() => {
        fetch('src/data.json')
        .then(response => response.json())
        .then(data => setRecipes(data));
    }, []);

    return (
        <div className="container max-w-xs sm:max-w-sm md:max-w-sm bg-teal-300 sm:p-4 md:p-8 mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
            <h1 className="text-3xl font-bold mb-8 text-slate-50 hover:text-slate-500">Recipes</h1>
            {/*<div>
                {recipes.length > 0 ? (
                    <ul>
                        {recipes.map(recipe => (
                            <li key={recipe.id}>
                                <img src="recipe.image" alt="recipe.title" className="rounded-full hover:scale-110 transition-transform duration-300 ease-in-out" />
                                <h2 className="text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">{recipe.title}</h2>
                                <p className="text-gray-600 text-sm md:text-base">{recipe.summary}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading Recipes....</p>
                )}
            </div>*/}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="bg-teal-500 shadow-md rounded-lg overflow-hidden">
                        <Link to={`/recipe.id/${recipe.id}`}>
                        <img src="recipe.image" alt="recipe.title" className="sm:w-150 sm:h-150 md:w-500 md:h-500 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"/>
                        </Link>
                        
                        <div>
                            <h2 className="text-lg md:text-xl text-slate-50 my-4 hover:text-slate-500">{recipe.title}</h2>
                            <p className="text-gray-700 text-sm md:text-base">{recipe.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default HomePage