# Layilah Campbell — Portfolio (The Lanes edition)

A UX research & design portfolio themed after **The Lanes – Ten Pin Bowling** on Roblox. A short opener (shown once per visit) explains the Lanes inspiration. Your photo is on a player card beside the lane, your projects are in a "Choose a lane" table, and clicking one rolls a ball down the lane (and knocks down the pins) before the case study opens.

It's plain HTML, CSS and JavaScript. There's nothing to install and no build step.

## See your changes on your own computer

1. Unzip the folder.
2. Double-click **`index.html`**. It opens in your browser.
3. Open the folder in VS Code and edit **`js/data.js`**. All your text lives there.
4. Save the file, then refresh the browser tab. Your change shows up right away.

Optional: install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**. The page then refreshes by itself every time you save.

## Where things live

```
index.html      Home: neon name, headline, player card + lane, project scoreboard
about.html      About Me
work.html       My Work (case-study cards)
resume.html     Resume (+ Download PDF)
contact.html    Contact
project.html    One case-study template (project.html?p=<project id>)
js/data.js      ← ALL YOUR CONTENT: bio, projects, resume, contact details
js/main.js      Header, logo, photo frame, ball-roll animation
js/pages.js     Builds each page from data.js
css/styles.css  Colors, type and layout
assets/         photo (img/layilah.jpg), resume.pdf, fonts, favicon
```

## Common edits

- **Photo:** replace `assets/img/layilah.jpg` with a higher-resolution portrait (a square image around 900×900 px works well). Keep the same file name.
- **Home headline and player card text:** `heroTitle`, `headline`, `school`, `degreeLine` and `gradLine` at the top of `js/data.js`.
- **LinkedIn:** set `linkedin` in `js/data.js`. It appears on the Contact page and in the footer.
- **Resume PDF:** replace `assets/resume.pdf`.
- **Case studies:** the facts from your resume are already in. Replace each dashed-pink `TODO:` line with your own words, and add screenshots to `assets/img/` (`src: "assets/img/your-file.png"`).
- **Opener text:** edit `showOpener()` in `js/main.js`. It appears once per browser tab session and can be closed with the button or Esc.
- **Scoreboard wording:** each project has `subtitle`, `focus`, `approach` and `summary` in `js/data.js`.
- **Add or remove a project:** copy or delete a block inside `projects: [ … ]` and give it a unique `id`.

## Design notes

- **Type** comes from The Lanes logo. **Damion** is the neon script (name, page titles). **Fredoka** is the rounded sans (title, navigation, body text). Both are open-license fonts stored in `assets/fonts/`.
- **Accessibility:** text and controls meet WCAG 2.2 AA contrast, including a worst-case check against the lightest part of the background glow. There is full keyboard support, a skip link, visible focus rings, labelled landmarks and link text that makes sense out of context. Press **Esc** or **Skip** to skip the ball roll. With *reduce motion* turned on in the operating system, the roll is skipped automatically.
- **Lane look:** honey maple wood with white board lines, glowing royal-blue rails, blue target dots and pin-spot markers, and glossy red-necked pins, modeled on the lane in The Lanes.
- **Ball motion:** the ball drops and bounces at release, then skids wide, hooks back toward the pocket and slows slightly. Its surface rolls forward in 3D as it travels.

*Fan-made tribute to The Lanes on Roblox. Not affiliated with the game's developers.*
