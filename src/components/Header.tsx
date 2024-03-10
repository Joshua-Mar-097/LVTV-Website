import LvtvLogo from "../assets/lvtv-logo.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-custom">
      <nav className="flex justify-between items-center 2-[92%] mx-auto">
        <div>
          <h1 className="text-white text-4xl font-bold p-8">LVTV</h1>
        </div>
        <div>
          <button className="text-xl text-white px5 py-2 mr-5 hover:text-gray-500">
            Log In
          </button>
          <button className="text-xl rounded-lg bg-yellow-400 text-black px-5 py-2 mr-10 hover:text-white hover:bg-blue-300">
            Watch Live
          </button>
        </div>
      </nav>
      <div className="w-full bg-yellow-400 text-black px-10">
        <div className="flex justify-center">
          <ul className="flex text-center gap-[4vw]">
            <li>
              <NavLink className="text-xl hover:text-white" to="/Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl hover:text-white" to="/TeleRadio">
                TeleRadio
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl hover:text-white" to="/OurStory">
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink className="text-xl hover:text-white" to="/Archives">
                Archives
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
