import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
    const { data } = useContext(recipecontext);

    return (
        <div className="min-h-screen bg-teal-900 p-6">
            <h1 className="text-5xl font-bold text-amber-200 mb-6 text-center">
                All Recipes
            </h1>

            {data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <div className="text-amber-200 text-center text-9xl">
                    No recipes found!
                </div>
            )}
        </div>
    );
};

export default Recipes;
