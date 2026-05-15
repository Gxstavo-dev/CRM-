import Navbar from "../components/layout/index/navbar";
import Hero from "../components/layout/index/hero";

export function Index() {
  return (
    <div className="w-full  flex flex-col">
      <Navbar />
      <Hero />
    </div>
  );
}
