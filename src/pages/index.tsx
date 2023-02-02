import {HomeContainer} from '../styles/HomeStyles'
import Header from "../../components/Header";
import HomeHero from '../../components/HomeHero';
import Experiencias from '../../components/Experiencias';
import Resumo from '../../components/Resumo';
import Projetos from '../../components/Projetos';
import { Conhecimentos } from '../../components/Conhecimentos';
import { FormContato } from '../../components/FormContato';
import { Footer } from '../../components/Footer';
import pictureAba from '../../src/assets/logo_small.png'
import Ajuda from '../../components/Ajuda';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';



export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500});
  },[]);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Michael Ferreira</title>
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
      <main className="container">       
        <HomeHero/>
        <Experiencias/>
        <Resumo/>
        <Projetos/>
        <Conhecimentos/>
        <Ajuda/>
        <FormContato/>  
      </main>

      <Footer/>
    </HomeContainer>
  );
}

