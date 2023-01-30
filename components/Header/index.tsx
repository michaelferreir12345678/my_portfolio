import NavLink from "./NavLink";
import {Container} from "./styles";
import picture1 from '../../src/assets/meu_projeto.png'


function Header() {
    return (
        
        <Container>
            <img src={picture1} alt='Minha foto2'/>
            <ul>
                <NavLink title="Home" path="/"/> 
                <NavLink title="Projetos" path="/projetos" includes/> 
            </ul>
        </Container>
    );
};

export default Header;