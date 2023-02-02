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



export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500});
  },[]);

  return (
    <HomeContainer>
      <title>Michael Ferreira</title>
     
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

