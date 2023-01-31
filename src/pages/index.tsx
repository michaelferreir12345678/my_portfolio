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



export default function Home() {
  return (
    <HomeContainer>
      <title>Michael Ferreira</title>
     
      <Header/>
      <main className="container">       
        <HomeHero/>
        <Ajuda/>
        <Resumo/>
        <Experiencias/>
        <Projetos/>
        <Conhecimentos/>
        <FormContato/>  
      </main>

      <Footer/>
    </HomeContainer>
  );
}
