import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title="05 anos" description="de experiência no mercado financeiro e 2 anos no de tecnologia."/>

      <section>
        <ExperienciaItem
        year='2022'
        title='Backend Java Developer - CearáPrev (Seplag)'
        description='Desenvolvimento e manutenção de projetos voltados aos servidores previdenciários do Estado do Ceará' 
        />
        <ExperienciaItem
        year='2022'
        title='Backend Java Developer'
        description='Trabalho sendo desenvolvido junto ao Instituto de Tecnologia da Informaçao e Comunicação, 
        que é uma instituição orientada a projetos. Manutenção do site institucional' 
        />
        <ExperienciaItem
        year='2021'
        title='ERP Systems Analyst'
        description='Gestão do software ERP da empresa.' 
        />
        <ExperienciaItem
        year='2020'
        title='Financial Analyst Sr.'
        description='Realização do operacional financeiro da empresa. Com análises de dados períodicas 
        para informação gerencial.' 
        />
      </section>
    </Container>
  );
}

export default Experiencias
