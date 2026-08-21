import { PageGridLayout } from "@/components/layout/PageGridLayout";
import { Body } from "@/components/sections/Body";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";

function App() {
  return (
    <PageGridLayout>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </PageGridLayout>
  );
}

export default App;
