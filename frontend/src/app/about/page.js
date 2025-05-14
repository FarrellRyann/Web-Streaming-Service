import { FloatingNav } from "../components/ui/Floatingnav";
import Image from "next/image";
import Logo from "../assets/Logoooo.png";

export default function About() {
  const navItems = [
    {
      name: <Image src={Logo} alt="Logo" width={40} height={40} className="object-contain" />,
      link: "/",
      icon: "🏠"
    },
    {
      name: "Home",
      link: "/home",
      icon: "🎬"
    },
    {
      name: "Users",
      link: "/users",
      icon: "👤"
    },
    {
      name: "About",
      link: "/about",
      icon: "ℹ️"
    }
  ];

  return (
    <div className="min-h-screen bg-black w-full h-full inset-0 overflow-hidden">
      <FloatingNav navItems={navItems} />
      <main className="container mx-auto px-4 py-20 overflow-hidden">
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 max-w-full">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            About BlockVyu
          </h1>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base text-neutral-300 mb-6">
              BlockVyu is a next-generation streaming platform designed to provide the best viewing experience for users around the world.
            </p>
            <p className="text-base text-neutral-300 mb-6">
              Our mission is to connect people with the content they love, delivered at lightning speed with uncompromising quality.
            </p>
            <p className="text-base text-neutral-300">
              Founded in 2024, we're committed to innovation and excellence in digital entertainment.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 