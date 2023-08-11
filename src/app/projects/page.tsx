import Card from "@/components/Card";
import React from "react";
import { PageWrapper } from "../page-wrapper";

export default function Projects() {
  return (
    <PageWrapper>
      <div className="w-[70vw] min-h-screen flex justify-center items-center gap-10 flex-col ">
        <h1 className="text-white font-semibold sm:text-[2em] text-[3.5em] sm:mt-[3.4em] md:mt-[-2.5em]  md:pt-[6em] lg:mt-[-6em]">
          Projects
        </h1>
        <div className="flex gap-10 sm:flex-col lg:flex-row">
          <Card
            href="https://github.com/danielzuhad/bakatlacak-client"
            title="Job Seeker Web Aplication"
            description="Membuat aplikasi job seeker yang dilakukan secara berkelompok yang bernama 'bakat lacak'. Menggunakan bahasa teknologi seperti React, Vite, Chakra Ui, Tailwind dan Express "
          />

          <Card
            href="https://github.com/danielzuhad/little-ecommerce-client"
            title="Little E-commerce"
            description="Membuat aplikasi seperti e-commerce dengan menggunakan Next Typescript, dengan Backend menggunakan Express JS dan menggunakan state management Zustand"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
