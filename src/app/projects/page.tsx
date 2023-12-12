import Card from "@/components/Card";
import React from "react";
import { PageWrapper } from "../page-wrapper";

export default function Projects() {
  const projects = [
    {
      github: "https://github.com/danielzuhad/bakatlacak-client",
      title: "Job Seeker Web Aplication",
      description:
        "Membuat aplikasi job seeker yang dilakukan secara berkelompok yang bernama 'bakat lacak'. Menggunakan bahasa teknologi seperti React, Vite, Chakra Ui, Tailwind dan Express ",
    },
    {
      github: "https://github.com/danielzuhad/little-ecommerce-client",
      title: "Job Seeker Web Aplication",
      description:
        "Aplikasi yang dapat menambahkan produk ke cart dan dapat membuat transaction detail dengan menggunakan Next Typescript, dengan Backend menggunakan Express JS dan menggunakan state management Zustand",
    },
    {
      github: "https://github.com/danielzuhad/todo-list-next-ts",
      title: "Todo List",
      description:
        "Aplikasi yang dapat membuat, mengedit dan menghapus suatu tugas, dibuat dengan Fullstack Next Typescript dengan ORM Prisma",
      link: "https://todo-list-next-ts.vercel.app/",
    },
    {
      github: "https://github.com/danielzuhad/penuh-makna",
      title: "Cafe Landing Page (Internship Project)",
      description:
        "Aplikasi landing page untuk cafe menggunakan next js, tailwind dan Daisy UI untuk feature dark mode",
      link: "https://penuh-makna.vercel.app/",
    },
  ];

  return (
    <PageWrapper>
      <div className="w-[70vw] min-h-screen flex justify-center items-center gap-10 flex-col ">
        <h1 className="text-white font-semibold sm:text-[2em] text-[3.5em] sm:mt-[3.4em] md:mt-[-2.5em]  md:pt-[6em] lg:mt-[-6em]">
          Projects
        </h1>
        <div className="flex gap-10 sm:flex-col lg:flex-row">
          {projects.map((project, i) => (
            <Card
              key={i}
              github={project.github}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
