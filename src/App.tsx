import Directory from "./components/sections/Directory";
import Footer from "./components/commons/structure/Footer";
import "./App.css";

export function App() {
  return (
    <div className="app-layout">
      <main className="app-main">
        <Directory />
      </main>
      <Footer />
    </div>
  );
}

export default App;