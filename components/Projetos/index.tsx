import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import Link from 'next/dist/client/link';
import pictureCearaPrev from '../../src/assets/cearaprev_proj.jpeg';
import pictureItic from '../../src/assets/print_Itic.png'


import { Container } from './styles';

function Projetos() {
  return (
    <Container> 
      <SectionTitle title="Últimos projetos" description="(em manutenção...)"/> 

      <section>
        {/* <ProjetoItem
          img={pictureCearaPrev}
          title='Projeto 01'
          slug='/projetos'
          type='Aplicativo de celular'
        /> */}
                
        <ProjetoItem 
          img={pictureItic}
          title='Site ITIC'
          slug='/projetos'
          type='Website'
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