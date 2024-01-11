import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import ScrollToTop from './components/ScrollToTop';


function App() {

    return (
    <div className="App">
        <ScrollToTop/>
        <PublicRoutes/>   
        <PrivateRoutes/>        
    </div>

    );
}

export default App;
