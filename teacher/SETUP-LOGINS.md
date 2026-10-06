# Turning on student logins (about 15 minutes)

Students log in with their **school username** (without @amab.com.qa) and a **4-digit PIN**.
Their XP, rank, mistakes and mock results are saved to their account, so their progress follows them to any device.
You see every student's progress in the **Class dashboard** on the teacher page.

> **Try it first:** open the site with `?demo=1` on the end (e.g. `https://shvrif.github.io/cs-practice/?demo=1`).
> Log in as `DEMO7` / `1234`, then open `teacher.html` to see the dashboard with made-up students. `?demo=0` turns demo mode off.

## What you need
- `students.csv` and `login-slips.html` – these are **private** (they contain students' names and PINs).
  Keep them on your computer or in school OneDrive. **Never upload them to GitHub.**
- A **school-managed Google account**. The student data will live in a Google Sheet that you own in that account.
  If your school only uses Microsoft 365, ask IT for a school Google Workspace account, or talk to me about alternatives.

## 1. Create the Sheet and import the students
1. Signed in to the school Google account, go to <https://sheets.new>. Name it **CS Practice – Student accounts**.
2. **File → Import → Upload** and choose `students.csv`.
   Choose **Replace current sheet**, then click **Import data**.
3. Rename the tab at the bottom to exactly **Students** (right-click → Rename).

## 2. Add the back-end script
1. **Extensions → Apps Script**.
2. Delete everything in the editor and paste in the whole of `teacher/backend.gs`. Click **Save** 💾.
3. Click **Project Settings** ⚙️ (left side) → **Script properties** → **Add script property**:
   - Property: `TEACHER_KEY`
   - Value: your teacher passcode (the same one you use to unlock `teacher.html`, e.g. `Taallum2627`).
   - Click **Save script properties**.

## 3. Publish it
1. Click **Deploy → New deployment**. Click ⚙️ next to "Select type" and choose **Web app**.
2. **Execute as: Me**. **Who has access: Anyone**.
   ("Anyone" lets students reach it without a Google login. They can still only see their own data, protected by their PIN.)
   *If "Anyone" isn't offered, your school's Google admin has blocked it – ask IT to allow Apps Script web apps for your account.*
3. Click **Deploy** → **Authorize access** → choose your account → allow.
4. Copy the **Web app URL** (ends in `/exec`).

## 4. Connect the website
1. Open `assets/js/config.js` and paste the URL between the quotes:
   ```js
   backendUrl: 'https://script.google.com/macros/s/XXXXXXXX/exec',
   ```
2. In `index.html` and `teacher.html`, bump the version number (e.g. `?v=19` → `?v=20`) everywhere.
3. Upload `assets/js/config.js`, `index.html` and `teacher.html` to GitHub.

## 5. Test, then hand out logins
1. Open the site – you should see the login screen. Log in with one real student's username and PIN from `students.csv`.
2. Open `teacher.html` → unlock → the **Class dashboard** should list all your students.
3. Open `login-slips.html`:
   - **PIN slips** → print and cut, one per student.
   - **Usernames only** → safe to put on the board (no PINs on it).

## Everyday jobs
- **Forgotten PIN:** look it up in the Students tab (column PIN), or type a new 4-digit PIN there.
- **New student:** add a row to the Students tab (Username, First name, Last name, Class, Year, PIN).
- **Leaver:** delete their row.
- **Mock results:** appear in the **Results** tab automatically, with ⚠️ flags.
- **Progress columns** in the Students tab (XP, Answered, Correct, Mocks taken, Best mock %, Mistakes) update as students practise.
- **Changed the script?** Deploy → Manage deployments → ✏️ Edit → Version: **New version** → Deploy (keeps the same URL).

## Privacy
- The Sheet only holds username, name, class, year, PIN and practice progress – nothing else from the school export.
- Students can only load their own progress (they need their PIN). The dashboard needs your teacher key.
- Wrong PINs are limited: after 5 tries the account is locked for 10 minutes.
- Check this setup is OK with your school's data protection lead before using real student data.
