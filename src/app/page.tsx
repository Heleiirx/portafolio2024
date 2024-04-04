import Cover from "./pages/cover";
import AboutMe from "./pages/aboutMe";
import Navegacion from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navegacion/>
      <Cover></Cover>
      <AboutMe></AboutMe>
    </main>
  );
}
