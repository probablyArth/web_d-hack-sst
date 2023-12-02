import About from "./components/About";
import Appointment from "./components/Appointment";
import Button from "./components/Button";
import Contact from "./components/Contact";
import Departments from "./components/Departments";
import Doctors from "./components/Doctors";
import FAQs from "./components/FAQs";
import Gallery from "./components/Gallery";
import Mid from "./components/Mid";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="relative w-full h-full">
      <Navbar />
      <div className="bgImage fixed -z-10 top-0"></div>
      <div className="w-full h-full flex flex-col gap-8 my-[150px] p-20">
        <div>
          <h1 className="text-darkBrand text-6xl font-bold">
            WELCOME TO LOREM_IPSUM
          </h1>
          <p className="text-darkBrand text-2xl">LOREM_IPSUM</p>
        </div>
        <Button>GET STARTED</Button>
      </div>
      <About />
      <Mid />
      <Services />
      <Appointment />
      <Departments />
      <Doctors />
      <FAQs />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
