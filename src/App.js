import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";

import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

import Home from './pages/Home';
import Matches from './pages/Matches';

function App() {
  return (
    <main className="main-wrapper">
      <Aside />

      <div className="page-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <SearchBar />
          <Matches />
          {/* <Home /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
