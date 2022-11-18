import Header from "../../../components/Header";
import ProjetoItem from "../../../components/ProjetoItem";
import { ProjetosContainer } from "../../styles/ProjetosStyles";


export default function Projetos() {
    return (
        <ProjetosContainer>
             <Header/>
             <main className="container">
                <ProjetoItem
                    title="Projeto 01"
                    type="Website"
                    slug="test"
                    imgUrl="https://nubank.com.br/images-cms/1649356374-nuconta-inclined-device-3x.png?w=768&dpr=1&auto=compress&fm=webp" 
                />

                <ProjetoItem    
                    title="Projeto 01"
                    type="Website"
                    slug="test"
                    imgUrl="https://nubank.com.br/images-cms/1649356374-nuconta-inclined-device-3x.png?w=768&dpr=1&auto=compress&fm=webp" 
                />

                <ProjetoItem    
                    title="Projeto 01"
                    type="Website"
                    slug="test"
                    imgUrl="https://nubank.com.br/images-cms/1649356374-nuconta-inclined-device-3x.png?w=768&dpr=1&auto=compress&fm=webp" 
                />

                <ProjetoItem    
                    title="Projeto 01"
                    type="Website"
                    slug="test"
                    imgUrl="https://nubank.com.br/images-cms/1649356374-nuconta-inclined-device-3x.png?w=768&dpr=1&auto=compress&fm=webp" 
                />
             </main>
        </ProjetosContainer>
    )
}