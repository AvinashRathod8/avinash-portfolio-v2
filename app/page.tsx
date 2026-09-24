import React from "react";

const skills = [
  {
    icon: "AI",
    title: "Generative AI & LLMs",
    text: "Building practical AI applications and LLM-powered solutions for real-world business use cases.",
    tags: ["GenAI", "LLMs", "RAG", "AI Applications","AI Workflows","Prompt Engineering"]
  },
  {
    icon: "</>",
    title: "RAG & Knowledge Systems",
    text: "Designing knowledge-based AI solutions using retrieval, contextual information, and LLMs.",
    tags: ["RAG", "Knowledge Bases", "Dify"]
  },
  {
    icon: "DB",
    title: "AI Workflow Automation",
    text: "Building intelligent workflows that combine AI, business logic, APIs, validation, and automation.",
    tags: ["AI Workflows", "Automations", "APIs"]
  },
  {
    icon: "RAG",
    title: "Enterprise AI Integration",
    text: "Connecting AI solutions with REST APIs, authentication, enterprise applications, and business systems.",
    tags: ["REST APIs", "OAuth", "Enterprise Apps"]
  }
];

const experience = [
  {
    period: "Jan 2026 — Present",
    role: "Software Design Engineer",
    company: "WinWire Technologies",
    summary:
      "Developing and supporting healthcare enterprise applications with a focus on scalability, performance and reliability.",
    bullets: [
      "Investigate production incidents, workflow failures and application defects.",
      "Support releases, validation testing and post-deployment monitoring.",
      "Perform root-cause analysis and collaborate with engineering and business stakeholders."
    ]
  },
  {
    period: "Dec 2025",
    role: "Agentic Workflow Engineer",
    company: "HigherEd BPO Pvt. Ltd.",
    summary:
      "Designing AI-powered workflows and intelligent automation solutions using Generative AI technologies.",
    bullets: [
      "Build Retrieval-Augmented Generation systems for improved knowledge retrieval.",
      "Integrate APIs and external services into business workflows.",
      "Develop conversational AI use cases and translate requirements into scalable solutions."
    ]
  },
  {
    period: "Dec 2023 — Nov 2025",
    role: "AI Engineer",
    company: "HigherEd BPO Pvt. Ltd. — Client: Ready Education / CampusGroups",
    summary:
      "Delivered end-to-end technical support for enterprise SaaS platforms used by universities and educational institutions.",
    bullets: [
      "Troubleshot REST API integrations, SSO implementations and third-party integrations.",
      "Managed production issues, escalations, deployment support and platform upgrades.",
      "Used SQL, logs and Postman for debugging and root-cause analysis.",
      "Created technical documentation and implemented AI-powered chatbot solutions."
    ]
  }
];

