"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";

const assistantAnswers = [
  "Sami is learning AI, Python, web development, and trading discipline. He is early, hungry, and building in public.",
  "Best place to start: check the Projects and Skills sections, then download the resume.",
  "For collaboration, email Sami at sayeed3625525@gmail.com.",
  "Current focus: AI foundations, frontend projects, and turning market curiosity into disciplined systems."
];

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      className="iconButton"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "LIGHT" : "DARK"}
    </button>
  );
}

function BangladeshMap() {
  return (
    <div className="mapPanel" aria-label="Stylized Bangladesh map">
      <svg viewBox="0 0 260 320" role="img">
        <defs>
          <linearGradient id="mapGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#32f6ff" />
            <stop offset="55%" stopColor="#77ff9d" />
            <stop offset="100%" stopColor="#f7d046" />
          </linearGradient>
        </defs>
        <path
          className="mapShape"
          d="M143 14 118 31 124 54 97 71 105 98 82 116 91 145 65 164 79 193 58 211 82 236 80 268 112 258 136 303 158 266 194 280 184 238 213 215 190 190 211 156 178 139 186 101 154 86 164 47Z"
        />
        <path
          className="mapSweep"
          d="M38 243 C92 203 145 172 220 131"
        />
        <circle className="mapDot" cx="130" cy="168" r="8" />
      </svg>
      <div>
        <span>Dhaka Signal</span>
        <strong>Bangladesh</strong>
      </div>
    </div>
  );
}

function Assistant() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState(assistantAnswers[0]);

  const ask = () => {
    const next =
      assistantAnswers[
        Math.floor((Date.now() / 1000) % assistantAnswers.length)
      ];
    setAnswer(next);
  };

  return (
    <div className={`assistant ${open ? "isOpen" : ""}`}>
      {open && (
        <div className="assistantPanel">
          <p className="eyebrow">Sami Assistant</p>
          <p>{answer}</p>
          <button className="smallButton" onClick={ask}>
            Ask again
          </button>
        </div>
      )}
      <button className="assistantButton" onClick={() => setOpen(!open)}>
        AI
      </button>
    </div>
  );
}

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main>
      <div className="vfxLayer" aria-hidden="true">
        <span className="gridPlane" />
        <span className="scanline" />
        <span className="orb orbOne" />
        <span className="orb orbTwo" />
        <span className="slash slashOne" />
        <span className="slash slashTwo" />
      </div>
      <nav className="nav">
        <a className="clock" href="#home">
          SAMI / {year}
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <ThemeToggle />
      </nav>

      <section id="home" className="hero section">
        <div className="sideAvailability">AVAILABLE FOR OPPORTUNITY</div>
        <div className="heroGrid">
          <div className="heroSide">
            <div className="darkSoulMark">
              <Image
                src="/dark-soul.png"
                width={96}
                height={96}
                alt="Dark Soul group logo"
              />
              <div>
                <span>Group Signal</span>
                <strong>DARK SOUL</strong>
              </div>
            </div>
            <p className="micro">{portfolio.heroIntro}</p>
            <div className="socials">
              <a href={portfolio.github}>GH</a>
              <a href={`mailto:${portfolio.email}`}>MAIL</a>
            </div>
          </div>

          <div className="heroMain">
            <p className="eyebrow">Hi, I'm {portfolio.name}. Call me {portfolio.nickname}.</p>
            <div className="roleStrip">
              <span>Stock Trader</span>
              <span>Vibe Coder</span>
              <span>Future AI Engineer</span>
            </div>
            <h1>
              AI & DATA
              <span>ENGINEER</span>
            </h1>
            <p className="heroBio">{portfolio.collaboration}</p>
            <div className="heroActions">
              <a className="primaryButton" href={portfolio.resume}>
                View Resume
              </a>
              <a className="secondaryButton" href="#projects">
                Explore Work
              </a>
            </div>
          </div>

          <div className="profileCard">
            <div className="profileFrame">
              <span className="corner cornerA" />
              <span className="corner cornerB" />
              <Image
                src="/profile.png"
                width={480}
                height={480}
                alt="Mohammad Abu Sayeed profile"
                priority
              />
            </div>
            <div>
              <span>Available for opportunity</span>
              <strong>{portfolio.location}</strong>
            </div>
          </div>
        </div>
        <div className="heroTicker">
          <span>AI SYSTEMS</span>
          <span>DATA DISCIPLINE</span>
          <span>MARKET MINDSET</span>
          <span>DARK SOUL</span>
        </div>
      </section>

      <section className="section introBand">
        <div>
          <p className="eyebrow">Core Focus</p>
          <h2>Stock Trader. Vibe Coder. Future AI Engineer.</h2>
        </div>
        <p>{portfolio.bio}</p>
      </section>

      <section className="stats section">
        {portfolio.stats.map((stat) => (
          <a className="statCard" href="#about" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </a>
        ))}
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>Building discipline, skill, and confidence one project at a time.</h2>
          <p>
            I am at the beginner stage, but I care about progress. My path is
            AI, software, and financial markets: three worlds where clear
            thinking matters.
          </p>
        </div>
        <BangladeshMap />
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Tech & Tools</p>
          <h2>Tools I am learning and using.</h2>
        </div>
        <div className="marquee">
          <div>
            {[...portfolio.tools, ...portfolio.tools].map((tool, index) => (
              <span key={`${tool}-${index}`}>{tool}</span>
            ))}
          </div>
        </div>
        <div className="skillGrid">
          {portfolio.skills.map((skill) => (
            <div className="skillCard" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionHeader">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects now, bigger systems next.</h2>
        </div>
        <div className="projectGrid">
          {portfolio.projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p className="eyebrow">{project.type} / {project.year}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline">
        <div className="sectionHeader">
          <p className="eyebrow">Education & Experience</p>
          <h2>Foundation first. Momentum always.</h2>
        </div>
        {[...portfolio.education, ...portfolio.experience].map((item) => (
          <div className="timelineItem" key={item.title}>
            <strong>{item.title}</strong>
            <span>{"result" in item ? item.result : item.period}</span>
            <p>{item.detail}</p>
          </div>
        ))}
      </section>

      <section id="contact" className="section cta">
        <p className="eyebrow">Let&apos;s Build</p>
        <h2>Open to collaboration, learning, and real projects.</h2>
        <div className="heroActions">
          <a className="primaryButton" href={`mailto:${portfolio.email}`}>
            Email Me
          </a>
          <a className="secondaryButton" href={portfolio.github}>
            GitHub
          </a>
        </div>
      </section>

      <footer>
        <span>{portfolio.name}</span>
        <span>{portfolio.role}</span>
      </footer>
      <Assistant />
    </main>
  );
}
