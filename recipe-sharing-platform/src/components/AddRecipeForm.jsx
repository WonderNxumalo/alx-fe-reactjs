import { useState } from "react";

function AddRecipeForm() {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        summary: '',
        image:'',
        ingredients: '',
        instructions: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // Basic validation [Errors: steps]

    const newErrors = {};
    if(!formData.title) {
        newErrors.title = 'Title is required!';
    }
    if(!formData.summary) {
        newErrors.summary = 'Summary is required!';
    }
    if(!formData.image) {
        newErrors.image = 'Image is required!';
    }
    if(!formData.ingredients) {
        newErrors.ingredients = 'Ingredients are required!';
    }
    if(!formData.instructions) {
        newErrors.instructions = 'Instructions are required!';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length == 0) {
        console.log(formData);
        // Clear form
        setFormData({
            title: '',
            summary: '',
            image:'',
            ingredients: '',
            instructions: '',
        });
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter recipe title"
                    />
                    {errors.title && <p className="text-red-500">{errors.title}</p> }
                </div>

                <div className="mb-4">
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                    <input 
                    type="text"
                    id="summary"
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter recipe's summary"
                    />
                     {errors.summary && <p className="text-red-500">{errors.summary}</p> }
                </div>

                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
                    <textarea 
                    name="ingredients" 
                    id="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter ingredients, separated by commas"
                    />
                    {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p> }
                </div>

                <div className="mb-4">
                    <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Istructions</label>
                    <textarea 
                    name="instructions" 
                    id="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter isntructions, ordered"
                    />
                    {errors.instructions && <p className="text-red-500">{errors.instructions}</p> }
                </div>
                
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
