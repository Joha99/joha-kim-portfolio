import { PageGridLayout } from "@/components/layout/PageGridLayout";
import { About } from "@/components/sections/About";
import { Artwork } from "@/components/sections/Artwork";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

function App() {
  return (
    <PageGridLayout>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Artwork />
      <Footer />
    </PageGridLayout>
  );
}

export default App;
