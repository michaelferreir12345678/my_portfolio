import {HomeContainer} from '../styles/HomeStyles'
import Header from "../../components/Header";
import HomeHero from '../../components/HomeHero';
import Experiencias from '../../components/Experiencias';
import Resumo from '../../components/Resumo';

export default function Home() {
  return (
    <HomeContainer>
      <Header/>

      <main className="container">       
        <HomeHero/>
        <Resumo/>
        <Experiencias/>
      </main>
    </HomeContainer>
  );
}
