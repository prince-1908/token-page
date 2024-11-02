import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import { TokenAllocation } from "@/components/TokenAllocation";
import { AToken } from "@/components/AToken";
import { Community } from "@/components/Community";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <Main />
      </div>
      <TokenAllocation/>
      <AToken/>
      <Community/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
