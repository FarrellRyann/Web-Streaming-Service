import SpotlightCard from '../components/ui/Spotlightcard';
import { FloatingNav } from "../components/ui/Floatingnav";
import Image from "next/image";
import Logo from "../assets/Logoooo.png";
import { AuroraBackground } from '../components/ui/Aurora';

export default function Userspage() {
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
        <AuroraBackground>
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 max-w-full">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            User Profiles
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 234, 0, 0.12)">
              <div className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold">User Profile 1</h2>
                <p className="text-base text-neutral-300 mt-2">
                  Premium subscriber with access to all content.
                </p>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 234, 255, 0.12)">
              <div className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold">User Profile 2</h2>
                <p className="text-base text-neutral-300 mt-2">
                  Standard subscriber with limited access.
                </p>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 0, 234, 0.12)">
              <div className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold">User Profile 3</h2>
                <p className="text-base text-neutral-300 mt-2">
                  Free tier user with basic access.
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div></AuroraBackground>
      </main>
    </div>
  );
}
