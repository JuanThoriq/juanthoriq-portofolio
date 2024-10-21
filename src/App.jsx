import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Experiences from "./components/Experiences";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* This is div for background */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed left-0 right-0 z-10 lg:top-8">
        <Navbar />
      </header>

      {/* Main */}
      <main className="container mx-auto pt-24 px-8 xl:pt-40">
        <Hero />
        <Technologies />
        <Project />
        <Experiences />
        <Contacts />
      </main>

      {/* Footer */}
      <footer className="container mx-auto pt-4 pb-2 lg:py-8">
        <p className="text-center lg:text-right font-semibold text-sm lg:text-base">
          &copy; Juan Thoriq Pahlevi
        </p>
      </footer>
    </div>
  );
}

export default App;
