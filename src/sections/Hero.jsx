import { Button } from "@/components/Button";
import { ArrowRight, Download, Github, Linkedin,ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Tailwind CSS",
  "Prisma",
  "Figma",
  "Git",
  "GitHub Actions",
];


export const Hero = () => {
  return (

    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero image"
          className="w-full object=cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left- coloum -Text contttent */}
          <div className=" space-y-8">
            <div className="animation-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Full-Stack Developer ● React Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Need a high-performance <br /> <span className="text-primary glow-text">web application</span>
                <br />
                that doesn't just look good,
                <br />
                <span className="font-serif italic font-normal text-white">
                  but scales effortlessly?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Hana Tagesse — a website developer specializing in
                React, Next.js, MongoDB, PostgreSQL and TypeScript. I build scalable, performant web
                applications that users love.
              </p>
            </div>
          {/* CTAs */}
            <div className="flex flex-wrap mt-6 gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                 <Download  className="w-5 h-5"/>
                 Download CV
              </AnimatedBorderButton>
            </div>
            {/* section links */}
              <div className="flex items-center mt-6 gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/hanatagesse" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/hana-tagesse-ab73a533b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className=" relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/image.png"
                  alt="Hana Tagesse"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                 {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* status badge */}
                <div >
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skill section */}
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};