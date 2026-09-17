// File: config/navigation.ts
export interface NavItem {
  index: string;
  label: string;
  href: string;
  badge?: string;
}

export const navItems: NavItem[] = [
  { index: "01", label: "About", href: "/#about" },
  { index: "02", label: "What We Do", href: "/#what-we-do" },
  { index: "03", label: "Events", href: "/#events" },
  { index: "04", label: "Crew", href: "/#crew" },
  { index: "05", label: "Signal the Crew", href: "#contact" }
];