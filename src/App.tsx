
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Comparison } from './components/sections/Comparison';
import { Templates } from './components/sections/Templates';
import { Method } from './components/sections/Method';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Comparison />
        <Templates />
        <Method />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
