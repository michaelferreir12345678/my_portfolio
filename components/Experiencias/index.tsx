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
        description='Desenvolvimento de projetos voltados aos servidores previdenciários do Estado do Ceará' 
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
        description='Realização de toda a gestão do software ERP da empresa' 
        />
        <ExperienciaItem
        year='2020'
        title='Financial Analyst Sr.'
        description='Realizava a operação do financeiro da empresa, contas a pagar e receber e tudo o que há inerente. Com análises de dados períodicas 
        para informação gerencial' 
        />
      </section>
    </Container>
  );
}

export default Experiencias
