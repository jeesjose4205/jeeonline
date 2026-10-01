'use client';

import {
  FormEvent,
  Fragment,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { IconType } from 'react-icons';
import {
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import {
  TbBrandVscode,
  TbCode,
  TbDatabase,
  TbServer,
  TbSql,
  TbTool,
} from 'react-icons/tb';

/* =========================================================
   TYPES
   ========================================================= */

type IconName =
  | 'home'
  | 'user'
  | 'code'
  | 'folder'
  | 'briefcase'
  | 'file'
  | 'mail'
  | 'phone'
  | 'github'
  | 'linkedin'
  | 'moon'
  | 'sun'
  | 'menu'
  | 'close'
  | 'arrow'
  | 'download'
  | 'check'
  | 'alert'
  | 'external'
  | 'up';

const ICONS: Record<IconName, ReactNode> = {
  home: <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z" />,
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
      <rect x="3" y="7" width="18" height="13" rx="2" />
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
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
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M12 13a3 3 0 0 1 6 0v3" />
    </>
  ),
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />,
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
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  check: <path d="m4 12.5 5 5L20 6.5" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" />
      <path d="M12 16.5v.01" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
  up: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
};

function Icon({ name, size = 19 }: { name: IconName; size?: number }) {
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
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}

/* =========================================================
   PROFILE & CONTENT
   ========================================================= */

const PROFILE = {
  name: 'Jees Jose',
  role: 'Software Developer',
  email: 'jeesjose4205@gmail.com',
  phone: '+91 92073 95601',
  phoneHref: 'tel:+919207395601',
  github: 'https://github.com/jeesjose4205',
  linkedin: 'https://www.linkedin.com/in/jees-jose-984135271/',
  resume: '/resume.pdf',
};

const NAV = [
  { label: 'Home', id: 'home', icon: 'home' },
  { label: 'About', id: 'about', icon: 'user' },
  { label: 'Skills', id: 'skills', icon: 'code' },
  { label: 'Projects', id: 'projects', icon: 'folder' },
  { label: 'Experience', id: 'experience', icon: 'briefcase' },
  { label: 'Resume', id: 'resume', icon: 'file' },
  { label: 'Contact', id: 'contact', icon: 'mail' },
] as const satisfies readonly { label: string; id: string; icon: IconName }[];

type SkillTech = { name: string; icon: IconType; color: string };

type SkillCardData = {
  title: string;
  description: string;
  icon: IconType;
  color: string;
  techs: SkillTech[];
};

const SKILL_CARDS: SkillCardData[] = [
  {
    title: 'Programming Languages',
    description: 'Core programming languages I work with',
    icon: TbCode,
    color: '#60a5fa',
    techs: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'Java', icon: DiJava, color: '#f89820' },
      { name: 'C', icon: TbCode, color: '#5c93c8' },
      { name: 'JavaScript', icon: SiJavascript, color: '#e3b341' },
      { name: 'SQL', icon: TbSql, color: '#0284c7' },
    ],
  },
  {
    title: 'Frameworks & Technologies',
    description: 'Frameworks and technologies I build with',
    icon: TbServer,
    color: '#34d399',
    techs: [
      { name: 'React.js', icon: SiReact, color: '#0891b2' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#9aa4b2' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: SiOpenapiinitiative, color: '#6ba539' },
    ],
  },
  {
    title: 'Database Technologies',
    description: 'Storing and managing application data efficiently',
    icon: TbDatabase,
    color: '#a78bfa',
    techs: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4a90b8' },
      { name: 'Firebase', icon: SiFirebase, color: '#ea8600' },
    ],
  },
  {
    title: 'Tools & Version Control',
    description: 'Development and versioning tools',
    icon: TbTool,
    color: '#fbbf24',
    techs: [
      { name: 'VS Code', icon: TbBrandVscode, color: '#2aa8f0' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#9aa4b2' },
    ],
  },
];

