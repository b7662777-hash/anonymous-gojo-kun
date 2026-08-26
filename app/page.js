import Link from "next/link";

const projects = [
  {
    name: "SYSTEM_JINWOO",
    type: "AI / SYSTEMS",
    description:
      "Native AI development workspace combining multi-model AI chat, project management, terminal tooling and local credential protection.",
    stack: ["Rust", "Tauri", "React", "TypeScript", "AI"],
    href: "https://github.com/b7662777-hash/SYSTEM_JINWOO",
    featured: true,
  },
  {
    name: "device_xiaomi_raphael",
    type: "ANDROID",
    description:
      "Android device-tree work for Xiaomi Redmi K20 Pro (raphael), focused on platform and custom ROM development.",
    stack: ["Android", "AOSP", "Device Tree", "Make"],
    href: "https://github.com/b7662777-hash/device_xiaomi_raphael",
    featured: true,
  },
  {
    name: "kernel_xiaomi_raphael",
    type: "KERNEL",
    description:
      "Linux kernel development work targeting the Xiaomi Redmi K20 Pro platform.",
    stack: ["C", "Linux", "Kernel", "Android"],
    href: "https://github.com/b7662777-hash/kernel_xiaomi_raphael",
    featured: true,
  },
  {
    name: "Action-TWRP-Builder",
    type: "RECOVERY / AUTOMATION",
    description:
      "GitHub Actions based Android recovery build automation for reproducible TWRP builds.",
    stack: ["Shell", "GitHub Actions", "TWRP", "Android"],
    href: "https://github.com/b7662777-hash/Action-TWRP-Builder",
  },
  {
    name: "anonymous-saver",
    type: "APPLICATION",
    description:
      "Privacy-focused PDF transformation tool that creates customizable dark-mode reading versions of documents.",
    stack: ["React", "Vite", "Python", "FastAPI", "OpenCV"],
    href: "https://github.com/b7662777-hash/anonymous-saver",
  },
  {
    name: "GrahaLens",
    type: "AI / WEB",
    description:
      "AI-assisted Vedic astrology product foundation built around structured birth-chart analysis and research-oriented insights.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "AI"],
    href: "https://github.com/b7662777-hash/GrahaLens",
  },
  {
    name: "Action-OFRP-Builder",
    type: "RECOVERY / AUTOMATION",
    description:
      "Automated OrangeFox recovery build workflow using GitHub Actions.",
    stack: ["Shell", "GitHub Actions", "OrangeFox"],
    href: "https://github.com/b7662777-hash/Action-OFRP-Builder",
  },
  {
    name: "awesome-android-aosp",
    type: "ANDROID / RESOURCES",
    description:
      "Curated Android and AOSP resources covering platform engineering, device development, recovery, kernels and tooling.",
    stack: ["AOSP", "Android", "Resources"],
    href: "https://github.com/b7662777-hash/awesome-android-aosp",
  },
];

const skills = [
  ["ANDROID", "AOSP · ROMs · Device Trees · Recovery · Framework"],
  ["SYSTEMS", "Linux · Kernel · Rust · C/C++ · Shell"],
  ["APPS", "React · Next.js · TypeScript · Python"],
  ["AI", "AI Workspaces · Model Integration · AI Applications"],
  ["SECURITY", "Android Security · Reverse Engineering · Hardening"],
  ["TOOLING", "GitHub Actions · Build Systems · Automation"],
];

function Arrow() {
  return <span className="arrow">↗</span>;
}