const projects = [
  {
    number: "01",
    title: "AI Knowledge Assistant",
    description:
      "A RAG-oriented AI assistant concept that combines a knowledge base, retrieval, and an LLM response layer to provide relevant, context-aware answers to business questions.",
    tags: ["Dify", "RAG", "GenAI"],
    status: "Technical case study",
    flow: ["Knowledge Base", "Retrieval", "LLM"]
  },
  {
    number: "02",
    title: "Intelligent AI Workflow Automation",
    description:
      "An intelligent workflow architecture that combines request routing, input validation, business APIs, automation logic, and an AI-assisted final response.",
    tags: ["Automation", "APIs", "AI", "Dify"],
    status: "Technical case study",
    flow: ["Request", "Validation", "Business API"]
  },
  {
    number: "03",
    title: "Enterprise API Integration",
    description:
      "A practical integration pattern covering authentication, REST API calls, business logic, validation and production troubleshooting.",
    tags: ["REST", "OAuth", "Postman"],
    status: "Technical case study",
    flow: ["Auth", "REST API", "Validation"]
  },
  {
    number: "04",
    title: "2048 Game Project",
    description:
      "A JavaScript-based browser game project from the public GitHub portfolio, retained as an example of earlier hands-on web development.",
    tags: ["JavaScript", "HTML", "CSS"],
    status: "GitHub project",
    flow: ["Input", "Game Logic", "UI"],
    href: "https://github.com/AvinashRathod8/2048-Game-Project"
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Avinash Rathod home">
          <span>AVINASH</span> RATHOD
          <small>Build · Integrate · Automate · Solve</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="mailto:aviravi08@gmail.com">Let&apos;s Connect <span>↗</span></a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="availability"><span /> Open to Opportunities</div>
          <p className="eyebrow">PRODUCT • AI • AUTOMATION</p>
          <h1>Hi, I&apos;m <span>Avinash Rathod</span></h1>
          <h2>AI Engineer</h2>
          <div className="hero-keywords">AI <i>•</i> AUTOMATION <i>•</i> APIS <i>•</i> ENTERPRISE APPLICATIONS</div>
          <p className="hero-text">
          I build AI-powered workflows, automation solutions, RAG systems, API integrations, and scalable enterprise applications.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View My Work <span>→</span></a>
            <a className="button secondary" href="/Avinash-Rathod-Resume.docx" download> Download Resume <span>↓</span></a>
          </div>
          <div className="hero-meta">
            <span>Based in Bengaluru, India</span>
            <span className="dot" />
            <a href="https://github.com/AvinashRathod8" target="_blank" rel="noreferrer">GitHub</a>
            <span className="dot" />
            <a href="https://www.linkedin.com/in/avinash-rathod-71509720b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Technology solution graphic">
          <div className="grid-lines" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core"><strong>IDEAS</strong><strong>INTO</strong><strong>IMPACT</strong></div>
          <div className="node node-ai"><b>AI</b><span>◉</span></div>
          <div className="node node-api"><b>APIs</b><span>⌘</span></div>
          <div className="node node-auto"><b>Automation</b><span>⚙</span></div>
          <div className="node node-enterprise"><b>Enterprise</b><span>▦</span></div>
          <div className="side-word side-top">BUILD<br/>INTEGRATE<br/>AUTOMATE<br/>SUPPORT<br/>SCALE</div>
          <div className="side-word side-bottom">TECHNOLOGY<br/><small>FOR A BETTER TOMORROW</small></div>
        </div>
      </section>

      <section className="capabilities section-shell" id="skills">
        {skills.map((skill) => (
          <article className="cap-card" key={skill.title}>
            <div className="cap-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.text}</p>
            <div className="tags">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </section>

      <section className="section-shell content-section" id="about">
        <div className="section-label"><span /> ABOUT ME</div>
        <div className="about-grid">
          <h2>Turning complex problems into <span>practical solutions.</span></h2>
          <div>
            <p>
             I'm an AI Engineer focused on building practical AI solutions that connect Generative AI, RAG, automation, APIs, and enterprise applications. I enjoy turning business requirements into reliable technical solutions and intelligent workflows that solve real-world problems.
            </p>
            <p>
            My experience spans AI-powered workflows, knowledge-based applications, REST API integrations, enterprise application support, production troubleshooting, and technical problem solving. I'm particularly interested in building scalable AI applications and automation solutions that create measurable value for users and businesses.
            </p>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>2.8+</strong><span>Years of experience</span></div>
          <div><strong>AI</strong><span>Engineering Focus</span></div>
          <div><strong>API</strong><span>Integration & troubleshooting</span></div>
          <div><strong>RCA</strong><span>Production problem solving</span></div>
        </div>
      </section>

      <section className="section-shell content-section" id="experience">
        <div className="section-label"><span /> EXPERIENCE</div>
        <div className="section-heading-row">
          <h2>Where I&apos;ve <span>worked.</span></h2>
          <p>Experience spanning enterprise applications, product support and AI-powered engineering.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.period}`}>
              <div className="timeline-marker" />
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-body">
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.summary}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell content-section" id="projects">
        <div className="section-label"><span /> FEATURED PROJECTS</div>
        <div className="section-heading-row">
          <h2>Work that shows <span>how I think.</span></h2>
          <a className="text-link" href="https://github.com/AvinashRathod8" target="_blank" rel="noreferrer">View GitHub →</a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top"><span>{project.number}</span><small>{project.status}</small></div>
              <div className="project-diagram">{project.flow.map((step, index) => (
                <React.Fragment key={step}>
                  {index > 0 ? <b>→</b> : null}
                  <span>{step}</span>
                </React.Fragment>
              ))}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {project.href ? (
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View GitHub →</a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell content-section achievements">
        <div className="section-label"><span /> RECOGNITION & EDUCATION</div>
        <div className="recognition-grid">
          <div className="recognition-card">
            <h3>Achievements</h3>
            <div className="award"><span>★</span><div><strong>Star Performer Award</strong><small>April 2025</small></div></div>
            <div className="award"><span>✦</span><div><strong>Shining Star Award</strong><small>Within first 6 months</small></div></div>
          </div>
          <div className="recognition-card">
            <h3>Education</h3>
            <div className="education-item"><strong>B.E. — R V College of Engineering</strong><span>2019 — 2023 · CGPA 7.70</span></div>
            <div className="education-item"><strong>Pre-University College</strong><span>Sri Vidyaniketan PU College · 87.5%</span></div>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-glow" />
        <div className="section-label"><span /> Let's Build Something Intelligent</div>
        <h2>Have a problem worth <span>solving?</span></h2>
        <p>Interested in AI engineering, Generative AI, RAG, automation, or enterprise application development? Let's connect and explore ideas, opportunities, and technical challenges.</p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:aviravi08@gmail.com">Email Me →</a>
          <a className="button secondary" href="https://www.linkedin.com/in/avinash-rathod-71509720b/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="button secondary" href="https://github.com/AvinashRathod8" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </section>

      <footer className="footer section-shell">
        <span>© 2026 Avinash Rathod</span>
        <span>Build · Integrate · Automate · Solve</span>
      </footer>
    </main>
  );
}
