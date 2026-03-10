import MainSectionComponents from "./components/MainSectionComponents";
import NavbarComponents from "./components/NavbarComponents";
import SidebarComponent from "./components/SidebarComponent";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col gap-y-5">
      <NavbarComponents/>
      <div className="flex h-[90%] gap-x-5 pr-5s">
        <SidebarComponent/>
        <MainSectionComponents/>
      </div>
    </div>
  );
}