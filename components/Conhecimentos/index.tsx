import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';
import { AiFillHtml5 } from 'react-icons/ai';
import {FaCss3Alt, FaJava, FaNodeJs, FaPython } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiMysql, SiTsnode} from "react-icons/si"

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" description='Front e Back-end'/>
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />}/>
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt/>}/>
        <ConhecimentoItem title="JavaScript" icon={<DiJavascript/>}/>
        <ConhecimentoItem title="Node" icon={<FaNodeJs/>}/>
        <ConhecimentoItem title='Java' icon={<FaJava/>}/>
        <ConhecimentoItem title='python' icon={<FaPython/>}/>
        <ConhecimentoItem title='TypeScript' icon={<SiTsnode/>}/>
        <ConhecimentoItem title='MySQL' icon={<SiMysql/>}/>

      </section>
    </Container>
  );
};



