import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Download, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio Workspace — Kanto Studio" },
      {
        name: "description",
        content:
          "Write a scenario, pick aspect ratio and frame rate, then generate and export cinematic UI animations as MP4.",
      },
      { property: "og:title", content: "Studio Workspace — Kanto Studio" },
      {
        property: "og:description",
        content: "Direct, generate and export AI UI video animations.",
      },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  const [prompt, setPrompt] = useState("");

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-background">
      <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-1 lg:grid-cols-2">
        {/* Director's controls */}
        <section className="flex flex-col gap-6 border-b border-border/60 p-8 lg:border-b-0 lg:border-r">
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-foreground">
              Director&apos;s Controls
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Describe the interface motion you want to film.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <Label
              htmlFor="prompt"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              Scenario
            </Label>
            <Textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A dashboard fades in, cards stagger upward, cursor glides to the primary action and the chart animates to full height…"
              className="min-h-[320px] flex-1 resize-none rounded-md border-border bg-panel p-5 text-base leading-relaxed text-foreground placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Aspect Ratio
              </Label>
              <Select defaultValue="16:9">
                <SelectTrigger className="h-11 border-border bg-panel">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16:9">16:9 — Landscape</SelectItem>
                  <SelectItem value="9:16">9:16 — Vertical</SelectItem>
                  <SelectItem value="1:1">1:1 — Square</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Frame Rate
              </Label>
              <Select defaultValue="60">
                <SelectTrigger className="h-11 border-border bg-panel">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 FPS</SelectItem>
                  <SelectItem value="60">60 FPS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button variant="cream" size="xl" className="w-full">
            <Sparkles /> Generate Animation
          </Button>
        </section>

        {/* Canvas & export */}
        <section className="flex flex-col gap-6 p-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground">Canvas</h2>
            <p className="mt-1 text-sm text-muted-foreground">Preview &amp; export</p>
          </div>

          <div className="flex flex-1 items-center justify-center rounded-md border border-border/70 bg-panel p-6">
            <div className="canvas-grid relative flex aspect-video w-full items-center justify-center rounded-md border border-border/60 bg-background shadow-cinema">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/40 text-cream">
                  <Play className="h-5 w-5" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Your generated animation will play here
                </p>
              </div>
              <span className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Preview
              </span>
            </div>
          </div>

          <Button variant="cream" size="xl" className="w-full">
            <Download /> Download MP4
          </Button>
        </section>
      </div>
    </main>
  );
}
