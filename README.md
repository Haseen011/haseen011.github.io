# Your Academic Webpage

A single-page site template for showcasing academic/research work: hero, about, research interests, career timeline (styled as a reaction-coordinate diagram), publications with filtering, awards/news/teaching, and contact — built in plain HTML/CSS/JS so it works on GitHub Pages with zero build step.

## 1. Customize the content

Open `index.html` and replace the placeholder text (name, institution, thesis title, bio, publications, awards, news, contact links). Search for square brackets like `[Institute]` or `[Your Thesis Title]` — those are all the spots to fill in.

Update the reaction-coordinate timeline in the `#journey` section: each `.rc-node` is one career milestone. Adjust the `left` / `top` inline percentages if you add or remove milestones, so they stay spread out along the curve.

If you'd like an actual CV PDF to download, add it at `assets/CV_YourName.pdf` and update the link in the hero's "Download CV" button.

## 2. Preview locally

Just open `index.html` in a browser — no build tools needed. Or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `yourusername.github.io` if you want it at the root domain, or any name like `academic-site` for a project page).
2. Push these three files (`index.html`, `style.css`, `script.js`) plus your `assets/` folder to the repo.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch," choose the `main` branch and `/ (root)` folder, then save.
5. Wait a minute or two — GitHub will give you a live URL:
   - `https://yourusername.github.io` if the repo is named `yourusername.github.io`
   - `https://yourusername.github.io/repo-name` otherwise

## 4. Optional next steps

- Add a custom domain via **Settings → Pages → Custom domain**.
- Swap the Google Scholar / ORCID / LinkedIn links in the footer for your real profiles.
- If your publication list grows, keep adding `<li class="pub-item" data-tags="...">` entries — the filter buttons work off the `data-tags` attribute, so just tag new entries with `catalysis`, `kinetics`, `process`, or a new tag of your own (add a matching filter button too).
