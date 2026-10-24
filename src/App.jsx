import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import References from "./pages/References";
import Footer from "./layout/Footer";
import News from "./pages/News";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32">
        <Home />
        <Teams />
        <Services />
        <References />
        <News />
        <Footer />
      </main>
    </>
  );
}
