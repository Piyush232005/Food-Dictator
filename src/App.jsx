import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
    return (
        <div className="py-10 px-[10%] w-screen h-screen text-white font-thin bg-teal-900 overflow-auto">
            <Navbar />
            <Mainroutes />
        </div>
    );
};

export default App;
