import { useEffect, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = [
    ['home', 'Home'],
    ['projects', 'Projects'],
    ['research', 'Research'],
    ['skills', 'Skills'],
    ['education', 'Education'],
    ['achievements', 'Achievements'],
  ];
  return (
    <div className="portfolio">
      <Constellation />
      <header className="site-nav">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Sreeja Bussa home" data-testid="link-home">
            <span className="brand-mark">SB</span>
            <span className="brand-name">SREEJA BUSSA</span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navigation.map(([id, label]) => (
              <a key={id} className="nav-link" href={`#${id}`} onClick={() => setMenuOpen(false)} data-testid={`link-nav-${id}`}>{label}</a>
            ))}
          </nav>
          <a className="resume-link" href="https://drive.google.com/file/d/1ydgLCxi5_4iBQmf5Dx4bpIHdYT3mJlTk/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Open Sreeja Bussa's resume in a new tab" data-testid="link-resume-nav">
            RESUME <ArrowUpRight size={13} aria-hidden="true" />
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} data-testid="button-menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div>
              <p className="eyebrow">CONTACT &amp; STATUS</p>
              <h1>OPEN TO SDE,<br />FULL-STACK, AND<br /><em>AGENTIC AI</em> ROLES<br />STARTING 2026.</h1>
              <p className="hero-copy">I build thoughtful software at the intersection of agentic systems, full-stack engineering, and computer vision for Indic languages.</p>
              <div className="hero-actions">
                <a className="button" href="mailto:sreeja.bussa01@gmail.com" aria-label="Email Sreeja Bussa" data-testid="link-email-hero">EMAIL ME <ArrowUpRight size={14} aria-hidden="true" /></a>
                <a className="button secondary" href="https://www.linkedin.com/in/sreeja-b-bb2148294/" target="_blank" rel="noopener noreferrer" aria-label="Visit Sreeja Bussa on LinkedIn" data-testid="link-linkedin-hero">LINKEDIN <ArrowUpRight size={14} aria-hidden="true" /></a>
              </div>
              <div className="social-row" aria-label="Developer profiles">
                <a href="https://github.com/Sreeja99893" target="_blank" rel="noopener noreferrer" aria-label="Visit Sreeja Bussa on GitHub" data-testid="link-github-hero">GITHUB ↗</a>
                <a href="https://leetcode.com/u/Sreeja001/" target="_blank" rel="noopener noreferrer" aria-label="Visit Sreeja Bussa on LeetCode" data-testid="link-leetcode-hero">LEETCODE ↗</a>
                <a href="https://www.geeksforgeeks.org/profile/bussasreeja" target="_blank" rel="noopener noreferrer" aria-label="Visit Sreeja Bussa on GeeksforGeeks" data-testid="link-geeksforgeeks-hero">GEEKSFORGEEKS ↗</a>
              </div>
              <a className="hero-index" href="#projects" aria-label="Scroll to selected projects" data-testid="link-scroll-projects"><span />SCROLL TO EXPLORE <ArrowDown size={12} aria-hidden="true" /></a>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbit"><i className="orbit-dot" /></div>
              <div className="monogram">SB</div>
              <div className="visual-caption">BUILDING AT THE EDGE OF WHAT'S NEXT</div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeader index="01 / SELECTED WORK" title="Projects" note="Systems built to make complex workflows more capable, reliable, and accessible." />
            <div className="project-list">
              <article className="project-card">
                <div className="project-topline"><span className="project-number">PROJECT / 001</span><span className="project-category">AI Agents · Large Language Models · Software Engineering Automation</span></div>
                <h3>Autonomous AI Software Engineer</h3>
                <p className="project-description">An AI-powered software engineering agent designed to automate parts of the software development lifecycle. The system analyzes GitHub issues, explores codebases, identifies potential bugs, generates code modifications, and executes tests to validate proposed fixes. It combines LLM-based reasoning, repository tools, and an iterative debugging workflow to produce reliable, reviewable software patches.</p>
                <TechList items={['Python', 'LLMs', 'GitHub API', 'LangGraph', 'Docker', 'pytest', 'Git', 'FastAPI']} />
                <div className="project-details">
                  <div>
                    <p className="detail-heading">Key features</p>
                    <ul className="detail-list">
                      <li><strong>Issue Understanding:</strong> Converts natural-language bug reports into actionable technical tasks.</li>
                      <li><strong>Codebase Exploration:</strong> Examines repository structures, searches relevant files, and traces potential causes of failures.</li>
                      <li><strong>Automated Code Repair:</strong> Generates targeted code modifications using issue descriptions and surrounding code context.</li>
                      <li><strong>Test-Driven Validation:</strong> Runs relevant tests, analyzes failures, and iteratively refines proposed fixes.</li>
                      <li><strong>Patch Generation:</strong> Produces reviewable code diffs and explanations for human approval before merging.</li>
                      <li><strong>Execution Isolation:</strong> Uses sandboxed environments to execute tests and limit the impact of generated code.</li>
                    </ul>
                  </div>
                  <div className="evaluation"><span className="detail-heading">Evaluation approach</span>Evaluate the agent on real-world software issues using issue-resolution rate, test-pass rate, regression frequency, execution time, and cost per task. Compare its performance with a simpler baseline to measure the benefits of reasoning and iterative repair.</div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-topline"><span className="project-number">PROJECT / 002</span><span className="project-category">Distributed Systems · Multi-Agent Architecture</span></div>
                <h3>Automated Multi-Agent Data Analysis Platform</h3>
                <p className="project-description">A multi-agent platform designed to automate data cleaning, preprocessing, and visual analytics over large datasets containing 100K+ rows.</p>
                <TechList items={['Python', 'Flask', 'Pandas', 'Multi-Agent Architecture']} />
                <div className="project-details">
                  <div><p className="detail-heading">Key features</p><ul className="detail-list">
                    <li>Implemented specialized autonomous agents for null imputation, duplicate elimination, and trend detection.</li>
                    <li>Developed Flask REST APIs integrated with vectorized Pandas routines to reduce manual data-cleaning effort by 60%.</li>
                  </ul></div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-topline"><span className="project-number">PROJECT / 003</span><span className="project-category">Computer Vision · Neural Document Transcription</span></div>
                <h3>Bangla OCR Document Digitization System</h3>
                <p className="project-description">A deep learning OCR project focused on extracting and transcribing text from printed and handwritten Indic document images.</p>
                <TechList items={['Python', 'PyTorch', 'OpenCV', 'Tesseract', 'Scikit-Learn']} />
                <div className="project-details">
                  <div><p className="detail-heading">Key features</p><ul className="detail-list">
                    <li>Implemented contour-based line and word segmentation alongside skew-correction algorithms using OpenCV.</li>
                    <li>Fine-tuned an optical recognition network to accurately differentiate complex ligatures (Juktoborno), boosting accuracy by 18%.</li>
                  </ul></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="research">
          <div className="container">
            <SectionHeader index="02 / IN PROGRESS" title="Research" note="Exploring reliable language technology for complex scripts and real-world visual data." />
            <div className="research-wrap"><article className="research-panel">
              <span className="research-badge"><i className="status-dot" /> STATUS: ONGOING RESEARCH</span>
              <p className="project-category" style={{ textAlign: 'left', margin: '0 0 12px' }}>Computer Vision · Deep Learning · Optical Character Recognition · Telugu Language Processing</p>
              <h3>Telugu OCR and Image Classification Using Deep Learning</h3>
              <p className="project-description">An ongoing research project exploring deep learning techniques for Telugu text recognition and image classification. The research focuses on extracting meaningful visual and textual information from images containing Telugu script, with the goal of improving recognition performance for a complex Indic language characterized by diverse character shapes, compound characters, and visual variations.</p>
              <TechList items={['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow/PyTorch', 'OpenCV', 'OCR']} />
              <p className="detail-heading">Research focus</p>
              <div className="research-focus">
                {[
                  ['01', 'Image Preprocessing', 'Explore image enhancement, noise reduction, and normalization to improve input quality.'],
                  ['02', 'Deep Learning-Based Classification', 'Investigate neural network architectures for classifying Telugu script images or character categories.'],
                  ['03', 'Telugu OCR', 'Explore character recognition and text extraction from images containing Telugu text.'],
                  ['04', 'Model Evaluation', 'Analyze accuracy, precision, recall, F1-score, and character error rate, as appropriate for the task.'],
                  ['05', 'Research and Optimization', 'Compare different approaches and investigate challenges associated with Telugu script recognition.'],
                ].map(([number, title, copy]) => <div className="focus-item" key={number}><span className="focus-index">{number}</span><strong>{title}</strong><span>{copy}</span></div>)}
              </div>
              <p className="research-objective"><strong style={{ color: '#dce7eb', fontWeight: 500 }}>Broader objective — </strong>The project investigates image preprocessing, feature extraction, and deep learning architectures to support accurate classification and Telugu text recognition. The broader objective is to contribute to language-specific OCR systems capable of processing Telugu documents and image-based text more effectively.</p>
            </article></div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionHeader index="03 / TOOLKIT" title="Technical skills" note="A practical stack across product engineering, machine learning, and foundational systems." />
            <div className="skills-grid">
              <SkillGroup number="01" title="Languages" items={['Java', 'Python', 'C++', 'SQL', 'JavaScript']} />
              <SkillGroup number="02" title="Frameworks & APIs" items={['React.js', 'Node.js', 'Express.js', 'Flask', 'FastAPI']} />
              <SkillGroup number="03" title="Agentic & ML" items={['LangGraph', 'LLMs', 'PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-Learn']} />
              <SkillGroup number="04" title="DevOps & Tools" items={['Docker', 'pytest', 'Git', 'GitHub API', 'Postman', 'Linux']} />
              <SkillGroup number="05" title="Core concepts" items={['Data Structures & Algorithms', 'OOP', 'DBMS', 'OS', 'Computer Networks']} />
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <SectionHeader index="04 / ACADEMIC PATH" title="Education" note="A focused path through computer engineering and computer science." />
            <div className="edu-list">
              <article className="edu-item"><span className="edu-marker" aria-hidden="true" /><div className="edu-content"><h3>BVRIT College of Engineering</h3><p>B.Tech in Computer Science Engineering (Lateral Entry)</p><p className="edu-meta">2025 – 2028 <span aria-hidden="true"> / </span> Narsapur, India</p></div><span className="edu-score">CGPA&nbsp; 9.0</span></article>
              <article className="edu-item"><span className="edu-marker" aria-hidden="true" /><div className="edu-content"><h3>Government Polytechnic, Masab Tank</h3><p>Diploma in Computer Engineering</p><p className="edu-meta">2022 – 2025 <span aria-hidden="true"> / </span> Hyderabad, India</p></div><span className="edu-score">CGPA&nbsp; 9.5</span></article>
            </div>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="container">
            <SectionHeader index="05 / COMMUNITY & RECOGNITION" title="Achievements" note="Learning in public, contributing to open source, and building alongside the community." />
            <div className="achievement-list">
              <article className="achievement"><span className="achievement-index">01</span><div><h3>GirlScript Summer of Code (GSSoC) Contributor — 2025</h3><p>Contributed to the open-source community through GirlScript Summer of Code 2025, gaining experience with collaborative development workflows, Git and GitHub, code contributions, and community-driven software development. Focused on learning from real-world projects, improving problem-solving skills, and collaborating with contributors to understand open-source development practices.</p></div><span className="achievement-year">2025</span></article>
              <article className="achievement"><span className="achievement-index">02</span><div><h3>Recognized in the Guinness World Records for participating in the Largest Agentic AI Hackathon by Google for Developers (2025).</h3></div><span className="achievement-year">2025</span></article>
              <article className="achievement"><span className="achievement-index">03</span><div><h3>Selected Participant, Agentathon 2025 organized by Google Developer Group (GDG) Hyderabad.</h3></div><span className="achievement-year">2025</span></article>
              <article className="achievement"><span className="achievement-index">04</span><div><h3>Academics Excellence Award 2025.</h3></div><span className="achievement-year">2025</span></article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <span className="footer-copy">© 2026 Sreeja Bussa</span>
            <nav className="footer-links" aria-label="Profile links">
              <a href="mailto:sreeja.bussa01@gmail.com" aria-label="Email Sreeja Bussa" data-testid="link-email-footer">Email</a>
              <a href="https://github.com/Sreeja99893" target="_blank" rel="noopener noreferrer" aria-label="Sreeja Bussa on GitHub" data-testid="link-github-footer">GitHub</a>
              <a href="https://leetcode.com/u/Sreeja001/" target="_blank" rel="noopener noreferrer" aria-label="Sreeja Bussa on LeetCode" data-testid="link-leetcode-footer">LeetCode</a>
              <a href="https://www.geeksforgeeks.org/profile/bussasreeja" target="_blank" rel="noopener noreferrer" aria-label="Sreeja Bussa on GeeksforGeeks" data-testid="link-geeksforgeeks-footer">GFG</a>
              <a href="https://www.linkedin.com/in/sreeja-b-bb2148294/" target="_blank" rel="noopener noreferrer" aria-label="Sreeja Bussa on LinkedIn" data-testid="link-linkedin-footer">LinkedIn</a>
              <a href="https://drive.google.com/file/d/1ydgLCxi5_4iBQmf5Dx4bpIHdYT3mJlTk/view?usp=sharing" target="_blank" rel="noopener noreferrer" aria-label="Open Sreeja Bussa's resume in a new tab" data-testid="link-resume-footer">Resume</a>
            </nav>
          </div>
          <div className="footer-bottom"><span>ENGINEERED WITH CURIOSITY</span><a href="#home" aria-label="Back to top" data-testid="link-back-to-top">BACK TO TOP ↑</a></div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ index, title, note }: { index: string; title: string; note: string }) {
  return <div className="section-header"><div><p className="section-kicker">{index}</p><h2 className="section-title">{title}</h2></div><p className="section-note">{note}</p></div>;
}

