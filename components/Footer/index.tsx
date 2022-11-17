import { Container } from './styles';

import {
    AiOutlineTwitter,
    AiOutlineGithub,
    AiFillLinkedin,
    AiFillYoutube
  } from 'react-icons/ai';

import {FiInstagram} from 'react-icons/fi';
import {SiWhatsapp} from 'react-icons/si';



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

                <AiFillYoutube 
                    onClick={() => handleRedirect("https://youtube.com.br")}/>

                <FiInstagram
                    onClick={() => handleRedirect("https://www.instagram.com/ferreramichael")}/>

                <SiWhatsapp
                    onClick={() => handleRedirect("https://whatsapp.com.br")}/>
            </section>
        </div>

    </Container>
  );
};