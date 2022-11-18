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

      <p>      
      Sou desenvolvedor backend em Java e Node.js e um curioso assíduo, graduando em Contábeis pela Universidade Federal do Ceará e estou me
      graduando também em Análise e Desenvolvimento de sistemas pela PUC-MG. Sou apaixonado por tecnologia e boas práticas 
      no desenvolvimento de software e arquitetura. Pretendo em 2023 realizar pós-graduação em Engenharia de software.
      <br /><br />
      Atualmente trabalho como desenvolvedor Java na Secretaria de Planejamento e também trabalho como instrutor
      auxiliar de programação do módulo de Python na escola de programação Infinity School. 
      Tenho mais de 5 anos de experiência na área financeira e sempre busquei trazer inovação para o setor e 
      tendo ênfase em análise de dados para um suporte mais assertivo às decisões gerenciais já usando ferramentas que 
      pudessem me auxiliar.
      </p>
    </Container>
  );
}

export default Resumo
