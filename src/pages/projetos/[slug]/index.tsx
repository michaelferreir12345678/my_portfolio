import { ProjetoContainer } from "../../../styles/ProjetoStyles";
import BannerProjeto from "../../../../components/BannerProjeto";
import Header from "../../../../components/Header";
import pictureCearaPrev from "../../../../src/assets/meu_projeto.png";


export default function Projeto() {
    return (
        <ProjetoContainer>
            <Header />
            <BannerProjeto
            title="Projeto 01"
            type="Website"
            imgUrl={pictureCearaPrev}         
            />
            <main>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam suscipit numquam magnam, 
                    iusto ipsum debitis eos non sed quis ea doloribus, placeat saepe, molestiae tempora!
                </p>

                <button type="button">
                    <a href="#">Ver Projeto Online</a>
                </button>
            </main>

        </ProjetoContainer>
    )
}