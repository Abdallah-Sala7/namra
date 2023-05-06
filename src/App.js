import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";

import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import { useDispatch, useSelector } from "react-redux";
import { setOpenAside } from "./app/reducers/appSlice";

function App() {
  const { openAside } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <main className={`main-wrapper ${!openAside && "closed"}`}>
      <Aside />

      <div className="page-wrapper">
        <Navbar />
        <div className="content-wrapper">
          <SearchBar />
          {/* <Matches /> */}
          <Home />
        </div>

        <div className={`side-overlay panel-responsive-btn panel-responsive-close ${openAside && 'active'}`} onClick={
          () => {
            dispatch(setOpenAside(false));
          }
        }></div>
      </div>
    </main>
  );
}

export default App;
