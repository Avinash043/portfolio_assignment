import About from "./components/About";
import Fourth from "./components/Fourth";
import First from "./components/First";
import Last from "./components/Last";
import Philosophies from "./components/Philosophies";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <>
      <div>
        <div className="text-xl inknut-antiqua-bold fixed top-0 left-0 p-6 text-black font-bold z-50">
          Bhavya Bansal
        </div>
        <div className="h-[200vh] relative">
          <First />
          <Second />
        </div>
        <About />
        <Third />
        <Philosophies />
        <Fourth />
        <Last />
      </div>
    </>
  );
}

export default App;
