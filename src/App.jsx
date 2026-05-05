import './App.css';

const BASE = import.meta.env.BASE_URL;

function navTo(e, id) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Paper({ title, authors, venue, abstract, tags, year, status, link }) {
  const statusClass = status === 'published' ? 'badge-status-published' : 'badge-status-progress';
  return (
    <div className="paper">
      <div className="paper-year">{year}</div>
      <div>
        <p className="paper-title">{title}</p>
        <p className="paper-authors">
          {authors.map((a, i) => (
            <span key={a.name}>
              {i > 0 && ', '}
              {a.highlight ? <strong>{a.name}</strong> : a.name}
            </span>
          ))}
        </p>
        <p className="paper-venue">{venue}</p>
        <p className="paper-abstract">{abstract}</p>
        <div className="paper-tags">
          <span className={`badge ${statusClass}`}>{status}</span>
          {tags.map(tag => <span key={tag} className="badge badge-tag">{tag}</span>)}
          {link && (
            <a href={link} className="paper-link" target="_blank" rel="noopener noreferrer">
              View paper ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function PaperGroup({ label, papers }) {
  if (!papers.length) return null;
  return (
    <div className="paper-group">
      <h3 className="paper-group-label">{label}</h3>
      <div className="papers">
        {papers.map(p => <Paper key={p.title} {...p} />)}
      </div>
    </div>
  );
}

const papers = [
  {
    year: 2026,
    type: 'in-progress',
    title: 'Privacy Perceptions and Precautions for Teleoperated Humanoid Robots in the Home',
    authors: [{ name: 'Evolone Layne', highlight: true }, { name: 'Maya Cakmak' }],
    venue: 'In preparation, target submission 2026',
    abstract: 'A multi-phase mixed-methods study examining how residents, guests, and caregivers perceive privacy risks from teleoperated humanoid robots in home environments, and what design precautions build meaningful trust.',
    tags: ['privacy', 'trust', 'teleop'],
    status: 'in progress',
    link: null,
  },
  {
    year: 2026,
    type: 'conference',
    title: 'Humanoid Robots in the Wild: A Digital Ethnography via Social Media Videos',
    authors: [{ name: 'Evolone Layne', highlight: true }, { name: 'Maya Cakmak' }],
    venue: 'IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
    abstract: 'An analysis of 77 social media videos documenting real-world Unitree G1 humanoid robot interactions, coding for robot actions, human responses, proximity, contact, and emotional reactions to understand naturalistic human-robot dynamics.',
    tags: ['ethnography', 'humanoid', 'social media'],
    status: 'published',
    link: null,
  },
  {
    year: 2025,
    type: 'conference',
    title: 'Attitudes towards Humanoid Robots for In-Home Assistance',
    authors: [{ name: 'Basia Radka' }, { name: 'Evolone Layne', highlight: true }, { name: 'Maya Cakmak' }],
    venue: 'IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
    abstract: 'A survey study investigating how general populations currently perceive and relate to humanoid robots in domestic settings, establishing a baseline for understanding the path from fear to familiarity.',
    tags: ['attitudes', 'survey', 'domestic robots'],
    status: 'published',
    link: null,
  },
  {
    year: 2026,
    type: 'workshop',
    title: 'Humanoid Robots in the Wild: A Digital Ethnography of Online Videos',
    authors: [{ name: 'Evolone Layne', highlight: true }, { name: 'Maya Cakmak' }],
    venue: 'Special Session on "HRI and Consumer Robots: Building Robots that are Useful and Acceptable" (Sponsored by Meta), ACM/IEEE HRI 2026',
    abstract: 'A digital ethnography of online video content capturing humanoid robots in real-world settings, examining how people interact with and respond to consumer humanoid robots in naturalistic contexts.',
    tags: ['ethnography', 'humanoid', 'HRI'],
    status: 'published',
    link: null,
  },
  {
    year: 2021,
    type: 'journal',
    title: 'Replicating Bugs Faster',
    authors: [{ name: 'Evolone Layne', highlight: true }, { name: 'Jack Mostow' }],
    venue: 'Working Papers Journal 9, pp. 155-156',
    abstract: 'A method for faster bug replication using screen recording and JSON-based error tracking, developed within the RoboTutor intelligent tutoring system.',
    tags: ['software engineering', 'debugging'],
    status: 'published',
    link: null,
  },
];

const press = [
  {
    outlet: 'Glamour',
    headline: 'Evolone Layne Is Taking Over STEM, One App at a Time',
    year: 2022,
    link: 'https://www.glamour.com/story/hbcu-college-woman-of-the-year-evolone-layne',
  },
  {
    outlet: 'BET',
    headline: 'Evolone Layne Is Taking Over STEM, One App at a Time',
    year: 2022,
    link: 'https://www.bet.com/article/lqo08m/glamour-cwoty-evolone-layne',
  },
  {
    outlet: 'The Hilltop',
    headline: "Howard Student Named Glamour's College Women of the Year",
    year: 2022,
    link: 'https://thehilltoponline.com/2022/11/16/howard-student-named-glamours-college-women-of-the-year/',
  },
  {
    outlet: 'Google for Developers',
    headline: "Finding the Leader Inside: Evolone's Story as a GDSC Lead at Howard University",
    year: 2023,
    link: 'https://www.youtube.com/watch?v=3Ro9NvQiYzM',
  },
  {
    outlet: 'Grow with Google',
    headline: 'Watch what we do: Evolone Layne',
    year: 2023,
    link: 'https://www.youtube.com/watch?v=6K8tKDz-sTk',
  },
];

const groups = [
  { label: 'In Progress',         key: 'in-progress' },
  { label: 'Conference Papers',   key: 'conference'  },
  { label: 'Workshop Papers',     key: 'workshop'    },
  { label: 'Journal Articles',    key: 'journal'     },
];

const links = {
  scholar:  'https://scholar.google.com/citations?user=Qr2faHcAAAAJ&hl=en',
  cv:       `${BASE}cv.pdf`,
  github:   'https://github.com/eviishondell',
  linkedin: 'https://www.linkedin.com/in/evolonelayne',
};

export default function App() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-name">Evolone Layne</a>
          <ul className="nav-links">
            <li><a href="#about"    onClick={e => navTo(e, 'about')}>about</a></li>
            <li><a href="#vision"   onClick={e => navTo(e, 'vision')}>vision</a></li>
            <li><a href="#research" onClick={e => navTo(e, 'research')}>research</a></li>
            <li><a href="#press"    onClick={e => navTo(e, 'press')}>press</a></li>
            <li><a href="mailto:evolone@uw.edu">contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="snap-section section-hero">
        <div className="hero-content">
          <p className="hero-eyebrow fade-in d-300">PhD Student · Human-Robot Interaction · UW</p>
          <h1 className="hero-heading fade-up d-300">
            Designing robots<br />
            that <em>earn</em> their place<br />
            in the home.
          </h1>
          <p className="hero-sub fade-up d-600">
            Allen School of Computer Science &amp; Engineering,
            University of Washington
          </p>
        </div>
        <p className="scroll-hint">scroll ↓</p>
      </section>

      {/* ABOUT */}
      <section className="snap-section section-about" id="about">
        <div className="about-inner">
          <div className="about-grid">
            <div>
              <div className="about-photo">
                <img src={`${BASE}headshot.png`} alt="Evolone Layne" />
              </div>
            </div>
            <div className="about-bio">
              <h2 className="about-name">Evolone Layne</h2>
              <div className="about-role">
                <span>PhD Student, Allen School of CSE</span>
                <span>University of Washington</span>
                <span className="advisor">Advised by Maya Cakmak, Human-Centered Robotics Lab</span>
              </div>
              <div className="education">
                <div className="edu-row">
                  <div className="edu-main">
                    <span className="edu-school">University of Washington</span>
                    <span className="edu-degree">Ph.D., Computer Science &amp; Engineering</span>
                  </div>
                  <span className="edu-year">2030</span>
                </div>
                <div className="edu-row">
                  <div className="edu-main">
                    <span className="edu-school">Carnegie Mellon University</span>
                    <span className="edu-degree">M.HCI, School of Computer Science</span>
                  </div>
                  <span className="edu-year">2025</span>
                </div>
                <div className="edu-row">
                  <div className="edu-main">
                    <span className="edu-school">Howard University</span>
                    <span className="edu-degree">B.S., Computer Science</span>
                  </div>
                  <span className="edu-year">2023</span>
                </div>
              </div>

              <p className="about-body">
                I study how people form trusting relationships with domestic robots across the full
                spectrum of human presence in the home: residents, guests, and caregivers. I design
                robots that earn their place through privacy-respecting, contextually adaptive, and
                selectively helpful behavior — and I design from the margins first.
              </p>
              <div className="about-links">
                <a href={links.scholar}  target="_blank" rel="noopener noreferrer">Google Scholar ↗</a>
                <a href={links.cv}       target="_blank" rel="noopener noreferrer">CV ↗</a>
                <a href={links.github}   target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="snap-section section-content bg-stone" id="vision">
        <div className="section-inner">
          <h2 className="section-heading">Research vision</h2>
          <p className="section-sub">Why I do this work.</p>
          <div className="vision-text">
            <p>
              Robots should not become servants, because they will be treated as such. Not every
              task needs to be completed by the robot; the robot and human should develop this
              understanding together. This is a central design tension in HRI: the robot should do
              everything vs. the robot should preserve user agency. Prior work has shown that
              humans do not want everything automated because they still want to feel capable.
            </p>
            <p>
              Looking at LLMs, companies are trying so hard to embed themselves in every cognitive
              task that they have fundamentally shifted the cognitive load people are expected to
              bear. Because LLMs are being integrated into robots, we need to get ahead of that
              same fate and design for agency preservation, not dependency creation.
            </p>
            <p>
              I design from the margins first, because solutions that work for people with the
              greatest needs tend to work better for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="snap-section section-content section-research bg-stone" id="research">
        <div className="section-inner">
          <h2 className="section-heading">Research</h2>
          <p className="section-sub">Papers, studies, and works in progress.</p>
          <div className="paper-groups">
            {groups.map(({ label, key }) => (
              <PaperGroup
                key={key}
                label={label}
                papers={papers.filter(p => p.type === key)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="snap-section section-content bg-white" id="press">
        <div className="section-inner">
          <h2 className="section-heading">Press</h2>
          <p className="section-sub">Media appearances and coverage.</p>
          <div className="press-list">
            {press.map((item, i) => (
              <div key={i} className="press-item">
                <div className="press-meta">
                  <span className="press-outlet">{item.outlet}</span>
                  <span className="press-year">{item.year}</span>
                </div>
                <p className="press-headline">
                  {item.link
                    ? <a href={item.link} target="_blank" rel="noopener noreferrer">{item.headline} ↗</a>
                    : item.headline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>Evolone Layne · Human-Centered Robotics Lab, University of Washington · evolone@uw.edu</p>
      </footer>
    </>
  );
}
