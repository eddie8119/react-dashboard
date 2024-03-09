import "./App.css";
import { useRoutes } from "react-router-dom";
import router from "./router";

function App() {
  const content = useRoutes(router);

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">{content}</div>
  );
}

export default App;
