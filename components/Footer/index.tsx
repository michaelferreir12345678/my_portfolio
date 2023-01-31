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
                    onClick={() => handleRedirect("https://www.linkedin.com/in/michael-ferreira-sousa/") }/>

                <AiFillYoutube 
                    onClick={() => handleRedirect("https://www.youtube.com/channel/UCn-hZL2BUgRyh5cIu2moJhA")}/>

                <FiInstagram
                    onClick={() => handleRedirect("https://www.instagram.com/ferreiramichael")}/>

                <SiWhatsapp
                    onClick={() => handleRedirect("https://wa.me/5585981528504")}/>
            </section>
        </div>

    </Container>
  );
};