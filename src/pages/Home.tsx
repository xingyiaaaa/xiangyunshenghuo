import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ApplicationSection from '@/components/ApplicationSection';
import ContactFloat from '@/components/ContactFloat';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="pt-16">
          <Hero />
        </div>
        <AboutSection />
        <ApplicationSection />
      </main>
      <ContactFloat />
      <Footer />
    </div>
  );
}
