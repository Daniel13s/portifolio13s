import { FaReact } from "react-icons/fa"
import { SiAxios, SiCss3, SiFigma, SiGit, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiRedux, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si"

import "./style.css"

export default function Skills() {
    const techs = [
        {
            id: 1,
            icon: <FaReact size={60} />,
            name: "React"
        },
        {
            id: 2,
            icon: <SiNextdotjs size={60} />,
            name: "Next"
        },
        {
            id: 3,
            icon: <SiTypescript size={60} />,
            name: "TS"
        },
        {
            id: 4,
            icon: <SiJavascript size={60} />,
            name: "JS"
        },
        {
            id: 5,
            icon: <SiHtml5 size={60} />,
            name: "HTML"
        },
        {
            id: 6,
            icon: <SiCss3 size={60} />,
            name: "CSS"
        },
        {
            id: 7,
            icon: <SiTailwindcss size={60} />,
            name: "TailWind"
        },
        {
            id: 8,
            icon: <SiGit size={60} />,
            name: "GIT"
        },
        {
            id: 9,
            icon: <SiAxios size={60} />,
            name: "Axios"
        },
        {
            id: 10,
            icon: <SiRedux size={60} />,
            name: "Redux"
        },
        {
            id: 11,
            icon: <SiStyledcomponents size={60} />,
            name: "SC"
        },
        {
            id: 12,
            icon: <SiFigma size={60} />,
            name: "Figma"
        },
        {
            id: 13,
            icon: <SiNodedotjs size={60} />,
            name: "Node.js"
        }
    ]
    return (
        <div className="Skills">
            <h1>Habilidades</h1>
            <div className="techsSkills">
                {techs.map((tech: any) => (
                    <div key={tech.id} className="techSkills">
                        {tech.icon}
                        <h2>{tech.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}