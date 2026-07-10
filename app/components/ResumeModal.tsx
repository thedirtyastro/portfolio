"use client";

import { useEffect, useState, useCallback } from "react";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

type Page = 0 | 1 | 2;

const SKILLS: Record<string, string[]> = {
  "Frontend": ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "AngularJS / Angular", "GSAP", "Framer Motion"],
  "Backend & DB": ["Java Spring Boot", "Node.js", "RESTful APIs", "MongoDB", "MySQL", "PostgreSQL"],
  "Web3 & Blockchain": ["Solana", "Wallet Connectivity", "Web3 Integration", "Blockchain UI", "dApp Development"],
  "Tools & Workflow": ["Git / GitHub", "VS Code", "Figma", "Postman", "Agile / Scrum", "Mifos X"],
};

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const [page, setPage] = useState<Page>(0);
  const [animKey, setAnimKey] = useState(0);
  const [flipDir, setFlipDir] = useState<"next" | "prev">("next");
  const [busy, setBusy] = useState(false);

  useEffect(() => { if (open) { setPage(0); setAnimKey(k => k + 1); } }, [open]);

  useEffect(() => {
    if (!open) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const goTo = useCallback((target: Page, dir: "next" | "prev") => {
    if (busy || target === page) return;
    setBusy(true);
    setFlipDir(dir);
    // Small delay so the exit animation plays before content swaps
    setTimeout(() => {
      setPage(target);
      setAnimKey(k => k + 1);
      setBusy(false);
    }, 350);
  }, [busy, page]);

  if (!open) return null;

  const HEADER_H = 57;   // px — measured from padding
  const FOOTER_H = 57;   // px
  const MODAL_H  = "min(92vh, 780px)";

  return (
    <>
      {/* ── Keyframes — injected once ── */}
      <style>{`
        @keyframes rm-enter-next {
          from { opacity: 0; transform: perspective(900px) rotateY(-14deg) translateX(24px); }
          to   { opacity: 1; transform: perspective(900px) rotateY(0deg)   translateX(0); }
        }
        @keyframes rm-enter-prev {
          from { opacity: 0; transform: perspective(900px) rotateY(14deg)  translateX(-24px); }
          to   { opacity: 1; transform: perspective(900px) rotateY(0deg)   translateX(0); }
        }
        .rm-page-next { animation: rm-enter-next 0.38s cubic-bezier(0.16,0.8,0.24,1) both; }
        .rm-page-prev { animation: rm-enter-prev 0.38s cubic-bezier(0.16,0.8,0.24,1) both; }
        .rm-scroll::-webkit-scrollbar       { width: 4px; }
        .rm-scroll::-webkit-scrollbar-track { background: #faf9f6; }
        .rm-scroll::-webkit-scrollbar-thumb { background: #d8d6cd; border-radius: 2px; }
        .rm-scroll { scrollbar-width: thin; scrollbar-color: #d8d6cd #faf9f6; }
        /* always light inside modal regardless of site theme */
        #resume-modal-card * { color-scheme: light; }
        /* restore native cursor everywhere inside the modal */
        #resume-modal-card, #resume-modal-card * { cursor: auto; }
        #resume-modal-card button, #resume-modal-card a { cursor: pointer; }
        #resume-modal-card button:disabled { cursor: default; }
      `}</style>

      {/* ── Backdrop ── */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 10000,
          background: "rgba(10,10,9,0.75)",
          backdropFilter: "blur(5px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px",
        }}
      >
        {/* ── Modal card ── */}
        <div
          id="resume-modal-card"
          onClick={e => e.stopPropagation()}
          style={{
            /* Size — explicit height so flex children resolve correctly */
            width: "100%",
            maxWidth: 780,
            height: MODAL_H,
            /* Layout */
            display: "flex",
            flexDirection: "column",
            /* Appearance — always light */
            background: "#faf9f6",
            color: "#0a0a09",
            boxShadow: "0 32px 96px rgba(0,0,0,0.4)",
            overflow: "hidden",
            position: "relative",
            /* Restore native cursor — site sets cursor:none on body */
            cursor: "auto",
          }}
        >
          {/* ── TOP BAR ── */}
          <div style={{
            flexShrink: 0,
            height: HEADER_H,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 28px",
            borderBottom: "1px solid #d8d6cd",
            background: "#faf9f6",
          }}>
            <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#68675f", fontWeight: 500 }}>
              Résumé — Sarukhan Muthuraman
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Page dots */}
              {([0, 1, 2] as Page[]).map(p => (
                <button key={p} onClick={() => goTo(p, p > page ? "next" : "prev")}
                  aria-label={`Page ${p + 1}`}
                  style={{
                    width: 7, height: 7, borderRadius: "50%", padding: 0,
                    border: "1px solid #0a0a09",
                    background: page === p ? "#0a0a09" : "transparent",
                    cursor: "pointer", transition: "background 0.2s",
                  }}
                />
              ))}
              {/* Close */}
              <button onClick={onClose} aria-label="Close"
                style={{
                  marginLeft: 4,
                  width: 28, height: 28,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid #d8d6cd", background: "transparent",
                  cursor: "pointer", fontSize: 18, color: "#0a0a09", lineHeight: 1,
                }}>×</button>
            </div>
          </div>

          {/* ── SCROLLABLE CONTENT ── */}
          {/* flex: 1 + overflow-y: auto is the simplest reliable pattern */}
          <div
            key={animKey}
            className={`rm-scroll ${flipDir === "next" ? "rm-page-next" : "rm-page-prev"}`}
            style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              background: "#faf9f6",
              // explicit min-height so flex item doesn't collapse to 0
              minHeight: 0,
            }}
          >
            {page === 0 && <Page1 />}
            {page === 1 && <Page2 />}
            {page === 2 && <Page3 />}
          </div>

          {/* ── FOOTER NAV ── */}
          <div style={{
            flexShrink: 0,
            height: FOOTER_H,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 28px",
            borderTop: "1px solid #d8d6cd",
            background: "#faf9f6",
          }}>
            <button onClick={() => goTo((page - 1) as Page, "prev")} disabled={page === 0}
              style={{
                fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "8px 18px",
                border: `1px solid ${page === 0 ? "#d8d6cd" : "#0a0a09"}`,
                color: page === 0 ? "#d8d6cd" : "#0a0a09",
                background: "transparent", cursor: page === 0 ? "default" : "pointer",
                transition: "all 0.2s",
              }}>← Prev</button>

            <span style={{ fontSize: 11, color: "#68675f", letterSpacing: "0.1em" }}>
              {page + 1} / 3
            </span>

            <button onClick={() => goTo((page + 1) as Page, "next")} disabled={page === 2}
              style={{
                fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "8px 18px",
                border: `1px solid ${page === 2 ? "#d8d6cd" : "#0a0a09"}`,
                color: page === 2 ? "#d8d6cd" : "#faf9f6",
                background: page === 2 ? "transparent" : "#0a0a09",
                cursor: page === 2 ? "default" : "pointer",
                transition: "all 0.2s",
              }}>Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE 1 — Profile + Work Experience
