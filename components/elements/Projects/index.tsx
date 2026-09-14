"use client";

import { useCallback, useEffect, useState } from "react";
import { PortfolioCard, PortfolioModal, PopUpWrapper } from "../";

interface Project {
  title: string;
  description: string;
  video: string;
  images: {
    default: string;
    variants: string[];
  };
  link: string;
  type: string;
  tags: string[];
  source?: string;
}

interface ProjectsProps {
  projects: Project[];
  type: string;
}

function Projects({ projects, type }: ProjectsProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [popupData, setPopupData] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const filter = useCallback(() => {
    // Filter projects by type
    if (type === "All") return setFilteredProjects(projects);
    setFilteredProjects(projects.filter((project) => project.type === type));
  }, [projects, type]);

  const closeModal = () => setPopupData(null);

  useEffect(() => filter(), [filter]);

  useEffect(() => {
    // Open modal based on popupData
    if (popupData) setOpen(true);
    else setOpen(false);
  }, [popupData])

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-6 max-w-5xl mx-auto">
        {filteredProjects.map((project: Project, index: number) => (
          <PortfolioCard
            key={index}
            {...project}
            onClick={() => setPopupData(project)}
          />
        ))}
      </div>
      {/* ==== Project Modal ==== */}
      <PopUpWrapper open={open} nested onClose={closeModal}>
        <PortfolioModal onClose={closeModal} popupData={popupData ?? undefined} />
      </PopUpWrapper>
    </>
  );
}

export default Projects;
