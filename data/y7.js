/* YEAR 7 question bank – based on the 2026-27 Y7 SOW, knowledge organisers and booklets.
   Authoring format:
   mcq:   {q, o:[CORRECT, wrong, wrong, wrong], x:'explanation', c:'code', j:{k:[mark points]}}
   tf:    {q, a:true/false, x:'explanation', j:[mark points for "explain why"]}
   cloze: {t:'text with [answer|alternative] blanks', d:['distractor words']}
   short/long: {q, m:marks, k:['keyword|synonym::what the mark is for', ...], a:'model answer'}
*/
(function () {
  const U = CS.unit;

  /* ================= UNIT 1: FILES AND FOLDERS ================= */
  U({
    year: 7, num: 1, title: 'Files and Folders', icon: '📁',
    topics: ['Files, folders and subfolders', 'File extensions', 'File paths', 'Save vs Save As', 'Organising work', 'Compression and backups'],
    vocab: [
      ['File', 'A collection of data stored as one unit on a computer'],
      ['Folder', 'A container used to organise and group related files'],
      ['Subfolder', 'A folder stored inside another folder'],
      ['File extension', 'The characters after the dot that show the file type, e.g. .docx'],
      ['File path', 'The address that shows exactly where a file is stored'],
      ['Save', 'Stores the latest changes to an existing file (Ctrl+S)'],
      ['Save As', 'Saves a file with a new name or in a different location'],
      ['Rename', 'Changing the name of a file or folder'],
      ['Directory', 'Another word for a folder in the file system'],
      ['Root', 'The top-level location of a drive, e.g. C:\\ or B:\\'],
      ['File size', 'The amount of storage space a file uses, measured in KB, MB or GB'],
      ['Compression', 'Making files smaller (e.g. .zip) to save space or share them'],
      ['Backup', 'A copy of data stored separately in case the original is lost'],
      ['Permissions', 'Settings that control who can read, change or delete a file'],
      ['Recycle Bin', 'Where deleted files go before they are permanently removed']
    ],
    mcq: [
      { q: 'What is a folder?', o: ['A container used to organise and group related files', 'A single document saved on the computer', 'A program that opens files', 'A type of file extension'], x: 'Folders hold files (and other folders) so work stays organised.' },
      { q: 'Which file extension is used for a Microsoft Word document?', o: ['.docx', '.xlsx', '.pptx', '.mp3'], x: '.docx = Word, .xlsx = Excel, .pptx = PowerPoint.' },
      { q: 'Which file extension is an Excel spreadsheet?', o: ['.xlsx', '.docx', '.jpg', '.txt'] },
      { q: 'Which file extension is a PowerPoint presentation?', o: ['.pptx', '.pdf', '.mp4', '.zip'] },
      { q: 'Which of these is an image file?', o: ['holiday.jpg', 'essay.docx', 'song.mp3', 'setup.exe'], x: '.jpg and .png are image files.' },
      { q: 'Which of these is an audio file?', o: ['song.mp3', 'video.mp4', 'photo.png', 'notes.txt'] },
      { q: 'Which file type could be risky to open from an unknown email because it runs a program?', o: ['.exe', '.txt', '.jpg', '.pdf'], x: '.exe files are executable programs – they could be malware.', j: { k: ['program|executable|runs|run|install*::It is a program that runs/installs', 'virus|malware|harm|damage::It could contain a virus/malware'] } },
      { q: 'Which keyboard shortcut saves your work?', o: ['Ctrl + S', 'Ctrl + C', 'Ctrl + V', 'Ctrl + Z'], x: 'Ctrl+S saves; Ctrl+C copies; Ctrl+V pastes; Ctrl+Z undoes.' },
      { q: 'Which keyboard shortcut undoes your last action?', o: ['Ctrl + Z', 'Ctrl + X', 'Ctrl + A', 'Ctrl + S'] },
      { q: 'Which shortcut opens File Explorer?', o: ['Windows key + E', 'Ctrl + E', 'Alt + F4', 'Ctrl + P'] },
      { q: 'What is the difference between Save and Save As?', o: ['Save As lets you choose a new name or location', 'Save As deletes the old file', 'Save only works on images', 'There is no difference'], x: 'Save updates the existing file. Save As creates a copy with a new name or location.', j: { k: ['new name|different name|rename::Save As gives a new name', 'location|different place|folder|somewhere else::…or a different location', 'overwrit*|update*|existing|same file::Save updates the existing file'] } },
      { q: 'In the file path B:\\Year 7\\CS\\Homework.docx, what is "Homework.docx"?', o: ['The file', 'The root drive', 'A folder', 'A subfolder'], x: 'The last part of a path is the file itself.' },
      { q: 'In the file path B:\\Year 7\\CS\\Homework.docx, what is "B:"?', o: ['The root (drive)', 'The file name', 'The file extension', 'A subfolder'] },
      { q: 'What does compressing a file do?', o: ['Makes it smaller to save space or share', 'Deletes it permanently', 'Makes it into a picture', 'Locks it with a password'], x: 'Compression (e.g. .zip) reduces file size.' },
      { q: 'Which file extension is a compressed archive?', o: ['.zip', '.docx', '.png', '.mp4'] },
      { q: 'Where do deleted files go first in Windows?', o: ['The Recycle Bin', 'The Desktop', 'The Downloads folder', 'They disappear immediately'] },
      { q: 'What is a backup?', o: ['A copy of data kept separately in case the original is lost', 'A folder inside another folder', 'The name of a file', 'A type of virus'] },
      { q: 'Which is the BEST file name for Year 7 CS homework?', o: ['CS_Homework_Binary.docx', 'stuff.docx', 'Document1.docx', 'asdfgh.docx'], x: 'Good names are clear and descriptive so you can find them later.' },
      { q: 'How do you move a file to a new folder?', o: ['Cut (Ctrl+X) then Paste (Ctrl+V)', 'Copy (Ctrl+C) then Delete', 'Rename it', 'Press Ctrl+S'], x: 'Cut and paste moves; copy and paste makes a duplicate.' },
      { q: 'Why do file extensions matter?', o: ['They tell the operating system which app to open the file with', 'They make files bigger', 'They stop viruses', 'They are only for decoration'] },
      { q: 'What is a subfolder?', o: ['A folder stored inside another folder', 'A file that has been deleted', 'The top-level drive', 'A compressed file'] },
      { q: 'What does .pdf stand for?', o: ['Portable Document Format', 'Printed Data File', 'Personal Document Folder', 'Picture Display Format'] },
      { q: 'How do you create a new folder in File Explorer?', o: ['Right-click → New → Folder', 'Ctrl + S', 'Right-click → Delete', 'File → Print'] },
      { q: 'What unit is NOT used to measure file size?', o: ['GHz', 'KB', 'MB', 'GB'], x: 'GHz measures clock speed, not storage.' }
    ],
    tf: [
      { q: 'A file extension such as .docx tells the computer what type of file it is.', a: true, j: ['type|kind|what the file is::Shows the file type', 'app*|program|software|open::Tells the OS which app opens it'] },
      { q: 'Save As always overwrites the original file with the same name.', a: false, x: 'Save As lets you give a new name or location, so the original is kept.', j: ['new name|different name::Save As lets you choose a new name', 'location|place|folder::or new location', 'original|old|kept|copy::original file is kept'] },
      { q: 'A folder can contain other folders.', a: true, x: 'Folders inside folders are called subfolders.' },
      { q: 'Ctrl + C moves a file to a new location.', a: false, x: 'Ctrl+C copies. Ctrl+X cuts (moves).', j: ['copy|copies|duplicate::Ctrl+C copies', 'ctrl + x|ctrl+x|cut::Ctrl+X/cut is used to move'] },
      { q: 'A .mp4 file is a video file.', a: true },
      { q: 'A .mp3 file is an image file.', a: false, x: '.mp3 is audio. .jpg and .png are images.', j: ['audio|sound|music::mp3 is audio', 'jpg|png|image*::images are .jpg/.png'] },
      { q: 'Deleting a file sends it to the Recycle Bin first.', a: true },
      { q: 'A backup should be stored in the same place as the original file.', a: false, x: 'Backups should be stored separately so they survive if the original is lost.', j: ['separate*|different|another|elsewhere|cloud|usb::Kept in a different place', 'lost|damage*|broken|delete*|fail*::So it survives if the original is lost'] },
      { q: 'A file path shows exactly where a file is stored.', a: true },
      { q: 'Compressing a file makes it larger.', a: false, x: 'Compression makes files smaller.' },
      { q: '"Document1.docx" is a good, descriptive file name.', a: false, x: 'Good names describe the content, e.g. "Science_Report_Plants.docx".', j: ['descript*|describe*|meaning*|clear::Should describe the content', 'find|search|locat*::so it is easy to find'] },
      { q: 'Directory is another word for folder.', a: true },
      { q: 'You should save your work regularly using Ctrl + S.', a: true },
      { q: 'The root is the top-level location of a drive, such as C:\\.', a: true },
      { q: 'Permissions control who can read, change or delete a file.', a: true },
      { q: '.exe files are always safe to open.', a: false, x: '.exe files are programs and could contain malware.' }
    ],
    cloze: [
      { t: 'A [file] is a collection of data stored as one unit. A [folder] is a container used to group related files. A folder stored inside another folder is called a [subfolder]. The letters after the dot in a file name are called the file [extension]. For example, a Word document ends in [.docx|docx]. To store changes to an existing file we press Ctrl + [S].', d: ['virus', 'Z'] },
      { t: 'Good file management means using clear, [descriptive] file names and saving work in organised [folders]. You should save [regularly] so you do not lose work. Use Save [As] to avoid overwriting a file. Keep a [backup] of important work in a separate place, and [delete] files you no longer need.', d: ['random', 'never'] },
      { t: 'To move a file you [cut] it (Ctrl + X) and [paste] it (Ctrl + V) in the new location. To make a duplicate you [copy] it with Ctrl + C. Deleted files go to the [Recycle Bin|recycle bin]. Making files smaller in a .zip is called [compression]. The address of a file, such as B:\\Year 7\\CS\\Homework.docx, is its file [path].', d: ['print', 'scan'] }
    ],
    short: [
      { q: 'Explain the difference between a file and a folder.', m: 2, k: ['data|document|information|single|one unit|picture|video::A file stores data / a single item', 'container|group*|organis*|holds|store* files|contain*::A folder groups/holds files'], a: 'A file is a single item of data, such as a document or photo. A folder is a container that groups and organises related files.' },
      { q: 'Give two reasons why file extensions are important.', m: 2, k: ['which app|which program|open|application|software::Tells the OS which app opens it', 'risk*|danger*|exe|virus|malware|safe::Helps spot risky files like .exe', 'type of data|what type|kind of file|file type::Shows the type of data stored'], a: 'They tell the operating system which application should open the file, and they help you identify risky files such as .exe programs.' },
      { q: 'Explain the difference between Save and Save As.', m: 2, k: ['update*|overwrit*|existing|same file|same name::Save updates the existing file', 'new name|different name|new location|different location|copy|another place::Save As chooses a new name/location'], a: 'Save updates the existing file with your latest changes. Save As lets you choose a new name or location, creating a separate copy.' },
      { q: 'Describe three features of good file management.', m: 3, k: ['name*|descript*|clear::Clear, descriptive file names', 'folder*|subfolder*|organis*|structure::Organised folders/subfolders', 'save* regular*|ctrl + s|ctrl+s|often::Save regularly', 'backup|back up|copy::Back up important work', 'delete*|remove*|unneeded|no longer::Delete files no longer needed', 'save as|overwrit*::Use Save As to avoid overwriting'], a: 'Use clear, descriptive file names; save work into organised folders and subfolders; save regularly with Ctrl+S; and keep a backup of important work.' },
      { q: 'What is a file path? Give an example.', m: 2, k: ['address|location|where|route::The address/location of a file', ':\\|\\|c:|b:|/::A correct example path'], a: 'A file path is the address that shows exactly where a file is stored, e.g. B:\\Year 7\\CS\\Homework.docx.' },
      { q: 'What is file compression and why is it used?', m: 2, k: ['smaller|reduce*|less space|shrink*::Makes files smaller', 'save space|storage|share|send|email|upload|faster::To save space or share/send faster', 'zip::Example: .zip'], a: 'Compression makes files smaller (e.g. into a .zip). It saves storage space and makes files quicker to share or email.' },
      { q: 'Explain why you should keep a backup of important files.', m: 2, k: ['lost|lose|delete*|corrupt*|damage*|broken|fail*|stolen::Original could be lost/damaged', 'copy|recover*|restore*|get it back|still have::You can recover it from the copy', 'separate*|different place|usb|cloud|another::Kept somewhere separate'], a: 'If the original is deleted, corrupted or the device breaks, you can restore your work from the backup, which is stored in a separate place.' },
      { q: 'Explain the difference between copying and moving (cutting) a file.', m: 2, k: ['copy*|duplicate|two|both|original stays|still in::Copy makes a duplicate and the original stays', 'move*|cut|removed|no longer|only one|new location::Cut/move removes it from the original place'], a: 'Copying creates a duplicate so the file is in both places. Moving (cut and paste) takes the file out of the old location and puts it in the new one.' },
      { q: 'Name the type of file for each extension: .xlsx, .mp3, .jpg', m: 3, k: ['spreadsheet|excel::.xlsx = spreadsheet', 'audio|sound|music|song::.mp3 = audio', 'image|picture|photo::.jpg = image'], a: '.xlsx is an Excel spreadsheet, .mp3 is an audio file, .jpg is an image file.' },
      { q: 'A student saves all their work on the desktop with names like "Document1". Suggest three improvements.', m: 3, k: ['folder*|subfolder*|organis*::Create folders/subfolders', 'name*|descript*|meaning*|rename*::Use clear, descriptive names', 'backup|back up|cloud|usb|copy::Keep a backup', 'b: drive|network|onedrive|save regular*::Save to the right drive regularly'], a: 'Create folders for each subject, rename files with clear descriptive names, and keep a backup copy in a separate place such as OneDrive.' },
      { q: 'What happens to a file when you delete it in Windows? How can you get it back?', m: 2, k: ['recycle bin|bin::It goes to the Recycle Bin', 'restore|recover|get back|drag out|undo|ctrl + z::It can be restored from the bin'], a: 'It goes to the Recycle Bin first, where you can restore it until the bin is emptied.' },
      { q: 'Describe how to create a new folder and rename it.', m: 4, k: ['right-click|right click::Right-click', 'new::Choose New', 'folder::Select Folder', 'rename|type*|name::Rename / type the name', 'enter::Press Enter'], a: 'Right-click in File Explorer, choose New → Folder, then right-click the folder, choose Rename, type the new name and press Enter.' }
    ],
    long: [
      { q: 'Explain why good file management is important for a student. In your answer describe at least three good habits and explain how each one helps.', m: 6, min: 60, k: ['find|locat*|search|quick*|time::Makes work quick to find', 'folder*|subfolder*|structure|hierarch*::Organised folders/subfolders', 'name*|descript*|clear::Descriptive file names', 'save* regular*|ctrl + s|ctrl+s|often::Save regularly', 'lose|lost|crash|power cut|not lose::Prevents losing work', 'backup|back up|copy|cloud|usb::Keeping backups', 'save as|overwrit*::Save As avoids overwriting', 'delete*|unneeded|space|clutter::Delete old files to save space'], a: 'Good file management saves time because work is easy to find. Using folders and subfolders (e.g. Year 7 → CS) keeps things organised. Descriptive names like "CS_Binary_Homework" mean you can search for files. Saving regularly with Ctrl+S prevents losing work if the computer crashes. Keeping a backup in a separate place, such as OneDrive, means work can be recovered if the original is deleted. Using Save As avoids overwriting older versions.' },
      { q: 'Your teacher wants you to organise your Year 7 work on the B: drive. Describe the folder structure you would create and explain how you would name, save and protect your files.', m: 6, min: 60, k: ['b:|root|drive::Starts from the B: drive (root)', 'year 7|subject*|each subject|maths|english|science|cs::Folder per subject', 'subfolder*|inside|hierarch*|structure::Subfolders / hierarchy', 'name*|descript*|clear::Descriptive file names', 'extension|.docx|.pptx|type::Correct file types/extensions', 'save* regular*|ctrl + s|ctrl+s::Save regularly', 'save as|version*::Save As / versions', 'backup|back up|copy|onedrive|usb|cloud::Backups', 'path|b:\\\\::File path example'], a: 'On the B: drive I would create a "Year 7" folder, then a subfolder for each subject such as Computer Science, English and Maths, with further subfolders like "Homework" and "Projects". I would name files descriptively, e.g. "CS_Unit1_Homework.docx", so the path is B:\\Year 7\\CS\\Homework\\CS_Unit1_Homework.docx. I would save regularly with Ctrl+S, use Save As for new versions, and back up to OneDrive.' },
      { q: 'Compare copying, moving and deleting files. For each, explain what happens and give a situation where you would use it.', m: 6, min: 55, k: ['copy*|duplicate::Copy creates a duplicate', 'both|original stays|two places::Original stays after copying', 'ctrl + c|ctrl+c::Ctrl+C', 'move*|cut::Moving/cutting', 'removed from|no longer in|new location::Moving removes it from the original place', 'ctrl + x|ctrl+x|ctrl + v|ctrl+v|paste::Ctrl+X / Ctrl+V', 'delete*|recycle bin::Delete sends to Recycle Bin', 'space|no longer need*|unneeded::Delete files no longer needed', 'backup|usb|share|friend|teacher|tidy|organis*::Sensible example situations'], a: 'Copying (Ctrl+C, Ctrl+V) creates a duplicate so the file is in two places – useful for putting a backup on a USB. Moving (Ctrl+X, Ctrl+V) removes the file from its old location and places it in a new one – useful for tidying files into the correct folder. Deleting sends a file to the Recycle Bin – useful for removing files you no longer need to free up space.' },
      { q: 'Explain what file extensions are and why they are useful. Give at least four examples with the type of file each one represents.', m: 6, min: 50, k: ['after the dot|dot|characters|end of|suffix::Characters after the dot', 'type|kind::Shows the file type', 'open|app*|program::Tells OS which app opens it', 'exe|risk*|danger*|virus|malware::Helps spot risky files', '.docx|docx|word::.docx example', '.xlsx|xlsx|excel|.pptx|pptx|powerpoint::.xlsx/.pptx example', '.jpg|jpg|.png|png|image::image example', '.mp3|mp3|.mp4|mp4|audio|video|.pdf|pdf|.zip|zip|.txt::other correct example'], a: 'A file extension is the characters after the dot in a file name. It tells the operating system what type of file it is and which application should open it. It also helps you spot risky files like .exe programs. Examples: .docx (Word document), .xlsx (Excel spreadsheet), .jpg (image), .mp3 (audio), .pdf (Portable Document Format), .zip (compressed archive).' }
    ]
  });

  /* ================= UNIT 2: E-SAFETY ================= */
  U({
    year: 7, num: 2, title: 'E-Safety', icon: '🛡️',
    topics: ['Staying safe online', 'Strong passwords', 'Phishing and scams', 'Malware', 'Cyberbullying', 'Digital footprint', 'Email'],
    vocab: [
      ['E-safety', 'Staying safe when using the internet, social media and digital devices'],
      ['Password', 'A secret word or phrase used to prove your identity and protect an account'],
      ['Phishing', 'A scam that uses fake emails or websites to steal personal information'],
      ['Malware', 'Malicious software designed to cause damage or gain unauthorised access'],
      ['Virus', 'Malware that copies itself and spreads to other files'],
      ['Spam', 'Unwanted messages sent in bulk, usually by email'],
      ['Privacy', 'Keeping personal information secure and only sharing it with trusted people'],
      ['Digital footprint', 'The trail of data you leave behind when you use the internet'],
      ['Identity theft', 'Stealing someone\'s personal information to pretend to be them'],
      ['Cyberbullying', 'Using technology to bully, threaten or harass someone'],
      ['Firewall', 'Software that monitors and filters network traffic'],
      ['Encryption', 'Scrambling data so only authorised people can read it'],
      ['Ransomware', 'Malware that locks your files and demands payment'],
      ['Spyware', 'Malware that secretly monitors what you do'],
      ['Trojan', 'Malware disguised as safe, useful software'],
      ['BCC', 'Blind carbon copy – sends a copy of an email without other recipients seeing'],
      ['Block', 'Stopping a person from contacting you online']
    ],
    mcq: [
      { q: 'Which of these is the STRONGEST password?', o: ['Sun$hine!7School', 'password123', 'ali2014', '12345678'], x: 'Strong passwords are 8+ characters with upper/lower case, numbers and symbols.', j: { k: ['symbol*|special character*|$|!::Contains symbols', 'number*|digit*::Contains numbers', 'upper*|lower*|capital*|case::Mix of upper and lower case', 'long|length|8|characters::Long enough'] } },
      { q: 'What is phishing?', o: ['A scam using fake emails or websites to steal personal information', 'A virus that deletes files', 'Sending friendly messages', 'A type of firewall'] },
      { q: 'Which is a sign of a phishing email?', o: ['It says "Act now or your account will close!"', 'It comes from your teacher\'s school email', 'It has no links', 'It is written with no spelling mistakes by someone you know'], x: 'Urgency, strange sender addresses, spelling mistakes and requests for passwords are warning signs.' },
      { q: 'What should you do FIRST if you are cyberbullied?', o: ['Do not reply, and tell a trusted adult', 'Reply with something mean', 'Delete all your accounts immediately', 'Share the messages with everyone'], j: { k: ['worse|escalat*|encourage*|what they want::Replying makes it worse', 'help|support|adult|teacher|parent::An adult can help', 'evidence|screenshot|report|block::Save evidence/report/block'] } },
      { q: 'Which type of malware locks your files and demands payment?', o: ['Ransomware', 'Adware', 'Spyware', 'Worm'] },
      { q: 'Which type of malware disguises itself as safe software?', o: ['Trojan', 'Virus', 'Ransomware', 'Adware'] },
      { q: 'Which malware secretly monitors your activity?', o: ['Spyware', 'Adware', 'Worm', 'Ransomware'] },
      { q: 'Which malware displays unwanted adverts?', o: ['Adware', 'Trojan', 'Spyware', 'Ransomware'] },
      { q: 'Which malware spreads across networks automatically?', o: ['Worm', 'Adware', 'Trojan', 'Spam'] },
      { q: 'What is a digital footprint?', o: ['The trail of data you leave when using the internet', 'A photo of your foot', 'A type of password', 'A virus'] },
      { q: 'Which personal information should you NEVER share online with strangers?', o: ['Your home address', 'Your favourite colour', 'Your favourite film', 'A game you like'] },
      { q: 'What does a firewall do?', o: ['Monitors and filters network traffic', 'Speeds up the internet', 'Stores backups', 'Deletes spam'] },
      { q: 'What is encryption?', o: ['Scrambling data so only authorised users can read it', 'Deleting data permanently', 'Copying data to a USB', 'Sending spam'] },
      { q: 'In an email, what does BCC do?', o: ['Sends a copy without other recipients seeing that address', 'Sends the email to the spam folder', 'Adds an attachment', 'Marks the email as important'] },
      { q: 'In an email, what is an attachment?', o: ['A file sent with the email', 'The person receiving the email', 'The subject line', 'A saved email not yet sent'] },
      { q: 'What should you do with a suspicious link in an email?', o: ['Not click it, and report/delete the email', 'Click it to check', 'Forward it to friends', 'Reply asking if it is real'] },
      { q: 'Why should you use a DIFFERENT password for each account?', o: ['If one password is stolen, your other accounts stay safe', 'It makes the computer faster', 'Websites do not allow the same password', 'It stops spam'] },
      { q: 'Which of these is a safe thing to do on social media?', o: ['Set your account to private', 'Accept every friend request', 'Post your school name and address', 'Share your password with your best friend'] },
      { q: 'What should you do if an online "friend" asks to meet you in real life?', o: ['Refuse and tell a trusted adult', 'Go alone to a public place', 'Agree if they seem nice', 'Give them your phone number first'] },
      { q: 'What is identity theft?', o: ['Stealing someone\'s personal information to pretend to be them', 'Forgetting your password', 'Posting a selfie', 'Deleting an account'] },
      { q: 'Which of these helps protect a computer from malware?', o: ['Keeping software and the OS up to date', 'Turning off the firewall', 'Opening all email attachments', 'Using the same password everywhere'] },
      { q: 'What is spam?', o: ['Unwanted messages sent in bulk', 'A strong password', 'An antivirus program', 'A secure website'] },
      { q: 'Why should you log out on shared or public computers?', o: ['So the next person cannot use your account', 'To make the computer faster', 'To delete your files', 'Because it saves electricity'] }
    ],
    tf: [
      { q: 'password123 is a strong password.', a: false, x: 'It is too simple and easily guessed.', j: ['simple|common|guess*|easy|obvious::Too simple/easily guessed', 'symbol*|capital*|upper*|special::No symbols or capitals'] },
      { q: 'You should only add people you know in real life on social media.', a: true, j: ['stranger*|fake|not who they say|pretend*::Strangers may not be who they say', 'safe|danger*|risk*|groom*::Keeps you safe'] },
      { q: 'Once something is posted online it can stay there forever, even if you delete it.', a: true, x: 'People can screenshot or share it – it becomes part of your digital footprint.' },
      { q: 'If you are cyberbullied, you should reply to the bully to make them stop.', a: false, x: 'Do not reply – block, save evidence, report and tell a trusted adult.', j: ['not reply|don\'t reply|do not reply|ignore::Do not reply', 'block*::Block the sender', 'report*::Report it', 'adult|teacher|parent::Tell a trusted adult', 'evidence|screenshot::Keep evidence'] },
      { q: 'A virus copies itself and spreads to other files.', a: true },
      { q: 'A Trojan displays unwanted adverts.', a: false, x: 'That is adware. A Trojan pretends to be safe software.' },
      { q: 'Phishing emails often contain spelling mistakes and create a sense of urgency.', a: true },
      { q: 'It is safe to share your password with your best friend.', a: false, x: 'Passwords should never be shared – even friends could fall out or accidentally share it.', j: ['never share|secret|private|only you::Passwords must stay secret', 'account|access|hack*|pretend|post::They could access/misuse your account'] },
      { q: 'Your digital footprint can affect your future job.', a: true, x: 'Employers and universities may look at your online history.' },
      { q: 'A firewall monitors and filters network traffic.', a: true },
      { q: 'Using privacy settings means everyone on the internet can see your posts.', a: false, x: 'Privacy settings let you control who sees your information.' },
      { q: 'BCC recipients are hidden from other people who receive the email.', a: true },
      { q: 'Antivirus software should be kept up to date.', a: true },
      { q: 'You should hover over a link to check where it really goes before clicking.', a: true },
      { q: 'People you meet online are always who they say they are.', a: false, j: ['fake|pretend*|lie|lying|stranger*|not who::People can pretend/use fake profiles', 'danger*|risk*|unsafe|groom*::This can be dangerous'] },
      { q: 'Ransomware secretly records your keystrokes.', a: false, x: 'That is spyware. Ransomware locks files and demands payment.' }
    ],
    cloze: [
      { t: 'A strong password should be at least [8|eight] characters long and use a mix of [upper] and lower case letters, [numbers] and [symbols]. You should use a [different|unique] password for each account and never [share] it with anyone.', d: ['names', 'birthdays'] },
      { t: '[Phishing] is a scam that uses fake emails to steal personal information. Warning signs include a suspicious [sender] address, spelling mistakes, and a sense of [urgency]. You should not click any [links], do not reply, and [report] the email. Unwanted bulk messages are called [spam].', d: ['firewall', 'virus'] },
      { t: 'If you are [cyberbullied], do not [reply] to the bully. [Block] the sender, save [evidence] with a screenshot, use the [report] button and tell a trusted [adult].', d: ['share', 'delete'] },
      { t: 'Malicious software is called [malware]. A [virus] copies itself and spreads to other files. A [worm] spreads across networks automatically. A [trojan] disguises itself as safe software. [Ransomware] locks files and demands payment, and [spyware] secretly monitors your activity.', d: ['firewall', 'browser'] }
    ],
    short: [
      { q: 'Give two features of a strong password.', m: 2, k: ['8|eight|long|length::At least 8 characters', 'upper*|lower*|capital*|case::Upper and lower case', 'number*|digit*::Numbers', 'symbol*|special|!|@|#::Symbols', 'unique|different|each account::Different for each account', 'no name*|not your name|birthday|not guess*::Not personal info'], a: 'It should be at least 8 characters long and include a mix of upper case, lower case, numbers and symbols.' },
      { q: 'Describe two signs that an email might be a phishing email.', m: 2, k: ['urgen*|act now|immediately|hurry|threat*::Urgency / threats', 'sender|address|domain|unknown::Suspicious sender address', 'spell*|grammar::Spelling/grammar mistakes', 'password|bank|detail*|personal information::Asks for passwords/bank details', 'link*|url::Suspicious links', 'attachment*::Unexpected attachments'], a: 'It creates urgency ("act now or your account closes") and it asks for your password or bank details. It may also have spelling mistakes or a strange sender address.' },
      { q: 'What is a digital footprint? Why should you keep it positive?', m: 3, k: ['trail|trace|record|history::A trail of data', 'post*|like*|comment*|search*|online|internet::Left from your online activity', 'job*|employ*|universit*|college|future|reputation::Can affect future jobs/reputation', 'forever|permanent|never go*|stay*::It stays online permanently'], a: 'A digital footprint is the trail of data you leave when you post, like, comment or search online. It should be positive because it stays online and future employers or universities may see it.' },
      { q: 'List three steps you should take if you are being cyberbullied.', m: 3, k: ['not reply|don\'t reply|do not reply|ignore::Do not reply', 'block*::Block the sender', 'evidence|screenshot|save::Save evidence', 'adult|teacher|parent::Tell a trusted adult', 'report*::Use the report button'], a: 'Do not reply, block the sender, screenshot the evidence, report it on the platform and tell a trusted adult.' },
      { q: 'Explain the difference between a virus and a Trojan.', m: 2, k: ['cop*|spread*|replicat*|other files::A virus copies itself/spreads to other files', 'disguis*|pretend*|look* like|safe|legitimate|useful|real software::A Trojan is disguised as safe software'], a: 'A virus copies itself and spreads to other files. A Trojan disguises itself as safe or useful software to trick you into installing it.' },
      { q: 'Give three ways to protect a computer from malware.', m: 3, k: ['antivirus|anti-virus::Install antivirus', 'update*|up to date|patch*::Keep OS/software updated', 'firewall::Use a firewall', 'attachment*|unknown email|link*|download*::Don\'t open unknown attachments/links', 'password*::Strong passwords', 'backup*::Back up files'], a: 'Install reputable antivirus software, keep the operating system up to date, use a firewall, and do not open unknown email attachments.' },
      { q: 'Explain the difference between CC and BCC in an email.', m: 2, k: ['copy|cc|carbon::CC sends a copy', 'see|visible|everyone can|show*::CC recipients are visible to others', 'hidden|blind|can\'t see|cannot see|not see|private::BCC recipients are hidden'], a: 'CC (carbon copy) sends a copy to other people and everyone can see who received it. BCC (blind carbon copy) also sends a copy but the address is hidden from other recipients.' },
      { q: 'Why is it dangerous to share personal information such as your address or school online?', m: 2, k: ['stranger*|predator*|find you|locat*|track*|visit|stalk*::Strangers could find you', 'identity theft|steal*|pretend|scam*|fraud::Identity theft/scams', 'forever|permanent|shared::Once shared it can\'t be taken back'], a: 'Strangers could use it to find where you live or go to school, and criminals could use it for identity theft.' },
      { q: 'What is the purpose of privacy settings on social media?', m: 2, k: ['control|choose|decide|limit*|restrict*::Control who can see your information', 'friend*|people you know|only|stranger*|public::Only trusted people/not strangers', 'profile|post*|information|photo*::Protects posts/profile information'], a: 'Privacy settings let you control who can see your profile, posts and information, so only people you know can see them and strangers cannot.' },
      { q: 'Explain what encryption is and why it is used.', m: 2, k: ['scrambl*|code*|unreadable|coded::Scrambles data', 'authoris*|only|key|intended|can\'t read|cannot read|hackers::Only authorised people can read it'], a: 'Encryption scrambles data so it cannot be read without the key. It means if data is intercepted, hackers cannot understand it.' },
      { q: 'Describe what a firewall does.', m: 2, k: ['monitor*|check*|filter*|watch*::Monitors/filters traffic', 'traffic|data|network|incoming|outgoing::Network traffic', 'block*|stop*|prevent*|unauthoris*|hacker*::Blocks unauthorised access'], a: 'A firewall monitors and filters incoming and outgoing network traffic and blocks unauthorised or suspicious connections.' },
      { q: 'Name four different types of malware and state what each one does.', m: 4, k: ['virus::Virus – copies/spreads to other files', 'worm::Worm – spreads across networks', 'trojan::Trojan – disguised as safe software', 'ransomware::Ransomware – locks files, demands payment', 'spyware::Spyware – monitors activity', 'adware::Adware – shows unwanted adverts'], a: 'Virus – copies itself into other files. Worm – spreads across networks automatically. Trojan – pretends to be safe software. Ransomware – locks files and demands payment. Spyware – secretly monitors you. Adware – shows unwanted adverts.' }
    ],
    long: [
      { q: 'A Year 7 student has just joined a social media app. Give them detailed advice on how to stay safe online. Explain WHY each piece of advice is important.', m: 6, min: 60, k: ['personal information|address|school|phone|location::Don\'t share personal information', 'privacy setting*|private::Use privacy settings', 'stranger*|know in real life|friend request*|fake::Only add people you know', 'password*::Strong, secret passwords', 'think before|post*|forever|permanent|footprint::Think before you post – it is permanent', 'report*|block*::Report/block harmful content', 'adult|teacher|parent::Tell a trusted adult', 'meet*|never meet::Never meet online strangers', 'because|so that|this means|otherwise::Explains why'], a: 'Never share personal information like your address or school because strangers could find you. Set your account to private so only friends see your posts. Only accept friend requests from people you know in real life because people can use fake profiles. Use a strong, unique password so you are not hacked. Think before you post because it becomes part of your digital footprint forever. Block and report anyone who is unkind and tell a trusted adult.' },
      { q: 'Explain what phishing is. Describe the warning signs of a phishing email and what you should do if you receive one.', m: 6, min: 55, k: ['scam|trick*|fake::Phishing is a scam using fake emails/websites', 'steal*|personal|password*|bank|detail*::To steal personal information', 'urgen*|act now|immediately|threat*::Urgency', 'sender|address::Suspicious sender address', 'spell*|grammar::Spelling mistakes', 'link*|hover|url::Suspicious links (hover to check)', 'attachment*::Unexpected attachments', 'not click|don\'t click|do not click|not reply|don\'t reply|do not reply::Don\'t click or reply', 'report*|delete*|adult|spam::Report/delete it and tell an adult'], a: 'Phishing is a scam where criminals send fake emails pretending to be a trusted company to steal personal information like passwords or bank details. Warning signs are urgency ("act now!"), a suspicious sender address, spelling mistakes, requests for passwords, and strange links or attachments. You should not click links or reply, report and delete the email, and tell a trusted adult.' },
      { q: 'Describe three different types of malware. For each, explain what it does and how a user could protect themselves from it.', m: 6, min: 55, k: ['virus::Describes a virus', 'worm::Describes a worm', 'trojan::Describes a Trojan', 'ransomware::Describes ransomware', 'spyware::Describes spyware', 'adware::Describes adware', 'antivirus|anti-virus::Antivirus', 'update*|up to date|patch*::Updates', 'firewall::Firewall', 'attachment*|download*|unknown|trusted::Avoid unknown downloads/attachments', 'backup*::Backups (e.g. against ransomware)'], a: 'A virus copies itself into other files and can damage data – use antivirus software. Ransomware locks your files and demands payment – keep backups so you can restore files. A Trojan pretends to be useful software – only download from trusted sources. Spyware secretly records what you do – keep software updated and use a firewall.' },
      { q: 'What is cyberbullying? Explain the effects it can have and what the victim and bystanders should do.', m: 6, min: 55, k: ['technology|online|internet|phone|social media::Bullying using technology', 'threat*|harass*|rumour*|mean|nasty|hurtful::Threats/harassment/rumours', 'anytime|24|everywhere|home|large audience|everyone::Can happen anytime/reach many people', 'sad|upset|anxious|anxiety|lonely|confidence|mental|depress*|scared::Emotional effects', 'not reply|don\'t reply|do not reply|ignore::Don\'t reply', 'block*::Block', 'evidence|screenshot::Keep evidence', 'report*::Report', 'adult|teacher|parent::Tell a trusted adult', 'bystander*|friend*|support|stand up|don\'t share|not share::Bystanders support/report'], a: 'Cyberbullying is using technology to bully, threaten or harass someone, e.g. hurtful comments or spreading rumours. It can happen at any time and reach a large audience, making victims feel upset, anxious and alone. The victim should not reply, block the bully, screenshot evidence, report it and tell a trusted adult. Bystanders should not share the content, should support the victim and report it.' }
    ]
  });

  /* ================= UNIT 3: HARDWARE ================= */
  U({
    year: 7, num: 3, title: 'Introduction to Computers (Hardware)', icon: '🖥️',
    topics: ['Hardware vs software', 'Input and output devices', 'CPU and the FDE cycle', 'Clock speed, cores and cache', 'RAM and ROM', 'Secondary storage'],
    vocab: [
      ['Hardware', 'The physical parts of a computer that you can touch'],
      ['Software', 'Programs and instructions that run on hardware'],
      ['CPU', 'Central Processing Unit – the "brain" that processes instructions'],
      ['RAM', 'Fast, temporary (volatile) memory that holds programs currently running'],
      ['ROM', 'Permanent memory that keeps the start-up (BIOS) instructions when the power is off'],
      ['Motherboard', 'The main circuit board that connects all the components'],
      ['Input device', 'Hardware that sends data into the computer'],
      ['Output device', 'Hardware that displays or outputs data from the computer'],
      ['Primary storage', 'Fast storage used directly by the CPU: RAM and ROM'],
      ['Secondary storage', 'Permanent, long-term storage such as HDD, SSD and USB'],
      ['HDD', 'Hard Disk Drive – magnetic, slower storage with a large capacity'],
      ['SSD', 'Solid State Drive – fast storage with no moving parts'],
      ['Clock speed', 'How many instructions the CPU can process per second, measured in GHz'],
      ['Cache', 'Very fast memory inside the CPU for frequently used instructions'],
      ['Core', 'A processing unit inside the CPU – more cores can do more tasks at once'],
      ['Volatile', 'Memory that loses its data when the power is turned off']
    ],
    gen: [{ g: 'clockSpeed', t: ['mcq'], w: 2 }],
    mcq: [
      { q: 'Which of these is an INPUT device?', o: ['Keyboard', 'Monitor', 'Printer', 'Speakers'] },
      { q: 'Which of these is an OUTPUT device?', o: ['Printer', 'Mouse', 'Microphone', 'Scanner'] },
      { q: 'Which device is BOTH an input and an output device?', o: ['Touchscreen', 'Keyboard', 'Speaker', 'Webcam'], x: 'You touch it to input and it displays output.', j: { k: ['touch*|tap*|press*::Touching it is input', 'display*|show*|screen|see::It displays output'] } },
      { q: 'What does CPU stand for?', o: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Control Power Unit'] },
      { q: 'Which part is often called the "brain" of the computer?', o: ['CPU', 'RAM', 'Monitor', 'Power supply'] },
      { q: 'What is the correct order of the CPU cycle?', o: ['Fetch → Decode → Execute', 'Decode → Fetch → Execute', 'Execute → Fetch → Decode', 'Fetch → Execute → Decode'] },
      { q: 'In the FDE cycle, where is the next instruction fetched from?', o: ['RAM (memory)', 'The printer', 'The monitor', 'The keyboard'] },
      { q: 'Clock speed is measured in…', o: ['GHz', 'GB', 'MB', 'Bits'], x: 'GHz = billions of cycles per second.' },
      { q: 'Which statement about RAM is correct?', o: ['It is volatile – data is lost when the power is off', 'It is permanent storage', 'It stores the BIOS', 'It is a type of secondary storage'] },
      { q: 'What is stored in ROM?', o: ['The BIOS / start-up instructions', 'Your homework files', 'Programs currently running', 'Websites you visit'] },
      { q: 'Which is an example of SECONDARY storage?', o: ['SSD', 'RAM', 'Cache', 'ROM'] },
      { q: 'Which storage has no moving parts and is fast?', o: ['SSD', 'HDD', 'DVD', 'Floppy disk'] },
      { q: 'Which storage device uses magnetic disks and is cheap for large capacities?', o: ['HDD', 'SSD', 'RAM', 'Cache'] },
      { q: 'What does the motherboard do?', o: ['Connects all the components together', 'Displays images', 'Stores all your files', 'Cools the CPU'] },
      { q: 'Which change would make a CPU run programs faster?', o: ['More cores', 'A bigger monitor', 'A louder speaker', 'A slower clock speed'] },
      { q: 'What is cache?', o: ['Very fast memory in the CPU for frequently used instructions', 'A type of printer', 'The main circuit board', 'A secondary storage device'] },
      { q: 'Which is NOT hardware?', o: ['Microsoft Word', 'Keyboard', 'Motherboard', 'SSD'], x: 'Word is software – you cannot touch it.' },
      { q: 'A scanner is used to…', o: ['Turn paper documents into digital files', 'Print documents', 'Play sound', 'Store programs'] },
      { q: 'Which part of the CPU works out what an instruction means during DECODE?', o: ['Control Unit', 'ALU', 'Power supply', 'Hard drive'] },
      { q: 'Which part of the CPU performs calculations during EXECUTE?', o: ['ALU (Arithmetic Logic Unit)', 'Control Unit', 'Monitor', 'ROM'] },
      { q: 'Where is data stored when it is saved to the "cloud"?', o: ['On remote servers accessed over the internet', 'In the computer\'s RAM', 'In the CPU cache', 'On the motherboard'] },
      { q: 'Why is RAM needed?', o: ['To hold programs and data currently being used', 'To permanently store files', 'To display images', 'To connect to Wi-Fi'] },
      { q: 'A USB flash drive is best for…', o: ['Transferring files between computers', 'Running the operating system fastest', 'Storing the BIOS', 'Processing instructions'] }
    ],
    tf: [
      { q: 'Hardware is the physical part of a computer that you can touch.', a: true },
      { q: 'A monitor is an input device.', a: false, x: 'A monitor displays output.', j: ['output::It is an output device', 'display*|show*|screen::It displays information'] },
      { q: 'RAM loses its data when the computer is switched off.', a: true, x: 'RAM is volatile.', j: ['volatile|temporary::RAM is volatile/temporary', 'power|switch*|off::Needs power to keep data'] },
      { q: 'ROM is volatile.', a: false, x: 'ROM is non-volatile – it keeps its data when the power is off.' },
      { q: 'A higher clock speed means the CPU can process more instructions per second.', a: true },
      { q: 'An SSD has moving parts.', a: false, x: 'SSDs have no moving parts – HDDs do.', j: ['no moving parts|flash|chip*|electronic::SSD has no moving parts', 'hdd|hard disk::HDDs have moving parts'] },
      { q: 'The FDE cycle stands for Fetch, Decode, Execute.', a: true },
      { q: 'The CPU repeats the FDE cycle billions of times per second.', a: true },
      { q: 'Primary storage includes RAM and ROM.', a: true },
      { q: 'A microphone is an output device.', a: false, x: 'A microphone inputs sound.' },
      { q: 'More cache usually means less time fetching data from RAM.', a: true },
      { q: 'Secondary storage is used to keep data permanently.', a: true },
      { q: 'A barcode reader is an input device.', a: true },
      { q: 'Software can be physically touched.', a: false, x: 'Software is instructions/code – it cannot be touched.' },
      { q: 'An HDD is usually faster than an SSD.', a: false, x: 'SSDs are faster; HDDs are slower but cheaper for large capacity.' },
      { q: 'A headset contains both an input device and an output device.', a: true, x: 'Microphone = input, speakers = output.' }
    ],
    cloze: [
      { t: 'The [CPU] is the "brain" of the computer. It follows the [fetch]–decode–[execute] cycle. The speed of a CPU is called its [clock] speed and is measured in [GHz]. A CPU with more [cores] can do more tasks at once.', d: ['monitor', 'GB'] },
      { t: '[RAM] is fast, temporary memory that holds programs currently running. It is [volatile], which means data is lost when the power is turned off. [ROM] is permanent and stores the [BIOS] start-up instructions. RAM and ROM are called [primary] storage. HDDs and SSDs are [secondary] storage.', d: ['cache', 'output'] },
      { t: 'A keyboard and a mouse are [input] devices. A monitor, [printer] and speakers are [output] devices. A [touchscreen] is both. All of these are [hardware] because you can touch them. The main circuit board that connects everything is the [motherboard].', d: ['software', 'processor'] }
    ],
    short: [
      { q: 'Explain the difference between hardware and software. Give one example of each.', m: 4, k: ['physical|touch*::Hardware is physical/can be touched', 'program*|instruction*|code|can\'t touch|cannot touch|cannot be touched::Software is programs/instructions', 'keyboard|mouse|monitor|cpu|ram|printer|motherboard|ssd|hdd|speaker*::Hardware example', 'word|chrome|windows|excel|powerpoint|minecraft|game|browser|macos|antivirus::Software example'], a: 'Hardware is the physical parts you can touch, e.g. a keyboard. Software is the programs and instructions that run on the hardware, e.g. Microsoft Word.' },
      { q: 'Name two input devices and two output devices.', m: 4, k: ['keyboard|mouse|microphone|webcam|scanner|barcode|touchscreen|joystick::One correct input device', '@2 keyboard|mouse|microphone|webcam|scanner|barcode|touchscreen|joystick::A second, different input device', 'monitor|printer|speaker*|projector|headphone*|screen::One correct output device', '@2 monitor|printer|speaker*|projector|headphone*|screen::A second, different output device'], a: 'Input: keyboard, mouse. Output: monitor, printer.' },
      { q: 'Describe the three stages of the fetch–decode–execute cycle.', m: 3, k: ['fetch*|get*|retriev*::Fetch the instruction from memory/RAM', 'decode*|work* out|understand*|control unit|interpret*::Decode – the control unit works out what to do', 'execute*|carr* out|perform*|run*|alu|do*::Execute – the instruction is carried out (ALU)'], a: 'Fetch: the CPU gets the next instruction from RAM. Decode: the control unit works out what the instruction means. Execute: the ALU carries out the instruction.' },
      { q: 'Give two differences between RAM and ROM.', m: 2, k: ['volatile|temporary|lost|power off|switched off::RAM is volatile / ROM keeps data', 'bios|start*|boot::ROM stores BIOS/start-up instructions', 'running|current*|in use|open::RAM holds programs in use', 'read only|can\'t change|cannot be changed|write::ROM is read-only'], a: 'RAM is volatile (data lost when power is off) but ROM is non-volatile. RAM holds programs currently running, while ROM stores the BIOS start-up instructions.' },
      { q: 'Explain two factors that affect how fast a CPU works.', m: 4, k: ['clock speed|ghz::Clock speed', 'more instructions|cycles per second|faster::Higher clock speed = more cycles per second', 'core*::Number of cores', 'at once|same time|parallel|multiple::More cores = more tasks at the same time', 'cache::Cache size', 'less time|ram|frequent*::More cache = less fetching from RAM'], a: 'Clock speed – a higher GHz means more cycles per second. Number of cores – more cores can process several instructions at the same time. (Cache – more cache means less time fetching from RAM.)' },
      { q: 'Compare an HDD with an SSD.', m: 3, k: ['magnetic|moving parts|disk|spin*::HDD is magnetic/moving parts', 'no moving parts|flash|solid::SSD has no moving parts', 'faster|quicker|speed::SSD is faster', 'cheap*|cost|expensive|price::HDD cheaper per GB', 'capacity|large|bigger::HDD large capacity', 'durable|robust|drop*|shock::SSD more durable'], a: 'An HDD uses magnetic spinning disks, so it is slower but cheaper with a large capacity. An SSD has no moving parts, so it is faster and more durable but more expensive.' },
      { q: 'What is the difference between primary and secondary storage?', m: 2, k: ['ram|rom|cpu|directly|fast::Primary = RAM/ROM used directly by CPU', 'hdd|ssd|usb|long-term|long term|permanent|cloud::Secondary = long-term (HDD/SSD/USB)'], a: 'Primary storage (RAM and ROM) is used directly by the CPU. Secondary storage (HDD, SSD, USB, cloud) stores data long-term.' },
      { q: 'What does "volatile" mean? Which type of memory is volatile?', m: 2, k: ['lost|loses|lose|disappear*|erased::Data is lost', 'power|switch* off|turned off::when the power is off', 'ram::RAM is volatile'], a: 'Volatile means the data is lost when the power is turned off. RAM is volatile.' },
      { q: 'State the purpose of the motherboard.', m: 2, k: ['connect*|link*|join*::Connects components', 'component*|part*|cpu|ram|everything|all::All the components (CPU, RAM etc.)', 'circuit board|main board|bus::Main circuit board / system bus'], a: 'The motherboard is the main circuit board. It connects all the components, like the CPU and RAM, so they can communicate.' },
      { q: 'Suggest a suitable storage device for each: (a) moving homework between home and school, (b) the laptop\'s main drive for fast start-up.', m: 2, k: ['usb|flash drive|memory stick|cloud|onedrive::(a) USB / cloud', 'ssd|solid state::(b) SSD'], a: '(a) A USB flash drive (or cloud storage). (b) An SSD because it is fast with no moving parts.' },
      { q: 'Describe what the CPU does.', m: 2, k: ['process*|carr* out|execute*|run*::Processes/executes instructions', 'instruction*|program*|data::Program instructions', 'fetch*|decode*|fde::Using the FDE cycle', 'calculat*|alu::Performs calculations'], a: 'The CPU processes all program instructions by repeatedly fetching, decoding and executing them, and performs calculations.' }
    ],
    long: [
      { q: 'A student wants to buy a new laptop for school work and gaming. Explain which hardware features they should look for and why. Refer to the CPU, memory and storage.', m: 6, min: 60, k: ['clock speed|ghz::High clock speed', 'faster|more instructions|per second::…so it processes instructions faster', 'core*::More cores', 'multitask*|at once|same time|several::…to run several tasks at once', 'cache::More cache', 'ram|memory::More RAM', 'programs open|running|games|at the same time|smooth*::…to run more programs/games smoothly', 'ssd|solid state::SSD storage', 'fast* load*|boot*|start*|quick*::…for fast loading/start-up', 'capacity|gb|tb|space|large::Large storage capacity for files/games'], a: 'They should choose a CPU with a high clock speed (GHz) so it processes more instructions per second, and more cores so it can run several tasks at once, such as a game and music. More cache means less time fetching from RAM. Plenty of RAM means more programs and games can run smoothly at the same time. An SSD will make the laptop start up and load programs quickly, with enough capacity (e.g. 512GB) for games and school files.' },
      { q: 'Explain how the CPU processes instructions using the fetch–decode–execute cycle. Include the roles of RAM, the control unit and the ALU.', m: 6, min: 55, k: ['fetch*::Fetch stage', 'ram|memory::Instruction comes from RAM/memory', 'decode*::Decode stage', 'control unit|cu::Control unit decodes/works out the instruction', 'execute*::Execute stage', 'alu|arithmetic logic::ALU carries out calculations/logic', 'register*|result|store*::Result stored in register/RAM', 'repeat*|billion*|again|cycle|continu*::Cycle repeats billions of times a second'], a: 'In the FETCH stage the CPU gets the next instruction from RAM. In the DECODE stage the control unit works out what the instruction means. In the EXECUTE stage the ALU performs the calculation or logic operation and the result is stored in a register or RAM. The cycle then repeats billions of times per second.' },
      { q: 'Compare RAM, ROM, HDD and SSD. For each explain what it is used for and one key feature.', m: 6, min: 55, k: ['ram::RAM', 'running|currently|open|in use::RAM holds running programs', 'volatile|temporary::RAM is volatile', 'rom::ROM', 'bios|start*|boot::ROM stores BIOS/start-up', 'non-volatile|permanent|kept::ROM is permanent', 'hdd|hard disk::HDD', 'magnetic|moving|cheap*|large capacity::HDD magnetic/cheap/large', 'ssd|solid state::SSD', 'no moving parts|fast*::SSD fast/no moving parts'], a: 'RAM stores the programs and data currently in use; it is fast but volatile. ROM stores the BIOS start-up instructions; it is non-volatile. An HDD is secondary storage for large files; it uses magnetic disks and is cheap but slower. An SSD is also secondary storage, used for the OS and programs; it has no moving parts so it is much faster.' },
      { q: 'Explain the difference between input devices, output devices and storage devices. Give two examples of each and describe how a school might use them.', m: 6, min: 55, k: ['into the computer|sends data|enter*|input::Input devices send data in', 'keyboard|mouse|microphone|scanner|webcam|barcode::Input examples', 'display*|out of|output|produce*::Output devices show/produce results', 'monitor|printer|speaker*|projector::Output examples', 'store*|save*|keep*::Storage devices keep data', 'hdd|ssd|usb|cloud|server::Storage examples', 'school|class*|teacher|student*|lesson|register::School use described'], a: 'Input devices send data into the computer, e.g. keyboards for typing essays and scanners for digitising worksheets. Output devices display or produce results, e.g. projectors to show lesson slides and printers for handouts. Storage devices keep data long-term, e.g. the school server/HDD stores student work and USB drives let teachers carry files.' }
    ]
  });

  /* ================= UNIT 4: SOFTWARE ================= */
  U({
    year: 7, num: 4, title: 'Introduction to Computers (Software)', icon: '💿',
    topics: ['System, application and utility software', 'Operating systems', 'GUI vs CLI and WIMP', 'Booting and BIOS', 'Browsers and search engines', 'Software licences'],
    vocab: [
      ['Software', 'Programs and instructions that tell hardware what to do'],
      ['Operating system', 'Software that manages the hardware and other programs'],
      ['Application software', 'Programs that help users do specific tasks, e.g. Word'],
      ['System software', 'Software that manages the computer and its resources'],
      ['Utility software', 'Programs that maintain and protect the computer, e.g. antivirus'],
      ['BIOS', 'Basic Input/Output System – the first program to run at start-up'],
      ['GUI', 'Graphical User Interface – windows, icons, menus and a pointer'],
      ['CLI', 'Command Line Interface – the user types text commands'],
      ['Licence', 'Legal permission to use a piece of software'],
      ['Freeware', 'Free to use, but the source code is not shared'],
      ['Shareware', 'Free trial software – you pay to unlock the full version'],
      ['Open source', 'Free to use and change – the source code is publicly available'],
      ['Proprietary', 'Owned by a company, code kept secret, usually paid for'],
      ['Web browser', 'Software used to access and view websites, e.g. Chrome'],
      ['Search engine', 'A program that indexes and finds web content, e.g. Google'],
      ['Cold boot', 'Starting a computer from a fully powered-off state']
    ],
    mcq: [
      { q: 'Which of these is an operating system?', o: ['Windows', 'Microsoft Word', 'Google Chrome', 'Minecraft'] },
      { q: 'Which of these is application software?', o: ['Microsoft Excel', 'Windows', 'Linux', 'BIOS'] },
      { q: 'Which of these is utility software?', o: ['Antivirus', 'PowerPoint', 'Minecraft', 'Chrome'] },
      { q: 'What does GUI stand for?', o: ['Graphical User Interface', 'General User Instruction', 'Graphic Utility Input', 'Guided User Internet'] },
      { q: 'What does WIMP stand for?', o: ['Windows, Icons, Menus, Pointer', 'Web, Internet, Mouse, Program', 'Windows, Internet, Memory, Processor', 'Word, Images, Music, PowerPoint'] },
      { q: 'In a CLI (Command Line Interface) the user…', o: ['Types text commands', 'Clicks on icons', 'Uses voice only', 'Touches the screen'] },
      { q: 'Which program runs FIRST when a computer is switched on?', o: ['BIOS', 'Microsoft Word', 'Chrome', 'Antivirus'], x: 'The BIOS checks the hardware (POST) and then loads the operating system.' },
      { q: 'What is a warm boot?', o: ['Restarting a computer without turning the power off', 'Starting a computer from fully off', 'Cooling down the CPU', 'Installing new software'] },
      { q: 'Which type of licence lets you use and CHANGE the source code for free?', o: ['Open source', 'Proprietary', 'Shareware', 'Freeware'] },
      { q: 'Which type of software gives you a free trial, then you pay to unlock full features?', o: ['Shareware', 'Open source', 'Freeware', 'Utility'] },
      { q: 'Microsoft Office and Adobe Photoshop are examples of…', o: ['Proprietary software', 'Open-source software', 'Freeware', 'Operating systems'] },
      { q: 'LibreOffice, Firefox and Linux are examples of…', o: ['Open-source software', 'Proprietary software', 'Shareware', 'Hardware'] },
      { q: 'Which of these is a web BROWSER?', o: ['Microsoft Edge', 'Google Search', 'Bing', 'DuckDuckGo'], x: 'Browsers (Chrome, Edge, Firefox, Safari) open websites. Search engines (Google, Bing) find them.' },
      { q: 'Which of these is a SEARCH ENGINE?', o: ['Bing', 'Firefox', 'Safari', 'Windows'] },
      { q: 'Which search engine is known for protecting privacy?', o: ['DuckDuckGo', 'Chrome', 'Edge', 'Word'] },
      { q: 'What are the three steps a search engine uses?', o: ['Crawl, index, rank', 'Fetch, decode, execute', 'Input, process, output', 'Copy, cut, paste'] },
      { q: 'Which is NOT a job of the operating system?', o: ['Writing your essay for you', 'Managing memory', 'Managing files and folders', 'Providing a user interface'] },
      { q: 'Which operating system is used on iPhones?', o: ['iOS', 'Android', 'Windows', 'Linux'] },
      { q: 'Which is the best software to type a letter?', o: ['Word processor', 'Spreadsheet', 'Antivirus', 'Web browser'] },
      { q: 'Which is the best software to calculate a budget?', o: ['Spreadsheet', 'Presentation software', 'Web browser', 'Disk cleaner'] },
      { q: 'What is a software licence?', o: ['Legal permission to use a piece of software', 'A password for the software', 'A type of virus', 'The program\'s file size'] },
      { q: 'Which type of software maintains and optimises a computer?', o: ['Utility software', 'Application software', 'Games', 'Web browsers'] },
      { q: 'What does POST (done by the BIOS) check?', o: ['That the hardware is working', 'That your password is correct', 'Your internet speed', 'That files are backed up'] }
    ],
    tf: [
      { q: 'Hardware needs software to function.', a: true },
      { q: 'Google Chrome is a search engine.', a: false, x: 'Chrome is a web browser. Google is the search engine.', j: ['browser::Chrome is a browser', 'google|bing|search engine|duckduckgo::Google/Bing is a search engine'] },
      { q: 'An operating system manages the computer\'s memory.', a: true },
      { q: 'Freeware lets you see and change the source code.', a: false, x: 'Freeware is free, but the source code is NOT shared. Open-source shares the code.', j: ['not|isn\'t|no|hidden|secret::Source code is not available', 'open source|open-source::Open-source software shares the code'] },
      { q: 'Antivirus is an example of utility software.', a: true },
      { q: 'All software has a licence, even free software.', a: true },
      { q: 'A CLI is easier for beginners than a GUI.', a: false, x: 'A GUI uses icons and menus which are easier. A CLI needs typed commands.', j: ['icon*|menu*|click*|visual|picture*::GUI uses icons/menus', 'type*|command*|remember*|learn::CLI needs typed commands'] },
      { q: 'Android is an operating system for smartphones and tablets.', a: true },
      { q: 'A cold boot is restarting without switching the power off.', a: false, x: 'That is a warm boot. A cold boot starts from fully off.' },
      { q: 'Proprietary software usually costs money and the code is kept secret.', a: true },
      { q: 'A web browser is the same as a search engine.', a: false, j: ['browser|chrome|edge|firefox|safari::A browser opens websites', 'search engine|google|bing|find*::A search engine finds websites'] },
      { q: 'Application software runs on top of the operating system.', a: true },
      { q: 'Minecraft is system software.', a: false, x: 'Minecraft is application software (a game).' },
      { q: 'Open-source software is usually community-supported.', a: true },
      { q: 'The BIOS is stored in ROM.', a: true }
    ],
    cloze: [
      { t: 'There are three main types of software. [System] software, such as Windows, manages the computer. [Application] software, such as Word, helps users do specific tasks. [Utility] software, such as [antivirus], maintains and protects the system. The operating system provides a user [interface], either a GUI or a [CLI].', d: ['hardware', 'ROM'] },
      { t: 'Software licences: [freeware] is free but the source code is not shared. [Shareware] is a free trial where you pay for the full version. [Open source|open-source] software is free and the code is public, e.g. [LibreOffice|Linux|Firefox]. [Proprietary] software is owned by a company and the code is kept [secret].', d: ['public', 'hardware'] },
      { t: 'A web [browser] is software used to open websites, e.g. Chrome or Safari. A [search] engine finds websites, e.g. Google or Bing. Search engines work in three steps: [crawl], where bots explore pages; [index], where pages are stored in a database; and [rank], where results are ordered by [relevance].', d: ['decode', 'execute'] }
    ],
    short: [
      { q: 'Describe the difference between system software and application software. Give an example of each.', m: 4, k: ['manage*|run* the computer|control*|resources|hardware::System software manages the computer', 'windows|macos|linux|android|ios|operating system::System example', 'task*|user*|specific|help* you|do things::Application software helps users do tasks', 'word|excel|powerpoint|chrome|minecraft|game|browser::Application example'], a: 'System software manages the computer and its resources, e.g. Windows. Application software helps the user do specific tasks, e.g. Microsoft Word.' },
      { q: 'List four functions of an operating system.', m: 4, k: ['memory|ram::Manages memory', 'cpu|process*|multitask*::Manages the CPU/processes', 'file*|folder*::Manages files and folders', 'interface|gui|cli::Provides a user interface', 'device*|input|output|printer|driver*|peripheral*::Controls input/output devices', 'security|user account*|password*|login::Security and user accounts'], a: 'It manages memory, manages the CPU (processes), manages files and folders, provides a user interface, controls input/output devices and handles security.' },
      { q: 'What does WIMP stand for? What type of interface uses it?', m: 3, k: ['window*::Windows', 'icon*::Icons', 'menu*::Menus', 'pointer*|mouse::Pointer', 'gui|graphical::GUI'], a: 'Windows, Icons, Menus, Pointer. It is used in a GUI (Graphical User Interface).' },
      { q: 'Explain the difference between a GUI and a CLI.', m: 2, k: ['icon*|window*|menu*|click*|graphic*|picture*|visual::GUI uses icons/windows/pointer', 'type*|text|command*::CLI uses typed commands'], a: 'A GUI lets users interact with windows, icons and menus using a pointer. A CLI requires the user to type text commands.' },
      { q: 'Explain the difference between a web browser and a search engine. Give an example of each.', m: 4, k: ['open*|view*|access*|display*::A browser opens/views websites', 'chrome|edge|firefox|safari::Browser example', 'find*|search*|index*|look* up::A search engine finds websites', 'google|bing|duckduckgo|yahoo::Search engine example'], a: 'A browser is the software you open to view websites, e.g. Chrome. A search engine is a website that finds web pages for you, e.g. Google.' },
      { q: 'Compare open-source and proprietary software.', m: 4, k: ['free::Open source is free', 'source code|code|modify|change|public::Open source code can be viewed/changed', 'cost*|paid|pay|money|expensive::Proprietary costs money', 'secret|can\'t modify|cannot modify|cannot change|hidden|owned::Proprietary code is secret', 'support*::Proprietary has professional support', 'libreoffice|linux|firefox|gimp|office|photoshop|windows::Example'], a: 'Open-source software is free and anyone can view and change the source code, e.g. LibreOffice. Proprietary software is owned by a company, costs money and the code is secret, but usually comes with professional support, e.g. Microsoft Office.' },
      { q: 'What is the BIOS and what does it do?', m: 2, k: ['basic input|first|start*|boot*::First program to run at start-up', 'check*|post|test*|hardware::Checks the hardware (POST)', 'load*|operating system|os::Loads the operating system', 'rom::Stored in ROM'], a: 'The BIOS (Basic Input/Output System) is stored in ROM and is the first program to run. It checks the hardware (POST) and then loads the operating system.' },
      { q: 'Explain the difference between a cold boot and a warm boot.', m: 2, k: ['off|power* off|fully|from nothing::Cold boot starts from fully off', 'restart*|without|still on|reboot::Warm boot restarts without turning the power off'], a: 'A cold boot starts the computer from fully powered off. A warm boot restarts it without switching the power off.' },
      { q: 'Give two examples of utility software and say what each does.', m: 4, k: ['antivirus|anti-virus::Antivirus', 'virus*|malware|scan*|protect*::…protects against malware', 'disk clean*|cleaner|defrag*::Disk cleaner/defragmenter', 'space|junk|temporary|speed::…frees space/speeds up', 'backup::Backup software', 'zip|compress*::Compression software'], a: 'Antivirus – scans for and removes malware. Disk cleaner – removes junk files to free up space. (Backup software – copies files; compression – zips files.)' },
      { q: 'Describe how a search engine finds and orders results.', m: 3, k: ['crawl*|bot*|spider*::Crawl – bots explore web pages', 'index*|database|store*::Index – pages stored in a database', 'rank*|order*|relevan*::Rank – results ordered by relevance'], a: 'It crawls the web using bots, indexes the pages in a huge database, and ranks the results by relevance to your search.' }
    ],
    long: [
      { q: 'Explain the role of the operating system. Describe at least four of its functions and give examples of operating systems for computers and mobile devices.', m: 6, min: 60, k: ['manage*|control*::Manages hardware and software', 'memory|ram::Memory management', 'cpu|process*|multitask*::Process/CPU management', 'file*|folder*::File management', 'interface|gui|cli|wimp::User interface', 'device*|input|output|printer|peripheral*|driver*::Controls devices', 'security|account*|password*|login::Security/user accounts', 'windows|macos|linux::Computer OS examples', 'android|ios::Mobile OS examples'], a: 'The operating system manages the computer\'s hardware and software so the user can use it. It manages memory by allocating RAM to programs, manages the CPU so several programs can multitask, manages files and folders, controls input and output devices like printers, provides a user interface such as a GUI, and handles security through user accounts and passwords. Computer examples are Windows, macOS and Linux; mobile examples are Android and iOS.' },
      { q: 'A school is deciding whether to use Microsoft Office (proprietary) or LibreOffice (open source). Discuss the advantages and disadvantages of each and make a recommendation.', m: 6, min: 60, k: ['free|no cost|save money::Open source is free', 'modify|change|customis*|source code::Open source can be modified', 'community|less support|no support::Open source has less commercial support', 'cost*|pay|licen*|expensive|money::Proprietary costs money/licences', 'support*|help|updates::Proprietary has professional support', 'polish*|reliable|tested|familiar|compatib*|industry|standard::Proprietary is polished/familiar/compatible', 'secret|can\'t change|cannot change|cannot modify::Proprietary code cannot be changed', 'recommend*|should|choose|best|conclusion|overall::Makes a justified recommendation'], a: 'LibreOffice is open source so it is free, saving the school money, and the code can be modified, but it has less professional support. Microsoft Office is proprietary so the school must pay for licences and cannot change the code, but it is polished, well-tested, comes with professional support and is the industry standard that students will meet at work. I would recommend Microsoft Office because compatibility and support matter for a whole school, unless the budget is very limited.' },
      { q: 'Describe the four types of software licence (freeware, shareware, open source and proprietary). Give an example of each and explain which would suit a student with no money who wants to edit photos.', m: 6, min: 55, k: ['freeware::Freeware', 'free & not|source code not|not shared|can\'t see|cannot see::Freeware is free but code not shared', 'shareware::Shareware', 'trial|pay to unlock|full version::Shareware – free trial then pay', 'open source|open-source::Open source', 'modify|change|public::Open source code public/can be changed', 'proprietary::Proprietary', 'paid|cost*|secret::Proprietary paid/secret code', 'gimp|free|open source::Recommends free option (e.g. GIMP) with reason'], a: 'Freeware is free to use but the source code is not shared, e.g. Zoom. Shareware is a free trial and you pay to unlock the full version, e.g. WinZip. Open-source software is free and the code is public so anyone can change it, e.g. GIMP or LibreOffice. Proprietary software is paid and the code is secret, e.g. Adobe Photoshop. The student should use open-source GIMP because it is free and fully featured.' },
      { q: 'Explain what happens when you switch on a computer, from pressing the power button to seeing the desktop. Use the terms BIOS, ROM, POST, operating system and RAM.', m: 6, min: 50, k: ['power|switch* on|cold boot::Power on (cold boot)', 'bios::BIOS runs first', 'rom::BIOS stored in ROM', 'post|check*|test*::POST checks the hardware', 'load*|operating system|os::Loads the operating system', 'ram|memory::OS loaded into RAM', 'desktop|gui|interface|log* in|login::User interface/desktop appears'], a: 'When the power is turned on (a cold boot), the BIOS, stored in ROM, runs first. It performs the POST to check that hardware such as RAM and the keyboard is working. The BIOS then loads the operating system from the SSD into RAM. The OS starts, asks the user to log in, and displays the GUI desktop.' }
    ]
  });

  /* ================= UNIT 5: POWERPOINT ================= */
  U({
    year: 7, num: 5, title: 'PowerPoint (Presentation Software)', icon: '📊',
    topics: ['The PowerPoint interface', 'Slides and layouts', 'Text, images and shapes', 'Animations and transitions', 'Slide Master and themes', 'Presenting and printing'],
    vocab: [
      ['Presentation', 'A slideshow used to share information with an audience'],
      ['Slide', 'A single page within a presentation'],
      ['Slide Master', 'A template that controls the design of all slides'],
      ['Layout', 'A pre-set arrangement of placeholders on a slide'],
      ['Placeholder', 'A box on a slide for text, images or other content'],
      ['Animation', 'Movement applied to an object on a slide'],
      ['Transition', 'An effect shown when moving from one slide to the next'],
      ['Theme', 'A set of colours, fonts and effects for the whole presentation'],
      ['Handout', 'A printed version of slides for the audience'],
      ['Speaker notes', 'Text below a slide that only the presenter can see'],
      ['Ribbon', 'The toolbar at the top containing all the tabs and tools'],
      ['Slide panel', 'The left panel showing small views of all the slides'],
      ['Presenter View', 'A view where the presenter sees notes and the audience sees only slides'],
      ['Text box', 'A box that can be placed anywhere on a slide to type text']
    ],
    mcq: [
      { q: 'What is a transition?', o: ['An effect between one slide and the next', 'Movement of an object on a slide', 'A printed copy of slides', 'A type of chart'] },
      { q: 'What is an animation?', o: ['Movement applied to an object on a slide', 'An effect between slides', 'The slide background', 'A slide layout'] },
      { q: 'Which tab would you use to insert a picture?', o: ['Insert', 'Design', 'Transitions', 'Slide Show'] },
      { q: 'Which tab contains themes?', o: ['Design', 'Insert', 'Animations', 'Home'] },
      { q: 'Which key starts a slideshow from the beginning?', o: ['F5', 'Esc', 'B', 'Ctrl + S'] },
      { q: 'Which shortcut starts the slideshow from the CURRENT slide?', o: ['Shift + F5', 'F5', 'Ctrl + P', 'Alt + F4'] },
      { q: 'Which key ends a slideshow?', o: ['Esc', 'F5', 'Enter', 'Tab'] },
      { q: 'Pressing B during a slideshow…', o: ['Turns the screen black (pause)', 'Goes back a slide', 'Bolds the text', 'Ends the show'] },
      { q: 'What does the Slide Master do?', o: ['Controls fonts, colours and logos for ALL slides', 'Adds animations to one object', 'Prints handouts', 'Deletes slides'], j: { k: ['all|every|whole|every slide::Changes apply to all slides', 'consisten*|same|once|time::Keeps design consistent / saves time'] } },
      { q: 'Where would you type notes that only the presenter can see?', o: ['Speaker notes panel', 'Title placeholder', 'Slide panel', 'Status bar'] },
      { q: 'What is the "6×6 rule"?', o: ['Maximum 6 bullets per slide and about 6 words per bullet', 'Use 6 fonts on 6 slides', '6 animations per slide', 'Present for 6 minutes'] },
      { q: 'Which is a GOOD design rule?', o: ['High contrast between text and background', 'Use as many fonts as possible', 'Fill every slide with paragraphs', 'Yellow text on a white background'] },
      { q: 'Which animation type makes an object APPEAR on the slide?', o: ['Entrance', 'Exit', 'Emphasis', 'Motion path'] },
      { q: 'Which animation type highlights an object already on the slide (e.g. Spin, Grow)?', o: ['Emphasis', 'Entrance', 'Exit', 'Transition'] },
      { q: 'Printing several slides on one page for the audience is called printing…', o: ['Handouts', 'Speaker notes', 'Outline', 'Full page slides'] },
      { q: 'Which file format keeps a presentation editable in PowerPoint?', o: ['.pptx', '.pdf', '.mp4', '.jpg'] },
      { q: 'Where is the Ribbon?', o: ['Across the top of the window', 'On the left side', 'Below the slide', 'In the status bar'] },
      { q: 'How do you add a new slide?', o: ['Home → New Slide', 'Insert → Pictures', 'Design → Themes', 'File → Print'] },
      { q: 'What is a placeholder?', o: ['A box on a slide for text, images or other content', 'A type of transition', 'The last slide', 'A printed handout'] },
      { q: 'How do you reorder slides?', o: ['Drag them in the slide panel', 'Press F5', 'Use the Design tab', 'Add a transition'] },
      { q: 'Which view lets the presenter see notes, the next slide and a timer while the audience sees only the slide?', o: ['Presenter View', 'Slide Sorter', 'Outline View', 'Normal View'] },
      { q: 'Which start option makes an animation play automatically straight after the one before?', o: ['After Previous', 'On Click', 'With Previous', 'On Hover'] }
    ],
    tf: [
      { q: 'A transition happens between slides.', a: true },
      { q: 'An animation happens between slides.', a: false, x: 'Animations move objects ON a slide. Transitions happen BETWEEN slides.', j: ['object*|on a slide|text|picture::Animations apply to objects on a slide', 'transition*|between::Transitions happen between slides'] },
      { q: 'Changing the Slide Master updates every slide.', a: true },
      { q: 'Using lots of different fonts makes a presentation look professional.', a: false, x: 'Use a maximum of two fonts for consistency.', j: ['two|2|few|consisten*|same::Use a maximum of 2 fonts / keep consistent', 'messy|confus*|unprofessional|hard to read::Too many fonts look messy'] },
      { q: 'Speaker notes are shown to the audience on the main screen.', a: false, x: 'Only the presenter sees speaker notes.' },
      { q: 'F5 starts the slideshow from the first slide.', a: true },
      { q: 'Saving a presentation as a PDF keeps it fully editable.', a: false, x: 'A PDF is fixed and not editable. Save as .pptx to edit.' },
      { q: 'Each slide should have one clear message.', a: true },
      { q: 'The Animation Pane shows the order of all animations on a slide.', a: true },
      { q: 'Themes include a set of colours, fonts and effects.', a: true },
      { q: 'Images on slides should support the message.', a: true },
      { q: 'You can export a PowerPoint as an .mp4 video.', a: true },
      { q: 'Low contrast (e.g. light grey text on white) is easy to read.', a: false, j: ['contrast|dark|light|stand out::Need high contrast', 'read*|see|visible::Otherwise it is hard to read'] },
      { q: 'You add a logo to the Slide Master so it appears on every slide.', a: true }
    ],
    cloze: [
      { t: 'A [transition] is an effect shown between one slide and the next. An [animation] is movement applied to an object on a slide. [Entrance] effects make an object appear, [exit] effects make it disappear. Animations can start On Click, With Previous or [After] Previous. The [Animation] Pane shows the order of all animations.', d: ['theme', 'handout'] },
      { t: 'The [Slide] Master controls fonts, colours and logos for all slides, so you only need to change it [once]. A [theme] is a set of colours and fonts. Good design means high [contrast], a maximum of two [fonts] and no more than [six|6] bullets per slide.', d: ['animation', 'twenty'] },
      { t: 'To start a slideshow from the beginning press [F5]. To start from the current slide press [Shift] + F5. Press [B] to show a black screen and [Esc] to end the show. [Presenter] View lets you see your speaker [notes] while the audience only sees the slides.', d: ['Ctrl', 'Delete'] }
    ],
    short: [
      { q: 'Explain the difference between an animation and a transition.', m: 2, k: ['object*|on a slide|text|image|picture::Animation moves an object on a slide', 'between|next slide|from one slide|change slide::Transition happens between slides'], a: 'An animation is movement applied to an object on a slide, such as text flying in. A transition is an effect shown when moving from one slide to the next.' },
      { q: 'Give two advantages of using the Slide Master.', m: 2, k: ['consisten*|same|match*|uniform::Consistent design', 'time|once|quick*|every slide|all slides::Change once → updates all slides, saving time', 'logo::Add a logo that appears everywhere'], a: 'You make a change once and it updates every slide, which saves time, and it keeps the design consistent (e.g. the same fonts, colours and logo).' },
      { q: 'Describe three rules for designing a good presentation.', m: 3, k: ['6|six|bullet*|not too much text|few words::Max 6 bullets / little text', 'one message|one idea|clear message::One clear message per slide', 'contrast|readable|colour*::High contrast', 'font*|consisten*::Consistent fonts (max 2)', 'image*|picture*|relevant::Images support the message', 'size|big|large::Large enough text'], a: 'Use no more than six bullets per slide, keep high contrast between text and background, and use a maximum of two consistent fonts.' },
      { q: 'What are speaker notes and why are they useful?', m: 2, k: ['presenter|only you|speaker|below the slide|not audience::Only the presenter sees them', 'remember|remind*|prompt|what to say|script::Help you remember what to say', 'less text|slides clear::Keep slides uncluttered'], a: 'Speaker notes are text below each slide that only the presenter can see. They remind you what to say without putting too much text on the slide.' },
      { q: 'Name three different ways you can print a presentation.', m: 3, k: ['slide*|full page::Full-page slides', 'handout*::Handouts', 'notes page*|notes::Notes pages', 'outline::Outline'], a: 'Full-page slides, handouts (2–9 slides per page), notes pages and outline.' },
      { q: 'Explain the difference between saving a presentation as .pptx and as .pdf.', m: 2, k: ['edit*|change*::.pptx can be edited', 'fixed|not edit*|can\'t edit|cannot edit|read only|any device|share::.pdf is fixed/not editable'], a: '.pptx keeps the file editable in PowerPoint. .pdf creates a fixed version that cannot be easily edited but opens on any device.' },
      { q: 'List the four types of animation effect.', m: 4, k: ['entrance::Entrance', 'emphasis::Emphasis', 'exit::Exit', 'motion path*|motion::Motion path'], a: 'Entrance, Emphasis, Exit and Motion Path.' },
      { q: 'Describe how to insert an image onto a slide and move it.', m: 3, k: ['insert::Insert tab', 'picture*|image*::Pictures', 'choose|select|browse|file|device::Choose the file', 'drag*|move|click and::Drag to move'], a: 'Click the Insert tab, choose Pictures, select the image file, then click and drag it to position it.' },
      { q: 'What is Presenter View and how does it help the presenter?', m: 2, k: ['notes|next slide|timer::Presenter sees notes/next slide/timer', 'audience|only the slide|current slide::Audience only sees the slide'], a: 'Presenter View shows the presenter their notes, the next slide and a timer, while the audience only sees the current slide.' }
    ],
    long: [
      { q: 'You are creating a presentation about e-safety for Year 6 students. Describe how you would make it clear, consistent and engaging. Refer to at least five PowerPoint features or design rules.', m: 6, min: 60, k: ['slide master::Slide Master', 'theme*::Theme', 'font*::Consistent fonts', 'contrast|colour*::Colour/contrast', 'bullet*|6|six|little text|keywords::Few bullet points', 'image*|picture*::Relevant images', 'animation*::Animations (used sensibly)', 'transition*::Transitions', 'speaker notes|notes::Speaker notes', 'audience|year 6|young|simple|engag*::Considers the audience'], a: 'I would use the Slide Master to add the same logo and fonts on every slide so it is consistent. I would choose a bright theme with high contrast so it is easy to read. Each slide would have one message with no more than six short bullet points, because Year 6 students need simple text. Relevant images would support each point. I would use a few simple animations so points appear one at a time, and a consistent transition. I would put extra detail in speaker notes instead of on the slides.' },
      { q: 'Explain the difference between animations and transitions. Describe the different types of animation effects and the start options, and explain how they should be used in a professional presentation.', m: 6, min: 55, k: ['object*|on a slide::Animation – objects on a slide', 'between|next slide::Transition – between slides', 'entrance::Entrance', 'emphasis::Emphasis', 'exit::Exit', 'motion path::Motion path', 'on click::On Click', 'with previous|after previous::With/After Previous', 'sensibl*|not too many|distract*|simple|consisten*|few::Use sparingly/consistently'], a: 'An animation is movement applied to an object on a slide, while a transition is the effect between slides. Animation types are Entrance (appears), Emphasis (e.g. Spin), Exit (disappears) and Motion Path (moves along a path). They can start On Click, With Previous or After Previous. In a professional presentation they should be used sparingly and consistently so they do not distract the audience – e.g. one entrance effect for bullet points and the same transition throughout.' },
      { q: 'Describe how to deliver a presentation professionally. Include keyboard shortcuts, Presenter View and how you would prepare printed materials.', m: 6, min: 55, k: ['f5::F5 to start', 'shift + f5|shift+f5::Shift+F5 from current slide', 'esc::Esc to end', 'b key|press b|\\bb\\b|black::B for black screen', 'presenter view::Presenter View', 'notes|timer|next slide::See notes/timer/next slide', 'handout*::Print handouts', 'rehears*|practi*|timing*::Rehearse timings', 'eye contact|audience|voice|confident*|don\'t read::Presentation skills'], a: 'I would rehearse timings first. I would press F5 to start from the beginning (Shift+F5 from the current slide), use Presenter View so I can see my speaker notes, the timer and the next slide while the audience only sees the slides, press B to black the screen when discussing a point, and Esc to finish. I would print handouts with 3 slides per page so the audience can make notes, and make eye contact instead of reading the slides.' }
    ]
  });

  /* ================= UNIT 6: BINARY ================= */
  U({
    year: 7, num: 6, title: 'Binary', icon: '🔢',
    topics: ['Why computers use binary', 'Bits, nibbles and bytes', 'Binary → denary', 'Denary → binary', 'Binary addition', 'Overflow', 'Binary in real life'],
    vocab: [
      ['Binary', 'A number system that uses only 0 and 1 (base 2)'],
      ['Bit', 'A single binary digit (0 or 1) – the smallest unit of data'],
      ['Nibble', 'A group of 4 bits'],
      ['Byte', 'A group of 8 bits'],
      ['Denary', 'The base-10 number system we use every day (digits 0–9)'],
      ['Hexadecimal', 'A base-16 number system using 0–9 and A–F'],
      ['Overflow', 'When a result is too large to store in the available number of bits'],
      ['Place value', 'The value of each bit position: 128, 64, 32, 16, 8, 4, 2, 1'],
      ['ASCII', 'A system that maps binary codes to letters, numbers and symbols'],
      ['Check digit', 'An extra digit added to detect errors in data'],
      ['Kilobyte', '1,024 bytes'],
      ['Megabyte', '1,024 kilobytes'],
      ['Gigabyte', '1,024 megabytes']
    ],
    gen: [
      { g: 'binToDen', t: ['mcq', 'short'], m: 2, w: 4 },
      { g: 'denToBin', t: ['mcq', 'short'], m: 2, w: 4 },
      { g: 'binAdd', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'overflow', t: ['mcq'], w: 1 },
      { g: 'dataUnits', t: ['mcq', 'short'], m: 2, w: 2 }
    ],
    mcq: [
      { q: 'Why do computers use binary?', o: ['Their circuits have two states: on (1) and off (0)', 'Binary is easier for humans to read', 'It uses less electricity to write 10 digits', 'Because keyboards only have two keys'], j: { k: ['on|off|two states|switch*|transistor*|electric*::Circuits/switches are on or off', '1 & 0|0 & 1|two digits|two values::Two values: 1 and 0'] } },
      { q: 'How many bits are in a byte?', o: ['8', '4', '2', '16'] },
      { q: 'How many bits are in a nibble?', o: ['4', '8', '2', '1'] },
      { q: 'What is the largest number an 8-bit binary number can store?', o: ['255', '256', '128', '100'], x: '11111111 = 128+64+32+16+8+4+2+1 = 255.' },
      { q: 'What are the place values of an 8-bit binary number (left to right)?', o: ['128, 64, 32, 16, 8, 4, 2, 1', '1, 2, 3, 4, 5, 6, 7, 8', '100, 50, 25, 12, 6, 3, 2, 1', '256, 128, 64, 32, 16, 8, 4, 2'] },
      { q: 'What is 1 + 1 in binary?', o: ['10', '2', '11', '01'], x: 'Write 0 and carry 1.' },
      { q: 'What is 1 + 1 + 1 in binary?', o: ['11', '3', '10', '111'], x: 'Write 1 and carry 1.' },
      { q: 'What is an overflow error?', o: ['When a result is too large to fit in the available bits', 'When a file is too big for a USB', 'When the computer overheats', 'When binary numbers are negative'] },
      { q: 'What is 11111111 + 00000001 in an 8-bit system?', o: ['00000000 with an overflow error', '100000000', '11111111', '00000001'], x: 'The answer needs 9 bits; the 9th bit is lost.' },
      { q: 'Which system maps binary codes to letters and symbols?', o: ['ASCII', 'GHz', 'BIOS', 'HTML'] },
      { q: 'How many bytes are in 1 kilobyte (as used in this course)?', o: ['1,024', '1,000', '100', '8'] },
      { q: 'Which is the largest?', o: ['1 GB', '1 MB', '1 KB', '1 byte'] },
      { q: 'Denary is also called…', o: ['Base 10', 'Base 2', 'Base 16', 'Base 8'] },
      { q: 'Hexadecimal uses which digits?', o: ['0–9 and A–F', '0 and 1', '0–9 only', 'A–Z'] },
      { q: 'What is the smallest unit of data?', o: ['Bit', 'Byte', 'Nibble', 'Kilobyte'] },
      { q: 'In the binary number 10000000, what is the denary value?', o: ['128', '1', '64', '256'] },
      { q: 'In the binary number 00000001, what is the denary value?', o: ['1', '128', '0', '2'] },
      { q: 'How is a picture stored in a computer?', o: ['Each pixel\'s colour is stored as a binary code', 'As a real photo inside the hard drive', 'As letters of the alphabet', 'It is not stored in binary'] },
      { q: 'What is a check digit used for?', o: ['Detecting errors in data', 'Making numbers bigger', 'Encrypting passwords', 'Counting bytes'] }
    ],
    tf: [
      { q: 'Binary uses only the digits 0 and 1.', a: true },
      { q: 'A byte is 4 bits.', a: false, x: 'A byte is 8 bits. A nibble is 4 bits.', j: ['8|eight::A byte is 8 bits', 'nibble::4 bits is a nibble'] },
      { q: '8 bits can store numbers from 0 to 255.', a: true },
      { q: 'In binary, 1 + 1 = 2.', a: false, x: '1 + 1 = 10 in binary (write 0, carry 1).', j: ['10::The answer is 10', 'carry|write 0|no 2|only 0 and 1::You write 0 and carry 1 – there is no digit 2'] },
      { q: 'An overflow error happens when a result needs more bits than are available.', a: true, j: ['255|too big|too large|more than|9 bit*|ninth::Result is bigger than 255 / needs 9 bits', 'lost|dropped|wrong|incorrect::The extra bit is lost so the answer is wrong'] },
      { q: 'All data in a computer – text, images, sound and video – is stored in binary.', a: true },
      { q: '1 MB = 1,024 KB.', a: true },
      { q: 'Denary is base 2.', a: false, x: 'Denary is base 10; binary is base 2.' },
      { q: 'The binary number 00001010 is 10 in denary.', a: true, x: '8 + 2 = 10.' },
      { q: 'The leftmost bit of an 8-bit number has a place value of 1.', a: false, x: 'The leftmost bit is 128; the rightmost is 1.' },
      { q: 'Adding two 8-bit numbers can never cause an error.', a: false, x: 'If the total is more than 255, an overflow error occurs.' },
      { q: 'CPU instructions are stored in binary.', a: true },
      { q: 'A nibble is half a byte.', a: true }
    ],
    cloze: [
      { t: 'Computers use [binary] because their circuits have two states: on and off. A single 0 or 1 is called a [bit]. A group of 4 bits is a [nibble] and a group of 8 bits is a [byte]. The place values of an 8-bit number are 128, 64, 32, [16], 8, 4, 2 and [1].', d: ['denary', '10'] },
      { t: 'To convert binary to [denary], write the place values above each bit and [add] the place values where the digit is [1]. For example, 00000101 = 4 + 1 = [5]. The largest 8-bit number is 11111111, which is [255]. The system we use every day is base [10|ten].', d: ['subtract', '256'] },
      { t: 'Binary addition rules: 0 + 0 = [0], 0 + 1 = 1, 1 + 1 = [10] (write 0, [carry] 1) and 1 + 1 + 1 = [11]. If the answer needs more than 8 bits, the extra bit is lost. This is called an [overflow] error. It happens when the total is bigger than [255].', d: ['2', 'virus'] }
    ],
    short: [
      { q: 'Explain why computers store data in binary.', m: 2, k: ['circuit*|switch*|transistor*|electric*::Computer circuits/switches', 'two states|on|off|1 & 0|0 & 1::have two states: on (1) and off (0)'], a: 'Computers are made of billions of tiny switches (transistors) that can only be on or off, which is represented by 1 and 0.' },
      { q: 'What is the difference between a bit, a nibble and a byte?', m: 3, k: ['bit & {single|one|0 or 1|1 or 0}|bit is 1|bit = 1::A bit is a single 0 or 1', 'nibble & {4|four}::A nibble is 4 bits', 'byte & {8|eight}::A byte is 8 bits'], a: 'A bit is a single binary digit (0 or 1). A nibble is 4 bits. A byte is 8 bits.' },
      { q: 'Explain what an overflow error is and give an example.', m: 3, k: ['too big|too large|more bits|doesn\'t fit|does not fit|more than 8|9 bit*|ninth::Result needs more bits than available', 'lost|dropped|wrong|incorrect::Extra bit lost / wrong answer', '255|11111111|example|+::A correct example'], a: 'Overflow happens when the result of a calculation needs more bits than are available. E.g. 11111111 (255) + 00000001 (1) = 100000000, which needs 9 bits, so the 9th bit is lost and 00000000 is stored.' },
      { q: 'Describe the steps to convert a denary number into 8-bit binary.', m: 3, k: ['128|largest|biggest|left::Start at the largest place value (128)', 'fit*|fits|go into|bigger|compare::Check if it fits', '1 & {subtract*|take away|minus}|write 1::If yes write 1 and subtract', '0|move on|next::If no write 0 and move on'], a: 'Start at the largest place value (128). If it fits into the number, write 1 and subtract it; if not, write 0. Move on to the next place value and repeat until all 8 bits are done.' },
      { q: 'Give three examples of data that is stored in binary and explain how one of them is represented.', m: 4, k: ['image*|picture*|pixel*::Images', 'sound|audio|music::Sound', 'text|letter*|character*|ascii|unicode::Text', 'video|instruction*|program*::Video/instructions', 'pixel & {colour|binary|code}|ascii & {code|number}|wave*|sample*::Explains how one is represented'], a: 'Images, sound and text are all stored in binary. For example, text is stored using ASCII, where each character has a binary code, e.g. A = 01000001.' },
      { q: 'State the largest denary number that can be stored in 8 bits and explain why.', m: 2, k: ['255::255', '11111111|all 1*|128 + 64|add* all::All bits are 1 / 128+64+32+16+8+4+2+1'], a: '255, because when all 8 bits are 1 the place values add up to 128+64+32+16+8+4+2+1 = 255.' },
      { q: 'Put these in order from smallest to largest: byte, gigabyte, bit, megabyte, kilobyte, nibble.', m: 2, k: ['bit & nibble & byte::bit, nibble, byte (in order)', 'kilobyte & megabyte & gigabyte|kb & mb & gb::kilobyte, megabyte, gigabyte'], a: 'bit, nibble, byte, kilobyte, megabyte, gigabyte.' }
    ],
    long: [
      { q: 'Explain how to convert the binary number 10110010 into denary AND how to convert the denary number 45 into 8-bit binary. Show all your working and explain each step.', m: 6, min: 45, k: ['128 & 64 & 32::Writes place values', '128 + 32 + 16 + 2|128+32+16+2::Adds 128+32+16+2', '178::10110010 = 178', 'add*::Explains adding values where bit = 1', '32::Uses 32 for 45', '13|45 - 32|45-32::Subtracts to get 13', '00101101|101101::45 = 00101101', 'subtract*|fit*|largest::Explains the subtract method'], a: 'Binary to denary: write the place values 128 64 32 16 8 4 2 1 above 1 0 1 1 0 0 1 0. Add the place values where there is a 1: 128 + 32 + 16 + 2 = 178. Denary to binary: start at 128 – it doesn\'t fit, write 0; 64 – 0; 32 fits: write 1, 45 − 32 = 13; 16 – 0; 8 fits: 1, 13 − 8 = 5; 4 fits: 1, 5 − 4 = 1; 2 – 0; 1 fits: 1. So 45 = 00101101 (check 32+8+4+1 = 45).' },
      { q: 'Explain the rules of binary addition. Use the example 00110101 + 00011010 to show how carrying works, and explain what would happen if the answer was larger than 255.', m: 6, min: 50, k: ['0 + 0|0+0::0+0 = 0', '1 + 1|1+1::1+1 = 10', 'carry*::Explains carrying', '1 + 1 + 1|1+1+1|11::1+1+1 = 11', '01001111|1001111::Correct answer 01001111', '79::= 79 in denary', 'overflow::Overflow', '9 bit*|ninth|too big|lost|255::Explains the extra bit is lost'], a: 'Rules: 0+0 = 0, 0+1 = 1, 1+1 = 10 (write 0, carry 1) and 1+1+1 = 11 (write 1, carry 1). Working right to left, 00110101 + 00011010 = 01001111 (53 + 26 = 79). If the answer were larger than 255, it would need a 9th bit. In an 8-bit system the 9th bit is lost, which gives the wrong answer – this is an overflow error.' },
      { q: 'Explain why computers use binary and describe how binary is used to represent different types of data such as text, images and sound.', m: 6, min: 55, k: ['switch*|transistor*|circuit*|electric*::Made of switches/circuits', 'on|off|two states::Two states on/off', 'text|character*|letter*::Text', 'ascii|unicode|code::ASCII/Unicode codes', 'image*|pixel*::Images made of pixels', 'colour|binary code::Each pixel colour stored as binary', 'sound|audio|wave*|sample*::Sound as samples of waves', 'instruction*|video|frame*::Instructions/video also in binary'], a: 'Computers use binary because their circuits are made of transistors (switches) that are either on (1) or off (0). Text is stored using ASCII or Unicode, where each character has its own binary code (A = 01000001). Images are made of pixels, and each pixel\'s colour is stored as a binary code. Sound is stored by sampling the sound wave and storing each sample as a binary number. Video is a sequence of binary-encoded frames, and CPU instructions are binary too.' }
    ]
  });

  /* ================= UNIT 7: PROBLEM SOLVING ================= */
  U({
    year: 7, num: 7, title: 'Problem Solving and Computational Thinking', icon: '🧩',
    topics: ['Decomposition', 'Abstraction', 'Pattern recognition', 'Algorithms', 'Pseudocode', 'Flowcharts', 'Trace tables', 'Sequence, selection and iteration'],
    vocab: [
      ['Computational thinking', 'Solving problems using methods a computer could follow'],
      ['Decomposition', 'Breaking a big problem into smaller, more manageable parts'],
      ['Abstraction', 'Removing unnecessary detail and focusing on what matters'],
      ['Pattern recognition', 'Finding similarities to solve problems faster'],
      ['Algorithm', 'Step-by-step instructions to solve a problem'],
      ['Pseudocode', 'English-like code used to plan a program'],
      ['Flowchart', 'A diagram using shapes to show the steps of an algorithm'],
      ['Trace table', 'A table used to track variable values as an algorithm runs'],
      ['Variable', 'A named storage location that holds a value'],
      ['Sequence', 'Instructions carried out one after another in order'],
      ['Selection', 'A decision (IF) that changes which path is taken'],
      ['Iteration', 'Repeating a set of instructions (a loop)'],
      ['Debugging', 'Finding and fixing errors in an algorithm or program'],
      ['Test case', 'Input data and the expected output used to check a program works']
    ],
    mcq: [
      { q: 'Breaking a big problem into smaller parts is called…', o: ['Decomposition', 'Abstraction', 'Pattern recognition', 'Iteration'] },
      { q: 'Removing unnecessary detail to focus on what matters is called…', o: ['Abstraction', 'Decomposition', 'Selection', 'Debugging'], j: { k: ['detail*|unnecessary|irrelevant|ignore*::Removes unnecessary detail', 'important|matters|focus|key::Focuses on what matters'] } },
      { q: 'A map that shows roads but not every building is an example of…', o: ['Abstraction', 'Decomposition', 'Iteration', 'Sequence'] },
      { q: 'Using a solution from a previous problem to solve a similar new one is…', o: ['Pattern recognition', 'Abstraction', 'Decomposition', 'Selection'] },
      { q: 'What is an algorithm?', o: ['Step-by-step instructions to solve a problem', 'A type of computer', 'A programming error', 'A flowchart shape'] },
      { q: 'Which flowchart shape is used for a DECISION?', o: ['Diamond', 'Oval', 'Rectangle', 'Parallelogram'] },
      { q: 'Which flowchart shape is used for START and END?', o: ['Oval (terminator)', 'Diamond', 'Rectangle', 'Parallelogram'] },
      { q: 'Which flowchart shape is used for INPUT or OUTPUT?', o: ['Parallelogram', 'Rectangle', 'Oval', 'Diamond'] },
      { q: 'Which flowchart shape is used for a PROCESS (action or calculation)?', o: ['Rectangle', 'Diamond', 'Oval', 'Parallelogram'] },
      { q: 'How many exits does a decision in a flowchart have?', o: ['2 (Yes/No)', '1', '3', 'As many as you like'] },
      { q: 'Repeating a set of instructions is called…', o: ['Iteration', 'Selection', 'Sequence', 'Abstraction'] },
      { q: 'An IF statement is an example of…', o: ['Selection', 'Iteration', 'Sequence', 'Decomposition'] },
      { q: 'Instructions carried out one after another in order is called…', o: ['Sequence', 'Selection', 'Iteration', 'Pattern recognition'] },
      { q: 'What is a trace table used for?', o: ['Tracking the values of variables as an algorithm runs', 'Drawing a flowchart', 'Storing files', 'Designing a website'] },
      { q: 'What does this pseudocode output?\nFOR i ← 1 TO 3\n  OUTPUT i\nNEXT i', o: ['1 2 3', '3', '0 1 2', '1 2 3 4'] },
      { q: 'What does this pseudocode output if score = 40?\nIF score >= 50 THEN OUTPUT "Pass" ELSE OUTPUT "Fail" ENDIF', o: ['Fail', 'Pass', '40', 'Nothing'] },
      { q: 'In pseudocode, what does x ← 5 mean?', o: ['Set x to 5', 'x is less than 5', 'Output 5', 'Repeat 5 times'] },
      { q: 'Which is a property of a good algorithm?', o: ['Each step is clear and unambiguous', 'It never ends', 'It can be understood only by its writer', 'It has no order'] },
      { q: 'What is debugging?', o: ['Finding and fixing errors', 'Writing pseudocode', 'Drawing flowcharts', 'Deleting a program'] },
      { q: 'Planning a birthday party by splitting it into food, guests, venue and music is an example of…', o: ['Decomposition', 'Abstraction', 'Iteration', 'Selection'] },
      { q: 'Which of the four pillars comes LAST when solving a problem?', o: ['Algorithm design', 'Decomposition', 'Abstraction', 'Pattern recognition'] }
    ],
    tf: [
      { q: 'Decomposition means breaking a problem into smaller parts.', a: true, j: ['smaller|parts|pieces|manageable::Smaller, manageable parts', 'easier|solve|separately|one at a time::Easier to solve each part'] },
      { q: 'Abstraction means adding as much detail as possible.', a: false, x: 'Abstraction removes unnecessary detail.', j: ['remov*|ignor*|hide*|less detail|unnecessary::Removes unnecessary detail', 'important|matters|focus::Focuses on what is important'] },
      { q: 'A diamond is used for decisions in a flowchart.', a: true },
      { q: 'An algorithm must eventually finish.', a: true },
      { q: 'A WHILE loop is an example of selection.', a: false, x: 'A WHILE loop is iteration (repetition).', j: ['iteration|repeat*|loop::It is iteration/repetition', 'selection & {if|decision}|if statement::Selection is an IF/decision'] },
      { q: 'Pseudocode must be written in a real programming language like Python.', a: false, x: 'Pseudocode is English-like – it plans the logic without strict syntax.' },
      { q: 'Trace tables help you check an algorithm before coding it.', a: true },
      { q: 'A flowchart should always begin with Start and end with End.', a: true },
      { q: 'A rectangle in a flowchart shows input or output.', a: false, x: 'Rectangles are processes. Parallelograms are input/output.' },
      { q: 'Pattern recognition means finding similarities between problems.', a: true },
      { q: 'Computational thinking has four main parts.', a: true, x: 'Decomposition, abstraction, pattern recognition and algorithm design.' },
      { q: 'Each step of an algorithm should be unambiguous.', a: true }
    ],
    cloze: [
      { t: 'Computational thinking has four pillars. [Decomposition] means breaking a big problem into smaller parts. [Abstraction] means removing unnecessary [detail]. [Pattern] recognition means finding similarities. [Algorithm] design means planning the step-by-step solution, which can be written in [pseudocode] or drawn as a flowchart.', d: ['iteration', 'binary'] },
      { t: 'In a flowchart, an [oval] shows Start and End. A [rectangle] shows a process. A [diamond] shows a decision, which has exactly [two|2] exits: Yes and No. A [parallelogram] shows input or output, and [arrows] show the direction of flow.', d: ['circle', 'triangle'] },
      { t: 'The three building blocks of algorithms are [sequence], where steps run in order; [selection], where an [IF] statement chooses a path; and [iteration], where steps are repeated using a [loop]. A [trace] table is used to track the values of variables.', d: ['abstraction', 'folder'] }
    ],
    short: [
      { q: 'Name the four pillars of computational thinking.', m: 4, k: ['decomposition|decompose::Decomposition', 'abstraction::Abstraction', 'pattern*::Pattern recognition', 'algorithm*::Algorithm design'], a: 'Decomposition, abstraction, pattern recognition and algorithm design.' },
      { q: 'Explain what decomposition is and give an example.', m: 2, k: ['break*|split*|smaller|parts|pieces::Breaking a problem into smaller parts', 'e.g.|example|such as|like|website|game|party|login|essay|cook*|recipe::A suitable example'], a: 'Decomposition is breaking a big problem into smaller, more manageable parts. E.g. a website can be decomposed into login, search and database.' },
      { q: 'Explain what abstraction is and give an example.', m: 2, k: ['remov*|ignor*|hide|unnecessary|irrelevant|detail*::Removing unnecessary detail', 'map|tube|underground|icon|example|e.g.|such as::A suitable example'], a: 'Abstraction is removing unnecessary detail and focusing on what matters. E.g. a map shows roads but not every building.' },
      { q: 'Draw or describe the flowchart symbols for: start/end, process, decision, input/output.', m: 4, k: ['oval|terminator|rounded::Start/End = oval', 'rectangle::Process = rectangle', 'diamond::Decision = diamond', 'parallelogram::Input/output = parallelogram'], a: 'Start/End – oval; Process – rectangle; Decision – diamond; Input/Output – parallelogram.' },
      { q: 'Explain the difference between selection and iteration.', m: 2, k: ['decision|if|choose*|path|condition::Selection makes a decision (IF)', 'repeat*|loop*|again|while|for::Iteration repeats steps (loop)'], a: 'Selection uses a decision (IF) to choose which path to take. Iteration repeats a set of instructions using a loop.' },
      { q: 'Write pseudocode that asks for a score and outputs "Pass" if it is 50 or more, otherwise "Fail".', m: 4, k: ['input::INPUT score', 'if::IF statement', '>= 50|>=50|≥ 50|≥50|50 or more::Condition score >= 50', 'pass & fail::Outputs Pass and Fail correctly', 'else::ELSE', 'endif|end if::ENDIF'], a: 'INPUT score\nIF score >= 50 THEN\n  OUTPUT "Pass"\nELSE\n  OUTPUT "Fail"\nENDIF' },
      { q: 'What is a trace table and why is it useful?', m: 2, k: ['track*|record*|value*|variable*::Tracks variable values', 'check*|test*|error*|before cod*|find mistakes|debug*::Checks the algorithm works / finds errors'], a: 'A trace table records the value of each variable line by line as an algorithm runs. It helps you check that the algorithm works and find errors before coding.' },
      { q: 'Give three properties of a good algorithm.', m: 3, k: ['start & end|clear start|finish*|end*|stop*::Has a clear start and end / finishes', 'unambiguous|clear|precise::Each step is clear/unambiguous', 'correct|right output|valid::Gives the correct output', 'efficient|quick::Efficient', 'order|sequence::Steps in the right order'], a: 'It has a clear start and end (it finishes), each step is unambiguous, and it gives the correct output for valid input.' },
      { q: 'What will this output?\nx ← 1\nWHILE x <= 3\n  OUTPUT x\n  x ← x + 1\nENDWHILE', m: 2, exact: ['1 2 3', '1,2,3', '1, 2, 3', '123'], a: 'x starts at 1; outputs 1, 2, 3; when x becomes 4 the condition is false and the loop stops.' }
    ],
    long: [
      { q: 'A school wants a program to organise its sports day. Explain how the four pillars of computational thinking could be used to solve this problem. Give examples for each.', m: 6, min: 60, k: ['decompos*::Decomposition', 'events|registration|scores|timetable|smaller|parts|split::Example: split into events/registration/scores', 'abstraction::Abstraction', 'ignore*|remov*|unnecessary|detail*::Example of ignoring unnecessary detail', 'pattern*::Pattern recognition', 'similar|same|repeat*|each race|every event::Example: similar steps repeated for each event', 'algorithm*::Algorithm design', 'pseudocode|flowchart|step*::Writing steps/pseudocode/flowchart'], a: 'Decomposition: break sports day into smaller parts – registering students, the timetable of events, recording results and calculating house points. Abstraction: ignore unnecessary detail such as students\' eye colour – only names, houses, events and times matter. Pattern recognition: every race needs the same steps (record times, sort, award points), so one solution can be reused. Algorithm design: write step-by-step pseudocode or a flowchart, e.g. INPUT times, sort them, OUTPUT the winner, and test it with a trace table.' },
      { q: 'Describe the three basic building blocks of algorithms: sequence, selection and iteration. Give a pseudocode example of each.', m: 6, min: 50, k: ['sequence::Sequence', 'order|one after another|in turn::Steps run in order', 'selection::Selection', 'if|decision|condition::Uses IF/decision', 'iteration::Iteration', 'loop|repeat*|while|for::Uses loops', 'input|output|←|<-::Pseudocode example', 'endif|endwhile|next|then::Correct pseudocode keywords'], a: 'Sequence means instructions run one after another in order, e.g. INPUT name, OUTPUT "Hello " + name. Selection means a decision chooses the path, e.g. IF score >= 50 THEN OUTPUT "Pass" ELSE OUTPUT "Fail" ENDIF. Iteration means repeating instructions using a loop, e.g. FOR i ← 1 TO 5 OUTPUT i NEXT i, or WHILE x < 100 … ENDWHILE.' },
      { q: 'Describe how you would plan, write and test an algorithm that checks whether a number is even or odd. Include a flowchart description or pseudocode and explain how a trace table would help.', m: 6, min: 50, k: ['input::Input the number', 'mod|remainder|÷ 2|/ 2|divid*::Use MOD 2 / remainder', '= 0|equals 0|no remainder::Check remainder = 0', 'even::Output Even', 'odd::Output Odd', 'diamond|decision|if::Decision / IF', 'start|end|oval::Start and End', 'trace table|test*|check*::Testing with a trace table/test data'], a: 'Start → INPUT N → decision: is N MOD 2 = 0? If Yes → OUTPUT "Even"; if No → OUTPUT "Odd" → End. In pseudocode: INPUT N; IF N MOD 2 = 0 THEN OUTPUT "Even" ELSE OUTPUT "Odd" ENDIF. I would test with a trace table using test data such as 4 (expect Even) and 7 (expect Odd), recording N, N MOD 2 and the output to check the algorithm is correct before coding.' }
    ]
  });

  /* ================= UNIT 8: INTRO TO PROGRAMMING (PYTHON) ================= */
  U({
    year: 7, num: 8, title: 'Introduction to Programming (Python)', icon: '🐍',
    topics: ['print() and comments', 'Variables and data types', 'input() and type conversion', 'Arithmetic operators', 'if / elif / else', 'Comparison and logical operators', 'while loops', 'Errors'],
    vocab: [
      ['Variable', 'A named location in memory that stores a value that can change'],
      ['Constant', 'A value set once that does not change while the program runs'],
      ['String', 'Text data stored as characters, e.g. "Hello"'],
      ['Integer', 'A whole number with no decimal point, e.g. 5'],
      ['Float', 'A number with a decimal point, e.g. 3.14'],
      ['Boolean', 'A data type with only two values: True or False'],
      ['Syntax error', 'A mistake in the spelling or grammar of code that stops it running'],
      ['Runtime error', 'An error that happens while the program is running, e.g. dividing by zero'],
      ['Logic error', 'The code runs but gives the wrong output'],
      ['IDE', 'Integrated Development Environment – software for writing and running code, e.g. IDLE'],
      ['Comment', 'A note in code starting with # that Python ignores'],
      ['Selection', 'Making a decision in a program using if / elif / else'],
      ['Iteration', 'Repeating code using a loop'],
      ['Assignment', 'Giving a variable a value using ='],
      ['Function', 'A named block of code that does a job, e.g. print()']
    ],
    gen: [
      { g: 'pyArith', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'pyStr', t: ['mcq', 'short'], m: 2, w: 2 },
      { g: 'pyType', t: ['mcq'], w: 2 },
      { g: 'pyIf', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'pyIfElse', t: ['mcq', 'short'], m: 2, w: 2 },
      { g: 'pyWhile', t: ['mcq', 'short'], m: 2, w: 3 }
    ],
    mcq: [
      { q: 'Which Python function displays text on the screen?', o: ['print()', 'input()', 'int()', 'display()'] },
      { q: 'Which Python function asks the user to type something?', o: ['input()', 'print()', 'ask()', 'str()'] },
      { q: 'Which symbol starts a comment in Python?', o: ['#', '//', '"', '*'] },
      { q: 'Which line correctly stores the user\'s age as a whole number?', o: ['age = int(input("Age: "))', 'age = input(int("Age: "))', 'age = str(input("Age: "))', 'int age = input("Age: ")'], x: 'input() always returns a string, so int() converts it to an integer.', j: { k: ['string|text::input() returns a string', 'int*|whole number|number|convert*::int() converts it to an integer so we can do maths'] } },
      { q: 'Which operator checks if two values are EQUAL?', o: ['==', '=', '!=', '=>'], x: '= assigns a value; == compares.' },
      { q: 'Which operator means "not equal to"?', o: ['!=', '<>', '=!', '=='] },
      { q: 'What is the data type of True?', o: ['Boolean', 'String', 'Integer', 'Float'] },
      { q: 'What is the data type of 9.99?', o: ['Float', 'Integer', 'String', 'Boolean'] },
      { q: 'What type of error is print("Hello" (missing bracket)?', o: ['Syntax error', 'Logic error', 'Runtime error', 'No error'] },
      { q: 'A program to calculate an average runs but gives the wrong answer. This is a…', o: ['Logic error', 'Syntax error', 'Runtime error', 'Comment'] },
      { q: 'Dividing a number by zero while the program runs causes a…', o: ['Runtime error', 'Syntax error', 'Logic error', 'Comment error'] },
      { q: 'What does ** do in Python?', o: ['Raises to a power', 'Multiplies', 'Divides', 'Finds the remainder'] },
      { q: 'What does % do in Python?', o: ['Gives the remainder after division', 'Calculates a percentage', 'Divides and rounds', 'Multiplies'] },
      { q: 'What does // do in Python?', o: ['Divides and rounds down to a whole number', 'Makes a comment', 'Divides normally', 'Finds the remainder'] },
      { q: 'Which keyword is used for "else if" in Python?', o: ['elif', 'elseif', 'else if', 'ifelse'] },
      { q: 'What must go at the end of an if line in Python?', o: [':', ';', '.', ')'] },
      { q: 'Which loop repeats WHILE a condition is true?', o: ['while', 'if', 'elif', 'print'] },
      { q: 'What is an infinite loop?', o: ['A loop whose condition never becomes False', 'A loop that runs once', 'A loop with a syntax error', 'A loop that uses elif'] },
      { q: 'Which is a valid variable name?', o: ['user_name', '2name', 'user name', 'print'], x: 'Variable names cannot start with a number, contain spaces or be Python keywords.' },
      { q: 'Which logical operator is True only when BOTH conditions are true?', o: ['and', 'or', 'not', '=='] },
      { q: 'What does IDLE stand for / what is it?', o: ['An IDE for writing and running Python', 'A type of error', 'A data type', 'A loop'] },
      { q: 'Which converts a number into a string?', o: ['str()', 'int()', 'float()', 'input()'] },
      { q: 'What is the output of print(10 / 4)?', o: ['2.5', '2', '2.0', '10/4'] },
      { q: 'Why is indentation important in Python?', o: ['It shows which code belongs inside if statements and loops', 'It makes code run faster', 'It is just decoration', 'It adds comments'] }
    ],
    tf: [
      { q: 'input() always returns a string.', a: true, j: ['string|text::input() gives text', 'int*|convert*|float::You must convert it with int() to do maths'] },
      { q: '= and == mean the same thing in Python.', a: false, x: '= assigns a value to a variable; == compares two values.', j: ['assign*|store*|set*|give*::= assigns', 'compar*|check*|equal*::== compares'] },
      { q: 'Python ignores comments when the program runs.', a: true },
      { q: 'A logic error stops the program from running.', a: false, x: 'A logic error runs but gives the wrong output. Syntax errors stop it running.', j: ['runs|still run*|works::The program still runs', 'wrong|incorrect|unexpected::…but gives the wrong output', 'syntax::Syntax errors stop it running'] },
      { q: '"25" (with quotes) is an integer.', a: false, x: 'Anything in quotes is a string.' },
      { q: 'Print("Hi") will work in Python.', a: false, x: 'Python is case-sensitive – it must be print with a lowercase p.' },
      { q: 'elif lets you check more than one condition.', a: true },
      { q: 'Only the first true branch of an if/elif/else runs.', a: true },
      { q: 'A while loop can run forever if its condition never becomes False.', a: true },
      { q: 'Variable names can contain spaces.', a: false, x: 'Use underscores instead, e.g. first_name.' },
      { q: 'A Boolean can be True or False.', a: true },
      { q: 'The not operator reverses a condition.', a: true },
      { q: 'An else statement needs a condition after it.', a: false, x: 'else runs when all previous conditions are False – it has no condition.' },
      { q: 'Text must be inside quotation marks in print().', a: true }
    ],
    cloze: [
      { t: 'In Python, [print()|print] displays output and [input()|input] asks the user for data. input() always returns a [string], so to do maths we convert it using [int()|int]. A [variable] is a named location in memory that stores a value. Comments start with [#] and are ignored by Python.', d: ['float', 'while'] },
      { t: 'There are four main data types. A [string] stores text, such as "Hello". An [integer] stores whole numbers. A [float] stores numbers with a decimal point. A [Boolean] can only be True or False. = is used for [assignment] and == is used to [compare] values.', d: ['loop', 'comment'] },
      { t: 'An [if] statement makes a decision. [elif] checks another condition and [else] runs if none of the conditions are true. The line must end with a [colon|:] and the code inside must be [indented]. A [while] loop repeats code while a condition is true.', d: ['print', 'input'] },
      { t: 'There are three types of error. A [syntax] error is a mistake in spelling or grammar, like a missing bracket, and stops the code running. A [runtime] error happens while the program runs, such as dividing by [zero|0]. A [logic] error means the program runs but gives the [wrong] output. Finding and fixing errors is called [debugging].', d: ['virus', 'comment'] }
    ],
    short: [
      { q: 'Name the four main data types in Python and give an example of each.', m: 4, k: ['string|str::String (e.g. "Ali")', 'integer|int::Integer (e.g. 12)', 'float::Float (e.g. 1.65)', 'boolean|bool::Boolean (True/False)'], a: 'String – "Ali"; Integer – 12; Float – 1.65; Boolean – True.' },
      { q: 'Explain the difference between = and == in Python.', m: 2, k: ['assign*|store*|set*|give* a value::= assigns a value', 'compar*|check*|equal*|same::== compares two values'], a: '= assigns (stores) a value in a variable, e.g. age = 12. == compares two values to check if they are equal, e.g. if age == 12:' },
      { q: 'Describe the three types of programming error, with an example of each.', m: 3, k: ['syntax::Syntax error (e.g. missing bracket/colon)', 'runtime::Runtime error (e.g. dividing by zero)', 'logic::Logic error (wrong output)'], a: 'Syntax error – breaks Python\'s rules, e.g. print("Hi" missing a bracket. Runtime error – crashes while running, e.g. dividing by zero. Logic error – runs but gives the wrong output, e.g. using + instead of *.' },
      { q: 'Why do we use int() with input() when asking for someone\'s age?', m: 2, k: ['string|text::input() returns a string', 'number|integer|calculat*|maths|compare|add::Converts to an integer so we can do maths/compare'], a: 'input() always returns a string. int() converts it to an integer so we can do calculations or comparisons with it.' },
      { q: 'Write a Python program that asks for the user\'s name and then prints "Hello" followed by their name.', m: 3, k: ['input(::Uses input()', 'name =|name=::Stores the answer in a variable', 'print(::Uses print() with hello & name'], a: 'name = input("What is your name? ")\nprint("Hello", name)' },
      { q: 'Write a Python program that asks for a number and prints "Positive", "Negative" or "Zero".', m: 4, k: ['int(input|float(input::Converts input to a number', 'if & > 0|if & >0::if num > 0', 'elif & < 0|elif & <0::elif num < 0', 'else::else → Zero', 'positive & negative & zero::Prints all three messages'], a: 'num = int(input("Number: "))\nif num > 0:\n    print("Positive")\nelif num < 0:\n    print("Negative")\nelse:\n    print("Zero")' },
      { q: 'What is a comment in Python and why do programmers use them?', m: 2, k: ['#|hash::Starts with #', 'ignor*|not run|doesn\'t run|skipped::Ignored by Python', 'explain*|understand*|note*|describe*|remind*|others::Explains the code to humans'], a: 'A comment is a note that starts with # and is ignored by Python. It explains what the code does so other people (and you) can understand it.' },
      { q: 'Explain what a while loop does and when it stops.', m: 2, k: ['repeat*|loop*|again|over and over::Repeats code', 'condition|false|true|no longer::Stops when the condition becomes False'], a: 'A while loop repeats a block of code as long as its condition is True. It stops when the condition becomes False.' },
      { q: 'Write a while loop that prints the numbers 1 to 5.', m: 3, k: ['= 1|=1::Starts a counter at 1', 'while & {<= 5|<=5|< 6|<6}::while count <= 5', 'print(::print inside the loop', '+ 1|+1|+= 1|+=1::Adds 1 each time'], a: 'count = 1\nwhile count <= 5:\n    print(count)\n    count = count + 1' },
      { q: 'Explain how the logical operators and, or and not work.', m: 3, k: ['and & both::and – True only if both are true', 'or & {either|one|at least}::or – True if at least one is true', 'not & {revers*|opposite|flip*|invert*}::not – reverses the condition'], a: 'and is True only if both conditions are True. or is True if at least one condition is True. not reverses a condition (True becomes False).' }
    ],
    long: [
      { q: 'Write a Python program for a number guessing game. The secret number is 7. The program should keep asking until the user guesses correctly, tell them if they are too high or too low, and finally print "Correct!". Explain how your program works.', m: 6, min: 40, k: ['secret = 7|secret=7|= 7::Stores the secret number', 'int(input::Gets the guess as an integer', 'while::Uses a while loop', '!=|not equal::Loop condition guess != secret', 'too low::Prints "Too low"', 'too high::Prints "Too high"', 'if|elif|else::Uses selection inside the loop', 'correct::Prints "Correct!" after the loop', 'input(::Asks again inside the loop'], a: 'secret = 7\nguess = int(input("Guess: "))\nwhile guess != secret:\n    if guess < secret:\n        print("Too low!")\n    else:\n        print("Too high!")\n    guess = int(input("Guess: "))\nprint("Correct!")\nThe while loop keeps running while the guess is not equal to the secret number. Inside the loop, an if/else tells the user whether they are too low or too high and asks again. When they guess correctly the condition is False, so the loop ends and "Correct!" is printed.' },
      { q: 'Explain the difference between sequence, selection and iteration in Python. Give a short code example of each and explain what it does.', m: 6, min: 50, k: ['sequence::Sequence', 'order|one after another|top to bottom::Lines run in order', 'selection::Selection', 'if|elif|else::Uses if/elif/else', 'iteration::Iteration', 'while|loop|repeat*::Uses a loop', 'print(|input(|=::Includes code examples', 'condition|true|false::Mentions conditions'], a: 'Sequence: lines run one after another, e.g. name = input("Name? ") then print("Hi", name). Selection: the program makes a decision with if/elif/else, e.g. if age >= 13: print("Teen") else: print("Child"). Iteration: code repeats with a loop, e.g. count = 1; while count <= 3: print(count); count = count + 1 – which prints 1, 2, 3 and stops when the condition is False.' },
      { q: 'Write a program that asks for a test score (0–100) and prints Grade A for 70+, Grade B for 50–69 and Grade C below 50. Explain why the order of the conditions matters and how you would test it.', m: 6, min: 45, k: ['int(input|float(input::Converts the input', 'if & {>= 70|>=70}::if score >= 70', 'elif & {>= 50|>=50}::elif score >= 50', 'else::else for Grade C', 'grade a & grade b & grade c::All three grades printed', 'order|first|only one|first true::Explains that the first true condition runs', 'test*|70|69|50|49|boundary::Tests boundary values'], a: 'score = int(input("Score: "))\nif score >= 70:\n    print("Grade A")\nelif score >= 50:\n    print("Grade B")\nelse:\n    print("Grade C")\nThe order matters because Python runs only the first true branch – if >= 50 came first, a score of 80 would wrongly get Grade B. I would test boundary values such as 70, 69, 50 and 49, plus normal values like 85 and 20.' }
    ]
  });
})();
