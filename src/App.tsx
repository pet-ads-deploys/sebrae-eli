import Directory from "./components/sections/Directory";
import Footer from "./components/commons/structure/Footer";
import About from "./components/sections/About";
import "./App.css";

export function App() {
  return (
    <div className="app-layout">
      <About />
      <main className="app-main">
        <Directory />
      </main>
      <Footer />
    </div>
  );
}

export default App;