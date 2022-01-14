import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Oders from "./components/Oders";
import Prototypes from "./components/Prototypes";
import AppStateProviders from "./providers/AppStateProviders";

function App() {
  return (
    <AppStateProviders>
      <Header />
      <div className="container">
        <Prototypes />
        <Oders />
        <Footer />
      </div>
    </AppStateProviders>
  );
}

export default App;
