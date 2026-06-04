"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import etimadImg from "../../public/etimad.webp";
import imsImg from "../../public/ims.webp";
import elearnImg from "../../public/e-learn.webp";
import imageGenImg from "../../public/image-gen.webp";
import chatImg from "../../public/chat.webp";
import strenoImg from "../../public/streno.webp";
import jobImg from "../../public/job.webp";
import fadesImg from "../../public/fades.webp";

export default function ProjectsSection() {
  const projects = [
    {
      index: "01",
      title: "E-commerce App",
      year: "2024",
      stack: "MERN • Cart & Checkout • Payments-ready UI",
      image: etimadImg,
      liveUrl: "https://etimadmart.com"
    },
    {
      index: "02",
      title: "Barber Salon App",
      year: "2026",
      stack: "Next.js • Tailwind CSS • Booking system • Responsive design",
      image: fadesImg,
      liveUrl: "https://fades-salon.netlify.app"
    },
    {
      index: "03",
      title: "Inventory Management",
      year: "2025",
      stack: "MERN • Role-based access • Stock tracking",
      image: imsImg,
      liveUrl: "https://etimad-inventory.netlify.app/",
      codeLink: ""
    },
    {
      index: "04",
      title: "Team Management App",
      year: "2025",
      stack: "MERN • Boards • Collaboration",
      image: strenoImg,
      codeLink: "https://github.com/farhan-Ali007/team-flow"
    },
    {
      index: "05",
      title: "AI Image Generator",
      year: "2025",
      stack: "React • OpenAI API • Image generation • Responsive UI • State management • Error handling • Loading states • Image download • Clipboard API • Image optimization",
      image: imageGenImg,
      codeLink: "https://github.com/farhan-Ali007/image-generator"
    },
    {
      index: "06",
      title: "Chat App",
      year: "2024",
      stack: "Socket.io • Real-time messaging • User presence • Message history • User authentication",
      image: chatImg,
      codeLink: "https://github.com/farhan-Ali007/chat-frontend"
    },
    {
      index: "07",
      title: "Learning Management",
      year: "2024",
      stack: "MERN • Courses • Progress tracking",
      image: elearnImg,
      codeLink: "https://github.com/farhan-Ali007/E-learn"
    },
    {
      index: "08",
      title: "Job Portal",
      year: "2023",
      stack: "MERN • Role-based access • Job search",
      image: jobImg,
      codeLink: "https://github.com/farhan-Ali007/job-board-frontend"
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({}); // track which project images have finished loading

  // Preload all project images on component mount
  useEffect(() => {
    projects.forEach((project) => {
      const img = new window.Image();
      img.src = project.image.src;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [project.index]: true }));
      };
    });
  }, [projects]);

  // Preload image when hovering over a project (desktop)
  const preloadImage = (image) => {
    const img = new window.Image();
    img.src = image.src;
  };

  // Mark image as loaded immediately when switching projects
  const handleProjectClick = (idx) => {
    setActiveProjectIndex(idx);
    // Preload the image for faster display
    preloadImage(projects[idx].image);
  };

  return (
    <section
      id="projects"
      className="relative border-t border-slate-800 bg-slate-950/80 px-6 py-16 scroll-mt-24 md:scroll-mt-16 overflow-x-hidden"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        {/* Shared heading */}
        <header className="flex flex-col gap-2 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">
            Selected Projects
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Things I&apos;ve built recently
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-400">
            A mix of full-stack applications focused on clean architecture, real-world workflows,
            and smooth user experience.
          </p>
        </header>

        {/* Mobile layout: accordion-style cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {projects.map((project, idx) => {
            const isActive = idx === activeProjectIndex;
            return (
              <div
                key={project.index}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => handleProjectClick(idx)}
                  className="cursor-target flex w-full items-center justify-between gap-3 px-4 py-3"
                >
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent/80">
                      {project.index}
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">{project.year}</p>
                      <p className="text-sm font-semibold text-slate-50">{project.title}</p>
                    </div>
                  </div>
                  <span className="text-accent text-sm">{isActive ? "-" : "+"}</span>
                </button>

                {isActive && (
                  <div className="space-y-3 border-t border-slate-800/80 px-4 py-4 text-sm text-slate-300">
                    {project.image && (
                      <div className="relative mb-2 w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/80">
                        {!loadedImages[project.index] && (
                          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-800/80 via-slate-700/60 to-slate-800/80 bg-[length:200%_100%]" />
                        )}
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1500}
                          height={700}
                          className="relative z-10 w-full h-auto object-contain transition-opacity duration-300"
                          loading="eager"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          placeholder="blur"
                          onLoadingComplete={() =>
                            setLoadedImages((prev) => ({ ...prev, [project.index]: true }))
                          }
                        />
                      </div>
                    )}
                    <p>{project.stack}</p>z
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-accent hover:text-accent transition-colors"
                        >
                          View Live
                        </a>
                      )}
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-accent hover:text-accent transition-colors"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop / tablet layout: list + details */}
        <div className="hidden gap-8 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:items-stretch">
          {/* Left: project list */}
          <div className="flex h-full flex-col divide-y divide-slate-800/80 rounded-2xl border border-slate-800/80 bg-slate-950/80">
            {projects.map((project, idx) => {
              const isActive = idx === activeProjectIndex;
              return (
                <button
                  key={project.index}
                  type="button"
                  onClick={() => handleProjectClick(idx)}
                  onMouseEnter={() => preloadImage(project.image)}
                  className={`cursor-target flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors ${isActive
                    ? "bg-slate-900/80 text-slate-50"
                    : "bg-transparent text-slate-300 hover:bg-slate-900/40"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent/80">
                      {project.index}
                    </span>
                    <div>
                      <p className="text-[11px] text-slate-500">{project.year}</p>
                      <p className="text-sm font-semibold">{project.title}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">{isActive ? "Active" : "View"}</span>
                </button>
              );
            })}
          </div>

          {/* Right: active project details */}
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.95)]">
            {projects[activeProjectIndex].image && (
              <div className="relative w-full overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/80">
                {!loadedImages[projects[activeProjectIndex].index] && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-800/80 via-slate-700/60 to-slate-800/80 bg-[length:200%_100%]" />
                )}
                <Image
                  src={projects[activeProjectIndex].image}
                  alt={projects[activeProjectIndex].title}
                  width={1500}
                  height={700}
                  className="relative z-10 w-full h-auto object-contain transition-opacity duration-300"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  placeholder="blur"
                  priority={activeProjectIndex === 0}
                  onLoadingComplete={() =>
                    setLoadedImages((prev) => ({
                      ...prev,
                      [projects[activeProjectIndex].index]: true,
                    }))
                  }
                />
              </div>
            )}
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-accent/80">
                {projects[activeProjectIndex].index} • {projects[activeProjectIndex].year}
              </p>
              <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">
                {projects[activeProjectIndex].title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {projects[activeProjectIndex].stack}
              </p>
            </div>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
              {projects[activeProjectIndex].liveUrl && (
                <a
                  href={projects[activeProjectIndex].liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-accent hover:text-accent transition-colors"
                >
                  View Live
                </a>
              )}
              {projects[activeProjectIndex].codeLink && (
                <a
                  href={projects[activeProjectIndex].codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-600 px-4 py-1.5 font-medium text-slate-100 hover:border-accent hover:text-accent transition-colors"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
