"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MarkdownContent } from "@/components/markdown-content";
import { Card, Pill } from "@/components/ui";
import type { EducationItem, WorkItem } from "@/data/resume";

type ResumeCardProps = {
  item: WorkItem | EducationItem;
  variant: "work" | "education";
};

export function ResumeCard({ item, variant }: Readonly<ResumeCardProps>) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(item.details);
  const showLogo = variant === "work";
  const title =
    variant === "work" ? (item as WorkItem).title : (item as EducationItem).degree;
  const label =
    variant === "work" ? (item as WorkItem).company : (item as EducationItem).school;

  return (
    <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]/45">
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          {showLogo ? (
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-surface-strong">
              <Image src={item.logo} alt="" fill sizes="56px" className="object-cover" />
            </div>
          ) : null}
          <div className="min-w-0 space-y-2">
            <div className="space-y-1">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                {label}
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span>{item.period}</span>
              {"location" in item && item.location ? (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        {item.badges?.length ? (
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {item.badges.map((badge) => (
              <Pill key={badge}>{badge}</Pill>
            ))}
          </div>
        ) : null}
      </div>

      <div className="border-t border-border/60 px-5 py-5">
        <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
          {item.summary}
        </p>

        {expandable ? (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition hover:text-[color:var(--accent)]"
              aria-expanded={open}
            >
              {open ? "Hide details" : "Show details"}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -8 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4">
                    <MarkdownContent content={item.details ?? ""} />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ) : null}
      </div>
    </Card>
  );
}