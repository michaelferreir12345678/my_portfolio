import SectionTitle from '../SectionTitle';
import { Container } from './styles';

export function Resumo() {
  return (
    <Container>
      <SectionTitle 
      title="Um resuminho sobre mim ... " 
      description=''/>
      {/* <p>      
      Sou desenvolvedor backend em Java e Node.js e um curioso assíduo, graduado em Contábeis pela Universidade Federal do Ceará e estou me
      graduando também em Análise e Desenvolvimento de sistemas pela PUC-MG. Sou apaixonado por tecnologia e boas práticas 
      no desenvolvimento de software e arquitetura. Pretendo em 2023 realizar pós-graduação em Engenharia de software.
      <br /><br />
      Atualmente trabalho como desenvolvedor Java na Secretaria de Planejamento e também trabalho como instrutor
      auxiliar de programação do módulo de Python na escola de programação Infinity School. 
      Tenho mais de 5 anos de experiência na área financeira e sempre busquei trazer inovação para o setor e 
      tendo ênfase em análise de dados para um suporte mais assertivo às decisões gerenciais já usando ferramentas que 
      pudessem me auxiliar.
      </p> */}

      <p data-aos="fade-left">      
      Sou desenvolvedor com foco Back-end em Java 11 e Node.js e um curioso assíduo, com experiência em Spring Boot, Hibernate, JSF,
      Express, Nest.js, arquitetura REST e Microsserviços. Banco de dados como Oracle 11g e 12c, PostgreSQL e MySql.
      <br /><br />
      Graduado em Contábeis pela Universidade Federal do Ceará e me graduando também em Análise e Desenvolvimento de Sistemas 
      pela PUC-MG. Sou apaixonado por tecnologia e boas práticas no desenvolvimento de software e arquitetura. Pretendo em 2023
      realizar pós-graduação em Engenharia de software.
      <br /><br />
      Também realizei um trabalho como professor auxiliar de programação do módulo de Python na escola de programação 
      Infinity School. Tenho mais de 5 anos de experiência na área financeira com análise de dados utilizando softwares 
      como o Microsoft PowerBI, QlikView e QlikSense e sempre busquei trazer inovação para o setor, com ênfase em análise
      de dados para um suporte mais assertivo às decisões gerenciais.
      </p>
    </Container>
  );
}

export default Resumo
