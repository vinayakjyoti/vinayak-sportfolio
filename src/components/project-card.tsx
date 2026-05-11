import Image from "next/image";
import { MarkdownContent } from "@/components/markdown-content";
import { Pill, Card } from "@/components/ui";
import { linkIconMap } from "@/components/social-icons";
import type { ProjectItem } from "@/data/resume";

export function ProjectCard({ item }: Readonly<{ item: ProjectItem }>) {
  return (
    <Card className="group flex h-full flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/45">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-[linear-gradient(135deg,rgba(155,107,67,0.16),rgba(255,255,255,0.2))]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : item.video ? (
          <video
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ) : (
          <div className="flex h-full items-center justify-center bg-surface-strong/50 text-sm text-muted">
            No preview available
          </div>
        )}

        <div className="absolute left-4 top-4 flex gap-2">
          <Pill>{item.dateRange}</Pill>
          <Pill>{item.active ? "Active" : "Archived"}</Pill>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
            </div>
          </div>

          <div className="prose prose-sm max-w-none prose-p:my-0 prose-strong:text-foreground">
            <MarkdownContent content={item.description} />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <Pill key={technology}>{technology}</Pill>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {item.links.map((link) => {
            const LinkIcon =
              link.icon && link.icon in linkIconMap
                ? linkIconMap[link.icon as keyof typeof linkIconMap]
                : linkIconMap.generic;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-strong px-3 py-2 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]"
              >
                <LinkIcon className="h-4 w-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
}