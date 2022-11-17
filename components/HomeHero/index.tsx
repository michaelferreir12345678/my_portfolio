import { Container, TextContainer, InfosContainer, CodeItem } from "./styles";
import picture from '../../src/assets/pessoa.png'

function HomeHero() {
    return (
        <Container>
            <img src={picture} alt='Minha foto'/>
            <div>
                <TextContainer>
                    <h1>Olá,</h1>
                    <h2>Me chamo Michael</h2>
                </TextContainer>
                <InfosContainer>
                    <CodeItem>
                        <span className="comment">//Minha apresentação</span>
                        <span className="purple">Infos</span> {"\u007B"}
                        <div>
                            Nome: <span className="blue">Michael Ferreira,</span>
                        </div>
                        <div>
                            Idade: <span className="blue">27,</span>
                        </div>
                        {"\u007D"}
                    </CodeItem>
                    <CodeItem>
                        <span className="purple">Cargo</span> {"\u007B"}
                        <div>
                            Função: <span className="blue">Desenvolvedor Java e nodeJS,</span>
                        </div>
                        <div>
                            Empresa Atual: <span className="blue">Cearaprev,</span>
                        </div>
                        {"\u007D"}
                    </CodeItem>
                </InfosContainer>
            </div>
        </Container>
    );
};

export default HomeHero;