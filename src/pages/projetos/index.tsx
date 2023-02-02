import Header from "../../../components/Header";
import ProjetoItem from "../../../components/ProjetoItem";
import { ProjetosContainer } from "../../styles/ProjetosStyles";
import Head from 'next/head';


export default function Projetos() {
    return (
        <ProjetosContainer >
            <Head>
                <title>Projetos | Michael Ferreira</title>
                <meta
                name="description"
                content="Sou um desenvolvedor back-end e aqui apresento alguns projetos desenvolvidos por mim!"
                />
                <meta property="og:image" content="/ogimage.png" />
                <meta property="og:image:secure_url" content="/ogimage.png" />
                <meta name="twitter:image" content="/ogimage.png" />
                <meta name="twitter:image:src" content="/ogimage.png" />
                <meta
                property="og:description"
                content="Sou um desenvolvedor back-end e aqui apresento alguns projetos desenvolvidos por mim!"
                />
            </Head>


            <Header/>
             <main className="container" data-aos="fade-down">
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