const PROJECTS = [
  {
    title: 'VisionPath AI',
    type: 'AI Visual Navigation',
    description:
      'Real-time visual navigation for visually impaired users, powered by object detection, depth estimation, and voice guidance.',
    tags: [
      'Flutter',
      'Dart',
      'YOLO26n',
      'Computer Vision',
      'Depth Estimation',
      'Vosk',
      'Google TTS',
    ],
    image: '/visionpath.png',
    github: 'https://github.com/jeesjose4205/visionpath',
  },
  {
    title: 'Memora',
    type: 'Smart Healthcare System',
    description:
      'A smart healthcare system supporting Alzheimer\u2019s patients with monitoring, location tracking, medication reminders, and emergency assistance.',
    tags: ['React Native', 'Python', 'Firebase', 'ESP32', 'GPS'],
    image: '/memora.png',
    github: 'https://github.com/jeesjose4205',
  },
  {
    title: 'MedCare+',
    type: 'Medication Safety Application',
    description:
      'A medication safety app that analyses drug-drug, drug-disease, and food-drug interactions, with overdose safety guidance.',
    tags: ['React Native', 'TypeScript', 'FastAPI', 'Uvicorn', 'REST API'],
    image: '/image1.png',
    github: 'https://github.com/jeesjose4205/Medcare-plus',
  },
  {
    title: 'PyMonitor',
    type: 'Real-Time System Monitoring',
    description:
      'A real-time monitoring platform for CPU, memory, disk, network, battery, and processes, surfaced through a web dashboard.',
    tags: ['Python', 'FastAPI', 'psutil', 'SQLAlchemy', 'JavaScript'],
    image: '/pymonitor.png',
    github: 'https://github.com/jeesjose4205/pymonitor',
  },
];

const EXPERIENCE = [
  {
    period: '2026',
    role: 'Full Stack Developer Intern',
    company: 'Onepool Private Limited, Kochi',
    points: [
      'Developed responsive full-stack web applications.',
      'Built RESTful APIs and worked with relational databases.',
      'Contributed to testing and debugging across the stack.',
      'Used Git for version control and software development practices.',
    ],
  },
];

const STATS = [
  ['03+', 'Projects built'],
  ['10+', 'Technologies'],
  ['100%', 'Curiosity'],
];

