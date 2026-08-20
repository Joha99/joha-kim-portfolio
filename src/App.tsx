import { Header } from "@/components/sections/Header";
import { PageGridLayout } from "@/components/layout/PageGridLayout";
import { Hero } from "@/components/sections/Hero";
import { Body } from "@/components/sections/Body";
import { Footer } from "@/components/sections/Footer";

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
