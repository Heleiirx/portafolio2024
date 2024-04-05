import Cover from "./pages/cover";
import AboutMe from "./pages/aboutMe";
import Navegacion from "./components/navbar";
import Education from "./pages/education";
import Proyects from "./pages/proyects";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navegacion/>
      <Cover></Cover>
      <AboutMe></AboutMe>
      <Education></Education>
      <Proyects></Proyects>
    </main>
  );
}
