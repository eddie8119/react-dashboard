import "./App.css";

import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/navBar/SideBar";
import RightArea from "./components/global/RightArea";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <NavBar />
      <SideBar />
      <RightArea />
    </div>
  );
}

export default App;
