import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between px-10 py-4">


        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-black/50 text-white flex items-center justify-center rounded-xl font-bold text-lg shadow">
            T
          </div>
          <span className="text-gray-700 font-semibold text-lg">Task Manager</span>
        </Link>

        <div className="flex items-center space-x-8 bg-black/40 backdrop-blur-md rounded-lg px-6 py-2 shadow mt-[6px]">
          <Link
            to="/Add"
            className="text-white text-lg font-bold px-2 py-1 rounded-lg 
                       transition-all duration-300 
                       hover:text-blue-300 
                       hover:scale-110 hover:px-9 hover:py-1 hover:scale-110 origin-center"
          >
            Add
          </Link>

           <div className="h-6 border-l-2 border-white"></div>    {/*add veriticle line between elements*/}
          
          <Link
            to="/Show"
            className="text-white text-lg font-bold px-2 py-1 rounded-lg 
                       transition-all duration-300 
                       hover:text-blue-300 
                       hover:scale-110 hover:px-9 hover:py-1"
          >
            Show
          </Link>
          
          <div className="h-6 border-l-2 border-white"></div>
          
          <Link
            to="/Done"
            className="text-white text-lg font-bold px-2 py-1 rounded-lg 
                       transition-all duration-300 
                       hover:text-blue-300 
                       hover:scale-110 hover:px-9 hover:py-1"
          >
            Done
          </Link>
        </div>

      </nav>
    </header>
  );
}

export { Header };
