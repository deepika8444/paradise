import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./logo.svg";



import "./App.css";
import './utils/css/bootstrap.min.css'
import './utils/css/font-awesome.min.css'
import './utils/css/elegant-icons.css'
import './utils/css/flaticon.css'
import './utils/css/owl.carousel.min.css'
import './utils/css/nice-select.css'
// import './utils/css/jquery-ui.min.css'
import './utils/css/magnific-popup.css'
import './utils/css/slicknav.min.css'

// import $ from 'jquery';
// import './utils/js/jquery-3.3.1.min.js'
// import './utils/js/bootstrap.min.js'
// import './utils/js/jquery.magnific-popup.min.js'
// import './utils/js/jquery.nice-select.min.js'
// import './utils/js/jquery-ui.min.js'
// import './utils/js/jquery.slicknav.js'
// import './utils/js/owl.carousel.min.js'
// import './utils/js/main.js'






import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blogDetails" element={<BlogDetails />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/rooms" element={<Rooms />}></Route>
            <Route path="/roomDetails" element={<RoomDetails />}></Route>
          </Routes>
          <Footer />
          <SearchModal />
        </Router>

        
      </header>
    </div>
  );
}

export default App;
