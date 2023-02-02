import { ProjetoContainer } from "../../../styles/ProjetoStyles";
import BannerProjeto from "../../../../components/BannerProjeto";
import Header from "../../../../components/Header";
import pictureCearaPrev from "../../../../src/assets/meu_projeto.png";
import Head from "next/head";


export default function Projeto() {
    return (
        <ProjetoContainer>
            <Head>
                <title> Projeto | Michael Ferreira</title>
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


            <Header />
            <BannerProjeto
            title="Projeto 01"
            type="Website"
            imgUrl={pictureCearaPrev}
                     
            />
            <main data-aos="fade-down">
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