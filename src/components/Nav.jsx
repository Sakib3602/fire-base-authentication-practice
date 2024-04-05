import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Nav = () => {
  const { person, logout } = useContext(AuthContext);

  console.log(person,"sdfghj")
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className=" text-4xl">Tour_Hub</a>
       {
        person &&  <a className=" text-lg">{person?.displayName}</a>
       }
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            {/* <li>{person.email}</li> */}
          <li>
            <Link to={"/"} className=" text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/destination"} className=" text-xl">
              Destination
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className=" text-xl">
              Blog
            </Link>
          </li>

          {
          person ?
            <button onClick={logout} className="btn  btn-outline btn-secondary">
            Sign Out
          </button>
          :
          <div>
              <Link to={"/login"} className=" text-xl">
                <button className="btn btn-outline btn-secondary">
                  Log In
                </button>
              </Link>
              <Link to={"/register"} className=" text-xl">
                <button className="btn  btn-outline btn-secondary">
                  Register
                </button>
              </Link>
            </div>
        
          }
          {/* <div className="space-x-4">
            <button onClick={logout} className="btn  btn-outline btn-secondary">
            Sign Out
          </button>
              <Link to={"/login"} className=" text-xl">
                <button className="btn btn-outline btn-secondary">
                  Log In
                </button>
              </Link>
              <Link to={"/register"} className=" text-xl">
                <button className="btn  btn-outline btn-secondary">
                  Register
                </button>
              </Link>
            </div> */}

         
        </ul>
      </div>
    </div>
  );
};

export default Nav;
