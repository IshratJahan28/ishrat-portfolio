"use client";
import { useEffect, useRef, useState } from "react";
import { links, research, categories, projects, skills, honors, certificates, education } from "../data";

const words = ["learn", "forget", "explain"];
const nav = ["about", "research", "projects", "skills", "certifications", "journey", "highlights", "contact"];
const GH = "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z";
const LI = "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z";
const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
);

function Network() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!;
    const x = c.getContext("2d")!;
    let w = 0, h = 0, raf = 0;
    const m = { x: -999, y: -999 };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pts = Array.from({ length: 75 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0004, vy: (Math.random() - 0.5) * 0.0004 }));
    const size = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
    const mv = (e: MouseEvent) => { m.x = e.clientX; m.y = e.clientY; };
    size();
    addEventListener("resize", size);
    addEventListener("mousemove", mv);
    const draw = () => {
      x.clearRect(0, 0, w, h);
      const col = getComputedStyle(document.documentElement).getPropertyValue("--dot").trim() || "127,180,255";
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i], ax = a.x * w, ay = a.y * h;
        x.fillStyle = `rgba(${col},.75)`;
        x.beginPath(); x.arc(ax, ay, 1.8, 0, 7); x.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const bx = pts[j].x * w, by = pts[j].y * h, d = Math.hypot(ax - bx, ay - by);
          if (d < 150) { x.strokeStyle = `rgba(${col},${(1 - d / 150) * 0.3})`; x.beginPath(); x.moveTo(ax, ay); x.lineTo(bx, by); x.stroke(); }
        }
        const dm = Math.hypot(ax - m.x, ay - m.y);
        if (dm < 190) { x.strokeStyle = `rgba(${col},${(1 - dm / 190) * 0.65})`; x.beginPath(); x.moveTo(ax, ay); x.lineTo(m.x, m.y); x.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", size); removeEventListener("mousemove", mv); };
  }, []);
  return <canvas ref={ref} className="net" aria-hidden="true" />;
}

