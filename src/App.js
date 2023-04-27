import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ProductDetail from "./pages/detail";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default App;
