import { ReactNode } from "react";

interface ProjectDetailsProps {
  icon: ReactNode;
  text: ReactNode;
  link?: string;
}

function ProjectDetails({ icon, text, link }: ProjectDetailsProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 cursor-pointer"
        >
            <span className="text-primary-color ">{icon}</span>
            <span
                className={`text-white underline-offset-4 ${link && 'underline decoration-primary-color'}`}
            >
                {text}
            </span>
        </a>
    );
}

export default ProjectDetails;