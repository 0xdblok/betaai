import Image from "next/image";
import Hero from "./component/hero";

import Footer from "./component/footer";
import Tokenomics from "./component/tokenomics";

export default function Home() {
  return (
    <main className="px-12 bgp">
      <Hero />
      <Tokenomics />
      <Footer />
    </main>
  );
}
