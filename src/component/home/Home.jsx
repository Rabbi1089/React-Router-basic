import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../fotter/Footer";

const Home = () => {
    return (
        <div>
            <h2>This is from home components</h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;