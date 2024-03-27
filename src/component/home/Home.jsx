import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../fotter/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            <h2>Wellcome to my page <br /> data will appear soon</h2>
            {
                navigation.state === "loading" ?
                <p> data is loading </p> : <Outlet></Outlet>
            }
            
            
            <Footer></Footer>
        </div>
    );
};

export default Home;