# Mr Sharif's CS Practice

Self-marking practice questions and 50-mark mock exams for Ta'allum Computer Science, Years 7–9 (2026-27 SOW),
for Al Maha Boys, Al Maha Girls and Al Jazeera.

- **Student site:** `index.html` – Year 7 / 8 / 9 tabs, endless practice, unit tests, MS1/EOS1/MS2/EOS2 mocks, flashcards, mistakes bank.
- **Teacher tools:** `teacher.html` – printable papers with mark schemes and links to set a specific version for a class.
  Default passcode: `Taallum2627` (change it – see below).
- **Results logging:** `teacher/SETUP.md` – send every submitted mock to your Google Sheet.

It is a plain static website (HTML, CSS, JavaScript). There's no server, database or build step, so it can be hosted free.

---

## Publishing on GitHub Pages (free)

1. Create a free account at <https://github.com> (use your school email if you like).
2. Click **+ → New repository**, name it e.g. `cs-practice`, set it **Public**, and click **Create repository**.
3. On the new repository page click **uploading an existing file**, drag in **everything inside this folder**
   (`index.html`, `teacher.html`, `assets`, `data`, `teacher`, `README.md`) and click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After about a minute the site is live at `https://YOUR-USERNAME.github.io/cs-practice/`.

### Using your own address (e.g. mrsharif.com)
1. Buy the domain from a registrar (Namecheap, Cloudflare, GoDaddy, Google Domains etc. – about $10–15 a year).
2. In the repository: **Settings → Pages → Custom domain**, type `mrsharif.com`, **Save**.
3. At your registrar, add these DNS records:
   - Four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`
4. Wait for DNS to update (from a few minutes up to 24 hours), then tick **Enforce HTTPS**.

---

## Updating the site

- **Edit questions:** `data/y7.js`, `data/y8.js`, `data/y9.js`. Each unit has `mcq`, `tf`, `cloze`, `short`, `long` and `vocab` lists. The format is explained at the top of `data/y7.js`.
- **Settings:** `assets/js/config.js` – schools, Google Sheet URL, exam dates, which units each mock covers, timer lengths, XP.
- **After any change,** open `index.html` and `teacher.html`, find `?v=10` and change it to `?v=11` (then 12, 13…) everywhere.
  This makes sure students get the new version and not an old copy saved in their browser.
- Upload the changed files to GitHub again (drag and drop replaces them). The live site updates within a minute.

### Writing mark schemes for short and long answers
Each mark point is one string: `'keyword|synonym|another::What the mark is for'`

- `|` means "or". Any one of the alternatives earns the mark.
- A trailing `*` matches any ending: `encrypt*` matches encrypt, encrypted, encryption.
- `a & b` means both words must appear. `a & {b|c}` means a and (b or c).
- `@2 keyboard|mouse|scanner` means two *different* items from the list must appear.
- Plurals are matched automatically (`file` also matches `files`).

The marker gives no marks for random typing, repeated words, or bare lists of keywords (except on "Name / List / State" questions), and caps very short extended answers.

### Changing the teacher passcode
Open `teacher.html`, unlock with the current passcode, open **Change the teacher passcode**, type a new one and click **Generate**.
Paste the line it gives you over the `teacherCodeHash` line in `assets/js/config.js`, then bump the version and upload.

> The passcode keeps casual visitors out of the teacher page. The website runs entirely in the browser, though, so a technically
> confident student could still find answers in the code. Use printed papers or the teacher page for anything high-stakes.

---

## How the mocks work
Every paper is **50 marks**, the same six-section layout every time:

| Section | Type | Marks |
|---|---|---|
| A | Multiple choice (6 × 1 + one "choose and explain" × 2) | 8 |
| B | True / false (3 × 1 + one "explain why" × 2) | 5 |
| C | Fill in the blanks (6 gaps, word bank with extra words) | 6 |
| D | Matching – drag and drop (5 terms, 5 definitions) | 5 |
| E | Short answer (2 + 2 + 3 + 3 + 4) | 14 |
| F | Extended answer (6 + 6) | 12 |

Each unit test, mid-semester mock and end-of-semester mock has **10 fixed versions**, which are identical for every student, so you can set "Version 3" as a class assessment.
There are also **unlimited random papers**. Binary, image file size, spreadsheet functions, profit and Python output questions are generated fresh each time.

### Anti-"click click click" measures
- Each question must stay on screen for a few seconds (the first time) before the student can move on.
- Practice mode takes XP away for wrong multiple-choice and true/false answers.
- One multiple-choice and one true/false question per paper also need a written justification.
- Pasting into answer boxes is blocked, and so is copying question text.
- Leaving the page (switching tab or app), paste attempts, large blocks of text appearing at once, and answers given in under 2.5 s are all recorded.
- Written answers that are random letters, repeated words or keyword lists get no marks.
