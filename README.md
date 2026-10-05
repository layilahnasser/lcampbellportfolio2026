# Layilah Campbell — Portfolio (The Lanes edition)

A UX portfolio themed after **The Lanes – Ten Pin Bowling** on Roblox. It uses a neon bowling-alley look, an in-game style HUD, and your avatar standing at the lane. Projects sit on the **scoreboard**, and clicking one rolls a ball down the lane (STRIKE!) before the case study opens.

It's plain HTML, CSS and JavaScript with no build step and nothing to install.

```
index.html      Home: HUD, neon name logo, your avatar at the lane, project scoreboard
about.html      About Me
work.html       My Work: "ball rack" of case-study cards
resume.html     Resume (+ Download PDF button)
contact.html    Contact (email / LinkedIn + a lane-tablet message form)
project.html    One case-study template: project.html?p=<project id>
js/data.js      ← ALL YOUR CONTENT LIVES HERE
js/main.js      HUD, logo, avatar, ball-roll transition
js/pages.js     Builds each page from data.js
css/styles.css  All styling
assets/         Images, favicon, resume PDF
```

## 1. Add your content (one file)

Open **`js/data.js`** and replace each `"TODO: …"` with your real content. Until you replace them, those spots show on the site with a **dashed pink outline**, so you can see what's still missing.

- **Projects**: each project is a full case study split into "frames":
  Problem → Research → Define → Ideate → Iterate (V1/V2/V3) → Design Execution (with *why* each decision was made) → Outcome & Reflection.
  This follows what Roblox asks for: design process, research, iteration and justified design execution.
- **Images**: put screenshots in `assets/img/` and set `src: "assets/img/your-file.png"`. An empty `src` shows a placeholder box.
- **Ball colour**: `ballColor` sets the ball that rolls down the lane for that project.
- **Scoreboard total**: `score` is a short headline result, for example `"+32%"`.
- **Avatar**: change `profile.avatar` colours (skin, hair, shirt, pants, shoes) to match your Roblox avatar.
- **Resume PDF**: save your resume as `assets/resume.pdf`.
- **Add or remove projects**: copy or delete a block in `projects: [ … ]`. Give each one a unique `id`.

## 2. Preview it locally in VS Code

1. Open this folder in VS Code.
2. Install the **Live Server** extension. Then right-click `index.html` and choose **Open with Live Server**.
   (Double-clicking `index.html` also works.)

## 3. Put it live on GitHub Pages

1. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, then pick your branch (e.g. `main`) and the `/ (root)` folder. Click **Save**.
4. After about a minute, the site will be at
   `https://layilahnasser.github.io/lcampbellportfolio2026/`. Send that link to your recruiter.

## Accessibility notes

- Every scoreboard row and card is a real link, so keyboard and screen-reader users can use them. Press **Esc** or **Skip** to skip the ball roll.
- People who turn on *reduce motion* in their OS go straight to the case study with no animation.
- The layout is responsive down to phone width.

*Fan-made tribute to The Lanes on Roblox. Not affiliated with the game's developers.*
