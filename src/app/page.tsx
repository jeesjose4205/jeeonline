"use client";

import {
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";

type IconName =
  | "home"
  | "user"
  | "code"
  | "folder"
  | "briefcase"
  | "file"
  | "mail"
  | "phone"
  | "github"
  | "linkedin"
  | "moon"
  | "sun"
  | "menu"
  | "close"
  | "arrow";

const Icon = ({
  name,
  size = 19,
}: {
  name: IconName;
  size?: number;
}) => {
  const icons: Record<IconName, ReactNode> = {
    home: (
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" />
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),

    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="M14 5 10 19" />
      </>
    ),

    folder: (
      <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    ),

    briefcase: (
      <>
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
        />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </>
    ),

    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h6" />
      </>
    ),

    mail: (
      <>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.7 2.84a2 2 0 0 1-.45 2.11L8.1 9.93a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.92.33 1.87.57 2.84.7A2 2 0 0 1 22 16.9Z" />
    ),

    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.2a5.6 5.6 0 0 0-1.5-3.9A5.2 5.2 0 0 0 19.2.7S18 .3 15 2.3a14.3 14.3 0 0 0-6 0C6 .3 4.8.7 4.8.7a5.2 5.2 0 0 0-.1 2.7 5.6 5.6 0 0 0-1.5 3.9c0 5.6 3.5 6.8 6.8 7.2A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 19c-3 .9-3-1.5-4.2-1.9" />
      </>
    ),

    linkedin: (
      <>
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
        />
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M12 13a3 3 0 0 1 6 0v3" />
      </>
    ),

    moon: (
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
    ),

    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.9 4.9l1.4 1.4" />
        <path d="M17.7 17.7l1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M4.9 19.1l1.4-1.4" />
        <path d="M17.7 6.3l1.4-1.4" />
      </>
    ),

    menu: (
      <path d="M4 7h16M4 12h16M4 17h16" />
    ),

    close: (
      <path d="m6 6 12 12M18 6 6 18" />
    ),

    arrow: (
      <path d="M5 12h14M13 6l6 6-6 6" />
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
};


/* =========================================================
   NAVIGATION
========================================================= */

const nav = [
  ["Home", "home"],
  ["About", "user"],
  ["Skills", "code"],
  ["Projects", "folder"],
  ["Experience", "briefcase"],
  ["Resume", "file"],
  ["Contact", "mail"],
] as const;


/* =========================================================
   SKILLS & TOOLS
========================================================= */

const skills = {
  "Programming Languages": [
    "Python",
    "Java",
    "C",
    "JavaScript",
    "TypeScript",
    "SQL",
  ],

  "Frontend & Mobile": [
    "HTML5",
    "CSS3",
    "React.js",
    "React Native",
    "Expo",
    "TypeScript",
  ],

  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "FastAPI",
    "REST APIs",
    "Uvicorn",
  ],

  "Database & Storage": [
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "SQLite",
    "SQLAlchemy",
    "JSON",
  ],

  "Developer Tools": [
    "Visual Studio Code",
    "Postman",
    "Git",
    "GitHub",
    "Jupyter Notebook",
  ],
};


/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "MedCare+",

    type: "Medication Safety Application",

    description:
      "An intelligent mobile healthcare application for medication safety that analyzes drug-drug, drug-disease, and food-drug interactions while providing overdose safety information and healthcare support.",

    tags: [
      "React Native",
      "TypeScript",
      "FastAPI",
      "Uvicorn",
      "REST API",
    ],

    image: "/image1.png",

    github:
      "https://github.com/jeesjose4205/Medcare-plus",

    demo: "#",
  },

  {
    title: "Memora",

    type: "Smart Healthcare System",

    description:
      "A smart healthcare solution designed to support Alzheimer's patients through patient monitoring, location tracking, safety features, medication reminders, and emergency assistance.",

    tags: [
      "React Native",
      "Python",
      "Firebase",
      "ESP32",
      "GPS",
    ],

    image: "/memora.png",

    github:
      "https://github.com/jeesjose4205",

    demo: "#",
  },

  {
    title: "PyMonitor",

    type: "Real-Time System Monitoring",

    description:
      "A Python-based real-time system monitoring platform that tracks CPU, memory, disk, network, battery, running processes, system alerts, and application activity through a web dashboard.",

    tags: [
      "Python",
      "FastAPI",
      "psutil",
      "SQLAlchemy",
      "JavaScript",
    ],

    image: "/pymonitor.png",

    github:
      "https://github.com/jeesjose4205/pymonitor",

    demo: "#",
  },
];


