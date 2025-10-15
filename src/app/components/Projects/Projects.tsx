import tickit from "../../../../public/TickIt.png"
import bdu from "../../../../public/homeDark.png"
import cardify from "../../../../public/cardify-pc.png"

import "./style.css"
import { FaReact } from "react-icons/fa"
import { SiCss3, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"
import { IoIosArrowForward } from "react-icons/io"

export default function Projects() {
    const projetos = [
        {
            id: 1,
            name: "Tick-It",
            refer: tickit,
            react: true,
            next: false,
            css: true,
            typescript: true,
            tailwind: false,
            link: "https://tick-it-eta.vercel.app"
        },
        {
            id: 2,
            name: "Buscador de Usuário",
            refer: bdu,
            react: true,
            next: false,
            css: true,
            typescript: true,
            tailwind: false,
            link: "https://buscador-de-usuarios-lovat.vercel.app"
        },
        {
            id: 3,
            name: "Cardify",
            refer: cardify,
            react: false,
            next: true,
            css: true,
            typescript: true,
            tailwind: true,
            link: "https://cardify-hgdy.vercel.app"
        }
    ]
    return (
        <div className="projects">
            <h1>Projetos</h1>
            {projetos.map((projeto:any) => (
                <div key={projeto.id} className="projetos">
                    <img src={projeto.refer.src} alt="" />
                    <div>
                        <h1>{projeto.name}</h1>
                        <div className="tech">
                            {projeto.react ? <FaReact size={25} /> : null}
                            {projeto.next ? <SiNextdotjs size={25} />: null}
                            {projeto.css ? <SiCss3 size={25} /> : null}
                            {projeto.typescript ? <SiTypescript size={25} /> : null}
                            {projeto.tailwind ? <SiTailwindcss size={25} /> : null}
                        </div>
                    </div>
                    <div>
                        <a href={projeto.link} target="_blank">
                            <IoIosArrowForward size={50} />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}