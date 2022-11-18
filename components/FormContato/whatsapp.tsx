import { SiWhatsapp } from "react-icons/si";
import { WppContainer } from "./styles";

export default function Whatsapp(){
    function handleRedirect(url: string){
        window.open(url);
      }

    return (
        <WppContainer>
            <SiWhatsapp onClick={() => handleRedirect("https://web.whatsapp.com/") }/>
            <p>(85) 9-8119-9442</p>
        </WppContainer>
    )
}