/* =========================================================
   SECTION
========================================================= */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8"
    >
      <div
        className="
          content-card
          rounded-[1.7rem]
          p-6
          sm:p-9
        "
      >
        <p
          className="
            mb-2
            text-xs
            font-bold
            uppercase
            tracking-[.18em]
            text-[#2563eb]
          "
        >
          {eyebrow}
        </p>

        <h2
          className="
            section-title
            mb-8
            text-3xl
            font-bold
            sm:text-4xl
          "
        >
          {title}
        </h2>

        {children}
      </div>
    </section>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function Portfolio() {
  const [open, setOpen] =
    useState(false);

  const [dark, setDark] =
    useState(false);

  const [active, setActive] =
    useState("Home");

  const [sent, setSent] =
    useState(false);


  /* =======================================================
     DARK MODE
  ======================================================= */

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      dark
    );
  }, [dark]);


  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                setActive(
                  entry.target.id
                    .charAt(0)
                    .toUpperCase() +
                    entry.target.id.slice(1)
                );
              }
            }
          );
        },
        {
          rootMargin:
            "-35% 0px -55% 0px",
        }
      );

    nav.forEach(
      ([name]) => {
        const element =
          document.getElementById(
            name.toLowerCase()
          );

        if (element) {
          observer.observe(
            element
          );
        }
      }
    );

    return () =>
      observer.disconnect();
  }, []);


  /* =======================================================
     NAVIGATION
  ======================================================= */

  const go = (
    name: string
  ) => {
    document
      .getElementById(
        name.toLowerCase()
      )
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };


  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const submit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form =
      e.currentTarget;

    const formData =
      new FormData(form);

    const response =
      await fetch(
        "https://formspree.io/f/mbdnygez",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept:
              "application/json",
          },
        }
      );

    if (response.ok) {
      setSent(true);
      form.reset();
    } else {
      alert(
        "Message could not be sent. Please try again."
      );
    }
  };


  return (
    <main
      className="
        min-h-screen
        md:pl-[290px]
      "
    >


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <button
        aria-label="Open navigation"
        onClick={() =>
          setOpen(true)
        }
        className="
          fixed
          right-4
          top-4
          z-30
          rounded-full
          bg-ink
          p-3
          text-white
          shadow-lg
          md:hidden
        "
      >
        <Icon name="menu" />
      </button>


      {open && (
        <button
          aria-label="Close navigation overlay"
          onClick={() =>
            setOpen(false)
          }
          className="
            fixed
            inset-0
            z-30
            bg-slate-950/45
            md:hidden
          "
        />
      )}


      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-40
          flex
          w-[290px]
          flex-col
          bg-ink
          px-6
          py-8
          text-white
          transition-transform
          duration-300
          md:translate-x-0

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        <button
          aria-label="Close navigation"
          onClick={() =>
            setOpen(false)
          }
          className="
            absolute
            right-5
            top-5
            text-slate-300
            md:hidden
          "
        >
          <Icon name="close" />
        </button>


        {/* PROFILE */}

        <div className="text-center">

          <img
            src="/profile.jpg"
            alt="Jees Jose"
            className="
              mx-auto
              h-24
              w-24
              rounded-full
              border-4
              border-white/15
              object-cover
            "
          />

          <h1
            className="
              mt-4
              text-2xl
              font-bold
            "
          >
            Jees Jose
          </h1>

          <p
            className="
              mt-1
              text-sm
              text-slate-300
            "
          >
            Software Developer
          </p>

          <div
            className="
              mt-4
              flex
              justify-center
              gap-3
            "
          >

            <a
              aria-label="GitHub"
              href="https://github.com/jeesjose4205"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-white/10
                p-2
                hover:bg-[#2563eb]
              "
            >
              <Icon
                name="github"
                size={17}
              />
            </a>


            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/jees-jose-984135271/"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full
                bg-white/10
                p-2
                hover:bg-[#2563eb]
              "
            >
              <Icon
                name="linkedin"
                size={17}
              />
            </a>


            <a
              aria-label="Email"
              href="mailto:jeesjose4205@gmail.com"
              className="
                rounded-full
                bg-white/10
                p-2
                hover:bg-[#2563eb]
              "
            >
              <Icon
                name="mail"
                size={17}
              />
            </a>


            <a
              aria-label="Phone"
              href="tel:+919207395601"
              className="
                rounded-full
                bg-white/10
                p-2
                hover:bg-[#2563eb]
              "
            >
              <Icon
                name="phone"
                size={17}
              />
            </a>

          </div>

        </div>


        {/* NAVIGATION */}

        <nav
          className="
            my-8
            flex
            flex-1
            flex-col
            gap-1
          "
        >

          {nav.map(
            ([name, icon]) => (
              <button
                key={name}
                onClick={() =>
                  go(name)
                }
                className={`
                  nav-link
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-2.5
                  text-left
                  text-sm
                  font-medium
                  text-slate-300
                  hover:bg-white/10
                  hover:text-white

                  ${
                    active === name
                      ? "active"
                      : ""
                  }
                `}
              >

                <Icon
                  name={icon}
                />

                {name}

              </button>
            )
          )}

        </nav>


        {/* DARK MODE */}

        <div
          className="
            border-t
            border-white/10
            pt-5
          "
        >

          <button
            onClick={() =>
              setDark(!dark)
            }
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              px-3
              py-2
              text-sm
              text-slate-300
              hover:bg-white/10
            "
          >

            <span
              className="
                flex
                items-center
                gap-3
              "
            >

              <Icon
                name={
                  dark
                    ? "sun"
                    : "moon"
                }
              />

              {dark
                ? "Light mode"
                : "Dark mode"}

            </span>


            <span
              className="
                h-5
                w-9
                rounded-full
                bg-white/20
                p-0.5
              "
            >

              <span
                className={`
                  block
                  h-4
                  w-4
                  rounded-full
                  bg-white
                  transition-transform

                  ${
                    dark
                      ? "translate-x-4"
                      : ""
                  }
                `}
              />

            </span>

          </button>


          <p
            className="
              mt-5
              text-center
              text-xs
              text-slate-500
            "
          >
            © 2026 Jees Jose
          </p>

        </div>

      </aside>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        className="
          mx-auto
          max-w-6xl
          space-y-6
          p-4
          pt-20
          sm:p-8
          sm:pt-24
          md:pt-10
        "
      >


        {/* =================================================
            HOME
        ================================================= */}

        <section
          id="home"
          className="
            content-card
            scroll-mt-8
            overflow-hidden
            rounded-[1.7rem]
          "
        >

          <div
            className="
              relative
              p-7
              sm:p-12
            "
          >

            <div
              className="
                absolute
                -right-12
                -top-20
                h-64
                w-64
                rounded-full
                bg-blue-100
                blur-3xl
                dark:bg-blue-500/10
              "
            />


            <p
              className="
                relative
                text-sm
                font-bold
                uppercase
                tracking-[.18em]
                text-[#2563eb]
              "
            >
              Hello, I&apos;m
            </p>


            <h2
              className="
                relative
                mt-3
                max-w-3xl
                text-4xl
                font-bold
                leading-tight
                sm:text-6xl
              "
            >
              Learning, building, and improving every day.
            </h2>


            <p
              className="
                relative
                mt-5
                max-w-xl
                text-base
                leading-7
                text-[var(--muted)]
              "
            >
              A Computer Science student and Software
              Developer focused on building practical,
              user-friendly applications and solving
              real-world problems.
            </p>


            <div
              className="
                relative
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >

              <button
                onClick={() =>
                  go("Projects")
                }
                className="
                  rounded-xl
                  bg-[#2563eb]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  hover:bg-[#1d4ed8]
                "
              >
                View projects
              </button>


              <a
                href="/resume.pdf"
                download
                className="
                  rounded-xl
                  border
                  border-[var(--line)]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  hover:border-[#2563eb]
                "
              >
                Download resume
              </a>

            </div>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <Section
          id="about"
          eyebrow="A little about me"
          title="About me"
        >

          <div
            className="
              grid
              gap-8
              md:grid-cols-[1.4fr_.8fr]
            "
          >

            <p
              className="
                text-lg
                leading-8
                text-[var(--muted)]
              "
            >
              I&apos;m Jees Jose, a passionate Software
              Developer and Computer Science student focused
              on building reliable, user-friendly applications
              and solving real-world problems. I work with
              technologies such as Java, Python, JavaScript,
              React.js, React Native, Node.js, FastAPI, and
              REST APIs, with a strong interest in full-stack
              and backend development.
            </p>


            <div
              className="
                grid
                grid-cols-2
                gap-3
              "
            >

              {[
                ["03+", "Projects built"],
                ["10+", "Technologies"],
                ["100%", "Curiosity"],
              ].map(
                ([number, label]) => (

                  <div
                    key={label}
                    className="
                      rounded-2xl
                      bg-[var(--page)]
                      p-4
                    "
                  >

                    <b
                      className="
                        text-2xl
                        text-[#2563eb]
                      "
                    >
                      {number}
                    </b>


                    <p
                      className="
                        mt-1
                        text-xs
                        text-[var(--muted)]
                      "
                    >
                      {label}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </Section>


        {/* =================================================
            SKILLS
        ================================================= */}

        <Section
          id="skills"
          eyebrow="What I work with"
          title="Skills & tools"
        >

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {Object.entries(
              skills
            ).map(
              ([group, items]) => (

                <div
                  key={group}
                  className="
                    rounded-2xl
                    border
                    border-[var(--line)]
                    bg-white
                    p-5
                    transition-all
                    duration-300
                    hover:border-blue-200
                    hover:shadow-[0_8px_25px_rgba(37,99,235,0.06)]
                  "
                >

                  <h3
                    className="
                      text-base
                      font-bold
                      text-slate-900
                    "
                  >
                    {group}
                  </h3>


                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    {items.map(
                      (item) => (

                        <span
                          key={item}
                          className="
                            rounded-lg
                            bg-blue-50
                            px-3
                            py-1.5
                            text-sm
                            font-medium
                            text-blue-700
                            ring-1
                            ring-inset
                            ring-blue-100
                          "
                        >
                          {item}
                        </span>

                      )
                    )}

                  </div>

                </div>

              )
            )}

          </div>

        </Section>


        {/* =================================================
            PROJECTS
        ================================================= */}

        <Section
          id="projects"
          eyebrow="Selected work"
          title="Featured projects"
        >

          <div
            className="
              grid
              grid-cols-1
              items-stretch
              gap-7
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {projects.map(
              (project) => (

                <article
                  key={project.title}
                  className="
                    group
                    flex
                    min-h-[560px]
                    flex-col
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-slate-200
                    bg-white
                    shadow-[0_4px_20px_rgba(15,23,42,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-[0_14px_35px_rgba(37,99,235,0.10)]
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      h-[245px]
                      w-full
                      shrink-0
                      overflow-hidden
                      bg-[#f8fbff]
                    "
                  >

                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        object-center
                        scale-[1.04]
                        transition-transform
                        duration-500
                        group-hover:scale-[1.08]
                      "
                    />

                  </div>


                  {/* CONTENT */}

                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      bg-white
                      px-6
                      pb-5
                      pt-5
                    "
                  >

                    <div
                      className="
                        h-[18px]
                        shrink-0
                      "
                    >

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[#2563eb]
                        "
                      >
                        {project.type}
                      </p>

                    </div>


                    <div
                      className="
                        mt-2
                        flex
                        h-[34px]
                        shrink-0
                        items-center
                      "
                    >

                      <h3
                        className="
                          text-[22px]
                          font-bold
                          leading-[34px]
                          tracking-tight
                          text-slate-900
                        "
                      >
                        {project.title}
                      </h3>

                    </div>


                    <div
                      className="
                        mt-3
                        h-[82px]
                        shrink-0
                        overflow-hidden
                      "
                    >

                      <p
                        className="
                          text-[13px]
                          leading-[22px]
                          text-slate-500
                        "
                      >
                        {project.description}
                      </p>

                    </div>


                    <div
                      className="
                        mt-4
                        flex
                        h-[52px]
                        shrink-0
                        flex-wrap
                        content-start
                        gap-2
                        overflow-hidden
                      "
                    >

                      {project.tags.map(
                        (tag) => (

                          <span
                            key={tag}
                            className="
                              rounded-md
                              bg-blue-50
                              px-2.5
                              py-1
                              text-[10px]
                              font-medium
                              text-blue-700
                              ring-1
                              ring-inset
                              ring-blue-100
                            "
                          >
                            {tag}
                          </span>

                        )
                      )}

                    </div>


                    {/* ACTIONS */}

                    <div
                      className="
                        mt-auto
                        flex
                        h-[44px]
                        shrink-0
                        items-end
                        justify-between
                        pt-4
                      "
                    >

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[12px]
                          font-semibold
                          text-slate-600
                          transition-colors
                          hover:text-[#2563eb]
                        "
                      >

                        <Icon
                          name="github"
                          size={16}
                        />

                        GitHub

                      </a>


                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-[12px]
                            font-semibold
                            text-[#2563eb]
                          "
                        >
                          Live Demo
                          <Icon
                            name="arrow"
                            size={15}
                          />
                        </a>
                      )}

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </Section>


        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <Section
          id="experience"
          eyebrow="My path"
          title="Experience"
        >

          <div
            className="
              border-l-2
              border-[#2563eb]
              pl-6
            "
          >

            <p
              className="
                text-sm
                font-bold
                text-[#2563eb]
              "
            >
              2026
            </p>


            <h3
              className="
                mt-2
                text-xl
                font-bold
              "
            >
              Full Stack Developer Intern
            </h3>


            <p
              className="
                mt-1
                text-sm
                font-semibold
                text-[var(--muted)]
              "
            >
              Onepool Private Limited, Kochi
            </p>


            <p
              className="
                mt-3
                leading-7
                text-[var(--muted)]
              "
            >
              Developed responsive full-stack web
              applications, built RESTful APIs, worked
              with databases, contributed to testing and
              debugging, and used Git for version control
              and software development practices.
            </p>

          </div>

        </Section>


        {/* =================================================
            RESUME
        ================================================= */}

        <Section
          id="resume"
          eyebrow="My background"
          title="Resume"
        >

          <p
            className="
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            Download my resume to learn more about my
            education, technical skills, projects,
            experience, certifications, and achievements.
          </p>


          <a
            href="/resume.pdf"
            download
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#2563eb]
              px-5
              py-3
              text-sm
              font-bold
              text-white
              hover:bg-[#1d4ed8]
            "
          >

            <Icon
              name="file"
              size={17}
            />

            Download resume

          </a>

        </Section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <Section
          id="contact"
          eyebrow="Let's connect"
          title="Contact me"
        >

          <div
            className="
              grid
              gap-8
              lg:grid-cols-[.8fr_1.2fr]
            "
          >

            <div>

              <p
                className="
                  leading-7
                  text-[var(--muted)]
                "
              >
                Have a project, opportunity, or idea to
                discuss? I&apos;d love to hear from you.
              </p>


              <a
                href="mailto:jeesjose4205@gmail.com"
                className="
                  mt-5
                  block
                  font-bold
                  text-[#2563eb]
                "
              >
                jeesjose4205@gmail.com
              </a>


              <a
                href="tel:+919207395601"
                className="
                  mt-3
                  block
                  font-bold
                  text-[#2563eb]
                "
              >
                +91 92073 95601
              </a>

            </div>


            <form
              onSubmit={submit}
              className="grid gap-3"
            >

              {sent ? (

                <p
                  className="
                    rounded-xl
                    bg-blue-100
                    p-4
                    text-sm
                    text-blue-800
                  "
                >
                  Thanks! Your message has been sent.
                </p>

              ) : (

                <>

                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="
                      rounded-xl
                      border
                      border-[var(--line)]
                      bg-[var(--page)]
                      px-4
                      py-3
                      outline-none
                      focus:border-[#2563eb]
                    "
                  />


                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email address"
                    className="
                      rounded-xl
                      border
                      border-[var(--line)]
                      bg-[var(--page)]
                      px-4
                      py-3
                      outline-none
                      focus:border-[#2563eb]
                    "
                  />


                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message"
                    className="
                      rounded-xl
                      border
                      border-[var(--line)]
                      bg-[var(--page)]
                      px-4
                      py-3
                      outline-none
                      focus:border-[#2563eb]
                    "
                  />


                  <button
                    type="submit"
                    className="
                      justify-self-start
                      rounded-xl
                      bg-[#2563eb]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      hover:bg-[#1d4ed8]
                    "
                  >
                    Send message
                  </button>

                </>

              )}

            </form>

          </div>

        </Section>


        {/* =================================================
            FOOTER
        ================================================= */}

        <footer
          className="
            pb-5
            text-center
            text-sm
            text-[var(--muted)]
          "
        >
          Designed and built by Jees Jose.
        </footer>

      </div>

    </main>
  );
}