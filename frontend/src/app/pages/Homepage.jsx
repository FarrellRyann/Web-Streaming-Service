import Image from "next/image";
import { FloatingNav } from "../components/ui/Floatingnav";
import { Spotlight } from "../components/ui/Spotlight";
import { ScrollVelocity } from "../components/ui/Scrollvelocity";
import SpotlightCard from "../components/ui/Spotlightcard";
import Logo from "../assets/Logoooo.png";

export default function Homepage() {
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
          <Spotlight />
          
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Welcome to BlockVyu
          </h1>
          
          <p className="text-base text-neutral-300 max-w-2xl mx-auto text-center">
            Your premium streaming platform for the best entertainment experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-10">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 0, 0, 0.12)">
              <div className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold">Movies</h2>
                <p className="text-base text-neutral-300 mt-2">
                  Explore our vast collection of movies from all genres.
                </p>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 255, 0, 0.12)">
              <div className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold">TV Shows</h2>
                <p className="text-base text-neutral-300 mt-2">
                  Binge-watch your favorite series anytime, anywhere.
                </p>
              </div>
            </SpotlightCard>
            
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 0, 255, 0.12)">
              <div className="flex flex-col items-center justify-center p-6">
                <h2 className="text-2xl font-bold">Live Events</h2>
                <p className="text-base text-neutral-300 mt-2">
                  Stream live events and performances in real-time.
                </p>
              </div>
            </SpotlightCard>
          </div>
          
          <ScrollVelocity
            texts={['Trending Now', 'Popular']}
            velocity={100}
            className="text-white mt-10"
          />
        </div>
      </main>
    </div>
  );
}
