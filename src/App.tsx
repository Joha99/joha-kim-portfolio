import { Header } from "@/components/header/Header";
import { Hero } from "@/components/sections/Hero";
import { Body } from "./components/sections/Body";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Body />
      <Footer />
    </>
  );
}

export default App;
