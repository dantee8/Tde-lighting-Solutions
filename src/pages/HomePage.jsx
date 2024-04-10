import CaruselHero from "../components/CaruselHero";
import LatestProducts from "../components/LatestProducts";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <main className="">
        <SearchBar />
        <CaruselHero />
      </main>
      <section>
        <LatestProducts />
      </section>
      <footer className="h-[30vh] bg-teal-800 mt-20">
        <div></div>
      </footer>
    </div>
  );
};

export default HomePage;