function TechList({ items }: { items: string[] }) {
  return <div className="tech-row" aria-label="Technologies used">{items.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div>;
}

function SkillGroup({ number, title, items }: { number: string; title: string; items: string[] }) {
  return <article className="skill-group"><span className="skill-num">{number} / SKILLSET</span><h3>{title}</h3><div className="skill-items">{items.map((item) => <span key={item}>{item}</span>)}</div></article>;
}

function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const points: { x: number; y: number; drift: number; phase: number }[] = [];
    const pointer = { x: -1000, y: -1000 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let animation = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(62, Math.max(30, Math.round(width * height / 26000)));
      points.length = 0;
      for (let i = 0; i < count; i += 1) {
        points.push({ x: Math.random() * width, y: Math.random() * height, drift: .15 + Math.random() * .35, phase: Math.random() * Math.PI * 2 });
      }
      if (reducedMotion) paint();
    };
    const onPointer = (event: PointerEvent) => { pointer.x = event.clientX; pointer.y = event.clientY; };
    const paint = () => {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      points.forEach((point, i) => {
        const px = point.x + (reducedMotion ? 0 : Math.sin(frame * .004 + point.phase) * point.drift);
        const py = point.y + (reducedMotion ? 0 : Math.cos(frame * .003 + point.phase) * point.drift);
        const dx = px - pointer.x;
        const dy = py - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (!reducedMotion && distance < 155 && distance > 0) {
          point.x += (dx / distance) * (155 - distance) * .0007;
          point.y += (dy / distance) * (155 - distance) * .0007;
        }
        context.beginPath();
        context.arc(px, py, i % 9 === 0 ? 1.45 : .9, 0, Math.PI * 2);
        context.fillStyle = i % 9 === 0 ? 'rgba(0,210,255,.46)' : 'rgba(103,194,218,.29)';
        context.fill();
        for (let j = i + 1; j < points.length; j += 1) {
          const other = points[j];
          const ox = other.x + (reducedMotion ? 0 : Math.sin(frame * .004 + other.phase) * other.drift);
          const oy = other.y + (reducedMotion ? 0 : Math.cos(frame * .003 + other.phase) * other.drift);
          const gap = Math.hypot(px - ox, py - oy);
          if (gap < 130) {
            context.beginPath();
            context.moveTo(px, py);
            context.lineTo(ox, oy);
            context.strokeStyle = `rgba(0, 150, 190, ${(1 - gap / 130) * .12})`;
            context.lineWidth = .6;
            context.stroke();
          }
        }
        if (distance < 145) {
          context.beginPath();
          context.moveTo(px, py);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = `rgba(0,210,255,${(1 - distance / 145) * .2})`;
          context.stroke();
        }
      });
      frame += 1;
      if (!reducedMotion) animation = window.requestAnimationFrame(paint);
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    paint();
    return () => {
      window.cancelAnimationFrame(animation);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);
  return <canvas className="constellation" ref={canvasRef} aria-hidden="true" />;
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
