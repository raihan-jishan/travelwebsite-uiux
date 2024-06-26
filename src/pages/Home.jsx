import { Camp, Features, GetApps, Guide, Hero } from "../components";
const Home = () => {
  return (
    <div className="mt-16">
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApps />
    </div>
  );
};

export default Home;
