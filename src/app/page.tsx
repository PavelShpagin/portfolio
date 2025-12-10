import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-4 border-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">
            Pavel Shpagin
          </h1>
          <p className="mt-4 text-lg md:text-xl font-mono">
            Computer Science Researcher
          </p>
          
          {/* Contact Info */}
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-mono">
            <a 
              href="mailto:pavel.shpagin@theacademia.tech" 
              className="flex items-center gap-2 hover:bg-black hover:text-white px-2 py-1 border-2 border-black transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
              pavel.shpagin@theacademia.tech
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/PavelShpagin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 hover:bg-white hover:text-black border-2 border-black transition-colors font-mono text-sm"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pavel-shpagin-a43672233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 hover:bg-white hover:text-black border-2 border-black transition-colors font-mono text-sm"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/BgleYiCTP8/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 hover:bg-white hover:text-black border-2 border-black transition-colors font-mono text-sm"
            >
              <SiLeetcode className="w-5 h-5" />
              LeetCode
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b-2 border-black sticky top-0 bg-white z-50">
        <div className="max-w-4xl mx-auto">
          <ul className="flex overflow-x-auto text-sm font-mono scrollbar-hide">
            {["Education", "Publications", "Experience", "Projects", "Skills", "Awards"].map((item, index) => (
              <li key={item} className="shrink-0">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block px-3 md:px-4 py-3 border-r-2 border-black hover:bg-black hover:text-white transition-colors whitespace-nowrap ${index === 0 ? "border-l-2 md:border-l-0" : ""}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* Education */}
        <Section id="education" title="Education">
          <div className="border-2 border-black p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h3 className="text-xl font-bold">Taras Shevchenko National University of Kyiv</h3>
                <p className="font-mono text-sm mt-1">Bachelor of Computer Science</p>
                <p className="font-mono text-sm font-bold mt-1">GPA: 3.91/4.00</p>
              </div>
              <div className="font-mono text-sm text-right">
                <p>Kyiv, Ukraine</p>
                <p>Sep 2022 - Jun 2026</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t-2 border-black">
              <p className="font-mono text-sm">
                <span className="font-bold">Relevant Coursework:</span> Algorithms & Data Structures, Machine Learning, Neural Networks, Probability & Statistics, Distributed & Parallel Programming, Computational Geometry, Cryptography
              </p>
            </div>
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications" title="Publications & Submissions">
          <div className="space-y-4">
            <PublicationCard
              title="NaviLoc: Visual Global Localization and Refinement for GNSS-Denied UAV Navigation"
              date="Dec 2025"
              authors="Pavel Shpagin"
              journal="Sensors (MDPI)"
              status="Under review"
              doi="https://doi.org/10.5281/zenodo.17779253"
            />
            <PublicationCard
              title="Practical Polygonal Triangulation in O(n + r log r) Time"
              date="Nov 2025"
              authors="Pavel Shpagin and Vasyl Tereshchenko"
              journal="Computational Geometry: Theory and Applications"
              status="Under review"
              doi="https://doi.org/10.5281/zenodo.17781092"
            />
            <PublicationCard
              title="Multiplication-Free O(b log b) Balanced Numeral Conversion"
              date="Dec 2025"
              authors="Pavel Shpagin"
              journal="Information Processing Letters"
              status="Under review"
              doi="https://doi.org/10.5281/zenodo.17781163"
            />
            <PublicationCard
              title="Triangulating Simple Polygons: A Survey"
              date="Nov 2025"
              authors="Pavel Shpagin"
              journal="Journal of Computational Geometry"
              status="Under review"
              doi="https://doi.org/10.5281/zenodo.17781006"
            />
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="space-y-4">
            <ExperienceCard
              company="Academia Tech"
              role="Applied Research Scientist"
              location="Kyiv, Ukraine"
              period="September 2025 - Present"
              highlights={[
                "Developed a SOTA UAV localization system; results submitted for publication and currently under review.",
                "Optimized navigation algorithms 10x, making Pi5 deployment feasible.",
              ]}
            />
            <ExperienceCard
              company="Grammarly"
              role="Software Engineer Intern"
              location="Kyiv, Ukraine"
              period="June 2025 - September 2025"
              highlights={[
                "Invented a new ensemble to reduce the costs of feedback evaluation by 10x, while increasing accuracy by 30%.",
                "Developed a novel lightweight agent to cut preprocessing costs by 20x and boost data quality by 10%.",
                "Led annotations on 900 multilingual data, to build gold datasets for model evaluation.",
                "Processed 3 Million user data with LLM-based methods, used to train and deploy a model to millions of users.",
              ]}
            />
            <ExperienceCard
              company="Pilgway LLC"
              role="AI Engineer"
              location="Kyiv, Ukraine"
              period="December 2024 - June 2025"
              highlights={[
                "Designed new GPS-denied localization algorithms that boost localization accuracy from 600m to 20m, yielding an effective 30x improvement for long trajectories.",
                "Built full and robust server and UAV infrastructure from scratch.",
              ]}
            />
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <div className="grid gap-4">
            <ProjectCard
              title="Library+"
              tech="Azure, Jira, OpenAI API, Figma"
              period="October 2025 - November 2025"
              highlights={[
                "Led a team of 7 people to build a mobile app for the government.",
                "Designed and architected the full app system.",
                "Deployed AI chatbot and search engine.",
              ]}
            />
            <ProjectCard
              title="Casters"
              tech="NextJS, Huggingface, Pytorch, pandas"
              period="December 2023 - January 2025"
              highlights={[
                "Created a full-stack NextJS web application with an AI card generator.",
                "Preprocessed datasets for training a 12B model.",
                "Fine-tuned and deployed a VLM model using Huggingface.",
              ]}
            />
            <ProjectCard
              title="Ai ArtBase"
              tech="FastAPI, React, ChromaDB, PostgreSQL, Docker"
              period="September 2023 - November 2024"
              highlights={[
                "Built a gallery website with multimodal RAG search engine.",
                "Scraped over ~30K AI images across different galleries.",
                "Implemented an advanced gallery navigation algorithm with complex route caching and restoration.",
              ]}
            />
            <ProjectCard
              title="Parallel Kernel SVM"
              tech="C++, MPI, OpenMP"
              period="March 2024 - May 2024"
              highlights={[
                "Developed a parallelized kernel SVM algorithm based on quadratic programming.",
                "Trained the model on 10K Amazon review records.",
                "Achieved 3x speedup over baseline implementations, maintaining 80% accuracy.",
              ]}
            />
            <ProjectCard
              title="CUDA Matrix Multiplication"
              tech="CUDA"
              period="September 2023 - December 2023"
              highlights={[
                "Built a matrix multiplication algorithm that's 10x faster than the baseline.",
                "Increased memory throughput by 8x, using advanced optimization techniques.",
                "Reduced energy consumption of the optimized algorithm by 5x.",
              ]}
            />
          </div>
        </Section>

        {/* Technical Skills */}
        <Section id="skills" title="Technical Skills">
          <div className="border-2 border-black">
            <SkillRow label="Languages" skills="Python, C/C++, CUDA, SQL (Postgres), JavaScript, HTML/CSS" />
            <SkillRow label="Frameworks" skills="NextJS, React, Node.js, TailwindCSS, Chakra-UI, FastAPI" />
            <SkillRow label="Developer Tools" skills="GitHub, AWS, GCP, Azure, Hugging Face, Linux, Docker, Cloudflare, Jira, Figma" />
            <SkillRow label="Libraries" skills="PyTorch, Tensorflow, transformers, Faiss, ChromaDB, pandas, NumPy, Matplotlib" isLast />
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" title="Awards & Honors">
          <div className="space-y-4">
            {/* <AwardCard
              title="Brave Research Grant"
              subtitle="NaviX"
              date="Dec 2025"
              description="Awarded $80,000 research grant from Brave for developing advanced UAV visual localization systems."
            /> */}
            <AwardCard
              title="ICPC Ukraine 2025"
              subtitle="Programming Contest"
              date="Oct 2025"
              description="Ranked in the top 12% nationwide among university teams."
            />
            <AwardCard
              title="Meta Hacker Cup 2025"
              subtitle="Programming Competition"
              date="Oct 2025"
              description="Advanced to Round 2."
            />
            <AwardCard
              title="IEEEXtreme 19.0 2025"
              subtitle="Global 24-hour Programming Contest"
              date="Oct 2025"
              description="Competed as team IEEExceptional; placed around top ~25% in a contest with 18,500+ registered participants."
            />
          </div>
        </Section>

        {/* Certificates */}
        <Section id="certificates" title="Certificates">
          <div className="space-y-4">
            <div className="border-2 border-black p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-bold">Linear Algebra for Data Science</h3>
                  <p className="font-mono text-sm mt-1">MotivateYourself | Instructor: Ian Tsybulkin</p>
                </div>
                <span className="font-mono text-sm">Jun 2021 - Aug 2021</span>
              </div>
            </div>
            <div className="border-2 border-black p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-bold">Neural Networks and Computer Vision</h3>
                  <p className="font-mono text-sm mt-1">Stepik | Score: 87%</p>
                </div>
                <span className="font-mono text-sm">Oct 2020</span>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="border-t-4 border-black mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm">
              Pavel Shpagin | 2025
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/PavelShpagin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-black hover:text-white p-2 border-2 border-black transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pavel-shpagin-a43672233"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-black hover:text-white p-2 border-2 border-black transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/BgleYiCTP8/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-black hover:text-white p-2 border-2 border-black transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Section Component
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id}>
      <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6 pb-2 border-b-4 border-black">
        {title}
      </h2>
      {children}
    </section>
  );
}

