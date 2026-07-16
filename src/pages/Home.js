import Hero from "../components/home/Hero";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SubscriptionPlans from "../components/home/SubscriptionPlans";
import Testimonials from "../components/home/Testimonials";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <SubscriptionPlans />
      <Testimonials />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default Home;