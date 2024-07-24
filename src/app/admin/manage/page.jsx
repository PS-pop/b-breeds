import Genera from "components/app/components/genera";
import Topbar from "components/app/components/topbar";

export default function manage() {
  return (
    <>
    <Topbar isAdmin={true} />
    <Genera isAdmin={true}/>
    
    </>
  );
}