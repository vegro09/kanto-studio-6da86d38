import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileCode2, Plus, Upload, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile & Settings — Kanto Studio" },
      {
        name: "description",
        content:
          "Manage your Gemini API key, activate director style files and extend Kanto Studio with system skill libraries.",
      },
      { property: "og:title", content: "Profile & Settings — Kanto Studio" },
      {
        property: "og:description",
        content: "API keys, style files and skill libraries for Kanto Studio.",
      },
    ],
  }),
  component: ProfilePage,
});

const initialStyles = [
  { name: "Cinematic Fade", detail: "cinematic-fade.style", active: true },
  { name: "Snappy Product", detail: "snappy-product.style", active: false },
  { name: "Editorial Slow", detail: "editorial-slow.style", active: true },
  { name: "Neo Terminal", detail: "neo-terminal.style", active: false },
];

const skills = [
  { name: "Kanto UI", detail: "Component motion primitives" },
  { name: "CodeBrush", detail: "Syntax-aware code reveals" },
  { name: "MotionLab", detail: "Easing and timing curves" },
];

function ProfilePage() {
  const [styles, setStyles] = useState(initialStyles);

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="border-b border-border/60 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Canter</h1>
        <p className="mt-2 text-sm text-muted-foreground">Profile &amp; system configuration</p>
      </header>

      {/* API settings */}
      <section className="py-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          API Settings
        </h2>
        <div className="mt-5 rounded-md border border-border/70 bg-panel p-6">
          <Label htmlFor="api" className="text-sm text-foreground">
            Gemini API Key
          </Label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <Input
              id="api"
              type="password"
              placeholder="••••••••••••••••••••"
              className="h-11 flex-1 border-border bg-background/60"
            />
            <Button variant="cream" size="lg" className="h-11">
              Save
            </Button>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section className="border-t border-border/60 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Styles</h2>
            <p className="mt-1 text-sm text-muted-foreground">Director&apos;s Cut presets</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="creamOutline">
              <Upload /> Upload Style File
            </Button>
            <Button variant="creamOutline">
              <PenLine /> Write New Style
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {styles.map((style, i) => (
            <div
              key={style.name}
              className="flex items-center justify-between rounded-md border border-border/70 bg-panel p-5 transition-colors hover:border-cream/40"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{style.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{style.detail}</p>
              </div>
              <Switch
                checked={style.active}
                onCheckedChange={(checked) =>
                  setStyles((prev) =>
                    prev.map((s, idx) => (idx === i ? { ...s, active: checked } : s)),
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-border/60 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Skills</h2>
            <p className="mt-1 text-sm text-muted-foreground">System libraries</p>
          </div>
          <AddSkillDialog />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-md border border-border/70 bg-panel p-5 transition-colors hover:border-cream/40"
            >
              <FileCode2 className="h-5 w-5 text-cream" />
              <p className="mt-4 text-sm font-medium text-foreground">{skill.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{skill.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function AddSkillDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="cream">
          <Plus /> Add Skill
        </Button>
      </DialogTrigger>
      <DialogContent className="border-border bg-panel sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-foreground">Add Skill</DialogTitle>
          <DialogDescription>
            Upload a skill file or write the instructions directly.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="upload" className="mt-2">
          <TabsList className="grid w-full grid-cols-2 bg-secondary">
            <TabsTrigger value="upload">Upload File</TabsTrigger>
            <TabsTrigger value="editor">Text / Code Editor</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-4">
            <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border border-dashed border-border p-10 text-center transition-colors hover:border-cream/50">
              <Upload className="h-5 w-5 text-cream" />
              <span className="text-sm text-muted-foreground">
                Drop a .md, .json or .ts skill file here
              </span>
              <input type="file" className="hidden" />
            </label>
          </TabsContent>

          <TabsContent value="editor" className="mt-4 space-y-3">
            <Input placeholder="Skill name" className="h-11 border-border bg-background/60" />
            <Textarea
              placeholder="# Skill instructions&#10;Describe how the model should animate…"
              className="min-h-[180px] resize-none border-border bg-background/60 font-mono text-sm"
            />
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="cream" className="w-full sm:w-auto">
            Save Skill
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
