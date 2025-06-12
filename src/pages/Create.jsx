import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();

        const copydata = [...data];
        copydata.push(recipe);
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));
        toast.success("New recipe created!");
        reset();
        navigate("/recipes");
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-teal-900/90 px-4 py-10">
            <form
                className="w-full max-w-2xl bg-teal-700  backdrop-blur-md shadow-2xl rounded-3xl p-5 flex flex-col gap-5 text-black text-lg"
                onSubmit={handleSubmit(SubmitHandler)}
            >
                <h2 className="text-4xl font-bold text-center text-amber-200 mb-2">Create New Recipe</h2>

                <input
                    {...register("image")}
                    type="url"
                    placeholder="Enter Image URL"
                    className="w-full border border-teal-400 rounded-xl text-amber-200 p-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />

                <input
                    {...register("title")}
                    type="text"
                    placeholder="Recipe Title"
                    className="w-full border border-teal-400 rounded-xl text-amber-200 p-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />

                <input
                    {...register("chef")}
                    type="text"
                    placeholder="Chef Name"
                    className="w-full border border-teal-400 rounded-xl text-amber-200 p-3 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />

                <textarea
                    {...register("desc")}
                    placeholder="Short Description"
                    className="w-full border border-teal-400 rounded-xl text-amber-200 p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-amber-200"
                ></textarea>

                <textarea
                    {...register("ingr")}
                    placeholder="Ingredients (comma separated)"
                    className="w-full border border-teal-400 rounded-xl text-amber-200 p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-amber-200"
                ></textarea>
                <select
                    {...register("category")}
                    className="w-full border border-teal-400 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200"
                >
                    <option value="">Select Category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>

                <button
                    type="submit"
                    className="mt-4 bg-amber-200 hover:bg-amber-300 text-teal-900 font-semibold py-3 px-6 rounded-xl transition-all duration-300 ease-in-out shadow-md"
                >
                    Save Recipe
                </button>
            </form>
        </div>
    );
};

export default Create;
