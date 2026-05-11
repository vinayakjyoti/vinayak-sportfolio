import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { DockNav } from "@/components/dock-nav";
import { MarkdownContent } from "@/components/markdown-content";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ResumeCard } from "@/components/resume-card";
import { Card, Pill, SectionHeading } from "@/components/ui";
import { portfolio } from "@/data/resume";

export default function Home() {
  const linkedInLink = portfolio.socialLinks.find(
    (link) => link.label === "LinkedIn",
  )?.href;

  return (
    <main id="home" className="pb-40 pt-8 sm:pt-12">
      <div className="content-column space-y-20 sm:space-y-28">
        <section className="section-shell overflow-hidden rounded-[2.25rem]">
          <div className="grid gap-8 px-6 py-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10 lg:py-10">
            <Reveal className="space-y-8">
              <div className="space-y-5">
                <Pill>Open for freelance and product work</Pill>
                <div className="space-y-4">
                  <p className="section-label text-xs text-muted">Hello, I&apos;m</p>
                  <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    {portfolio.name}
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                    {portfolio.shortBio}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-strong px-3 py-2">
                  <MapPin className="h-4 w-4" />
                  {portfolio.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-strong px-3 py-2">
                  <Mail className="h-4 w-4" />
                  {portfolio.email}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a 
                  href={`mailto:${portfolio.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-surface-strong px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]"
                >
                  Contact me
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex justify-center lg:justify-center">
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(155,107,67,0.25),transparent_68%)] blur-3xl" />
                <div className="relative w-64 h-64 overflow-hidden rounded-full border-2 border-border/70 bg-surface-strong shadow-lg">
                  <Image
                    src={portfolio.avatar}
                    alt={portfolio.name}
                    fill
                    priority
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="space-y-6">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="About me"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Card className="p-6 sm:p-8">
              <div className="space-y-6">
                <MarkdownContent content={portfolio.longBio} />
                <p className="text-base leading-7 text-muted">
                  I enjoy breaking down messy, complex scenarios and architecting scalable systems that are both efficient and robust. I thrive in environments where critical thinking, system planning, and clean architecture matter.
                </p>
              </div>
            </Card>
          </Reveal>
        </section>

        <section id="education" className="space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Education"
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {portfolio.education.map((item, index) => (
              <Reveal key={item.school} delay={index * 0.05}>
                <ResumeCard item={item} variant="education" />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
            />
          </Reveal>
          <Reveal>
            <Card className="flex flex-wrap gap-2 p-6 sm:p-8">
              {portfolio.skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </Card>
          </Reveal>
        </section>

        <section id="projects" className="space-y-8">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Check out my latest work"
              description="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
              centered
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.projects.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <ProjectCard item={item} />
              </Reveal>
            ))}
          </div>
        </section>


        <section id="contact" className="space-y-8 pb-4">
          <Reveal>
            <SectionHeading eyebrow="Contact" />
          </Reveal>
          <Reveal>
            <Card className="p-6 sm:p-8">
              <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-muted sm:text-xl">
                Want to chat? Just shoot me an{" "}
                <a
                  href={`mailto:${portfolio.email}`}
                  className="font-medium text-foreground underline decoration-[color:var(--accent)] underline-offset-4 transition hover:text-[color:var(--accent)]"
                >
                  email
                </a>
                , or send a direct question on{" "}
                <a
                  href={linkedInLink ?? "https://www.linkedin.com/in/vinayak-mittal1/"}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground underline decoration-[color:var(--accent)] underline-offset-4 transition hover:text-[color:var(--accent)]"
                >
                  LinkedIn
                </a>
                , and I&apos;ll respond whenever I can.
              </p>
            </Card>
          </Reveal>
        </section>
      </div>
      <DockNav />
    </main>
  );
}
