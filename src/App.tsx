import Header from "./components/Header";
import Footer from "./components/Footer";
import style from "App.css";
import "./output.css";

function App(){
  return (
  <div>
    <Header />
    <div className="absolute inset-x-0 bottom-0 h-16 ...">
      <Footer />
    </div>
  </div>
  );
}
export default App;