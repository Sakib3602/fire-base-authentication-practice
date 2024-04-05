import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-[90%] m-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;