// Publication Card Component
function PublicationCard({
  title,
  date,
  authors,
  journal,
  status,
  doi,
}: {
  title: string;
  date: string;
  authors: string;
  journal: string;
  status: string;
  doi: string;
}) {
  return (
    <div className="border-2 border-black p-4 hover:bg-black hover:text-white transition-colors group">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <span className="font-mono text-sm shrink-0">{date}</span>
      </div>
      <p className="font-mono text-sm mt-2">{authors}</p>
      <p className="font-mono text-sm mt-1">
        <span className="italic">{journal}</span> | {status}
      </p>
      <a
        href={doi}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-mono text-sm mt-2 underline group-hover:text-white"
      >
        DOI <FaExternalLinkAlt className="w-3 h-3" />
      </a>
    </div>
  );
}

// Experience Card Component
function ExperienceCard({
  company,
  role,
  location,
  period,
  highlights,
}: {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}) {
  return (
    <div className="border-2 border-black p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="text-xl font-bold">{company}</h3>
          <p className="font-mono text-sm mt-1">{role}</p>
        </div>
        <div className="font-mono text-sm text-right">
          <p>{location}</p>
          <p>{period}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {highlights.map((item, index) => (
          <li key={index} className="font-mono text-sm flex gap-2">
            <span className="shrink-0">&gt;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  title,
  tech,
  period,
  highlights,
}: {
  title: string;
  tech: string;
  period: string;
  highlights: string[];
}) {
  return (
    <div className="border-2 border-black p-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="font-mono text-sm mt-1 text-gray-600">{tech}</p>
        </div>
        <span className="font-mono text-sm shrink-0">{period}</span>
      </div>
      <ul className="mt-3 space-y-1">
        {highlights.map((item, index) => (
          <li key={index} className="font-mono text-sm flex gap-2">
            <span className="shrink-0">-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Skill Row Component
function SkillRow({ label, skills, isLast = false }: { label: string; skills: string; isLast?: boolean }) {
  return (
    <div className={`flex flex-col md:flex-row ${!isLast ? "border-b-2 border-black" : ""}`}>
      <div className="md:w-40 shrink-0 bg-black text-white p-3 font-bold text-sm">
        {label}
      </div>
      <div className="p-3 font-mono text-sm">
        {skills}
      </div>
    </div>
  );
}

// Award Card Component
function AwardCard({
  title,
  subtitle,
  date,
  description,
}: {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}) {
  return (
    <div className="border-2 border-black p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="font-mono text-sm italic">{subtitle}</p>
        </div>
        <span className="font-mono text-sm shrink-0">{date}</span>
      </div>
      <p className="font-mono text-sm mt-2">{description}</p>
    </div>
  );
}
