import { ArrowDown, ArrowUpRight, BriefcaseBusiness, GraduationCap, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import profileImage from '../profile-img.jfif'
import resumeFile from '../Rekha Nagare.pdf'

const profile = {
  name: 'Rekha Nagare',
  role: 'Aspiring Data Analyst',
  summary: 'Detail-oriented professional transitioning into data analytics, MIS, and data operations through research, Excel-based analysis, data preparation, and quality-focused work.',
  linkedin: 'https://www.linkedin.com/in/rekha-nagare-b316b9127/',
  email: 'mailto:r.k.nagare05@gmail.com',
}

const experience = [
  { period: 'Present', title: 'Content Writer', company: 'Tellychakkar', description: 'Research, verify, organize, and document information from multiple sources while maintaining accuracy and quality under deadlines.' },
  { period: 'Previous role', title: 'Content Writer', company: 'BollywoodMDB', description: 'Conducted extensive online research, extracted relevant information, and reviewed web content for accuracy, consistency, and completeness.' },
  { period: 'Certification + internship', title: 'Content Writing / Academic Writing', company: 'IIM SKILLS / Freelance Projects', description: 'Built research, documentation, proofreading, and quality-control skills through blogs, articles, academic content, and web-based information.' },
]

const education = [
  { period: '2016', title: "Master's Degree in Microbiology", school: 'Mumbai University', description: 'A scientific foundation that supports structured thinking, observation, and analytical work.' },
  { period: '2014', title: "Bachelor's Degree in Microbiology", school: 'Mumbai University', description: 'Undergraduate study in microbiology.' },
]

const projects = [
  { number: '01', title: 'Excel Data Cleaning & Analysis', description: 'Cleaned raw datasets, applied Excel functions, built Pivot Tables, and created charts and reports to communicate findings.', tag: 'Microsoft Excel' },
  { number: '02', title: 'Employee Data Analysis', description: 'Analyzed employee datasets by region and salary, identifying business insights through formulas, summaries, and Pivot Tables.', tag: 'Data analysis' },
  { number: '03', title: 'Data Quality & Preparation', description: 'Practiced turning raw data into clean, structured, analysis-ready datasets by resolving duplicates, missing values, and inconsistent formats.', tag: 'Data preparation' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" onClick={closeMenu}><span>RN</span><b>Rekha Nagare</b></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-cta" href={resumeFile} download="Rekha-Nagare-CV.pdf" onClick={closeMenu}>Download CV <ArrowDown size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-dot" /> Hello, I’m Rekha</p>
            <h1>Turning data into <em>clearer</em> decisions.</h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">Explore my work <ArrowDown size={17} /></a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="image-frame"><img src={profileImage} alt="Portrait of Rekha Nagare" /></div>
            <div className="floating-note"><span>Currently</span><strong>Pursuing data<br />analytics</strong></div>
            <div className="scribble">let’s make<br /><i>something good</i></div>
          </div>
        </section>

        <section className="marquee-band" aria-label="Portfolio themes"><div>CURIOUS <span>✳</span> CAPABLE <span>✳</span> COLLABORATIVE <span>✳</span> ALWAYS LEARNING <span>✳</span></div></section>

        <section id="about" className="about section-wrap section-block">
          <div className="section-kicker">01 / About me</div>
          <div className="about-grid">
            <h2>A little bit<br /><em>about me.</em></h2>
            <div className="about-copy"><p>I bring strong research, documentation, and information-quality experience to my transition into data analytics, MIS, and data operations.</p><p>I am currently developing practical skills in Excel, data cleaning, data preparation, data interpretation, visualization, and report generation. I am looking for an opportunity to apply that learning to real-world datasets.</p><a className="inline-link" href={resumeFile} download="Rekha-Nagare-CV.pdf">Download my CV <ArrowDown size={15} /></a></div>
          </div>
        </section>

        <section id="experience" className="experience section-wrap section-block">
          <div className="section-kicker">02 / Experience</div>
          <div className="section-heading"><h2>Where I’ve<br /><em>made an impact.</em></h2><BriefcaseBusiness size={34} strokeWidth={1.4} /></div>
          <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.title}><div className="timeline-period">{item.period}</div><div><h3>{item.title}</h3><p className="company">{item.company}</p><p>{item.description}</p></div></article>)}</div>
        </section>

        <section className="education section-wrap section-block"><div className="section-kicker">03 / Education</div><div className="section-heading"><h2>Always learning,<br /><em>always growing.</em></h2><GraduationCap size={38} strokeWidth={1.4} /></div><div className="education-list">{education.map((item) => <article className="education-item" key={item.title}><span>{item.period}</span><div><h3>{item.title}</h3><p className="company">{item.school}</p><p>{item.description}</p></div></article>)}</div></section>

        <section id="projects" className="projects section-wrap section-block"><div className="section-kicker">04 / Projects</div><div className="section-heading"><h2>Selected<br /><em>projects.</em></h2><p>A few chapters from the work I care about.</p></div><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number}</span><ArrowUpRight size={21} /></div><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.description}</p></article>)}</div></section>

        <section className="contact section-wrap"><div className="contact-card"><p className="eyebrow"><span className="eyebrow-dot" /> Let’s connect</p><h2>Have a good<br /><em>idea?</em></h2><p>I’d love to hear about it.</p><a className="button button-light" href={profile.email}>Say hello <Mail size={17} /></a></div></section>
      </main>

      <footer className="footer section-wrap"><div><a className="wordmark" href="#top"><span>RN</span><b>Rekha Nagare</b></a><p>Researcher, content professional, aspiring data analyst.</p></div><div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a><a href={profile.email}>Email <ArrowUpRight size={15} /></a><a href="tel:+918097407091">Call <ArrowUpRight size={15} /></a></div><p className="copyright">© 2026 Rekha Nagare</p></footer>
    </div>
  )
}

export default App