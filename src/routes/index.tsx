import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Login — Kanto Studio | AI UI Video Animation Generator" },
      {
        name: "description",
        content:
          "Sign in to Kanto Studio, the cinematic AI workspace for generating UI video animations from text prompts.",
      },
      { property: "og:title", content: "Login — Kanto Studio" },
      {
        property: "og:description",
        content: "Sign in to the cinematic AI workspace for UI video animation.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md rounded-md border border-border/70 bg-panel p-10 shadow-cinema">
        <h1 className="text-center text-3xl font-bold tracking-tight text-foreground">
          Kanto Studio
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          AI-powered UI video animation
        </p>

        <form
          className="mt-10 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/studio" });
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="director@kanto.studio"
              className="h-11 border-border bg-background/60"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="h-11 border-border bg-background/60"
            />
          </div>
          <Button type="submit" variant="cream" size="xl" className="w-full">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          No account? Access is invite-only during the studio beta.
        </p>
      </div>
    </main>
  );
}
