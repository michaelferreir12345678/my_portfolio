import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title="05 anos" description="de experiência no mercado financeiro e 2 anos no de tecnologia."/>

      <section>
        <ExperienciaItem
        year='2021'
        title='Backend developer'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo facilis natus' 
        />
        <ExperienciaItem
        year='2021'
        title='Backend developer'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo facilis natus' 
        />
        <ExperienciaItem
        year='2021'
        title='Backend developer'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo facilis natus' 
        />
        <ExperienciaItem
        year='2021'
        title='Backend developer'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo facilis natus' 
        />

      </section>
    </Container>
  );
}

export default Experiencias
