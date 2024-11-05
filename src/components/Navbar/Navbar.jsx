import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

//   Navbar Link with active css
    const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/applied"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent " // Active link styles
              : "text-gray-500"
          }
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div  className="bg-[url('https://i.ibb.co.com/WPC4ZJh/bg1.png')] bg-no-repeat">
       <div className="navbar w-10/12   mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      <Link to='/'>  <a className="btn btn-ghost text-2xl font-mono bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent ">
          My Career Hunt
        </a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/jobs">
          <button className="btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
            Start Appling
          </button>
        </Link>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