══════════════════════════════════════════════════════════ */
function Page1() {
  return (
    <div style={{ padding: "28px 28px 32px", color: "#0a0a09" }}>

      {/* Name block */}
      <div style={{ borderBottom: "2px solid #0a0a09", paddingBottom: 18, marginBottom: 22 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 5, color: "#0a0a09" }}>
          Sarukhan Muthuraman
        </h2>
        <p style={{ fontSize: 13, color: "#68675f", marginBottom: 10 }}>
          Frontend Developer · 2+ Years Experience
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 20px", fontSize: 11, color: "#68675f" }}>
          <span>📞 7092978110</span>
          <span>✉ s.saru7072@gmail.com</span>
          <span>📍 Bangalore, Karnataka, India</span>
          <a href="https://uplabs.com/muazz1m" target="_blank" rel="noopener noreferrer"
            style={{ color: "#0a0a09", textDecoration: "underline" }}>
            uplabs.com/muazz1m ↗
          </a>
        </div>
      </div>

      <RSection title="Profile">
        <p style={{ fontSize: 13, lineHeight: 1.8, color: "#68675f" }}>
          Frontend Developer with 2+ years of experience creating responsive and user-friendly web applications.
          Skilled in React.js, Next.js, Tailwind CSS, Web3 technologies, API integration, and API development,
          with a good understanding of backend systems. I enjoy building intuitive digital experiences, solving
          real-world problems, and learning new technologies.
        </p>
      </RSection>

      <RSection title="Work Experience">
        <ExpItem
          title="Developer" company="Tradala Trade Solutions (Xyra Labs)" date="APR 2025 – PRESENT"
          bullets={[
            "Developed Web3-based apps using React.js, Next.js, and MongoDB.",
            "Contributed to a blockchain-powered gaming platform implementing user-facing features.",
            "Designed reusable, responsive UI components for consistent cross-device UX.",
            "Built and integrated backend APIs for gaming and blockchain functionalities.",
            "Worked on wallet connectivity, blockchain interactions, and Web3 integrations.",
            "Improved responsiveness and performance across desktop, tablet, and mobile.",
            "Collaborated with designers to convert wireframes into production-ready interfaces.",
          ]}
        />
        <ExpItem
          title="Developer" company="Rocket Finance" date="FEB 2023 – APR 2024"
          bullets={[
            "Built full-stack applications using Java Spring Boot, Angular/AngularJS, and MySQL.",
            "Designed and enhanced RESTful APIs for business and banking operations.",
            "Worked extensively on Mifos X banking platform, customizing modules to spec.",
            "Redesigned UIs to improve usability, accessibility, and overall experience.",
            "Developed customer management, loan processing, and financial operation features.",
            "Participated in DB design, schema creation, query optimization, and perf tuning.",
            "Contributed to P2P lending and digital banking fintech solutions.",
          ]}
        />
        <ExpItem
          title="Incubation Trainee" company="ZOHO" date="JUL 2022 – SEP 2022" last
          bullets={[
            "Completed intensive training in Java and object-oriented design principles.",
            "Developed solutions and mini-projects using Java and C++.",
            "Strengthened problem-solving via data structures and algorithms implementation.",
            "Gained experience with debugging, optimization, and exception handling.",
          ]}
        />
      </RSection>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE 2 — Projects
══════════════════════════════════════════════════════════ */
function Page2() {
  return (
    <div style={{ padding: "28px 28px 32px", color: "#0a0a09" }}>
      <RSection title="Projects">
        <ProjItem
          name="Kaching – Web3 Lottery Platform"
          stack="Next.js · MongoDB · Tailwind CSS · Framer Motion · Solana"
          link="kaching.vip"
          bullets={[
            "Developed responsive, interactive UIs using Next.js and Tailwind CSS.",
            "Built reusable UI component architecture for improved maintainability.",
            "Implemented smooth animations with Framer Motion to enhance engagement.",
            "Integrated frontend with backend APIs for lottery game operations.",
            "Collaborated on Solana blockchain integrations for wallet connectivity.",
            "Optimized performance via component-level rendering and lazy loading.",
          ]}
        />
        <ProjItem
          name="Perps Mobile – Perpetual Trading Platform"
          stack="Next.js · MongoDB · Web3"
          bullets={[
            "Built the complete mobile-responsive version of the platform from scratch.",
            "Converted complex desktop trading workflows into intuitive mobile UX.",
            "Integrated and adapted APIs for mobile trading functionalities.",
            "Implemented animations, transitions, and gesture-friendly interactions.",
            "Ensured seamless wallet integration and blockchain user flows on mobile.",
            "Tested extensively across Android and iOS browsers for compatibility.",
          ]}
        />
        <ProjItem
          name="Rocket Finance – P2P Loan Application"
          stack="Angular · Java Spring Boot · MySQL"
          bullets={[
            "Developed and maintained backend APIs for a peer-to-peer lending platform.",
            "Designed and optimized database schemas for consistency and performance.",
            "Implemented business logic for loan processing and financial workflows.",
            "Collaborated with frontend devs to integrate APIs and improve UX.",
          ]}
        />
        <ProjItem
          name="Mifos Admin Tool"
          stack="AngularJS · Java Spring Boot · MySQL"
          bullets={[
            "Customized Mifos admin modules for Rocket Finance business requirements.",
            "Modified UI components, forms, dashboards, and admin workflows.",
            "Developed backend enhancements for custom business processes.",
            "Integrated admin functionalities with Rocket Finance mobile apps.",
          ]}
        />
        <ProjItem
          name="Points Leaderboard"
          stack="Next.js · PostgreSQL"
          last
          bullets={[
            "Developed a real-time leaderboard for ranking platform users.",
            "Built responsive ranking tables, profile displays, and points tracking.",
            "Integrated APIs for dynamic leaderboard data with sorting and filtering.",
            "Optimized data rendering for large user datasets.",
          ]}
        />
      </RSection>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE 3 — Skills + Education
══════════════════════════════════════════════════════════ */
function Page3() {
  return (
    <div style={{ padding: "28px 28px 32px", color: "#0a0a09" }}>
      <RSection title="Skills">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "18px 24px" }}>
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#68675f", marginBottom: 9, fontWeight: 700 }}>
                {cat}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {items.map(s => (
                  <span key={s} style={{
                    fontSize: 11, padding: "4px 9px",
                    border: "1px solid #d8d6cd", color: "#0a0a09",
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RSection>

      <RSection title="Education">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <EduItem degree="B.Tech – Information Technology" school="PSNA College of Engineering and Technology" date="JUN 2018 – MAY 2022" grade="72%" /> 
          <EduItem degree="HSC" school="MNU Jayaraj Nadar Hr Sec School" date="JUN 2017 – APR 2018" grade="71%" />
        </div>
      </RSection>

      <div style={{
        marginTop: 24, paddingTop: 20, borderTop: "1px solid #d8d6cd",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
      }}>
        <p style={{ fontSize: 12, color: "#68675f" }}>Want a copy of the full resume?</p>
        <a href="/Sarukhan-Resume.pdf" download
          style={{
            fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
            color: "#faf9f6", background: "#0a0a09",
            padding: "10px 22px", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
          Download PDF ↓
        </a>
      </div>
    </div>
  );
}

/* ── Shared layout helpers ───────────────────────────────── */

function RSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 26 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#0a0a09", whiteSpace: "nowrap" }}>
          {title}
        </span>
        <div style={{ flex: 1, height: 1, background: "#d8d6cd" }} />
      </div>
      {children}
    </div>
  );
}

function ExpItem({ title, company, date, bullets, last }: {
  title: string; company: string; date: string; bullets: string[]; last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : 18, paddingBottom: last ? 0 : 18, borderBottom: last ? "none" : "1px solid #ece9e3" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2px 8px", marginBottom: 5 }}>
        <div>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#0a0a09" }}>{title}</span>
          <span style={{ fontSize: 12, color: "#68675f", marginLeft: 7 }}>— {company}</span>
        </div>
        <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#68675f" }}>{date}</span>
      </div>
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 12, lineHeight: 1.7, color: "#68675f", marginBottom: 1 }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjItem({ name, stack, link, bullets, last }: {
  name: string; stack: string; link?: string; bullets: string[]; last?: boolean;
}) {
  return (
    <div style={{ marginBottom: last ? 0 : 18, paddingBottom: last ? 0 : 18, borderBottom: last ? "none" : "1px solid #ece9e3" }}>
      <div style={{ marginBottom: 5 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#0a0a09" }}>{name}</span>
        {link && (
          <a href={`https://${link}`} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 11, color: "#68675f", marginLeft: 9, textDecoration: "underline" }}>
            {link} ↗
          </a>
        )}
        <p style={{ fontSize: 10, color: "#68675f", marginTop: 2, fontStyle: "italic" }}>{stack}</p>
      </div>
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 12, lineHeight: 1.7, color: "#68675f", marginBottom: 1 }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function EduItem({ degree, school, date, grade }: {
  degree: string; school: string; date: string; grade: string;
}) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "flex-start",
      flexWrap: "wrap", gap: 8, padding: "12px 14px", border: "1px solid #d8d6cd",
    }}>
      <div>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#0a0a09", marginBottom: 3 }}>{degree}</p>
        <p style={{ fontSize: 12, color: "#68675f" }}>{school}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#68675f" }}>{date}</p>
        <p style={{ fontSize: 13, fontWeight: 600, color: "#0a0a09", marginTop: 4 }}>{grade}</p>
      </div>
    </div>
  );
}
