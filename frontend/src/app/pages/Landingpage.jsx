import Image from "next/image";
import { FloatingNav } from "../components/ui/Floatingnav";
import { Spotlight } from "../components/ui/Spotlight";
import { ScrollVelocity } from "../components/ui/Scrollvelocity";
import { TextGenerateEffect } from "../components/ui/Textgenerate";
import SpotlightCard from "../components/ui/Spotlightcard";
import Logo from "../assets/Logoooo.png";

export default function LandingPage() {
  const velocity = 100;

  const quote1 = "In the theater of the mind, every frame flickers with the potential to ignite empathy;";
  const quote2 = "Watching a movie isn't merely entertainment, it's a doorway to understanding the human experience.";

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
      <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 overflow-hidden">
          <Spotlight />
          
          <div className="text-center space-y-8 max-w-6xl mx-auto mt-20">
            <p className="text-lg text-neutral-300">
              Introducing
            </p>

            <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              The best streaming service <br /> for your experience.
            </h1>

            <p className="text-base text-neutral-300 max-w-2xl mx-auto">
              Begin your journey exploring many other experiences with BlockVyu.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-70">
            <TextGenerateEffect 
              words={quote1}
              className="text-left"
              filter={true}
              duration={0.5}
            />
            </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-40">
            <TextGenerateEffect 
              words={quote2}
              className="text-right"
              filter={true}
              duration={0.5}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-70">
            <ScrollVelocity
              texts={['BlockVyu', 'BVyu']}
              velocity={velocity}
              className="text-white"
            />
          </div>

          
            <SpotlightCard className="custom-spotlight-card mt-70" spotlightColor="rgba(255, 234, 0, 0.12)">
              <div className="flex flex-col items-start justify-start">
                <Image src={Logo} alt="Logo" width={40} height={40} className="object-contain align-start" />
                <h1 className="text-4xl font-bold">
                  Watch at lightning speed.
                </h1>
                <p className="text-base text-neutral-300 max-w-2xl mx-auto">
                No need to worry about lag, you watch at lightning speed!
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card mt-10" spotlightColor="rgba(255, 234, 0, 0.12)">
              <div className="flex flex-col items-start justify-start">
                <Image src={Logo} alt="Logo" width={40} height={40} className="object-contain align-start" />
                <h1 className="text-4xl font-bold">
                  Watch at lightning speed.
                </h1>
                <p className="text-base text-neutral-300 max-w-2xl mx-auto">
                No need to worry about lag, you watch at lightning speed!
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card mt-10" spotlightColor="rgba(255, 234, 0, 0.12)">
              <div className="flex flex-col items-start justify-start">
                <Image src={Logo} alt="Logo" width={40} height={40} className="object-contain align-start" />
                <h1 className="text-4xl font-bold">
                  Watch at lightning speed.
                </h1>
                <p className="text-base text-neutral-300 max-w-2xl mx-auto">
                No need to worry about lag, you watch at lightning speed!
                </p>
              </div>
            </SpotlightCard>
          
        </div>
      </main>
    </div>
  );
}
