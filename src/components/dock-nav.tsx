"use client";

import { useTheme } from "next-themes";
import { useMemo, useState, useEffect } from "react";
import { portfolio } from "@/data/resume";
import { linkIconMap, socialIconMap } from "@/components/social-icons";

type DockItem = {
  label: string;
  href?: string;
  icon: string;
  external?: boolean;
  download?: boolean;
  action?: () => void;
};

function DockButton({ item }: Readonly<{ item: DockItem }>) {
  const Icon = (item.icon in linkIconMap ? linkIconMap[item.icon as keyof typeof linkIconMap] : socialIconMap[item.icon as keyof typeof socialIconMap]) || linkIconMap.generic;

  const content = (
    <span className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-surface-strong text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[color:var(--accent-soft)]">
      <Icon className="h-4.5 w-4.5" />
      <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 rounded-full border border-border/70 bg-surface-strong px-3 py-1 text-xs text-foreground opacity-0 shadow-lg transition duration-200 group-hover:opacity-100">
        {item.label}
      </span>
    </span>
  );

  if (item.action) {
    return (
      <button type="button" onClick={item.action} aria-label={item.label}>
        {content}
      </button>
    );
  }

  return (
    <a
      href={item.href}
      download={item.download}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      aria-label={item.label}
    >
      {content}
    </a>
  );
}

export function DockNav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useMemo<DockItem[]>(
    () => [
      { label: "Home", href: "#home", icon: "home" },
      {
        label: "Resume",
        href: portfolio.resumePath,
        icon: "resume",
        download: true,
      },
      ...portfolio.socialLinks.map((link) => ({
        label: link.label,
        href: link.href,
        icon: link.icon,
        external: link.external ?? link.href.startsWith("http"),
      })),
      ...(mounted
        ? [
            {
              label: resolvedTheme === "dark" ? "Light mode" : "Dark mode",
              icon: resolvedTheme === "dark" ? "sun" : "moon",
              action: () =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark"),
            },
          ]
        : []),
    ],
    [resolvedTheme, setTheme, mounted],
  );

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:bottom-6">
      <div className="mx-auto flex w-fit max-w-full items-center gap-2 rounded-full border border-border/70 bg-surface-strong/90 p-2 backdrop-blur-xl dock-shadow dark:bg-surface-strong/80">
        {items.map((item) => (
          <DockButton key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
}