/* =========================================================
   SHARED UI
   ========================================================= */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="card p-6 sm:p-9">
      <h2 id={`${id}-heading`} className="section-title mb-7">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillsPanel() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="skills-panel p-6 sm:p-10"
    >
      <div className="skills-particles" aria-hidden="true" />

      {/* Decorative curved gradient lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="curveOne" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="45%" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curveTwo" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#e879f9" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-50 320 C 220 180, 420 430, 700 300 S 1120 140, 1260 240"
          fill="none"
          stroke="url(#curveOne)"
          strokeWidth="1.25"
        />
        <path
          d="M-40 470 C 260 560, 520 330, 820 430 S 1160 560, 1250 470"
          fill="none"
          stroke="url(#curveTwo)"
          strokeWidth="1.25"
        />
      </svg>

      {/* Header */}
      <header className="relative max-w-2xl">
        <h2 id="skills-heading" className="panel-heading section-title">
          My Skills &amp; Tools
        </h2>

        <p className="panel-muted mt-4 max-w-2xl text-base leading-8">
          Technologies and tools I use to build modern, scalable, and
          user-friendly applications, with a focus on full-stack development and
          problem solving.
        </p>
      </header>

      {/* Cards */}
      <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {SKILL_CARDS.map((card) => {
          const CardIcon = card.icon;

          return (
            <article key={card.title} className="glass-card p-5">
              <div className="flex items-center gap-3.5">
                <span
                  className="glass-icon"
                  style={{ color: card.color }}
                  aria-hidden="true"
                >
                  <CardIcon size={24} />
                </span>
                <h3 className="panel-title text-lg font-semibold leading-tight sm:text-[1.0625rem]">
                  {card.title}
                </h3>
              </div>

              <p className="panel-muted mt-4 line-clamp-2 text-[0.9375rem] leading-7">
                {card.description}
              </p>

              <ul className="mt-5 grid grid-cols-3 gap-1.5">
                {card.techs.map((tech) => {
                  const TechIcon = tech.icon;

                  return (
                    <li key={tech.name} className="tech-chip">
                      <span
                        className="tech-chip-icon"
                        style={{ color: tech.color }}
                        aria-hidden="true"
                      >
                        <TechIcon size={22} />
                      </span>
                      <span className="panel-muted text-center text-[0.75rem] font-medium leading-tight">
                        {tech.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ChannelRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className="group flex items-center gap-3 rounded-xl border border-transparent p-2.5 no-underline transition-colors hover:border-[var(--line)] hover:bg-[var(--raised)]"
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--raised)] text-[var(--primary)]"
        aria-hidden="true"
      >
        <Icon name={icon} size={17} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-[var(--muted)]">{label}</span>
        <span className="block truncate text-sm font-semibold text-[var(--text)] group-hover:text-[var(--primary)]">
          {value}
        </span>
      </span>
    </a>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const CONTACT_ENDPOINT = 'https://formspree.io/f/mbdnygez';

export default function Portfolio() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState('home');
  const [status, setStatus] = useState<FormStatus>('idle');
  const drawerRef = useRef<HTMLElement>(null);

  /* ---------------- Theme ---------------- */

  useEffect(() => {
    const stored =
      typeof window !== 'undefined'
        ? window.localStorage.getItem('theme')
        : null;

    setDark(
      stored === 'dark' ||
        (stored !== 'light' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    window.localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  /* ---------------- Active section ---------------- */

  useEffect(() => {
    const sections = NAV.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ---------------- Mobile drawer ---------------- */

  useEffect(() => {
    if (!drawerOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDrawerOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    drawerRef.current?.querySelector<HTMLAnchorElement>('a[href]')?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  /* ---------------- Contact form ---------------- */

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = new FormData(form);

    setStatus('sending');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Request failed');

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/50 backdrop-blur-[2px] md:hidden"
        />
      )}

      <aside
        ref={drawerRef}
        aria-label="Site navigation"
        className={`sidebar fixed inset-y-0 left-0 z-40 flex w-[17.5rem] flex-col px-6 py-8 transition-transform duration-300 md:translate-x-0 ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setDrawerOpen(false)}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[var(--sidebar-text)] transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          <Icon name="close" />
        </button>

        <div className="text-center">
          <img
            src="/profile.jpg"
            alt=""
            width={96}
            height={96}
            className="mx-auto h-24 w-24 rounded-full border border-white/15 object-cover"
          />
          <p className="mt-4 font-display text-xl font-semibold text-white">
            {PROFILE.name}
          </p>
          <p className="mt-0.5 text-sm text-[var(--sidebar-text)]">
            {PROFILE.role}
          </p>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          <a className="social-link" href={PROFILE.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            <Icon name="github" size={17} />
          </a>
          <a className="social-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
            <Icon name="linkedin" size={17} />
          </a>
          <a className="social-link" href={`mailto:${PROFILE.email}`} aria-label="Email">
            <Icon name="mail" size={17} />
          </a>
          <a className="social-link" href={PROFILE.phoneHref} aria-label="Phone">
            <Icon name="phone" size={17} />
          </a>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => setDrawerOpen(false)}
              className={`nav-link ${active === item.id ? 'is-active' : ''}`}
            >
              <Icon name={item.icon} size={18} />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-[var(--sidebar-text)] transition-colors hover:bg-white/10 hover:text-white"
          >
            <span className="flex items-center gap-3">
              <Icon name={dark ? 'sun' : 'moon'} size={18} />
              {dark ? 'Light mode' : 'Dark mode'}
            </span>
            <span
              aria-hidden="true"
              className="h-5 w-9 rounded-full bg-white/20 p-0.5 transition-colors"
            >
              <span
                className={`block h-4 w-4 rounded-full bg-white transition-transform ${
                  dark ? 'translate-x-4' : ''
                }`}
              />
            </span>
          </button>

          <p className="mt-5 text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} {PROFILE.name}
          </p>
        </div>
      </aside>

      <div className="md:pl-[17.5rem]">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--line)] bg-[var(--surface)] px-4 py-3 md:hidden">
          <div>
            <p className="font-display text-base font-semibold">{PROFILE.name}</p>
            <p className="text-xs text-[var(--muted)]">{PROFILE.role}</p>
          </div>
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-2 text-[var(--text)]"
          >
            <Icon name="menu" />
          </button>
        </header>

        <main id="main" className="mx-auto max-w-shell space-y-6 px-4 py-6 sm:px-8 sm:py-8 md:py-10">
          {/* ---------------------------------------------- Hero */}
          <section
            id="home"
            aria-labelledby="home-heading"
            className="card relative overflow-hidden p-6 sm:p-10"
          >
            <span className="glow -right-16 -top-24" aria-hidden="true" />

            <div className="relative">
              <p className="eyebrow">Hello, I&rsquo;m</p>
              <h1
                id="home-heading"
                className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
              >
                Learning, building, and improving every day.
              </h1>
              <p className="lede mt-5 max-w-2xl">
                A Computer Science student and Software Developer focused on
                building practical, user-friendly applications and solving
                real-world problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary">
                  View projects
                  <Icon name="arrow" size={17} />
                </a>
                <a href={PROFILE.resume} download className="btn btn-secondary">
                  <Icon name="download" size={17} />
                  Download resume
                </a>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------- About */}
          <Section id="about" title="About me">
            <div className="grid gap-8 md:grid-cols-[1.45fr_1fr]">
              <p className="text-lg leading-8 text-[var(--muted)]">
                I&rsquo;m Jees Jose, a passionate Software Developer and Computer
                Science student focused on building reliable, user-friendly
                applications and solving real-world problems. I work with
                technologies such as Java, Python, JavaScript, React.js, React
                Native, Node.js, FastAPI, and REST APIs, with a strong interest
                in full-stack and backend development.
              </p>

              <div className="grid grid-cols-2 gap-3 self-start">
                {STATS.map(([value, label]) => (
                  <div key={label} className="stat">
                    <p className="stat-value">{value}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* ---------------------------------------------- Skills & Tools */}
          <SkillsPanel />

          {/* ---------------------------------------------- Projects */}
          <Section id="projects" title="Featured projects">
            <div
              className="project-scroller grid grid-flow-col auto-cols-[88%] gap-6 overflow-x-auto pb-3 sm:auto-cols-[60%] md:auto-cols-[calc((100%_-_1.5rem)_/_2)] lg:auto-cols-[calc((100%_-_3rem)_/_3)]"
              tabIndex={0}
              role="region"
              aria-label="Featured projects, scroll sideways for more"
            >
              {PROJECTS.map((project) => (
                <article key={project.title} className="project-card">
                  <div className="project-media">
                    <img
                      src={project.image}
                      alt={`${project.title} interface`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                      {project.type}
                    </p>

                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="project-summary mt-3 flex-1 text-sm leading-6 text-[var(--muted)]">
                      {project.description}
                    </p>

                    <ul className="project-tags mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li key={tag} className="tech-tag">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] no-underline transition-colors hover:text-[var(--primary)]"
                      >
                        <Icon name="github" size={16} />
                        Source
                      </a>
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] no-underline"
                      >
                        GitHub profile
                        <Icon name="arrow" size={15} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          {/* ---------------------------------------------- Experience */}
          <Section id="experience" title="Experience">
            <div className="space-y-8">
              {EXPERIENCE.map((role) => (
                <div key={role.role} className="timeline-item">
                  <p className="text-sm font-semibold text-[var(--primary)]">
                    {role.period}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold">
                    {role.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    {role.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[0.9375rem] leading-7 text-[var(--muted)]"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* ---------------------------------------------- Resume */}
          <Section id="resume" title="Resume">
            <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-center">
              <p className="leading-7 text-[var(--muted)]">
                Download my resume to learn more about my education, technical
                skills, projects, experience, certifications, and achievements.
              </p>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                <a href={PROFILE.resume} download className="btn btn-primary">
                  <Icon name="download" size={17} />
                  Download resume
                </a>
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-secondary"
                >
                  <Icon name="external" size={17} />
                  Open PDF
                </a>
              </div>
            </div>
          </Section>

          {/* ---------------------------------------------- Contact */}
          <Section id="contact" title="Contact me">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="leading-7 text-[var(--muted)]">
                  Have a project, opportunity, or idea to discuss? I&rsquo;d love
                  to hear from you.
                </p>

                <div className="mt-5 grid gap-1">
                  <ChannelRow
                    icon="mail"
                    label="Email"
                    value={PROFILE.email}
                    href={`mailto:${PROFILE.email}`}
                  />
                  <ChannelRow
                    icon="phone"
                    label="Phone"
                    value={PROFILE.phone}
                    href={PROFILE.phoneHref}
                  />
                  <ChannelRow
                    icon="github"
                    label="GitHub"
                    value="jeesjose4205"
                    href={PROFILE.github}
                    external
                  />
                  <ChannelRow
                    icon="linkedin"
                    label="LinkedIn"
                    value="Jees Jose"
                    href={PROFILE.linkedin}
                    external
                  />
                </div>
              </div>

              <form onSubmit={submit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="field"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label className="field-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the project, role, or idea."
                    className="field resize-y"
                  />
                </div>

                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>

                  <div aria-live="polite" className="min-w-0 flex-1">
                    {status === 'sent' && (
                      <p className="status-note" data-tone="success">
                        <Icon name="check" size={17} />
                        <span>
                          Thanks — your message has been sent. I&rsquo;ll get back
                          to you soon.
                        </span>
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="status-note" data-tone="error">
                        <Icon name="alert" size={17} />
                        <span>
                          Message could not be sent. Please email me directly at{' '}
                          <a className="link-accent" href={`mailto:${PROFILE.email}`}>
                            {PROFILE.email}
                          </a>
                          .
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </Section>

          <footer className="flex flex-col items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row">
            <p>Designed and built by {PROFILE.name}.</p>
            <a href="#home" className="inline-flex items-center gap-1.5 no-underline hover:text-[var(--primary)]">
              Back to top
              <Icon name="up" size={15} />
            </a>
          </footer>
        </main>
      </div>
    </>
  );
}
