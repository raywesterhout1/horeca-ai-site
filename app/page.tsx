import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Transformation from '@/components/Transformation';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Results from '@/components/Results';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Transformation />
      <Services />
      <Process />
      <Results />
      <Pricing />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
