import HomeHero from "../components/home-hero";
import HomeJobStats from "../components/home-JobStats";
import HomeChatPreview from "../components/home-ChatPreview";
import HomeTestimonials from "../components/home-Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeJobStats />
      <HomeChatPreview />
      <HomeTestimonials />
      <Footer />
    </div>
  );
};

export default Home;
