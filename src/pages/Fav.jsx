import RecipeCard from "../components/RecipeCard";

const Fav = () => {
    const favroite = JSON.parse(localStorage.getItem("fav")) || [];

    return (
        <div className="min-h-screen bg-teal-900 p-6">
            <h1 className="text-5xl font-bold text-amber-200 mb-6 text-center">
                Favorite Recipes 💚
            </h1>

            {favroite.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favroite.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <div className="text-amber-200 text-center text-9xl">
                    No favorite recipes found!
                </div>
            )}
        </div>
    );
};

export default Fav;
