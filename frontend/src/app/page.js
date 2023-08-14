import Image from "next/image";
import Headerstyles from "./components/header";
import Bodystyles from "./components/bodyimage";
import Cardstyles from "./components/bodycards"
import Slideshowstyles from "./components/slideshow";
import Footerstyles from "./components/footer";

export default function Home() {
  return (
    <div>
      <Headerstyles />
      <Bodystyles />
      <Cardstyles />
      <Slideshowstyles />
      <Footerstyles />
    </div>
  );
}
