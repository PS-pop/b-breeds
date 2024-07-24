import Genera from "components/app/components/genera";
import Topbar from "./components/topbar";

export default function Home() {
  return (
    <>
    <Topbar isAdmin={false} />
    <Genera isAdmin={false}/>
    
    </>
  );
}