function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 9}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 9}deg`);
    el.style.setProperty("--px", `${px * 100}%`);
    el.style.setProperty("--py", `${py * 100}%`);
  };
  const leave = () => { ref.current?.style.setProperty("--rx", "0deg"); ref.current?.style.setProperty("--ry", "0deg"); };
  return <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>{children}</div>;
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [word, setWord] = useState(0);
  const [active, setActive] = useState("about");
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setWord((w) => (w + 1) % words.length), 2200);
    const s = setTimeout(() => setSplash(false), 2900);
    return () => { clearInterval(t); clearTimeout(s); };
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        if (e.target.tagName === "SECTION" && e.target.id) setActive(e.target.id);
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal, section[id]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {splash && <div className="splash"><span>Ishrat Jahan</span></div>}
      <Network />

      <nav className="nav">
        <div className="wrap navin">
          <a href="#top" className="logo">IJ <em>✦</em></a>
          <div className="navlinks">
            {nav.map((n) => (
              <a key={n} href={`#${n}`} className={active === n ? "on" : ""}>{n[0].toUpperCase() + n.slice(1)}</a>
            ))}
          </div>
          <div className="navicons">
            <a href={links.github} aria-label="GitHub"><Icon d={GH} /></a>
            <a href={links.linkedin} aria-label="LinkedIn"><Icon d={LI} /></a>
            <button onClick={() => setDark(!dark)} aria-label="Switch light or dark theme">{dark ? "☀" : "☾"}</button>
          </div>
        </div>
      </nav>

      <header id="top" className="wrap hero">
        <div>
          <p className="tag"><i />Understanding how intelligent systems think</p>
          <h1>Ishrat<br />Jahan</h1>
          <p className="role">AI/ML Researcher &amp; Software Engineer</p>
          <p className="rot">I study how models <span key={word} className="swap">{words[word]}</span></p>
          <div className="actions">
            <a className="btn" href="/Ishrat_Jahan_Resume.pdf" download>Download Resume</a>
            <a className="btn alt" href="#projects">Explore my work</a>
          </div>
        </div>
        <Tilt className="photo">
          <svg className="curves" viewBox="0 0 400 500" aria-hidden="true">
            <path d="M-30 130C110-30 300 30 430 170" /><path d="M0 490C150 380 300 430 430 300" />
          </svg>
          <div className="frame" />
          <div className="ring">{/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ishrat.jpg" alt="Portrait of Ishrat Jahan" />
          </div>
        </Tilt>
      </header>

      <main>
        <section id="about" className="wrap">
          <h2 className="reveal">About me</h2>
          <p className="reveal big">
            Hi! I'm Ishrat, a Computer Science and Engineering graduate from BRAC University. I'm fascinated by how
            intelligent systems learn, and just as much by how they forget and explain themselves. My work spans
            AI/ML research, web development and computer networking: from studying unlearning in multimodal language
            models and explainable phishing detection, to building full-stack platforms and designing multi-site
            networks. I enjoy turning a tangled problem into something clear and practical, and I want to build AI
            that people can trust.
          </p>
        </section>

        <section id="research" className="wrap">
          <h2 className="reveal">Research</h2>
          <p className="sub reveal">The question behind my thesis.</p>
          <div className="grid">
            {research.map((r) => (
              <Tilt key={r.title} className="reveal">
                <article className="card"><p className="meta">{r.tag}</p><h4>{r.title}</h4><p>{r.body}</p></article>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="projects" className="wrap">
          <h2 className="reveal">Projects</h2>
          <p className="sub reveal">Things I've built, grouped by area.</p>
          {categories.map((c) => (
            <div className="group" key={c}>
              <h3 className="cat reveal">{c}</h3>
              <div className="grid">
                {projects.filter((p) => p.category === c).map((p, i) => (
                  <Tilt key={p.name} className="reveal">
                    <article className="card">
                      <span className="num">{String(i + 1).padStart(2, "0")}</span>
                      <h4>{p.name}</h4>
                      {p.subtitle && <p className="subt">{p.subtitle}</p>}
                      <div className="tags">{p.stack.split(", ").map((t) => <span key={t}>{t}</span>)}</div>
                      <p>{p.body}</p>
                      {p.details?.map(([t, items]) => (
                        <div key={t}><h5>{t}</h5><ul>{items.map((it) => <li key={it}>{it}</li>)}</ul></div>
                      ))}
                      {p.href && <a className="btn sm" href={p.href}>View on GitHub</a>}
                    </article>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="skills" className="wrap">
          <h2 className="reveal">Skills and technologies</h2>
          <p className="sub reveal">Tools I've worked with while building projects.</p>
          <div className="grid">
            {skills.map(([k, v]) => (
              <Tilt key={k} className="reveal">
                <article className="card"><h4>{k}</h4><div className="tags">{v.split(", ").map((s) => <span key={s}>{s}</span>)}</div></article>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="certifications" className="wrap">
          <h2 className="reveal">Certifications</h2>
          <p className="sub reveal">Courses I've completed to deepen my skills.</p>
          <div className="grid three">
            {certificates.map((c) => (
              <Tilt key={c.id} className="reveal">
                <article className="card cert">
                  <span className="pillt">DataCamp</span>
                  <h4>{c.title}</h4>
                  <div className="meta2">
                    <div><small>Issued</small><b>{c.issued}</b></div>
                    <div><small>Credential ID</small><b>{c.id}</b></div>
                  </div>
                  <a className="link" href={`/certificates/${c.file}`}>View certificate →</a>
                </article>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="journey" className="wrap">
          <h2 className="reveal">My journey</h2>
          <p className="sub reveal">Education and experience.</p>
          <div className="tl">
            {education.map(([k, v, y]) => (
              <div className="reveal" key={k}><span className="year">{y}</span><h4>{k}</h4><p>{v}</p></div>
            ))}
            <div className="reveal">
              <span className="year">Experience</span>
              <h4>Senior Executive, Event Management</h4>
              <p>Computer Club of BRAC University. I plan and run events, coordinate timelines and teams, and work with sponsors from first outreach to delivering the agreed benefits.</p>
            </div>
          </div>
        </section>

        <section id="highlights" className="wrap">
          <h2 className="reveal">Highlights</h2>
          <p className="sub reveal">Academic recognition.</p>
          <div className="grid three">
            {honors.map(([k, v]) => (
              <Tilt key={k} className="reveal">
                <article className="card"><span className="num">✦</span><h4>{k}</h4><p>{v}</p></article>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="contact" className="wrap">
          <h2 className="reveal">Let's work together</h2>
          <p className="sub reveal">The best way to reach me is email.</p>
          <div className="grid three">
            <Tilt className="reveal"><a className="card cc" href={`mailto:${links.email}`}><b>Email</b><span>{links.email}</span></a></Tilt>
            <Tilt className="reveal"><a className="card cc" href={links.github}><Icon d={GH} /><b>GitHub</b></a></Tilt>
            <Tilt className="reveal"><a className="card cc" href={links.linkedin}><Icon d={LI} /><b>LinkedIn</b></a></Tilt>
          </div>
        </section>
      </main>
      <footer className="wrap foot">© 2026 Ishrat Jahan</footer>
    </>
  );
}
