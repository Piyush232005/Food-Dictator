import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/create-recipe");
  }

  return (
    <div className="min-h-80% flex flex-col md:flex-row items-center justify-between bg-teal-900 text-white px-6 py-10 gap-10">
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col justify-center h-full space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Make your own Dish! Anytime you crave it <br />
          <span className="text-amber-200 text-4xl sm:text-5xl">With Alison's Burgers</span>
        </h1>

        <p className="text-md sm:text-lg text-gray-300 leading-relaxed">
          Welcome to the recipe app for people who think boiling pasta is a culinary achievement.
          Tired of cooking disasters that even your dog won’t eat? Perfect—so are we. Our recipes
          are made for humans who own kitchens but not cookbooks. Whether you burn toast or call
          food delivery "meal prep," you’re in the right place. Gourmet? Doubtful. Edible?
          Hopefully. Let’s cook like nobody’s watching. (But seriously, close the curtains.)
        </p>

        <button
          className="bg-amber-200 text-gray-800 font-semibold text-lg px-6 py-3 rounded-lg hover:bg-green-950 hover:text-white transition-all duration-300 shadow-md hover:scale-105 w-fit"
          onClick={handleNavigate}
        >
          Create Recipes
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-center h-full">
        <img
          src="https://images.unsplash.com/photo-1606471191009-63994c53433b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVnJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Delicious Vegan Food"
          className="rounded-2xl shadow-lg max-w-full h-auto max-h-[600px] object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
