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
import dinebookImg from "../../public/dinebook.webp";

export default function ProjectsSection() {
  const projects = [
    {
      index: "01",
      title: "E-commerce Platform with Courier Integration",
      year: "2024",
      shortStack: "MERN • API Integration • Real-time Shipping",
      description: "E-commerce businesses in Pakistan had to manually visit Leopard Courier and Post Office websites to check shipping rates and create orders, losing time and increasing errors. I built a full-stack platform that integrates LCS and Post Office APIs directly into checkout. Customers now select courier service and shipping cost in real-time without leaving the platform. This eliminated manual data entry, reduced checkout time by ~40%, and made the platform a complete one-stop solution for online selling.",
      image: etimadImg,
      liveUrl: "https://etimadmart.com",
      tech: ["React", "Next.js", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"]
    },
    {
      index: "02",
      title: "Barber Salon Booking Website",
      year: "2026",
      shortStack: "Next.js • WhatsApp Integration • Responsive Design",
      description: "Fades Men's Salon Multan had no online presence or booking system. Customers called repeatedly; the salon couldn't track bookings or manage schedules. I built a professional website that displays services, real client reviews, and integrates with WhatsApp for instant bookings. Customers can now book with service/time preferences directly through the site. The design is mobile-first (80% of traffic is mobile), and the salon now has a credible online presence that ranks for local searches.",
      image: fadesImg,
      liveUrl: "https://fades-salon.netlify.app",
      tech: ["Next.js", "React", "Tailwind CSS", "WhatsApp API", "Image Optimization"]
    },
    {
      index: "03",
      title: "Inventory Management + Point of Sale System",
      year: "2025",
      shortStack: "MERN • Role-based Access • Real-time Inventory",
      description: "Small retailers needed one system to manage inventory, process sales, print bills, track seller commissions, and maintain sales history — without juggling multiple tools. I built an all-in-one solution where sellers create catalogs, process sales with automatic billing & receipt printing, and managers track seller performance and commissions. The system uses MongoDB transactions for data consistency, role-based access control, and real-time inventory updates. Impact: eliminated manual bill tracking, automated commission calculations (saving hours/month), and provided real-time visibility across multiple sellers.",
      image: imsImg,
      liveUrl: "https://etimad-inventory.netlify.app/",
      codeLink: "",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "Role-based Access", "Receipt Printing"]
    },
    {
      index: "04",
      title: "Restaurant Reservation System",
      year: "2025",
      shortStack: "MERN • Real-time Availability • Booking Management",
      description: "Restaurants struggled to manage table bookings and customer reservations without a dedicated system. I built DineBook — a platform where customers browse restaurants, check real-time table availability, and book instantly with confirmation. Restaurant admins manage menus, tables, and incoming reservations. The system reduces no-show rates with confirmations and provides restaurants with booking analytics. Built with real-time table status updates and user authentication.",
      image: dinebookImg,
      liveUrl: "https://dinebook.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT Auth", "Real-time Updates"]
    },
    {
      index: "05",
      title: "AI Image Generator",
      year: "2025",
      shortStack: "React • OpenAI API • Image Processing",
      description: "Built a React application that integrates with OpenAI's image generation API. Users can prompt for AI-generated images with full state management, error handling, loading states, and can download or copy images to clipboard. Features include image optimization, responsive design, and seamless UX.",
      image: imageGenImg,
      codeLink: "https://github.com/farhan-Ali007/image-generator",
      tech: ["React", "OpenAI API", "State Management", "Image Optimization"]
    },
    {
      index: "06",
      title: "Real-time Chat Application",
      year: "2024",
      shortStack: "Socket.io • Real-time Messaging • Authentication",
      description: "Built a real-time messaging application with Socket.io for instant message delivery. Features include user authentication, online presence indicators, message history, and responsive design. Demonstrates real-time communication fundamentals.",
      image: chatImg,
      codeLink: "https://github.com/farhan-Ali007/chat-frontend",
      tech: ["Socket.io", "Real-time Communication", "User Auth", "Message History"]
    },
    {
      index: "07",
      title: "Learning Management System",
      year: "2024",
      shortStack: "MERN • Course Management • Progress Tracking",
      description: "Built a complete learning management platform where instructors create courses and students track their progress. Features include course catalogs, lesson organization, and progress tracking dashboards.",
      image: elearnImg,
      codeLink: "https://github.com/farhan-Ali007/E-learn",
      tech: ["React", "Node.js", "MongoDB", "Express", "Progress Tracking"]
    },
    {
      index: "08",
      title: "Job Portal",
      year: "2023",
      shortStack: "MERN • Job Search • Role-based Access",
      description: "Early project building a job board with role-based access control. Employers can post jobs, candidates can search and apply. Demonstrates full-stack development fundamentals.",
      image: jobImg,
      codeLink: "https://github.com/farhan-Ali007/job-board-frontend",
      tech: ["React", "Node.js", "MongoDB", "Express", "Role-based Access"]
    },
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    projects.forEach((project) => {
      const img = new window.Image();
      img.src = project.image.src;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [project.index]: true }));
      };
    });
  }, [projects]);

  const preloadImage = (image) => {
    const img = new window.Image();
    img.src = image.src;
  };

  const handleProjectClick = (idx) => {
    setActiveProjectIndex(idx);
    preloadImage(projects[idx].image);
  };

  return (
    <section
      id="projects"
      className="relative border-t border-slate-800 bg-slate-950/80 px-6 py-16 scroll-mt-24 md:scroll-mt-16 overflow-x-hidden"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-2 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">
            Selected Projects
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            Things I&apos;ve built recently
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-slate-400">
            Real-world full-stack applications solving actual business problems with clean architecture and production-ready code.
          </p>
        </header>

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
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-accent/80 uppercase">{project.shortStack}</p>
                      <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
                    </div>
                    <div className="pt-2 flex flex-wrap gap-1">
                      {project.tech && project.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-1 rounded bg-slate-800/50 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400">
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

        <div className="hidden gap-8 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:items-stretch">
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
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {projects[activeProjectIndex].description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1">
                {projects[activeProjectIndex].tech && projects[activeProjectIndex].tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded bg-slate-800/50 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto flex flex-wrap gap-3 text-xs text-slate-400">
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