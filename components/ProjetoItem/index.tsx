import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./styles";

interface ProjetoItemProps {
    title: string;
    type: string;
    imgUrl: string;
    slug: string;
} 

export default function ProjetoItem({title, type, imgUrl, slug}: ProjetoItemProps) {
    return (
        <Container imgUrl={imgUrl}>
            <Link href={`/projetos/${slug}`}>
                <a>
                    <div className="overlay"/>
                    <section>
                        <h1>{title}</h1>
                        <h1>{type}</h1>
                    </section>
                </a>
            
            </Link>
        </Container>

    )
}