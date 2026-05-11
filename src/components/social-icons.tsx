import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  Code2,
  FileText,
  Globe,
  GraduationCap,
  Home,
  Mail,
  MoonStar,
  PlayCircle,
  SunMedium,
  WandSparkles,
  X,
} from "lucide-react";
import type { SocialIconKey } from "@/data/resume";

export const socialIconMap = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  email: Mail,
  website: Globe,
  dribbble: WandSparkles,
  x: X,
  youtube: PlayCircle,
} satisfies Record<SocialIconKey, typeof Code2>;

export const linkIconMap = {
  external: ArrowUpRight,
  play: PlayCircle,
  docs: FileText,
  home: Home,
  resume: GraduationCap,
  sun: SunMedium,
  moon: MoonStar,
  generic: ExternalLink,
} as const;