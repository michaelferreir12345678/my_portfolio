import { Container } from './styles';

import {
    AiOutlineTwitter,
    AiOutlineGithub,
    AiFillLinkedin
  } from 'react-icons/ai';


export function Footer() {
  function handleRedirect(url: string){
    window.open(url);
  }

  function handScrollTop() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
  }

  return (
    <Container>
        <div className='container'>
            <button type='button' onClick={handScrollTop}>
                Voltar ao topo
            </button>
            <section>
                <AiOutlineTwitter
                    onClick={() => handleRedirect("https://twitter.com.br") }/>

                <AiOutlineGithub
                    onClick={() => handleRedirect("https://github.com/michaelferreir12345678") }/>

                <AiFillLinkedin
                    onClick={() => handleRedirect("https://br.linkedin.com/") }/>
            </section>
        </div>

    </Container>
  );
};