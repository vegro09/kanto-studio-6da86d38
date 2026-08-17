# Kanto Studio

Build a multi-page web application for an AI-powered UI Video Animation Generator called "Kanto Studio". The app has a minimalist, cinematic dark mode theme.

COLOR PALETTE:

- Backgrounds: Deep Black (#0a0a0a) and very dark gray (#151515) for cards/panels.

- Text & Icons: Crisp White (#ffffff) for high contrast and readability.

- Accents & Call-to-Action (CTA): Elegant Cream/Soft Beige (#F4F1E1). Use this strictly for primary buttons, active states, and important toggles.

NAVIGATION:

Include a minimal sidebar or top navbar with icons linking to three main views: "Login", "Studio (Workspace)", and "Profile".

SCREEN 1: LOGIN (Auth View)

- A centered, sleek dark gray card on a pure black background.

- Bold white logo text: "Kanto Studio".

- Input fields for Email and Password with thin white or gray borders.

- A large, prominent "Login" button filled with the Cream accent color and black text.

SCREEN 2: THE STUDIO (Main Workspace View)

- A flawless 50/50 split-screen layout.

- LEFT PANEL (Director's Controls):

  - A large, spacious Textarea (dark background, white text) for writing the video prompt/scenario.

  - A row of sleek dropdown menus for: 

    1. Video Aspect Ratio (16:9, 9:16, 1:1).

    2. Frame Rate (30 FPS, 60 FPS).

  - A large Cream-colored "Generate Animation" CTA button at the bottom of the panel.

- RIGHT PANEL (Canvas & Export):

  - A central Video Player / Canvas area with a subtle, faint white grid on a black background to indicate the preview area.

  - Below the canvas, a prominent Cream-colored "Download MP4" button (styled to look ready for high-quality export).

SCREEN 3: PROFILE & SETTINGS (Configuration View)

- Header displaying the username "Canter" in bold white.

- SECTION 1: API SETTINGS

  - A password-type input field labeled "Gemini API Key".

  - A Cream-colored "Save" button next to it.

- SECTION 2: STYLES (Director's Cut)

  - Title: "Styles".

  - A list or grid of small dark cards representing uploaded style files.

  - Each card has a toggle switch (Cream when active) to activate/deactivate the style.

  - Two Cream-outlined buttons: "Upload Style File" and "Write New Style".

- SECTION 3: SKILLS (System Libraries)

  - Title: "Skills".

  - A grid of sleek cards displaying existing skills (e.g., Kanto UI, CodeBrush).

  - A solid Cream button: "Add Skill", which triggers a modal.

  - MODAL DESIGN: A popup allowing the user to either "Upload File" or use a "Text/Code Editor" to write the skill instructions directly, with a "Save Skill" button.

Overall Vibe: Professional, developer-focused, uncluttered, and highly cinematic. Use Tailwind CSS for clean spacing, rounded-md borders, and smooth hover transitions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cab0a2bb-fcb1-46ee-b1e7-a8bac77e1c80).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
