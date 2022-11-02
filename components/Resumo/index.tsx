import SectionTitle from '../SectionTitle';
import { Container } from './styles';

export function Resumo() {
  return (
    <Container>
      <SectionTitle 
      title="Um breve resumo " 
      description='Formado em Contábeis pela UFC, tenho mais de 5 anos de experiência na área financeira e que dentro
      do departamento sempre busquei ter ênfase em análise de dados para um suporte mais assertivo às decisões gerenciais já usando
      ferramentas. Isso atribuo ao interesse que sempre tive na área de tecnologia e que hoje estou totalmente direcionado. Hoje 
      trabalho como desenvolvedor Java para a Cearprev vinculado à Secretaria de planejamento. Tenho experiência com projeto NODE.js, JS, com framework
      express. Também sou professor auxiliar e dou aula de iniciação a python em uma escola de programação. Atualmente estou cursando
      minha segunda graduação em Análise e Desenvolvimento de Software pela
      PUC.'/>
    </Container>
  );
}

export default Resumo
