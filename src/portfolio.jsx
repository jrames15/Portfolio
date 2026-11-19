import { useState } from "react";
import { Mail, ArrowUpRight, GraduationCap, MapPin } from "lucide-react";

const GithubIcon = ({ size = 15, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const FacebookIcon = ({ size = 15, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const data = {
  profile: {
    name: "James Rhein Monton",
    role: "1st Year College Student — Web Developer",
    tagline:
      "Beginner web developer with an NCII certificate, building one project at a time.",
    location: "Pagadian City, Zamboanga del Sur, PH",
    school: "JH Cerilles State College - Pagadian City Campus",
    school: "Zamboanga del Sur National High School",
    email: "jamesrheinm@gmail.com",
    socials: [
      { label: "GitHub", handle: "jrames15", url: "https://github.com/jrames15", Icon: GithubIcon },
      {
        label: "Facebook",
        handle: "JamesRheinMonton15",
        url: "https://www.facebook.com/JamesRheinMonton15",
        Icon: FacebookIcon,
      },
    ],
  },
  projects: [
    {
      id: "01",
      title: "Plant Growth Tracker",
      year: "2025",
      stack: ["PHP", "MySQL"],
      summary: "A PHP system for tracking plant growth with a login system.",
      details:
        "A small full-stack app that lets a logged-in user record and monitor plant growth over time. Covers session-based authentication, CRUD entries, and a PHP/MySQL backend — an early project focused on getting server-side fundamentals right.",
      link: "https://github.com/jrames15/plant-growth-tracker-php",
    },
    {
      id: "02",
      title: "jramesmonton",
      year: "2025",
      stack: ["HTML", "CSS", "JavaScript"],
      summary: "Personal profile and practice repository.",
      details:
        "First try portfolio inside of my GitHub repository. I use plain HTML and CSS.",
      link: "https://github.com/jrames15/jramesmonton",
    },
    {
      id: "03",
      title: "Pinterest Clone",
      year: "2025",
      stack: ["PHP", "MySQL"],
      summary: "A PHP-based portfolio site.",
      details:
        "It's a duplicate of Pinterest but with a login system and also you can interat and chat others. I use PHP and MySQL for the database if someone logged in and other more.",
      link: "https://github.com/jrames15/pinterest_clone"
    },
  {
    id: "04",
    title: "My first E-Portfolio",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript"],
    summary: "E-Portfolio in my work immersion.",
    details:
      "A front-end project that uses JavaScript to fetch and display weather data from a public API. It demonstrates asynchronous programming and DOM manipulation.",
    link: "https://github.com/jrames15/E-PORTFOLIO-2"
  },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "React (learning)",
    "Git & GitHub",
  ],
};

const tokens = {
  bg: "#0A0A0A",
  surface: "#141414",
  text: "#F5F5F3",
  muted: "#8A8A8A",
  border: "#262626",
  accent: "#FFFFFF",
};

function useExpand(initial = null) {
  const [open, setOpen] = useState(initial);
  return [open, setOpen];
}

export default function Portfolio() {
  const [openId, setOpenId] = useExpand(null);

  return (
    <div style={{ background: tokens.bg, minHeight: "100vh", color: tokens.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; }
        .pf-root { font-family: 'Inter', -apple-system, sans-serif; }
        .pf-display { font-family: 'Space Grotesk', sans-serif; }
        .pf-mono { font-family: 'JetBrains Mono', monospace; letter-spacing: 0.02em; }

        .pf-link {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.15s ease, opacity 0.15s ease;
        }
        .pf-link:hover, .pf-link:focus-visible {
          border-bottom-color: ${tokens.accent};
        }
        .pf-link:focus-visible {
          outline: 2px solid ${tokens.accent};
          outline-offset: 3px;
          border-radius: 2px;
        }

        .pf-hero {
          position: relative;
        }

        .pf-hero::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 62px;
          bottom: 70px;
          width: 2px;
          background: linear-gradient(${tokens.accent}, transparent);
          opacity: 0.7;
        }

        .pf-education {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 12px;
          align-items: start;
          max-width: 520px;
          margin-top: 32px;
          padding: 16px 18px;
          border: 1px solid ${tokens.border};
          border-radius: 8px;
          background: linear-gradient(110deg, ${tokens.surface}, transparent);
        }

        .pf-education-icon {
          display: grid;
          place-items: center;
          width: 32px;
          height: 32px;
          color: ${tokens.bg};
          background: ${tokens.accent};
          border-radius: 50%;
        }

        .pf-education-school {
          margin-top: 5px;
          color: ${tokens.text};
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          line-height: 1.4;
        }

        .pf-location {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 8px;
          color: ${tokens.muted};
          font-size: 12px;
        }

        .pf-row {
          border-top: 1px solid ${tokens.border};
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .pf-row:hover, .pf-row:focus-visible {
          background: ${tokens.surface};
        }
        .pf-row:focus-visible {
          outline: 2px solid ${tokens.accent};
          outline-offset: -2px;
        }

        .pf-panel {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.25s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          .pf-row, .pf-link, .pf-panel { transition: none !important; }
        }

        @media (max-width: 640px) {
          .pf-hero-name { font-size: 2.4rem !important; }
          .pf-hero::before { left: -12px; top: 42px; bottom: 64px; }
          .pf-row-inner { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
          .pf-row-year { display: none !important; }
        }
      `}</style>

      <div
        className="pf-root"
        style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px" }}
      >
        {/* Nav */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "28px 0",
            fontSize: 13,
          }}
          className="pf-mono"
        >
          <span style={{ color: tokens.muted }}>JRM / PORTFOLIO</span>
          <span style={{ color: tokens.muted }}>{data.profile.location}</span>
        </nav>

        {/* Hero */}
        <header className="pf-hero" style={{ padding: "64px 0 72px" }}>
          <h1
            className="pf-display pf-hero-name"
            style={{
              fontSize: "4rem",
              fontWeight: 700,
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {data.profile.name}
          </h1>
          <p
            className="pf-mono"
            style={{
              color: tokens.muted,
              fontSize: 14,
              marginTop: 18,
              marginBottom: 0,
            }}
          >
            {data.profile.role}
          </p>
          <p
            style={{
              color: tokens.text,
              fontSize: 17,
              lineHeight: 1.6,
              maxWidth: 480,
              marginTop: 20,
            }}
          >
            {data.profile.tagline}
          </p>

          <div className="pf-education">
            <span className="pf-education-icon" aria-hidden="true">
              <GraduationCap size={17} strokeWidth={2} />
            </span>
            <div>
              <div className="pf-mono" style={{ color: tokens.muted, fontSize: 11 }}>
                EDUCATION
              </div>
              <div className="pf-education-school">{data.profile.school}</div>
              <div className="pf-location">
                <MapPin size={13} strokeWidth={1.75} />
                {data.profile.location}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, marginTop: 32 }}>
            {data.profile.socials.map(({ label, url, Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="pf-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                }}
              >
                <Icon size={15} strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </div>
        </header>

        {/* Projects */}
        <section style={{ paddingBottom: 72 }}>
          <div
            className="pf-mono"
            style={{ color: tokens.muted, fontSize: 13, marginBottom: 12 }}
          >
            PROJECTS
          </div>

          <div style={{ borderBottom: `1px solid ${tokens.border}` }}>
            {data.projects.map((p) => {
              const isOpen = openId === p.id;
              return (
                <div key={p.id}>
                  <div
                    className="pf-row"
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenId(isOpen ? null : p.id);
                      }
                    }}
                    style={{ padding: "20px 4px" }}
                  >
                    <div
                      className="pf-row-inner"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 20,
                      }}
                    >
                      <span
                        className="pf-mono"
                        style={{ color: tokens.muted, fontSize: 13, width: 20 }}
                      >
                        {p.id}
                      </span>
                      <span
                        className="pf-display"
                        style={{
                          fontSize: 22,
                          fontWeight: 500,
                          flex: 1,
                        }}
                      >
                        {p.title}
                      </span>
                      <span
                        className="pf-mono pf-row-year"
                        style={{ color: tokens.muted, fontSize: 12 }}
                      >
                        {p.year}
                      </span>
                      <span
                        style={{
                          color: tokens.muted,
                          fontSize: 18,
                          transform: isOpen ? "rotate(45deg)" : "none",
                          transition: "transform 0.2s ease",
                          display: "inline-block",
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  <div
                    className="pf-panel"
                    style={{
                      maxHeight: isOpen ? 240 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div style={{ padding: "0 4px 28px 44px" }}>
                      <p
                        style={{
                          color: tokens.text,
                          fontSize: 15,
                          lineHeight: 1.65,
                          maxWidth: 520,
                          marginTop: 0,
                        }}
                      >
                        {p.details}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 8,
                          marginTop: 14,
                        }}
                      >
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="pf-mono"
                            style={{
                              fontSize: 11,
                              color: tokens.muted,
                              border: `1px solid ${tokens.border}`,
                              borderRadius: 3,
                              padding: "3px 8px",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="pf-link"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          fontSize: 13,
                          marginTop: 16,
                        }}
                      >
                        View repository <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About / Skills */}
        <section style={{ paddingBottom: 72 }}>
          <div
            className="pf-mono"
            style={{ color: tokens.muted, fontSize: 13, marginBottom: 16 }}
          >
            SKILLS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {data.skills.map((s) => (
              <span
                key={s}
                className="pf-mono"
                style={{
                  fontSize: 12,
                  color: tokens.text,
                  border: `1px solid ${tokens.border}`,
                  borderRadius: 3,
                  padding: "6px 12px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer
          style={{
            borderTop: `1px solid ${tokens.border}`,
            padding: "40px 0 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <a
            href={`mailto:${data.profile.email}`}
            className="pf-link pf-display"
            style={{ fontSize: 20, display: "flex", alignItems: "center", gap: 8 }}
          >
            <Mail size={16} strokeWidth={1.75} />
            {data.profile.email}
          </a>
          <span className="pf-mono" style={{ color: tokens.muted, fontSize: 12 }}>
            © {new Date().getFullYear()} {data.profile.name}
          </span>
        </footer>
      </div>
    </div>
  );
}