function ProjectCard({ project }) {
  return (
    <a
      className={`project ${project.featured ? "featured" : ""}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-top">
        <span className="eyebrow">{project.type}</span>
        <Arrow />
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <Link href="/" className="brand">
          <span className="brand-mark">AG</span>
          <span>Anonymous Gojo-Kun</span>
        </Link>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#android">Android</a>
          <a href="#security">Security</a>
          <a href="#about">About</a>
          <a
            className="nav-github"
            href="https://github.com/b7662777-hash"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="hero-grid">
          <div>
            <div className="status">
              <span className="pulse" />
              INDEPENDENT DEVELOPER
            </div>
            <h1>
              Android systems.
              <br />
              <span>Software.</span>
              <br />
              Security.
            </h1>
            <p className="hero-copy">
              I build custom Android systems, ROM infrastructure, applications,
              AI-powered developer tools and security-oriented software.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a
                className="button secondary"
                href="https://github.com/b7662777-hash"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-head">
              <span /><span /><span />
              <small>gojo@anonymous:~</small>
            </div>
            <div className="terminal-body">
              <p><i>$</i> whoami</p>
              <strong>anonymous-gojo-kun</strong>
              <p><i>$</i> focus</p>
              <strong>android / systems / apps / security</strong>
              <p><i>$</i> stack</p>
              <strong>c++ rust python kotlin typescript</strong>
              <p><i>$</i> status</p>
              <strong className="terminal-green">building...</strong>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div>
          ANDROID <b>·</b> AOSP <b>·</b> ROM DEVELOPMENT <b>·</b> KERNELS
          <b>·</b> RECOVERY <b>·</b> AI <b>·</b> SYSTEMS <b>·</b> SECURITY
          <b>·</b> APPLICATIONS
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="section-head">
          <div>
            <span className="section-number">01</span>
            <h2>Selected work</h2>
          </div>
          <p>
            A selection of projects across Android platform engineering,
            applications, AI and systems development.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section id="android" className="dark-section">
        <div className="shell">
          <div className="section-head">
            <div>
              <span className="section-number">02</span>
              <h2>Android engineering</h2>
            </div>
            <p>
              Working from the application layer down into the platform,
              recovery, device tree and kernel.
            </p>
          </div>

          <div className="android-layout">
            <div className="android-tree">
              <div>ANDROID PLATFORM</div>
              <div className="tree-line">├─ Custom ROMs</div>
              <div className="tree-line">├─ AOSP / Framework</div>
              <div className="tree-line">├─ Device Trees</div>
              <div className="tree-line">├─ Recovery</div>
              <div className="tree-line">├─ Kernel</div>
              <div className="tree-line">├─ Vendor / HAL</div>
              <div className="tree-line">└─ Build Automation</div>
            </div>
            <div className="android-copy">
              <span className="eyebrow">PLATFORM ENGINEERING</span>
              <h3>From source tree to bootable system.</h3>
              <p>
                My Android work covers the components that make a device
                actually boot, build and behave as a complete system — not
                just application development.
              </p>
              <a href="#work" className="text-link">
                View Android projects <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="section shell">
        <div className="security-card">
          <div className="security-icon">01</div>
          <div>
            <span className="eyebrow">SECURITY / RESEARCH</span>
            <h2>Security with an engineering mindset.</h2>
            <p>
              Android security, ROM analysis, reverse engineering, system
              hardening and security tooling. The goal is understanding how
              systems work and where they fail — then building better ones.
            </p>
            <div className="security-tags">
              <span>Android Security</span>
              <span>Reverse Engineering</span>
              <span>ROM Analysis</span>
              <span>System Hardening</span>
              <span>Security Tooling</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section shell">
        <div className="about-grid">
          <div>
            <span className="section-number">03</span>
            <h2>About</h2>
          </div>
          <div className="about-copy">
            <p className="large">
              <strong>Anonymous Gojo-Kun</strong> is an independent developer
              focused on Android platform engineering, systems programming,
              application development, AI tooling and security research.
            </p>
            <p>
              I work across layers: from kernels, device trees and recovery
              environments to modern web applications and AI-powered
              developer tools.
            </p>
            <p>
              The portfolio is intentionally project-driven. Code, systems
              and shipped software are the proof.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell skills-section">
        <div className="section-head">
          <div>
            <span className="section-number">04</span>
            <h2>Capabilities</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map(([title, text]) => (
            <div className="skill" key={title}>
              <span>{title}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta shell">
        <span className="eyebrow">OPEN SOURCE / PROJECTS</span>
        <h2>See the code behind the work.</h2>
        <a
          className="button primary"
          href="https://github.com/b7662777-hash"
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub <Arrow />
        </a>
      </section>

      <footer className="footer shell">
        <div>
          <strong>Anonymous Gojo-Kun</strong>
          <span>Android · Systems · Apps · Security</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/b7662777-hash" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
        </div>
        <span className="copyright">© 2026 Anonymous Gojo-Kun</span>
      </footer>
    </main>
  );
}