import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const linkClasses = ({ isActive }) =>
        `text-emerald-300 hover:text-white transition duration-300 ${
            isActive ? "underline underline-offset-4" : ""
        }`;

    return (
        <nav className="bg-teal-700 rounded-2xl mb-10 px-4 py-3 shadow-xl font-bold text-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <div className="text-amber-200 text-2xl font-extrabold"><span className="text-3xl">Food</span> Dictator</div>

                {/* Hamburger Icon */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-amber-200 focus:outline-none"
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`flex flex-col lg:flex-row gap-6 items-center lg:static absolute top-[72px] left-0 w-full lg:w-auto bg-teal-700 lg:bg-transparent rounded-b-2xl z-10 px-6 py-4 lg:p-0 transition-all duration-300 ease-in-out ${
                        open ? "flex" : "hidden lg:flex"
                    }`}
                >
                    <NavLink to="/" className={ linkClasses}>Home</NavLink>
                    <NavLink to="/fav" className={linkClasses}>Favorite</NavLink>
                    <NavLink to="/recipes" className={linkClasses}>Recipes</NavLink>
                    <NavLink to="/create-recipe" className={linkClasses}>Create Recipe</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
