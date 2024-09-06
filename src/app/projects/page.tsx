import Card from "@/components/Card";
import { PageWrapper } from "../page-wrapper";

export default function Projects() {
  const projects = [
    {
      github: "https://github.com/danielzuhad/bakatlacak-client",
      title: "Job Seeker Web Aplication",
      description:
        "Aplication that is done grouped and used to find jobs. It uses technologies such as React, Vite, Chakra Ui, Tailwind and Express",
      // "Membuat aplikasi job seeker yang dilakukan secara berkelompok yang bernama 'bakat lacak'. Menggunakan bahasa teknologi seperti React, Vite, Chakra Ui, Tailwind dan Express ",
    },
    {
      github: "https://github.com/danielzuhad/todo-list-next-ts",
      title: "Todo List",
      description:
        "Aplication that can make, edit and delete task and it is made with Fullstack Next Typescript with ORM Prisma",
      // "Aplikasi yang dapat membuat, mengedit dan menghapus suatu tugas, dibuat dengan Fullstack Next Typescript dengan ORM Prisma",
      link: "https://todo-list-next-ts.vercel.app/",
    },
    {
      github: "https://github.com/danielzuhad/penuh-makna",
      title: "Cafe Landing Page (Internship Project)",
      description:
        "Aplication for cafe landing page, made with next js, tailwind and Daisy UI for feature dark mode",
      // "Aplikasi landing page untuk cafe menggunakan next js, tailwind dan Daisy UI untuk feature dark mode",
      link: "https://penuh-makna.vercel.app/",
    },
    {
      github: "https://github.com/danielzuhad/spotify-clone",
      title: "Spotify Clone",
      description:
        "Aplication Spotify clone (premium only), made with next js, tailwind, next-auth, reduxjs toolkit, frammer motion, and react query",
      // "Aplikasi landing page untuk cafe menggunakan next js, tailwind dan Daisy UI untuk feature dark mode",
      link: "https://spotify-clone-k7.vercel.app/",
    },
    {
      github: "https://github.com/danielzuhad/Chat-App-Next",
      title: "Chat App",
      description:
        "Aplication Chatting, made with next js, tailwind, next-auth, reduxjs toolkit, and react query",
      // "Aplikasi landing page untuk cafe menggunakan next js, tailwind dan Daisy UI untuk feature dark mode",
      link: "https://chat-app-next-murex.vercel.app/",
    },
  ];

  return (
    <PageWrapper>
      <div className="w-[70vw] min-h-screen flex justify-center items-center gap-10 flex-col ">
        <h1 className="text-white font-semibold sm:text-[2em] text-[3.5em] mt-[5em] ">
          Projects
        </h1>
        <div className="flex flex-wrap items-center justify-center w-full gap-10 pb-10 sm:flex-col lg:flex-row">
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
