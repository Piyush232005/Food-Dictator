import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();

  // ✅ Move this earlier
  const [favroite, setfavroite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const { register, handleSubmit, reset } = useForm();

  // ✅ Move this after hooks
  const recipe = data.find((recipe) => params.id == recipe.id);

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title || "",
        chef: recipe.chef || "",
        image: recipe.image || "",
        inst: recipe.inst || "",
        desc: recipe.desc || "",
        ingr: recipe.ingr || "",
        category: recipe.category || "breakfast",
      });
    }
  }, [recipe, reset]);

  // ✅ Move below all hooks
  if (!recipe) return <div>Loading...</div>;

  const UpdateHandler = (updatedRecipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe updated!");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("recipe deleted!");
    navigate("/recipes");
  };

  const FavHandler = () => {
    let copyfav = [...favroite];
    copyfav.push(recipe);
    setfavroite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnFavHandler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe?.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row gap-4 p-6 bg-teal- text-black">
      <div className="relative lg:w-1/2 w-full bg-teal-700 p-6 rounded-3xl shadow-lg  animate-fade-in">
        {favroite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnFavHandler}
            className="right-[10%] absolute text-3xl text-red-400 ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="right-[10%] absolute text-3xl text-red-400 ri-heart-line"
          ></i>
        )}

        <h1 className="text-5xl font-extrabold text-amber-200 mb-4">
          {recipe.title}
        </h1>
        <img
          className="w-full h-64 object-cover rounded-xl shadow-md mb-4 border-2 border-white"
          src={recipe.image}
          alt={recipe.title}
        />
        <h2 className="text-3xl text-amber-300 font-semibold mb-2">
          {recipe.chef}
        </h2>
        <p className="text-amber-200 whitespace-pre-wrap">{recipe.desc}</p>
        <p className="text-amber-200 whitespace-pre-wrap">{recipe.ingr}</p>
      </div>

      <div className="lg:w-1/2 w-full bg-teal-700 p-6 rounded-3xl shadow-lg  animate-slide-in">
        <h2 className="text-5xl font-bold text-amber-200 mb-4">Edit Recipe</h2>
        <form
          onSubmit={handleSubmit(UpdateHandler)}
          className="flex flex-col gap-4"
        >
          <input
            className="p-3 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            {...register("image")}
            type="url"
            placeholder="Enter Image Url"
          />
          <input
            className="p-3 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
          />
          <input
            className="p-3 rounded-lg border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
          />
          <textarea
            className="p-3 rounded-lg border border-teal-300 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            {...register("desc")}
            placeholder="//start from here"
          />
          <textarea
            className="p-3 rounded-lg border border-teal-300 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            {...register("ingr")}
            placeholder="//write ingredients separated by comma"
          />
          <select
            className="p-3 rounded-lg border border-teal-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            {...register("category")}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              type="submit"
              className="bg-amber-200 text-gray-800 font-semibold text-lg px-6 py-3 rounded-lg hover:bg-green-950 hover:text-white transition-all duration-300 shadow-md hover:scale-105 w-fit"
            >
              Update Recipe
            </button>
            <button
              onClick={DeleteHandler}
              type="button"
              className="bg-amber-200 text-gray-800 font-semibold text-lg px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md hover:scale-105 w-fit"
            >
              Delete Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
