import { Navigation } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";

export default  function Home() {
  
  return (
     <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
    </div>
  )
}
