import Image from "next/image";
import { Pill, Card } from "@/components/ui";
import { linkIconMap } from "@/components/social-icons";
import type { HackathonItem } from "@/data/resume";

export function HackathonCard({ item }: Readonly<{ item: HackathonItem }>) {
  return (
    <Card className="grid gap-5 p-5 sm:grid-cols-[auto,1fr] sm:items-start">
      <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/70 bg-surface-strong">
        <Image src={item.avatar} alt="" fill sizes="64px" className="object-cover" />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <Pill>{item.date}</Pill>
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">
            {item.location}
          </p>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.badges?.map((badge) => (
            <Pill key={badge}>{badge}</Pill>
          ))}
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