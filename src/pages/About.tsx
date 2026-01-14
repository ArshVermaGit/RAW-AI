import { ArrowLeft, Mail, Github, Linkedin, Twitter, Gamepad2, Code, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MagneticButton } from '@/components/MagneticButton';
import arshAvatar from '@/assets/arsh-avatar.jpg';
import { useRef } from 'react';

const About = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { icon: Mail, href: 'mailto:arshverma.dev@gmail.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: Github, href: 'https://github.com/ArshVermaGit', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arshvermadev/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://x.com/TheArshVerma', label: 'X (Twitter)', color: 'hover:text-sky-400' },
  ];

  const skills = [
    { icon: Gamepad2, label: 'Game Development', desc: 'Unity Expert' },
    { icon: Code, label: 'Full-Stack Dev', desc: 'Web & Apps' },
    { icon: Sparkles, label: 'Creative Design', desc: 'UI/UX Focus' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.02]"
      />
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none"
      />

      {/* Header */}
      <header
        className="relative z-10 p-6 md:p-8"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 pb-20">
        {/* Hero Section */}
        <div
          className="text-center mb-16"
        >
          {/* Avatar */}
          <div
            className="relative inline-block mb-8"
          >
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-1"
            >
              <img
                src={arshAvatar}
                alt="Arsh Verma"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-background flex items-center justify-center"
            >
              <span
                className="text-xs font-bold text-white"
              >
                ✓
              </span>
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Arsh Verma
          </h1>

          <p
            className="text-xl md:text-2xl text-primary font-medium mb-2"
          >
            Full-Stack Digital Creator
          </p>

          <p
            className="text-muted-foreground"
          >
            Tech Gaming Technology @ VIT Bhopal
          </p>
        </div>

        {/* Skills Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm text-center group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:rotate-6 transition-all"
              >
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div
          className="relative p-8 md:p-10 rounded-3xl border border-border bg-card/30 backdrop-blur-sm mb-12 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
          />

          <div
            className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1 bg-background border border-border rounded-full"
          >
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>

          <div
            className="space-y-6 text-lg leading-relaxed text-muted-foreground relative z-10"
          >
            <p>
              I'm <span className="text-foreground font-medium">Arsh Verma</span>, a Tech Gaming Technology student at{' '}
              <span className="text-primary">VIT Bhopal</span> and a full-stack digital creator. My expertise lies in
              game development with <span className="text-foreground font-medium">Unity</span>, but I also build dynamic
              websites and apps. I've earned numerous certifications and treat every project, like my portfolio{' '}
              <span className="text-primary font-medium">arshcreates</span>, as an opportunity to blend creative vision
              with technical precision.
            </p>

            <p>
              My development philosophy is simple:{' '}
              <span className="text-foreground font-medium italic">
                turn great ideas into polished, engaging digital reality
              </span>
              . I love the challenge of coding and design, focusing on creating seamless user experiences across all
              platforms. Take a look around—I'm ready to tackle the next big project!
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div
          className="text-center"
        >
          <h3
            className="text-lg font-semibold mb-6"
          >
            Let's Connect
          </h3>
          <div
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1.5 ${link.color}`}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="text-center mt-16"
        >
          <MagneticButton variant="primary" size="lg" onClick={() => navigate('/')}>
            Try RAW.AI
          </MagneticButton>
        </div>
      </main>
    </div>
  );
};

export default About;
