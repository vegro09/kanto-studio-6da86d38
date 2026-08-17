import { Link } from "@tanstack/react-router";
import { LogIn, Clapperboard, User } from "lucide-react";

const items = [
  { to: "/", label: "Login", icon: LogIn },
  { to: "/studio", label: "Studio", icon: Clapperboard },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-sm font-bold uppercase tracking-[0.35em] text-foreground">
          Kanto
        </Link>
        <nav className="flex items-center gap-1">
          {items.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "bg-cream/10 text-cream" }}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
