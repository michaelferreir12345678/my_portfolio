import { SiWhatsapp } from "react-icons/si";
import { WppContainer } from "./styles";

export default function Whatsapp(){
    function handleRedirect(url: string){
        window.open(url);
      }

    return (
        <WppContainer>
            <SiWhatsapp onClick={() => handleRedirect("https://wa.me/5585981528504") }/>
            <p>(85) 9-8152-8504</p>
        </WppContainer>
    )
}