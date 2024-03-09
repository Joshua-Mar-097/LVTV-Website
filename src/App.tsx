import Header from "./components/Header";
import Footer from "./components/Footer";
import style from "App.css";
import "./output.css";

function App(){
  return (
  <body className="bgcolor-blue-950">
    <div>
      <Header />
      <div className="flex justify-between items-center 2-[92%] mx-auto">
        <div>

        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 ...">
        <Footer />
      </div>
    </div>
  </body>
  );
}
export default App;