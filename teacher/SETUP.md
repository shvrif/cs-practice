# Sending mock results to a Google Sheet (about 5 minutes)

When this is set up, every mock paper a student submits adds a row to your Google Sheet with their
school, class, name, score, time taken and integrity flags (left the page, tried to paste, rushed answers).

## 1. Create the Sheet
1. Go to <https://sheets.new> (signed in to the Google account you want to own the results).
2. Name it, e.g. **CS Practice Results 2026-27**.

## 2. Add the script
1. In the Sheet: **Extensions → Apps Script**.
2. Delete everything in the editor and paste in the whole of `teacher/apps-script.gs`.
3. Click **Save** (the disk icon).

## 3. Publish it as a web app
1. Click **Deploy → New deployment**.
2. Click the gear ⚙️ next to "Select type" and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**.
   ("Anyone" is needed so students can submit without logging in. They can only *add* rows – they cannot read the sheet.)
4. Click **Deploy**, then **Authorize access** and allow the permissions (it only needs access to this Sheet).
5. Copy the **Web app URL** (it ends in `/exec`).

## 4. Connect the website
1. Open `assets/js/config.js`.
2. Paste the URL between the quotes on the `sheetEndpoint` line:
   ```js
   sheetEndpoint: 'https://script.google.com/macros/s/XXXXXXXX/exec',
   ```
3. Bump the version number in `index.html` (see README → "Updating the site") and publish.

## 5. Test it
Open the site, do a quick mock (answer anything) and submit. A new row should appear in the **Results** tab within a few seconds.

## Using the results
- Use **Data → Create a filter** to filter by School, Year, Class or Paper.
- The **Check?** column flags attempts worth a look: left the page 2+ times, tried to paste, rushed 4+ answers, finished in under 10 minutes, or typed random letters.
- Share the Sheet (view-only) with colleagues at Al Maha Boys, Al Maha Girls and Al Jazeera, or give each school its own filtered view.

## Notes
- If you change the script later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
- Student names and scores are stored only in *your* Google Sheet. Nothing else is collected.
- Results are only sent for **mock papers**, not practice mode.
