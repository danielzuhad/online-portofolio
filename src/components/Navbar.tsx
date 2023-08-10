import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute mt-9 w-[70vw] h-10 flex items-center justify-center">
      <ul className="flex justify-center sm:gap-2  md:gap-10 lg:gap-16 font-medium lg:text-[1.3em] relative group text-white">
        <li>
          <Link
            className="p-2 transition border-black duration-[850ms] ease-in-out  hover:border-b-2 hover:border-white  focus:border-b-2 focus:border-white"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="p-2 transition border-black duration-[850ms]  ease-in-out  hover:border-b-2 hover:border-white  focus:border-b-2 focus:border-white"
            href="/skill"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="p-2 transition border-black duration-[850ms]  ease-in-out  hover:border-b-2 hover:border-white  focus:border-b-2 focus:border-white"
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="p-2 transition border-black duration-[850ms]  ease-in-out  hover:border-b-2 hover:border-white  focus:border-b-2 focus:border-white"
            href="certifications"
          >
            Certifications
          </Link>
        </li>
      </ul>
    </div>
  );
}
