import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';
import Whatsapp from './whatsapp';


export function FormContato() {
  return (
    <Container>
        <SectionTitle 
        title={<> Precisa dos <br /> meus serviços?</>}
        description={<>Preencha o formulário abaixo que <br/>irei retornar o mais breve possível.</>}
        />
        <section>
          <Whatsapp/>
        </section>

        <Form/>
    </Container>
  );
};