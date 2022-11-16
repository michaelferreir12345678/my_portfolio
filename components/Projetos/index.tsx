import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import Link from 'next/dist/client/link';
import picture from '../../src/assets/cearaprev_proj.jpeg'


import { Container } from './styles';

function Projetos() {
  return (
    <Container> 
      <SectionTitle title="Últimos projetos" description=""/> 

      <section>
        <ProjetoItem
          img={picture}
          title='Projeto 01'
          slug='/projetos'
          type='Aplicativo de celular'
        />      
      </section>
      <button type='button'>
        <Link href='/projetos'>
          <a>Ver todos os projetos</a>
        </Link>

      </button>
    </Container>
  );
}

export default Projetos;