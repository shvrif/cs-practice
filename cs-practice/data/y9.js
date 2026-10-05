/* YEAR 9 question bank – based on the 2026-27 Y9 SOW and unit booklets.
   Format: see data/y7.js */
(function () {
  const U = CS.unit;

  /* ================= UNIT 1: FILE MANAGEMENT, E-SAFETY and EMAIL ================= */
  U({
    year: 9, num: 1, title: 'File Management, E-Safety and Email', icon: '🔐',
    topics: ['SMART goals', 'File management and naming conventions', 'File extensions', 'Risks of social networking', 'Malware types and prevention', 'Phishing and secure passwords', 'Email and digital etiquette'],
    vocab: [
      ['File', 'A single piece of digital content, like a document or image'],
      ['Folder', 'A digital container used to group and organise files'],
      ['File extension', 'The suffix (like .docx or .jpg) that tells the computer how to open a file'],
      ['Backup', 'A copy of a file or folder kept in a separate location for safety'],
      ['Naming convention', 'A consistent system for naming files so they are easy to find'],
      ['Compression', 'Reducing file size by zipping files into an archive'],
      ['Shortcut', 'A link to a file or program, often placed on the desktop'],
      ['Malware', 'Malicious software designed to harm a computer or steal data'],
      ['Virus', 'Malware that attaches to files and spreads when they are opened'],
      ['Worm', 'Malware that spreads across networks by itself without user action'],
      ['Trojan', 'Malware disguised as legitimate software'],
      ['Ransomware', 'Malware that encrypts files and demands payment to unlock them'],
      ['Spyware', 'Malware that secretly collects information about the user'],
      ['Adware', 'Software that displays unwanted adverts'],
      ['Phishing', 'Fake messages designed to trick people into revealing personal information'],
      ['Digital footprint', 'The record of everything a person does online'],
      ['CC', 'Carbon copy – sends a copy of an email to others, visible to all recipients'],
      ['BCC', 'Blind carbon copy – sends a copy without other recipients seeing'],
      ['Attachment', 'A file sent along with an email'],
      ['SMART goal', 'A goal that is Specific, Measurable, Achievable, Realistic and Time-bound']
    ],
    mcq: [
      { q: 'What does the file extension .csv stand for?', o: ['Comma-separated values', 'Computer system version', 'Copy saved video', 'Coloured spreadsheet view'] },
      { q: 'Which file extension is best for sending a report that should look the same on any device and not be easily edited?', o: ['.pdf', '.docx', '.txt', '.xlsx'], j: { k: ['any device|same|layout|format*|look*::Looks the same on any device', 'edit*|chang*|fixed|read-only|read only::Cannot easily be edited'] } },
      { q: 'Which is the BEST file name using good naming conventions?', o: ['2026-10-05_ICT_Homework_v1.docx', 'my homework final FINAL.docx', 'doc1.docx', 'ict hw?.docx'] },
      { q: 'Which date format is recommended for file names?', o: ['YYYY-MM-DD', 'DD/MM/YY', 'Month Day', 'DD.MM'] },
      { q: 'Why should you avoid spaces and special characters like ? / \\ in file names?', o: ['Some systems cannot read them correctly', 'They make files bigger', 'They delete the file', 'They are only for images'] },
      { q: 'Which image file type supports transparency?', o: ['.png', '.jpg', '.bmp', '.txt'] },
      { q: 'Which image format usually has the LARGEST file size?', o: ['.bmp', '.jpg', '.png', '.gif'] },
      { q: 'What happens when you MOVE (cut) a file?', o: ['It is copied to the new location and removed from the original', 'A duplicate is made in both places', 'It is deleted permanently', 'It is renamed'] },
      { q: 'What is a compressed (zipped) file?', o: ['An archive that takes up less space', 'A file that has been deleted', 'A corrupted file', 'A shortcut'] },
      { q: 'Which type of malware spreads across networks WITHOUT any user action?', o: ['Worm', 'Trojan', 'Adware', 'Virus'] },
      { q: 'Which type of malware encrypts files and demands payment?', o: ['Ransomware', 'Spyware', 'Adware', 'Worm'] },
      { q: 'Which type of malware pretends to be legitimate software?', o: ['Trojan', 'Worm', 'Ransomware', 'Adware'] },
      { q: 'Which is the BEST way to protect against ransomware?', o: ['Keep regular backups stored separately', 'Turn off the screen', 'Use a shorter password', 'Share files with everyone'] },
      { q: 'Which is a risk of social networking?', o: ['Strangers using fake profiles to gain trust', 'Faster internet', 'Better battery life', 'More storage space'] },
      { q: 'Posting your live location publicly is an example of…', o: ['A privacy risk', 'Good digital etiquette', 'Encryption', 'A strong password'] },
      { q: 'Which email field hides recipients from each other?', o: ['BCC', 'CC', 'To', 'Subject'] },
      { q: 'Which is good email etiquette?', o: ['Use a clear subject line and polite greeting', 'Write everything in CAPITALS', 'Leave the subject blank', 'Reply All to every message'] },
      { q: 'Writing an email in ALL CAPITALS is seen as…', o: ['Shouting', 'Professional', 'Polite', 'Secure'] },
      { q: 'What does the "S" in SMART goals stand for?', o: ['Specific', 'Simple', 'Safe', 'Smart'] },
      { q: 'What does the "T" in SMART goals stand for?', o: ['Time-bound', 'Tidy', 'Tested', 'Typical'] },
      { q: 'Which is a sign of a phishing email?', o: ['A generic greeting like "Dear Customer" and an urgent request', 'It is from your teacher\'s school address', 'It has no links at all', 'It is about a lesson you are in'] },
      { q: 'Where do deleted files go before they are permanently removed?', o: ['The Recycle Bin', 'The Downloads folder', 'The Desktop', 'The cloud'] },
      { q: 'Which window shows a file\'s type, size, author and date modified?', o: ['Properties', 'Recycle Bin', 'Print preview', 'Task Manager'] }
    ],
    tf: [
      { q: 'A backup should be kept in a separate location from the original.', a: true, j: ['lost|damage*|delete*|fail*|stolen|fire::If the original is lost/damaged', 'separate|different|cloud|usb|elsewhere::A separate copy survives'] },
      { q: 'Using spaces and special characters in file names is recommended.', a: false, x: 'Use underscores or hyphens instead – some systems cannot read special characters.', j: ['underscore*|hyphen*|_|-::Use underscores/hyphens', 'system*|read|error*|problem*|can\'t open|cannot open::Some systems cannot read them'] },
      { q: 'A worm needs a user to open a file before it spreads.', a: false, x: 'Worms spread by themselves across networks – viruses need a user to open an infected file.' },
      { q: 'Ransomware encrypts your files and demands payment.', a: true },
      { q: 'Adware displays unwanted adverts.', a: true },
      { q: 'BCC recipients can see each other\'s email addresses.', a: false, x: 'BCC hides recipients from each other.', j: ['hidden|hide*|blind|can\'t see|cannot see|not see|private::BCC hides recipients', 'cc & {visible|see|show*}|privacy::CC shows everyone'] },
      { q: 'Oversharing on social media can lead to identity theft.', a: true },
      { q: 'A .gif file can be animated.', a: true },
      { q: 'Compressing a file makes it take up more space.', a: false },
      { q: 'SMART goals should be Measurable.', a: true },
      { q: 'You should reply to a phishing email to tell them you know it\'s a scam.', a: false, x: 'Do not reply – report and delete it.' },
      { q: 'Keeping software updated helps protect against malware.', a: true },
      { q: 'A shortcut is a link to a file or program.', a: true },
      { q: 'Online predators may pretend to be teenagers.', a: true }
    ],
    cloze: [
      { t: 'File [management] is the process of organising and storing files on a [computer]. Create [folders] to group related files. Give files clear [names] so they can be found quickly. [Save] your work regularly to avoid losing data, and [delete] unwanted files to free up space.', d: ['print', 'encrypt'] },
      { t: '[Malware] is malicious software. A [virus] attaches to files and spreads when they are opened. A [worm] spreads across networks by itself. A [Trojan|trojan horse] is disguised as legitimate software. [Ransomware] encrypts files and demands payment, and [spyware] secretly collects information.', d: ['firewall', 'browser'] },
      { t: 'When writing an email, the [To] field is for the main recipient. [CC] sends a copy that everyone can see, and [BCC] sends a hidden copy. A clear [subject] line describes the email. A file sent with an email is an [attachment]. Good digital [etiquette] means being polite and not writing in capitals.', d: ['spam', 'draft'] },
      { t: 'The risks of social networking include [privacy] risks from oversharing, [cyberbullying] through hurtful messages, and online [predators] who use [fake] profiles. To stay safe, set accounts to [private], and [report] and block anyone who makes you uncomfortable.', d: ['bandwidth', 'pixels'] }
    ],
    short: [
      { q: 'Give three rules for good file naming conventions.', m: 3, k: ['consisten*|same format|stick to::Be consistent', 'descript*|describe*|meaning*|clear|explain*::Be descriptive', 'short|concise|unnecessary::Keep it short but clear', 'space*|underscore*|_|hyphen*::Avoid spaces – use underscores/hyphens', 'special character*|symbol*|\\?|/::Avoid special characters', 'date|yyyy|iso::Use a standard date format (YYYY-MM-DD)', 'version|v1|v2::Use version numbers'], a: 'Be consistent, be descriptive so the name explains the content, avoid spaces and special characters (use underscores), and use the YYYY-MM-DD date format.' },
      { q: 'Explain the difference between copying and moving a file.', m: 2, k: ['cop* & {duplicate|both|original stays|two}::Copying creates a duplicate – original stays', 'mov* & {removed|deleted from|no longer|original location|cut}::Moving removes it from the original location'], a: 'Copying creates a duplicate so the file exists in both places. Moving copies the file to the new location and deletes it from the original location.' },
      { q: 'You want to email a finished report to your teacher so they can view it on any device without changing it. Which file format should you use and why?', m: 2, k: ['pdf::PDF', 'any device|same|layout|format|view|chang*|edit*|fixed::It keeps its layout on any device and cannot easily be edited'], a: 'PDF, because it looks the same on any device and cannot easily be edited.' },
      { q: 'Describe the difference between a virus and a worm.', m: 2, k: ['virus & {attach*|file*|user|open*|program}::A virus attaches to files and needs the user to open them', 'worm & {itself|own|network*|without|automatic*}::A worm spreads by itself across networks'], a: 'A virus attaches itself to files and spreads when a user opens or shares them. A worm spreads by itself across networks without any user action.' },
      { q: 'Give three ways to prevent malware infections.', m: 3, k: ['antivirus|anti-virus::Use antivirus', 'updat*|patch*::Keep software updated', 'firewall::Use a firewall', 'attachment*|link*|unknown|suspicious::Don\'t open unknown attachments/links', 'download* & {trust*|official|safe}|trusted source*::Only download from trusted sources', 'backup*::Keep backups', 'password*::Strong passwords'], a: 'Install and update antivirus software, keep the operating system updated, and do not open attachments or links from unknown senders.' },
      { q: 'Explain three risks of social networking.', m: 3, k: ['privacy|personal information|oversharing|location|address::Privacy risks from oversharing', 'cyberbully*|bully*|hurtful|rumour*::Cyberbullying', 'predator*|fake profile*|stranger*|groom*|pretend*::Online predators / fake profiles', 'identity theft|scam*|phishing|hack*::Identity theft/scams', 'footprint|employer*|permanent::Damaged digital footprint'], a: 'Privacy risks – personal information like your address or live location can be seen by strangers. Cyberbullying – people can send hurtful messages at any time. Online predators – people use fake profiles to gain trust and exploit young people.' },
      { q: 'Explain the difference between CC and BCC.', m: 2, k: ['cc & {copy|see|visible|everyone}::CC sends a copy that all can see', 'bcc & {hidden|hide*|blind|can\'t see|cannot see|not see}::BCC recipients are hidden'], a: 'CC sends a copy of the email and all recipients can see who else received it. BCC sends a copy but hides that recipient\'s address from everyone else.' },
      { q: 'What do the letters in SMART stand for?', m: 4, k: ['specific::Specific', 'measurable::Measurable', 'achievable|attainable|agreed::Achievable', 'realistic|relevant::Realistic', 'time|timely|time-bound::Time-bound'], a: 'Specific, Measurable, Achievable, Realistic and Time-bound.' },
      { q: 'Describe four features of a professional email.', m: 4, k: ['subject::Clear subject line', 'greeting|dear|hello|salutation::Polite greeting', 'polite|formal|professional|tone|please|thank*::Polite, formal language', 'capital*|caps|shout*::No all capitals', 'spell*|grammar|check|proofread::Check spelling and grammar', 'sign*|signature|name|regards::Sign off with name', 'short|concise|clear|paragraph*::Clear and concise', 'attachment*::Mention attachments'], a: 'A clear subject line, a polite greeting (e.g. "Dear Mr Sharif"), formal language with correct spelling and no capital letters for shouting, and a sign-off with your name.' }
    ],
    long: [
      { q: 'You are starting a 4-week group project with three classmates on "Smart Cities in Qatar". Design a folder structure and file naming system that makes sure no work is lost and everyone can find the latest version. Explain your choices.', m: 6, min: 60, k: ['main folder|project folder|smart cities|parent::Main project folder', 'subfolder*|research|images|drafts|final|presentation::Subfolders by purpose', 'descript*|clear|meaning*::Descriptive names', 'date|yyyy|2026::Date format YYYY-MM-DD', 'version|v1|v2|v3::Version numbers', 'underscore*|_|no space*|hyphen*::No spaces/special characters', 'shared|onedrive|cloud|teams|drive::Shared/cloud location everyone can access', 'backup*|back up|copy::Backups', 'save* regular*|autosave::Save regularly', 'because|so that|this means::Explains choices'], a: 'I would create a main folder called "Smart_Cities_Qatar" on a shared OneDrive/Teams folder so all four members can access it. Inside I would make subfolders: 01_Research, 02_Images, 03_Drafts, 04_Presentation and 05_Final. Files would be named with the date, topic, author and version, e.g. 2026-10-05_Transport_Ali_v2.docx, using underscores instead of spaces. Version numbers show which file is newest so nobody overwrites another person\'s work. We would save regularly and keep a backup copy on a USB each week so no work is lost if a file is deleted.' },
      { q: 'Describe five different types of malware. For each, explain what it does and one way to protect against it.', m: 6, min: 60, k: ['virus::Virus', 'worm::Worm', 'trojan::Trojan', 'ransomware::Ransomware', 'spyware::Spyware', 'adware::Adware', 'antivirus|anti-virus::Antivirus', 'updat*|patch*::Updates', 'backup*::Backups', 'firewall|attachment*|download*|trusted::Firewall / careful downloads'], a: 'A virus attaches to files and spreads when they are opened – use antivirus software. A worm spreads across networks by itself – keep the OS updated and use a firewall. A Trojan is disguised as legitimate software – only download from trusted sources. Ransomware encrypts files and demands payment – keep regular backups stored separately. Spyware secretly records keystrokes and data – use anti-spyware and avoid suspicious links. Adware shows unwanted adverts – avoid free downloads from unknown sites.' },
      { q: 'Explain the risks young people face on social networking sites and describe how they should respond to each risk.', m: 6, min: 60, k: ['privacy|personal information|oversharing|location::Privacy risks', 'private|privacy setting*::Use privacy settings', 'cyberbully*|bully*::Cyberbullying', 'block*|report*|screenshot|evidence::Block/report/keep evidence', 'predator*|fake profile*|stranger*::Predators/fake profiles', 'never meet|don\'t meet|do not meet|only friends|know in real life::Only connect with real friends/never meet', 'phishing|scam*|identity theft::Scams/identity theft', 'adult|parent|teacher::Tell a trusted adult', 'footprint|permanent|think before::Think before posting'], a: 'Privacy risks: oversharing personal information or live location lets strangers find you – set accounts to private and never post your address. Cyberbullying: hurtful messages can reach you any time – don\'t reply, screenshot the evidence, block and report the bully, and tell a trusted adult. Predators and fake profiles: adults may pretend to be teenagers to gain trust – only accept friends you know in real life and never meet online contacts. Scams and phishing links can lead to identity theft – don\'t click suspicious links. Always think before posting because your digital footprint is permanent.' }
    ]
  });

  /* ================= UNIT 2: ENTERPRISE ================= */
  U({
    year: 9, num: 2, title: 'Enterprise', icon: '💼',
    topics: ['Enterprise and entrepreneurs', 'Stakeholders', 'The enterprise process', 'Enterprise skills', 'Aims and SMART objectives', 'Types of ownership', 'Functional areas', 'Revenue, cost and profit'],
    vocab: [
      ['Enterprise', 'A willingness to take risks, show initiative and undertake new ventures'],
      ['Entrepreneur', 'A person who owns and runs their own business and takes risks'],
      ['Enterprising', 'Coming up with ideas and being able to do things independently'],
      ['Stakeholder', 'Any person or group affected by, or interested in, a business'],
      ['Internal stakeholder', 'A stakeholder inside the business, e.g. employees or owners'],
      ['External stakeholder', 'A stakeholder outside the business, e.g. customers or suppliers'],
      ['Aim', 'A long-term goal a business wants to achieve'],
      ['Objective', 'A medium-term target that acts as a stepping stone to achieving an aim'],
      ['Profit', 'The money left over when costs are taken away from revenue'],
      ['Revenue', 'The total money coming into a business from sales (price × quantity)'],
      ['Cost', 'Money a business spends to operate, e.g. materials and wages'],
      ['Sole trader', 'A business owned and run by one person'],
      ['Partnership', 'A business owned by two or more people who share the profits and risks'],
      ['Limited company', 'A business owned by shareholders, with limited liability'],
      ['Resilience', 'Learning from mistakes and keeping going when things go wrong'],
      ['Break-even', 'When revenue equals costs, so there is no profit or loss'],
      ['Marketing', 'The functional area that promotes products and finds out what customers want'],
      ['Finance', 'The functional area that manages money, budgets and accounts']
    ],
    gen: [{ g: 'profit', t: ['mcq', 'short'], m: 2, w: 5 }],
    mcq: [
      { q: 'What is an entrepreneur?', o: ['A person who owns and runs their own business and takes risks', 'A customer of a business', 'A type of bank account', 'A government worker'] },
      { q: 'Which is an INTERNAL stakeholder?', o: ['Employees', 'Customers', 'Suppliers', 'The local community'] },
      { q: 'Which is an EXTERNAL stakeholder?', o: ['Suppliers', 'Owners', 'Managers', 'Employees'] },
      { q: 'What do customers mainly want from a business?', o: ['Quality products at a fair price', 'Job security', 'Payment for supplies', 'Profit and growth'] },
      { q: 'What do suppliers mainly want from a business?', o: ['To be paid on time', 'Cheap products', 'Job security', 'A safe community'] },
      { q: 'What do owners mainly want?', o: ['Profit and growth', 'Low prices', 'Fair pay', 'Quiet streets'] },
      { q: 'How is profit calculated?', o: ['Revenue − costs', 'Revenue + costs', 'Price × costs', 'Costs − revenue'] },
      { q: 'How is revenue calculated?', o: ['Price × quantity sold', 'Profit − costs', 'Costs × quantity', 'Price − costs'] },
      { q: 'What is break-even?', o: ['When revenue equals costs', 'When profit is at its highest', 'When a business closes', 'When costs are zero'] },
      { q: 'Which type of business is owned by ONE person?', o: ['Sole trader', 'Partnership', 'Limited company', 'Franchise'] },
      { q: 'Which is a DISADVANTAGE of being a sole trader?', o: ['Unlimited liability – personal belongings could be at risk', 'Keeps all the profit', 'Makes all the decisions', 'Easy to set up'], j: { k: ['unlimited liability|personal*|house|belongings|own money::Unlimited liability – personal assets at risk', 'debt*|lose|loss*|pay back::If the business has debts'] } },
      { q: 'Which is an ADVANTAGE of a partnership?', o: ['Shared workload, skills and money', 'The owner keeps all profits', 'No disagreements ever', 'Unlimited profit'] },
      { q: 'Which is an advantage of a limited company?', o: ['Limited liability – owners only lose what they invested', 'Only one owner makes decisions', 'No paperwork needed', 'Profits never have to be shared'] },
      { q: 'What is the difference between an aim and an objective?', o: ['An aim is a long-term goal; objectives are steps to achieve it', 'They are the same thing', 'An objective is always financial', 'An aim is a daily task'] },
      { q: 'Which is a FINANCIAL aim?', o: ['Making a profit', 'Being environmentally friendly', 'Satisfying customers', 'Providing a social service'] },
      { q: 'Which is a SOCIAL or ETHICAL aim?', o: ['Being environmentally friendly', 'Breaking even', 'Maximising sales', 'Surviving'] },
      { q: 'Which objective is SMART?', o: ['Increase sales by 10% by June 2027', 'Sell more stuff', 'Be the best', 'Make lots of money one day'] },
      { q: 'Which enterprise skill means learning from mistakes and keeping going?', o: ['Resilience', 'Creativity', 'Communication', 'Risk-taking'] },
      { q: 'Which enterprise skill means using your imagination to come up with new ideas?', o: ['Creativity', 'Adaptability', 'Resilience', 'Finance'] },
      { q: 'Which enterprise skill means reacting well when unexpected things happen?', o: ['Adaptability', 'Creativity', 'Marketing', 'Revenue'] },
      { q: 'Which functional area promotes products and researches what customers want?', o: ['Marketing', 'Finance', 'Operations', 'Human resources'] },
      { q: 'Which functional area manages money, budgets and accounts?', o: ['Finance', 'Marketing', 'Operations', 'Human resources'] },
      { q: 'Which functional area makes the product or delivers the service?', o: ['Operations', 'Finance', 'Marketing', 'Human resources'] },
      { q: 'Which functional area recruits and trains staff?', o: ['Human resources', 'Finance', 'Operations', 'Marketing'] },
      { q: 'Running a snack stall at school to raise money is an example of…', o: ['Being enterprising', 'A stakeholder', 'A limited company', 'Break-even'] }
    ],
    tf: [
      { q: 'An entrepreneur takes risks to start and run a business.', a: true },
      { q: 'Customers are internal stakeholders.', a: false, x: 'Customers are external – they are outside the business.', j: ['external|outside::Customers are external stakeholders', 'employee*|owner*|manager*|inside::Internal stakeholders are inside, e.g. employees'] },
      { q: 'Profit = revenue − costs.', a: true },
      { q: 'A sole trader shares the profits with partners.', a: false, x: 'A sole trader keeps all the profit; partners share profits in a partnership.' },
      { q: 'Limited liability means owners can only lose the money they invested.', a: true, j: ['invest*|put in|only lose|limited::Owners only lose what they invested', 'personal|house|belongings|safe|protect*::Personal belongings are protected'] },
      { q: 'An aim is a short-term, day-to-day task.', a: false, x: 'An aim is a long-term goal. Objectives are medium-term steps.' },
      { q: 'SMART objectives should have a deadline.', a: true },
      { q: 'If costs are greater than revenue, the business makes a loss.', a: true },
      { q: 'Suppliers want to be paid for the goods they provide.', a: true },
      { q: 'Being environmentally friendly is a financial aim.', a: false, x: 'It is a social/ethical (non-financial) aim.' },
      { q: 'Resilience means giving up when things go wrong.', a: false },
      { q: 'The finance department manages the business\'s money.', a: true },
      { q: 'Break-even means revenue equals costs.', a: true },
      { q: 'A partnership can suffer from disagreements between owners.', a: true }
    ],
    cloze: [
      { t: '[Enterprise] is a willingness to take risks, show initiative and start new ventures. An [entrepreneur] is a person who owns and runs their own business. [Stakeholders] are people affected by a business. [Internal] stakeholders, such as employees, are inside the business. [External] stakeholders, such as [customers] and suppliers, are outside it.', d: ['revenue', 'partnership'] },
      { t: 'An [aim] is a long-term goal. [Objectives] are medium-term targets that help achieve it. Objectives should be [SMART]: Specific, [Measurable], Achievable, Realistic and [Time-bound|timely|time bound]. Making a profit is a [financial] aim.', d: ['ethical', 'resilience'] },
      { t: '[Revenue] is the money coming in from sales and equals price × [quantity]. [Profit] is revenue minus [costs]. When revenue equals costs the business [breaks] even. If costs are higher than revenue the business makes a [loss].', d: ['stakeholder', 'aim'] },
      { t: 'A [sole] trader is owned by one person. A [partnership] is owned by two or more people. A [limited] company has limited [liability], meaning owners only lose what they invested. Businesses are organised into functional areas: [marketing], finance, operations and human [resources].', d: ['customers', 'revenue'] }
    ],
    short: [
      { q: 'Explain the difference between internal and external stakeholders. Give an example of each.', m: 4, k: ['internal & {inside|within|part of}::Internal – inside the business', 'employee*|owner*|manager*|staff|worker*::Internal example', 'external & {outside}::External – outside the business', 'customer*|supplier*|community|government|bank*::External example'], a: 'Internal stakeholders are inside the business, e.g. employees. External stakeholders are outside the business but affected by it, e.g. customers.' },
      { q: 'State what each stakeholder wants: employees, customers, suppliers.', m: 3, k: ['job security|fair pay|pay|wage*|salary|conditions::Employees – job security/fair pay', 'quality|price|good service|value::Customers – quality/value', 'paid|payment|on time|orders::Suppliers – to be paid'], a: 'Employees want job security and fair pay. Customers want quality products at a fair price. Suppliers want to be paid on time.' },
      { q: 'Explain the difference between a business aim and a business objective.', m: 2, k: ['aim & {long-term|long term|goal|overall}::Aim – long-term goal', 'objective* & {medium|step*|target*|plan|stepping stone*|achieve}::Objective – medium-term steps to achieve the aim'], a: 'An aim is the long-term goal of the business. Objectives are medium-term targets that act as stepping stones to achieve the aim.' },
      { q: 'Marcus has a mobile car-cleaning business. State one aim and write one SMART objective for it.', m: 3, k: ['aim|profit|grow*|expand*|survive|customer*::A suitable aim', '\\d+|%|number|customers a week::Measurable (a number)', 'by |month*|week*|year|june|december|2027|deadline::Time-bound (a deadline)'], a: 'Aim: to grow the business. SMART objective: to increase the number of cars cleaned from 20 to 30 per week by December 2027.' },
      { q: 'Give one advantage and one disadvantage of being a sole trader.', m: 2, k: ['keep* all|all the profit|own decisions|decide|control|easy to set up|simple::Advantage: keeps all profit/makes decisions', 'unlimited liability|personal|risk|long hours|alone|no one to share|ill|limited money|finance::Disadvantage: unlimited liability/works alone'], a: 'Advantage: the owner keeps all the profit and makes all the decisions. Disadvantage: unlimited liability, so personal belongings could be sold to pay debts.' },
      { q: 'Describe three enterprise skills and explain why an entrepreneur needs each one.', m: 3, k: ['creativ*::Creativity – new ideas', 'communicat*::Communication – sharing ideas/customers', 'adapt*::Adaptability – coping with change', 'resilien*::Resilience – keep going after mistakes', 'risk*::Risk-taking', 'team*|leader*|problem solv*|organis*|confiden*::Other valid skill'], a: 'Creativity – to come up with new product ideas that stand out. Communication – to explain ideas to customers and investors. Resilience – to learn from mistakes and keep going when things go wrong.' },
      { q: 'Name the four functional areas of a business and state what one of them does.', m: 4, k: ['marketing::Marketing', 'finance::Finance', 'operations|production::Operations', 'human resources|hr::Human resources'], a: 'Marketing, finance, operations and human resources. Finance manages the business\'s money, budgets and accounts.' },
      { q: 'Explain the difference between revenue and profit.', m: 2, k: ['revenue & {money in|sales|price|income|total money}::Revenue – total money from sales', 'profit & {cost*|minus|subtract*|left|after}::Profit – revenue minus costs'], a: 'Revenue is the total money coming in from sales (price × quantity). Profit is what is left after costs have been taken away from revenue.' }
    ],
    long: [
      { q: 'Compare the three types of business ownership: sole trader, partnership and limited company. Discuss the advantages and disadvantages of each and recommend one for a student starting a small cupcake business.', m: 6, min: 65, k: ['sole trader::Sole trader', 'one person|keep* all|own decisions|easy to set up::Sole trader advantages', 'unlimited liability::Unlimited liability', 'partnership::Partnership', 'share*|skill*|workload|money|ideas::Partnership advantages (shared skills/money)', 'disagree*|argu*|conflict|share profit*::Partnership disadvantages', 'limited company|ltd::Limited company', 'limited liability|only lose|invest*::Limited liability', 'paperwork|expensive|complex|shareholder*|share profit*::Limited company disadvantages', 'recommend*|best|should|choose::Justified recommendation'], a: 'A sole trader is owned by one person who keeps all the profit and makes all decisions, and it is easy to set up, but has unlimited liability and must do all the work alone. A partnership has two or more owners who share money, skills and workload, but partners may disagree and must share profits, and usually still have unlimited liability. A limited company has limited liability, so owners only lose what they invested, and can raise more money from shareholders, but it is expensive and complicated to set up and profits are shared. For a small cupcake business a sole trader is best because it is cheap and simple and the risks are small.' },
      { q: 'Explain the stages of the enterprise process and the skills an entrepreneur needs at each stage. Use an example of a school enterprise.', m: 6, min: 60, k: ['idea*|brainstorm*::Generating ideas', 'research|survey*|need*|want*|customer*::Market research – needs and wants', 'plan*|action plan|budget|smart::Planning / SMART action plan', 'carry out|run|launch|make|sell|do::Carrying out the enterprise', 'review*|evaluat*|reflect*|improv*::Reviewing/evaluating', 'creativ*::Creativity', 'communicat*|team*::Communication/teamwork', 'resilien*|adapt*|risk*::Resilience/adaptability/risk-taking', 'stall|bake sale|school|tutoring|t-shirt|snack|event::School enterprise example'], a: 'First, generate ideas – creativity is needed, e.g. a snack stall at lunchtime. Next, research what customers need and want with a survey – communication skills help. Then plan using a SMART action plan, a budget and roles – organisation and teamwork. Then carry out the enterprise: buy stock, advertise and sell – adaptability is needed if something runs out. Finally, review and evaluate what went well and what to improve – resilience means learning from mistakes for next time.' },
      { q: 'A group of students runs a charity bake sale. They sell 80 cakes at QAR 5 each and their costs are QAR 150. Calculate their revenue and profit, explain what these terms mean, and suggest two ways they could increase their profit.', m: 6, min: 50, k: ['400::Revenue = 400', '80 × 5|80 x 5|80\\*5|5 × 80|5 x 80|price × quantity|price x quantity::Shows revenue calculation', '250::Profit = 250', '400 - 150|400 − 150|revenue - cost*|revenue − cost*|minus::Shows profit calculation', 'revenue & {sales|money in|income}::Explains revenue', 'profit & {left|after|minus|cost*}::Explains profit', 'price|charge more::Raise the price', 'cost*|cheaper|supplier*|ingredients|donat*::Reduce costs', 'sell more|more cakes|advertis*|promot*|marketing::Sell more / advertise'], a: 'Revenue = price × quantity = 5 × 80 = QAR 400. Profit = revenue − costs = 400 − 150 = QAR 250. Revenue is the total money coming in from sales; profit is the money left after all costs are paid. To increase profit they could reduce costs by buying ingredients in bulk or asking for donations, raise the price slightly to QAR 6, or sell more cakes by advertising around school with posters.' }
    ]
  });

  /* ================= UNIT 3: PRACTICAL SOFTWARE SKILLS ================= */
  U({
    year: 9, num: 3, title: 'Practical: Files, Graphics, Word and PowerPoint', icon: '🎨',
    topics: ['Practical file management', 'MS Paint tools', 'Logo design', 'Bitmap vs vector', 'Word processing (MS Word)', 'Presentations (PowerPoint)'],
    vocab: [
      ['File properties', 'A window showing a file\'s type, size, author and date modified'],
      ['Read-only', 'A file setting that stops changes being saved'],
      ['Crop', 'Cutting away unwanted parts of an image'],
      ['Resize', 'Changing the dimensions of an image'],
      ['Rotate', 'Turning an image around a point'],
      ['Fill tool', 'A tool that colours an enclosed area in one click'],
      ['Logo', 'A symbol that communicates a message about a company minimally and instantly'],
      ['Scalable', 'Still works when made bigger or smaller'],
      ['Raster (bitmap)', 'An image made of pixels'],
      ['Vector', 'An image made of shapes and paths that can be scaled without losing quality'],
      ['Ribbon', 'The toolbar at the top of Office programs containing tabs and commands'],
      ['Template', 'A pre-designed document used as a starting point'],
      ['Alignment', 'How text lines up: left, centre, right or justified'],
      ['Orientation', 'Whether a page is portrait (tall) or landscape (wide)'],
      ['Header', 'Text that appears at the top of every page'],
      ['Transition', 'An effect when moving from one slide to the next'],
      ['Animation', 'An effect applied to an object on a slide']
    ],
    mcq: [
      { q: 'Which Paint tool colours an enclosed area with one click?', o: ['Fill (paint bucket)', 'Eraser', 'Crop', 'Text'] },
      { q: 'Which tool removes the unwanted edges of an image?', o: ['Crop', 'Rotate', 'Fill', 'Brush'] },
      { q: 'Which is a key feature of a good logo?', o: ['It is easy to reproduce at any size', 'It is very detailed and complex', 'It uses as many colours as possible', 'It uses several different fonts'] },
      { q: 'An effective logo should still work…', o: ['In black and white', 'Only in full colour', 'Only on a website', 'Only when very large'] },
      { q: 'Which design principle is most important for a memorable logo?', o: ['Simplicity', 'Intricacy', 'Depth', 'Many colours'] },
      { q: 'What does "vector graphics" mean in logo design?', o: ['Graphics made from mathematical shapes that resize without losing quality', 'Graphics made of pixels', 'Graphics with lots of gradients', 'Photographs'] },
      { q: 'MS Paint mainly creates which type of image?', o: ['Bitmap (raster)', 'Vector', '3D models', 'Spreadsheets'] },
      { q: 'What is the smallest element of a bitmap image?', o: ['Pixel', 'Vector', 'Byte', 'Layer'] },
      { q: 'In Word, which orientation is tall and narrow?', o: ['Portrait', 'Landscape', 'Justified', 'Centred'] },
      { q: 'Which alignment makes text line up evenly on BOTH the left and right edges?', o: ['Justify', 'Left', 'Centre', 'Right'] },
      { q: 'Which Word tab would you use to add a table or picture?', o: ['Insert', 'Home', 'Review', 'View'] },
      { q: 'Which Word tab contains font, bold and alignment tools?', o: ['Home', 'Insert', 'Layout', 'References'] },
      { q: 'What is a template?', o: ['A pre-designed document used as a starting point', 'A deleted file', 'A type of image', 'A spelling error'] },
      { q: 'Text that appears at the top of every page is called a…', o: ['Header', 'Footer', 'Footnote', 'Margin'] },
      { q: 'Which PowerPoint feature adds an effect between slides?', o: ['Transition', 'Animation', 'Theme', 'Slide Master'] },
      { q: 'Which setting stops changes being saved to a file?', o: ['Read-only', 'Hidden', 'Compressed', 'Archived'] },
      { q: 'How do you see the file extensions of files in File Explorer?', o: ['View → tick "File name extensions"', 'Right-click → Delete', 'Ctrl + P', 'Insert → Picture'] },
      { q: 'Why should a word-processed poster highlight key points for its target audience?', o: ['So the audience quickly understands the main message', 'To make the file bigger', 'To use more ink', 'So no one reads it'] },
      { q: 'Which keyboard shortcut makes selected text bold?', o: ['Ctrl + B', 'Ctrl + I', 'Ctrl + U', 'Ctrl + P'] },
      { q: 'Which is the most suitable software to design a simple logo in school?', o: ['Graphics software (e.g. MS Paint)', 'A spreadsheet', 'A database', 'A web browser'] }
    ],
    tf: [
      { q: 'A good logo should be memorable and easy to describe.', a: true },
      { q: 'A logo only needs to work in full colour.', a: false, x: 'An effective logo still works in black and white, e.g. on a photocopy.', j: ['black and white|without colour|photocop*|grey*::It must work in black and white', 'print*|fax|newspaper|copy::e.g. when photocopied or printed'] },
      { q: 'Bitmap images are made of pixels.', a: true },
      { q: 'Vector images lose quality when enlarged.', a: false, x: 'Bitmaps lose quality; vectors scale without losing quality.' },
      { q: 'Cropping removes unwanted parts of an image.', a: true },
      { q: 'Landscape orientation is wider than it is tall.', a: true },
      { q: 'A template is a pre-designed starting point for a document.', a: true },
      { q: 'A header appears at the bottom of every page.', a: false, x: 'That is a footer. A header appears at the top.' },
      { q: 'The Ribbon contains tabs such as Home, Insert and Layout.', a: true },
      { q: 'Animations are effects applied to objects on a slide.', a: true },
      { q: 'A read-only file can be edited and saved normally.', a: false },
      { q: 'A scalable logo works on both a business card and a large T-shirt.', a: true }
    ],
    cloze: [
      { t: 'A [logo] is a symbol that communicates a message about a company quickly. An effective logo is [describable], [memorable], effective without [colour], [scalable] so it works at any size, and [relevant] to the business.', d: ['complex', 'pixelated'] },
      { t: 'In MS Paint you can draw [shapes], use the [brush] to paint freehand, and use the [fill] tool to colour an area. You can add [text] and change its colour and size. To remove unwanted edges, [crop] the image. You can also [resize] and [rotate] it.', d: ['compile', 'encrypt'] },
      { t: 'In Microsoft Word, the [Ribbon] at the top contains tabs. The [Home] tab has fonts and alignment. The [Insert] tab adds pictures and tables. Text can be aligned left, centre, right or [justified]. A page can be [portrait] or landscape, which is called its [orientation].', d: ['slide', 'query'] }
    ],
    short: [
      { q: 'List four features of an effective logo.', m: 4, k: ['describ*::Describable', 'memorab*|remember*::Memorable', 'without colour|black and white|no colour::Effective without colour', 'scal*|any size::Scalable', 'relevan*::Relevant', 'simple|simplicity::Simple'], a: 'Describable, memorable, effective without colour, scalable and relevant to the business.' },
      { q: 'Explain why logos are often created as vector graphics.', m: 2, k: ['resiz*|scal*|enlarg*|any size|without losing quality::Can be resized without losing quality', 'business card*|billboard*|t-shirt*|website|different size*|poster*::Logos are used at many sizes'], a: 'Vector graphics can be resized without losing quality, and logos need to be used at many sizes, from business cards to billboards.' },
      { q: 'Describe three tools in MS Paint and what each is used for.', m: 3, k: ['fill|bucket::Fill – colours an enclosed area', 'brush|pencil::Brush/pencil – freehand drawing', 'shape*::Shapes – draw shapes', 'text::Text – add words', 'crop::Crop – remove unwanted parts', 'resize|rotate::Resize/rotate', 'eraser|rubber::Eraser', 'colour picker|select*::Select/colour picker'], a: 'Fill tool – colours an enclosed area in one click. Brush – paints freehand strokes. Crop – removes unwanted parts of the image.' },
      { q: 'Explain the difference between portrait and landscape orientation, and give a use for each.', m: 4, k: ['portrait & {tall|taller|vertical|upright}::Portrait is tall', 'letter*|essay*|report*|cv|document*|form*::Portrait use', 'landscape & {wide|wider|horizontal}::Landscape is wide', 'poster*|certificate*|table*|chart*|banner*|slide*|brochure::Landscape use'], a: 'Portrait is taller than it is wide – good for letters and reports. Landscape is wider than it is tall – good for certificates and wide tables.' },
      { q: 'Give three ways to format a Word document so that key points stand out to a target audience.', m: 3, k: ['bold|italic|underline::Bold/italic/underline', 'heading*|title*|font size|size::Headings/larger font size', 'colour*|highlight*::Colour/highlighting', 'bullet*|list*::Bullet points', 'image*|picture*::Images', 'border*|box*|shading::Borders/text boxes', 'align*|centre|center::Alignment'], a: 'Use bold headings with a larger font size, bullet points to break up information, and colour or highlighting for important words.' },
      { q: 'What is a template and why is it useful?', m: 2, k: ['pre-designed|pre-made|ready-made|starting point|layout|design*::A pre-designed starting point', 'time|quick*|consisten*|professional::Saves time/consistent professional look'], a: 'A template is a pre-designed document with a layout already set up. It saves time and gives a consistent, professional look.' },
      { q: 'Explain the difference between a transition and an animation in PowerPoint.', m: 2, k: ['transition & {between|next|slide to slide|moving|move to}::Transition – between slides', 'animation & {object*|text|image|on a slide|element*}::Animation – objects on a slide'], a: 'A transition is an effect when moving from one slide to the next. An animation is an effect applied to an object, such as text or an image, on a slide.' },
      { q: 'Give two ways you can make a file read-only or check its details using File Explorer.', m: 2, k: ['properties::Right-click → Properties', 'read-only|read only|tick|attribute*::Tick the Read-only attribute', 'size|author|type|date::See size/author/type/date'], a: 'Right-click the file → Properties, then tick the Read-only attribute. The Properties window also shows its size, type, author and date modified.' }
    ],
    long: [
      { q: 'You have been asked to design a logo for a new school café. Explain the features your logo should have, which software and image type you would use, and the tools you would use to create it.', m: 6, min: 60, k: ['simple|simplicity::Simple design', 'memorab*|describ*::Memorable/describable', 'black and white|without colour::Works without colour', 'scal*|any size|resiz*::Scalable', 'relevan*|coffee|café|cafe|food|cup::Relevant to a café', 'vector|bitmap|pixel*|paint::Discusses image type/software', 'shape*|brush|fill|text|crop|rotate|resize::Named tools', 'colour*|font*|audience|students::Colour/font choices for audience'], a: 'The logo should be simple and memorable, e.g. a coffee cup with steam shaped like a book to link to school, so it is relevant and easy to describe. It must still work in black and white for photocopied menus, and be scalable for a small loyalty card and a large sign. Ideally it would be a vector graphic so it resizes without losing quality, but in MS Paint (bitmap) I would create it large. I would use the shapes tool for the cup, the fill tool for colour, the text tool for the café name in one clear font, and crop and resize to finish it.' },
      { q: 'Explain how good file management skills help when completing a practical ICT project. Describe the folder structure you would use and the file operations you would need (create, rename, move, copy, compress, delete).', m: 6, min: 60, k: ['folder*|subfolder*|structure::Folder structure', 'ict project|graphics|word|powerpoint|database|web::Subfolders for each topic', 'name*|naming|descript*::Good naming', 'rename::Rename', 'move*|cut::Move', 'copy|duplicate|backup::Copy/backup', 'compress*|zip*::Compress', 'delete*|recycle bin::Delete', 'find|search|locat*|time|organis*::Explains the benefit'], a: 'Good file management makes work quick to find and stops files being lost or overwritten. I would create an "ICT Project" folder with subfolders: Graphics – Paint, Word Processing, Presentation – PowerPoint, Database and Web Authoring. I would create each file in the right folder with a descriptive name, rename files that were saved with poor names, move files saved in the wrong place, copy important work to a backup location, compress the finished folder into a .zip to submit it, and delete old drafts I no longer need (they go to the Recycle Bin first).' },
      { q: 'A local business asks you to produce a one-page flyer in Microsoft Word to advertise a sale to families. Explain how you would plan, design and format the flyer so the key points stand out to the target audience.', m: 6, min: 60, k: ['audience|families|parents|children::Considers the target audience', 'plan*|sketch*|draft::Plans first', 'template::Uses a template', 'orientation|portrait|landscape::Chooses orientation', 'heading*|title|font size|large::Large clear heading', 'bold|colour*|highlight*::Bold/colour for key points', 'bullet*|list::Bullet points', 'image*|picture*|logo::Relevant images/logo', 'align*|centre|center|layout|white space::Alignment/layout', 'proofread|spell*|check|print preview::Checks/proofreads'], a: 'First I would plan the key message for families: what is on sale, dates and location. I could start from a flyer template to save time. I would choose portrait orientation and use a large, bold heading like "Family Sale – 50% Off!" in a bright colour. Key details would be in bullet points so they are quick to read, with prices highlighted in bold. I would insert relevant images and the business logo, centre-align the heading and leave white space so it is not cluttered. Finally I would proofread for spelling and check it in Print Preview.' }
    ]
  });

  /* ================= UNIT 4: DATABASES (ACCESS) ================= */
  U({
    year: 9, num: 4, title: 'Databases (Access)', icon: '🗃️',
    topics: ['What is a database?', 'Tables, fields and records', 'Primary keys', 'Data types', 'Data validation', 'Queries and criteria', 'Views: design, datasheet and form'],
    vocab: [
      ['Database', 'An organised collection of data that can be searched and sorted'],
      ['Table', 'Where data about one subject is stored in rows and columns'],
      ['Field', 'A single category of data – a column in a table, e.g. Surname'],
      ['Record', 'All the data about one item or person – a row in a table'],
      ['Primary key', 'A field that uniquely identifies each record, e.g. StudentID'],
      ['Data type', 'The kind of data a field holds, e.g. Short Text, Number, Date/Time'],
      ['Validation', 'Rules that check data is sensible and allowed before it is stored'],
      ['Range check', 'Validation that checks a value is between set limits'],
      ['Presence check', 'Validation that makes sure a field is not left empty (required)'],
      ['Input mask', 'A pattern that controls the format of data entered, e.g. a phone number'],
      ['Field size', 'The maximum number of characters allowed in a text field'],
      ['Query', 'A search that finds records matching certain criteria'],
      ['Criteria', 'The conditions a query uses to select records, e.g. >50'],
      ['Design view', 'The view used to set up fields, data types and validation'],
      ['Datasheet view', 'The view that shows the data in rows and columns'],
      ['Form view', 'A user-friendly screen for entering or viewing one record at a time']
    ],
    mcq: [
      { q: 'In a database table, a single row is called a…', o: ['Record', 'Field', 'Query', 'Form'] },
      { q: 'In a database table, a single column is called a…', o: ['Field', 'Record', 'Report', 'Key'] },
      { q: 'What is a primary key?', o: ['A field that uniquely identifies each record', 'The first record in a table', 'A password for the database', 'The largest number in a table'], j: { k: ['unique*|different for each|no two|identif*::It is unique for every record', 'duplicate*|same|repeat*|identical::Stops duplicates / records being confused'] } },
      { q: 'Which field would make the BEST primary key?', o: ['StudentID', 'FirstName', 'Surname', 'Class'] },
      { q: 'Which data type should store a date of birth?', o: ['Date/Time', 'Short Text', 'Number', 'Yes/No'] },
      { q: 'Which data type should store whether a student has paid (yes or no)?', o: ['Yes/No (Boolean)', 'Number', 'Short Text', 'Currency'] },
      { q: 'Which data type is best for a phone number (which may start with 0)?', o: ['Short Text', 'Number', 'Currency', 'Date/Time'] },
      { q: 'Which data type is best for a price?', o: ['Currency', 'Short Text', 'Yes/No', 'Date/Time'] },
      { q: 'What is data validation?', o: ['Rules that check data is sensible before it is stored', 'Checking data is 100% correct', 'Deleting old data', 'Printing a report'] },
      { q: 'A rule that makes sure an age is between 11 and 18 is a…', o: ['Range check', 'Presence check', 'Input mask', 'Primary key'] },
      { q: 'A rule that stops a field being left blank is a…', o: ['Presence check (Required)', 'Range check', 'Field size', 'Query'] },
      { q: 'What does an input mask do?', o: ['Controls the format of data entered', 'Hides the data', 'Deletes records', 'Sorts records'] },
      { q: 'What is a query?', o: ['A search that finds records matching criteria', 'A type of field', 'A table with no data', 'A primary key'] },
      { q: 'Which criteria would find students with a score greater than 50?', o: ['>50', '<50', '=50', 'Like 50'] },
      { q: 'Which view do you use to set up fields and data types?', o: ['Design view', 'Datasheet view', 'Form view', 'Print preview'] },
      { q: 'Which view shows the data in a grid of rows and columns?', o: ['Datasheet view', 'Design view', 'Form view', 'Layout view'] },
      { q: 'Which view shows one record at a time in a user-friendly layout?', o: ['Form view', 'Datasheet view', 'Design view', 'SQL view'] },
      { q: 'Why is a database better than a paper filing system?', o: ['Data can be searched and sorted quickly', 'It never needs electricity', 'It can never have errors', 'It is always free'] },
      { q: 'Setting a Short Text field size to 20 means…', o: ['No more than 20 characters can be entered', 'Exactly 20 records are allowed', 'The text is size 20 font', '20 fields are created'] },
      { q: 'Which criteria finds records where the Class field is 9A?', o: ['"9A"', '>9A', 'Not 9A', '9A*2'] }
    ],
    tf: [
      { q: 'A record is a single column in a table.', a: false, x: 'A record is a row. A field is a column.', j: ['row::A record is a row', 'field & {column}|column::A field is a column'] },
      { q: 'A primary key must be unique for every record.', a: true, j: ['unique|different|no two::Each value is different', 'identif*|find|duplicate*|confus*::So each record can be identified'] },
      { q: 'Surname is a good choice of primary key.', a: false, x: 'Two people can have the same surname, so it is not unique. Use an ID.' },
      { q: 'Validation guarantees that data is correct.', a: false, x: 'Validation only checks data is sensible/allowed – a valid age could still be the wrong age.' },
      { q: 'A range check can make sure a mark is between 0 and 100.', a: true },
      { q: 'A query can search for records that match criteria.', a: true },
      { q: 'Phone numbers should be stored as a Number data type.', a: false, x: 'Use Short Text – numbers drop leading zeros and are not used for calculations.' },
      { q: 'Design view is used to set data types and validation rules.', a: true },
      { q: 'A table stores data about one subject, such as students.', a: true },
      { q: 'The criteria <18 finds records with values less than 18.', a: true },
      { q: 'A Required field can be left empty.', a: false },
      { q: 'Forms make it easier for users to enter data.', a: true }
    ],
    cloze: [
      { t: 'A [database] is an organised collection of data. Data about one subject is stored in a [table]. Each column is a [field] and each row is a [record]. A [primary] key uniquely identifies each record, for example a Student[ID]. The kind of data a field holds is its data [type].', d: ['query', 'slide'] },
      { t: '[Validation] checks that data is sensible before it is stored. A [range] check makes sure a value is between limits. A [presence] check stops a field being left blank. An input [mask] controls the format of the data, and the field [size] limits the number of [characters].', d: ['primary', 'form'] },
      { t: 'A [query] searches a database for records that match [criteria]. For example, >50 finds values [greater] than 50. The [design] view is used to set up fields. The [datasheet] view shows the data in rows and columns, and the [form] view shows one record at a time.', d: ['slide', 'cell'] }
    ],
    short: [
      { q: 'Explain the difference between a field and a record.', m: 2, k: ['field & {column|category|single piece|one type}::Field – a column/category of data', 'record & {row|all the data|one person|one item}::Record – a row/all data about one item'], a: 'A field is a single category of data – a column, e.g. Surname. A record is all the data about one person or item – a row.' },
      { q: 'What is a primary key? Why is StudentID a better primary key than FirstName?', m: 3, k: ['unique*|identif*::Uniquely identifies each record', 'same & name|share|duplicate*|two people|two students|more than one|not unique::Names can be repeated', 'id & {unique|different|never|only one}|each student has a different|number::IDs are always unique'], a: 'A primary key is a field that uniquely identifies each record. StudentID is better because each student has a different ID, while two students could have the same first name.' },
      { q: 'Suggest the best data type for each field: DateOfBirth, Price, HasPaid, PhoneNumber.', m: 4, k: ['date::DateOfBirth – Date/Time', 'currency::Price – Currency', 'yes/no|boolean|yes no::HasPaid – Yes/No', 'text|short text::PhoneNumber – Short Text'], a: 'DateOfBirth – Date/Time; Price – Currency; HasPaid – Yes/No; PhoneNumber – Short Text.' },
      { q: 'Describe two types of validation check with an example of each.', m: 4, k: ['range::Range check', 'between|>=|<=|11|18|0|100|limit*::Range example', 'presence|required::Presence check', 'blank|empty|must be filled|not left::Presence example', 'input mask|format::Input mask', 'field size|length|characters::Field size / length check'], a: 'Range check – the age must be between 11 and 18. Presence check – the Surname field is Required so it cannot be left blank.' },
      { q: 'Explain why validation cannot guarantee that data is correct.', m: 2, k: ['sensible|allowed|reasonable|within|valid::It only checks data is sensible/allowed', 'wrong|mistake*|incorrect|typo|still|could be::Valid data could still be wrong'], a: 'Validation only checks that data is sensible and allowed. A user could type 14 instead of 13 – it passes the range check but is still wrong.' },
      { q: 'What is a query? Give an example of when a school might use one.', m: 2, k: ['search*|find*|filter*|criteria|match*::Finds records matching criteria', 'student*|class|absent|score*|mark*|year|school|>|<::A school example'], a: 'A query searches the database for records that match criteria. E.g. a school could find all students in 9A with a score above 50.' },
      { q: 'Write the criteria you would use to find (a) students aged under 14, (b) students in class 9B.', m: 2, k: ['<14|< 14::(a) <14', '9b::(b) "9B"'], a: '(a) <14 in the Age field, (b) "9B" in the Class field.' },
      { q: 'Describe the difference between design view, datasheet view and form view.', m: 3, k: ['design & {field*|data type*|structure|set up|validation}::Design view – set up fields/data types', 'datasheet & {row*|column*|grid|table|data}::Datasheet view – data in rows/columns', 'form & {one record|user-friendly|enter*|input}::Form view – one record at a time / data entry'], a: 'Design view is used to set up fields, data types and validation. Datasheet view shows the data in rows and columns. Form view shows one record at a time in a user-friendly layout for entering data.' }
    ],
    long: [
      { q: 'A school library wants a database to store its books. Describe how you would design the Books table, including fields, data types, a primary key and validation rules. Explain your choices.', m: 6, min: 60, k: ['bookid|book id|isbn|id::ID field', 'primary key::Primary key', 'unique*::Explains uniqueness', 'title|author::Title/Author fields', 'short text|text::Short Text data type', 'date|date/time::Date/Time field (e.g. date borrowed)', 'yes/no|boolean|on loan|available::Yes/No field', 'number|currency|price|pages::Number/Currency field', 'validation|range|presence|required|input mask|field size::Validation rules', 'because|so that|this means::Explains choices'], a: 'The Books table would have: BookID (AutoNumber, primary key – unique for every book, so books with the same title can be told apart), Title and Author (Short Text, field size 100, Required presence check), ISBN (Short Text with an input mask of 13 digits), Genre (Short Text), Pages (Number, range check >0), DateAdded (Date/Time), Price (Currency) and OnLoan (Yes/No). Validation helps stop mistakes because blank titles or negative page numbers are rejected.' },
      { q: 'Explain the advantages of storing student records in a database rather than on paper. Describe how queries and validation make the data more useful and reliable.', m: 6, min: 60, k: ['search*|find|quick*|fast*::Quick to search', 'sort*::Sort data', 'space|storage|paper|file cabinet*::Saves physical space', 'backup*|copy::Can be backed up', 'share*|access*|network|many users::Shared access', 'query|queries::Queries', 'criteria|>|<|class|absent|score*::Query example with criteria', 'validation::Validation', 'range|presence|required|input mask::Validation example', 'error*|mistake*|accura*|reliab*|sensible::Improves reliability'], a: 'A database lets staff search for and sort records in seconds instead of looking through paper files, saves physical storage space, can be backed up, and can be accessed by several teachers at once over the network. Queries make the data useful: e.g. criteria "9A" in Class and >90 in Attendance finds 9A students with excellent attendance. Validation makes the data reliable: a range check on age (11–18) and a presence check on Surname stop impossible or missing data being entered, reducing errors.' },
      { q: 'Describe the steps to create a Students table in Microsoft Access, set a primary key, add validation and then create a query to find all Year 9 students with more than 90% attendance.', m: 6, min: 55, k: ['create|new|blank database|table::Create a new table', 'design view::Use design view', 'field name*|field*::Enter field names', 'data type*::Choose data types', 'primary key|key icon::Set a primary key', 'validation rule|range|between|>=|<=|required|presence::Add validation', 'query|query design|create::Create a query', 'criteria::Enter criteria', '>90|> 90::Criteria >90', '9|year 9::Criteria for Year 9', 'run::Run the query'], a: 'Create a new blank database and open a new table in Design view. Enter field names such as StudentID, FirstName, Surname, YearGroup and Attendance, and choose a data type for each (AutoNumber, Short Text, Number). Select StudentID and click Primary Key. Add validation, e.g. Attendance: Between 0 And 100, and set Surname to Required. Save and enter records in Datasheet view. Then choose Create → Query Design, add the Students table and fields, type 9 in the YearGroup criteria and >90 in the Attendance criteria, and click Run.' }
    ]
  });

  /* ================= UNIT 5: WEB AUTHORING ================= */
  U({
    year: 9, num: 5, title: 'Web Authoring', icon: '🧱',
    topics: ['Web authoring software (Expression Web)', 'Design, code and split view', 'HTML page structure', 'Headings, text and images', 'Tables and hyperlinks', 'Saving as .html'],
    vocab: [
      ['HTML', 'HyperText Markup Language – the code used to build web pages'],
      ['Tag', 'An HTML instruction written in angle brackets, e.g. <p>'],
      ['Web authoring software', 'Software used to create web pages, e.g. Expression Web'],
      ['Design view', 'Shows the web page as it will look in a browser (WYSIWYG)'],
      ['Code view', 'Shows the HTML code behind the page'],
      ['Split view', 'Shows the design and the code at the same time'],
      ['Hyperlink', 'Clickable text or an image that takes you to another page'],
      ['Heading', 'A title on a web page, from <h1> (largest) to <h6> (smallest)'],
      ['Page layout', 'How content such as text, images and tables is arranged on a page'],
      ['Alt text', 'A text description of an image for screen readers and when an image fails to load'],
      ['WYSIWYG', 'What You See Is What You Get'],
      ['Home page', 'The main page of a website, often called index.html'],
      ['Table', 'Content arranged in rows and columns using <table>, <tr> and <td>'],
      ['Browser', 'Software that displays web pages, e.g. Chrome or Edge']
    ],
    mcq: [
      { q: 'What does HTML stand for?', o: ['HyperText Markup Language', 'High Tech Modern Language', 'Hyperlink Text Making Language', 'Home Tool Markup Language'] },
      { q: 'Which view shows the page as it will look in a browser?', o: ['Design view', 'Code view', 'Split view', 'Datasheet view'] },
      { q: 'Which view shows the HTML code?', o: ['Code view', 'Design view', 'Form view', 'Slide view'] },
      { q: 'Which view shows BOTH the code and the design?', o: ['Split view', 'Design view', 'Code view', 'Print view'] },
      { q: 'Which tag creates the largest heading?', o: ['<h1>', '<h6>', '<head>', '<p>'] },
      { q: 'Which tag creates a paragraph?', o: ['<p>', '<para>', '<h1>', '<br>'] },
      { q: 'Which tag inserts an image?', o: ['<img>', '<image>', '<pic>', '<src>'] },
      { q: 'Which tag creates a hyperlink?', o: ['<a>', '<link>', '<href>', '<h>'] },
      { q: 'Which attribute tells a hyperlink where to go?', o: ['href', 'src', 'alt', 'title'] },
      { q: 'Which attribute gives a text description of an image?', o: ['alt', 'href', 'size', 'link'] },
      { q: 'Which tag contains the visible content of a web page?', o: ['<body>', '<head>', '<title>', '<html>'] },
      { q: 'Where does the text inside <title> appear?', o: ['On the browser tab', 'As the biggest heading', 'At the bottom of the page', 'In the image'] },
      { q: 'Which tag starts a table row?', o: ['<tr>', '<td>', '<table>', '<th>'] },
      { q: 'Which tag creates a table cell?', o: ['<td>', '<tr>', '<tc>', '<cell>'] },
      { q: 'What file extension should a web page be saved with?', o: ['.html', '.docx', '.pptx', '.xlsx'] },
      { q: 'What does WYSIWYG mean?', o: ['What You See Is What You Get', 'Write Your Site In Web Graphics', 'Web Your Site Is What You Got', 'What Your Screen Is When You Go'] },
      { q: 'Why is alt text important?', o: ['It helps screen-reader users and shows if the image fails to load', 'It makes images load faster', 'It changes the image colour', 'It adds a hyperlink'] },
      { q: 'Which software was used in the course to create web pages?', o: ['Expression Web', 'Microsoft Access', 'MS Paint', 'Excel'] },
      { q: 'Most HTML tags come in pairs. How is a closing tag written?', o: ['With a forward slash, e.g. </p>', 'With a backslash, e.g. <\\p>', 'With a hash, e.g. <#p>', 'It is written in capitals'] },
      { q: 'What is the home page of a website usually saved as?', o: ['index.html', 'home.docx', 'start.exe', 'main.pdf'] }
    ],
    tf: [
      { q: 'HTML is used to create the structure of web pages.', a: true },
      { q: '<h6> is the largest heading.', a: false, x: '<h1> is the largest; <h6> is the smallest.', j: ['h1::<h1> is the largest', 'smallest::<h6> is the smallest'] },
      { q: 'Design view shows the page as it will appear in a browser.', a: true },
      { q: 'The <head> tag contains the main visible content of the page.', a: false, x: 'The <body> contains visible content; <head> contains information like the <title>.' },
      { q: 'Closing tags include a forward slash, e.g. </h1>.', a: true },
      { q: 'The <img> tag uses the src attribute to find the image file.', a: true },
      { q: 'Alt text is only for decoration and has no purpose.', a: false, x: 'It describes images for screen readers and if the image cannot load.', j: ['screen reader*|blind|visual*|impair*|accessib*::Helps screen-reader/visually impaired users', 'load|display*|missing|broken::Shows if the image fails to load'] },
      { q: 'A hyperlink can take you to another web page.', a: true },
      { q: 'Web pages should be saved with the .docx extension.', a: false },
      { q: 'Split view shows code and design together.', a: true },
      { q: 'Tables use <tr> for rows and <td> for cells.', a: true },
      { q: 'A browser is needed to view a finished web page.', a: true }
    ],
    cloze: [
      { t: 'Web pages are built using [HTML]. Instructions are written as [tags] inside angle brackets. Most tags come in pairs, with a [closing] tag that includes a forward [slash]. The [body] tag holds the visible content, and the [title] tag sets the text on the browser tab.', d: ['query', 'field'] },
      { t: 'In Expression Web, [design] view shows the page as it will look, [code] view shows the HTML, and [split] view shows both. The <[h1]> tag creates the largest heading and the <[p]> tag creates a paragraph. The <[img]> tag adds a picture.', d: ['slide', 'record'] },
      { t: 'A [hyperlink] takes the user to another page. It uses the <a> tag with the [href] attribute. Images should have [alt] text to describe them for [screen] readers. Tables use <tr> for [rows] and <td> for cells. Web pages are saved as [.html|html] files.', d: ['.docx', 'columns'] }
    ],
    short: [
      { q: 'Explain the difference between design view and code view.', m: 2, k: ['design & {look*|appear*|browser|wysiwyg|visual*}::Design view – shows how the page looks', 'code & {html|tag*|code}::Code view – shows the HTML code'], a: 'Design view shows the page as it will look in a browser (WYSIWYG). Code view shows the HTML code and tags behind the page.' },
      { q: 'Write the HTML to display a main heading "My Hobbies" followed by a paragraph "I enjoy football."', m: 3, k: ['<h1>::Uses <h1>', '</h1>::Closes </h1>', '<p>::Uses <p>'], a: '<h1>My Hobbies</h1>\n<p>I enjoy football.</p>' },
      { q: 'Explain what the href and alt attributes do.', m: 2, k: ['href & {link*|address|url|destination|where|go}::href – the address a link goes to', 'alt & {description|describe*|text|screen reader*|load}::alt – text description of an image'], a: 'href gives the web address (destination) a hyperlink goes to. alt gives a text description of an image for screen readers and when the image does not load.' },
      { q: 'Name four HTML tags and state what each one does.', m: 4, k: ['<h1>|h1|heading::Heading tag', '<p>|paragraph::Paragraph tag', '<img>|img|image::Image tag', '<a>|hyperlink|link::Link tag', '<table>|<tr>|<td>|table|row|cell::Table tags', '<body>|body|<head>|<title>|title|<html>::Structure tags'], a: '<h1> – main heading; <p> – paragraph; <img> – image; <a> – hyperlink.' },
      { q: 'Give two reasons why alt text should be added to images.', m: 2, k: ['screen reader*|blind|visual*|impair*|accessib*::Accessibility for screen readers', 'load|display*|fail*|missing|broken|slow::Shown if the image fails to load', 'search engine*|seo|google::Helps search engines'], a: 'It lets screen readers describe the image to visually impaired users, and it is displayed if the image fails to load.' },
      { q: 'Describe the basic structure of an HTML page.', m: 3, k: ['<html>|html tag::<html> wraps the page', '<head>|head::<head> with page info', '<title>|title::<title> for the browser tab', '<body>|body::<body> holds the visible content'], a: 'The page starts with <html>. Inside is the <head>, which contains the <title> shown on the browser tab, and the <body>, which contains all the visible content like headings, paragraphs and images.' },
      { q: 'What is a hyperlink? Write the HTML for a link to https://www.bbc.co.uk that shows the text "BBC".', m: 3, k: ['click*|takes you|another page|go to|link*::A clickable link to another page', '<a href::Uses <a href=', '</a>::Closes </a>'], a: 'A hyperlink is clickable text or an image that takes you to another page. <a href="https://www.bbc.co.uk">BBC</a>' }
    ],
    long: [
      { q: 'Describe how you would create a simple web page about your school using web authoring software. Include the page structure, headings, text, an image, a table and a hyperlink, and how you would save and test it.', m: 6, min: 60, k: ['expression web|web authoring|software::Uses web authoring software', 'design view|code view|split view::Uses design/code/split view', '<html>|<head>|<body>|<title>|structure::Page structure', '<h1>|heading*::Headings', '<p>|paragraph*|text::Paragraph text', '<img>|image*|picture*::Image (with alt text)', 'alt::Alt text', '<table>|table|<tr>|<td>::Table', '<a|hyperlink*|link*|href::Hyperlink', '.html|html file|save*|index::Saves as .html', 'browser|test*|preview|check*::Tests in a browser'], a: 'I would open Expression Web and create a new HTML page. In code view the structure would be <html>, a <head> containing <title>My School</title>, and a <body>. In the body I would add an <h1> heading "Welcome to our School", <p> paragraphs about the school, and an <img> of the building with alt text "School building". I would insert a <table> with <tr> and <td> tags showing the timetable, and a hyperlink <a href="...">School website</a>. I would use split view to check the design matches the code, save the page as index.html, and test it in a browser to make sure the image loads and the link works.' },
      { q: 'Compare using design view and code view when creating web pages. Explain the advantages of each and why understanding HTML is still useful.', m: 6, min: 55, k: ['design view::Design view', 'wysiwyg|see|look*|visual*|drag|easy|beginner*::Design view is visual/easy', 'code view::Code view', 'html|tag*::Shows HTML tags', 'control|precise|exact|fix|error*|detail*::Code gives precise control/fix errors', 'split view|both::Split view shows both', 'understand*|debug*|any software|professional|browser|learn::Why HTML knowledge helps', 'however|but|whereas|on the other hand::Balanced comparison'], a: 'Design view is WYSIWYG – you see the page as it will look and can type text and drag in images without knowing code, which is quick and easy for beginners. However, the software can add messy code. Code view shows the HTML tags, giving precise control over the page and making it easier to find and fix errors. Split view shows both at once. Understanding HTML is still useful because you can fix problems the design view creates, customise pages exactly, and the skills work in any software or browser – professional web developers write code directly.' },
      { q: 'Explain what makes a good web page for its audience. Discuss layout, headings, text, images, hyperlinks and accessibility.', m: 6, min: 55, k: ['audience|purpose::Considers audience/purpose', 'layout|consisten*|navigation|menu::Clear, consistent layout/navigation', 'heading*|h1::Clear headings', 'short|paragraph*|readable|font|contrast::Readable text', 'image*|picture*::Relevant images', 'alt::Alt text', 'hyperlink*|link*::Working hyperlinks', 'load*|file size|fast::Fast loading', 'accessib*|screen reader*|colour blind|contrast::Accessibility', 'test*|browser*|device*|mobile::Tested on browsers/devices'], a: 'A good web page is designed for its audience and purpose. It has a clear, consistent layout with navigation links so users can find information. Headings (<h1>, <h2>) break the content up, and text is in short paragraphs with a readable font and good contrast. Images are relevant, small enough to load quickly, and have alt text for screen readers. Hyperlinks should be clearly labelled and tested to check they work. Finally the page should be tested in different browsers and on mobile devices.' }
    ]
  });

  /* ================= UNIT 6: PYTHON ================= */
  U({
    year: 9, num: 6, title: 'Python', icon: '🐍',
    topics: ['What is Python?', 'print(), comments and \\n', 'Syntax rules and common errors', 'Variables and data types', 'input() and arithmetic', 'if, if-else and if-elif-else', 'Relational operators and Booleans'],
    vocab: [
      ['Python', 'A popular, free, text-based programming language'],
      ['Syntax', 'The rules that must be followed when writing code'],
      ['print()', 'A function that displays output on the screen'],
      ['input()', 'A function that lets the user type data into a program'],
      ['Comment', 'A note in code starting with # that Python ignores'],
      ['Variable', 'A labelled box in memory where data is stored'],
      ['String', 'Text data inside quotation marks'],
      ['Integer', 'A whole number with no decimals'],
      ['Float', 'A number with a decimal point'],
      ['Boolean', 'A value that is either True or False'],
      ['Condition', 'A test that evaluates to True or False'],
      ['if statement', 'Runs a block of code only if a condition is True'],
      ['else', 'Runs a block of code when the if condition is False'],
      ['elif', 'Else-if – checks another condition if the previous ones were False'],
      ['Relational operator', 'An operator that compares values, e.g. >, <, =='],
      ['Bug', 'An error in a program']
    ],
    gen: [
      { g: 'pyArith', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'pyStr', t: ['mcq', 'short'], m: 2, w: 2 },
      { g: 'pyType', t: ['mcq'], w: 3 },
      { g: 'pyIf', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'pyIfElse', t: ['mcq', 'short'], m: 2, w: 4 }
    ],
    mcq: [
      { q: 'Which is TRUE about Python?', o: ['It is a free, text-based programming language', 'It is a visual block language', 'It costs money to download', 'It is only used for games'] },
      { q: 'Where is Python used in the real world?', o: ['All of these: AI, websites, games and apps', 'Only in schools', 'Only on calculators', 'Only for spreadsheets'] },
      { q: 'What does \\n do inside a print statement?', o: ['Starts a new line', 'Adds a number', 'Ends the program', 'Makes a comment'] },
      { q: 'Which line correctly prints Hello?', o: ['print("Hello")', 'Print("Hello")', 'print Hello', 'print("Hello"'] },
      { q: 'What is wrong with: print Hello', o: ['Missing brackets and quotation marks', 'Print should be capital', 'Missing colon', 'Nothing'] },
      { q: 'Which symbol starts a comment in Python?', o: ['#', '//', '/*', '--'] },
      { q: 'Which data type is "Sara"?', o: ['String', 'Integer', 'Float', 'Boolean'] },
      { q: 'Which data type is 9.89?', o: ['Float', 'Integer', 'String', 'Boolean'] },
      { q: 'Which data type can only be True or False?', o: ['Boolean', 'String', 'Integer', 'Float'] },
      { q: 'Which statement creates a variable called count with the value 10?', o: ['count = 10', 'count == 10', '10 = count', 'count: 10'] },
      { q: 'Which operator checks if two values are equal?', o: ['==', '=', '!=', '>='] },
      { q: 'What does != mean?', o: ['Not equal to', 'Equal to', 'Greater than', 'Assign'] },
      { q: 'Which statement runs code when the if condition is False?', o: ['else', 'elif', 'print', 'input'] },
      { q: 'How many blocks of code run in an if-elif-else statement?', o: ['Only one', 'All of them', 'Two', 'None'] },
      { q: 'Why does the ORDER of conditions in an if-elif chain matter?', o: ['Python runs the first condition that is True and skips the rest', 'Python runs them all at once', 'The last condition always runs', 'It does not matter'], j: { k: ['first|top|in order|stop*|skip*::The first True condition runs, the rest are skipped', 'wrong|incorrect|never reach*|never run*|bigger first|highest first::So a wrong order gives the wrong result'] } },
      { q: 'What does this output?\nage = 16\nif age >= 18:\n    print("Adult")\nelse:\n    print("Not adult")', o: ['Not adult', 'Adult', 'Adult Not adult', 'Error'] },
      { q: 'What must come at the end of an if line?', o: [':', ';', '.', '!'] },
      { q: 'Which code converts the user\'s input to a whole number?', o: ['int(input("Number: "))', 'input(int("Number: "))', 'str(input("Number: "))', 'number(input())'] },
      { q: 'Which operator is used for division?', o: ['/', '÷', '\\', '%'] },
      { q: 'Which is a LOGIC error?', o: ['Using < instead of > so the program gives the wrong result', 'Missing a bracket', 'Spelling print as pritn', 'Missing quotation marks'] }
    ],
    tf: [
      { q: 'Python is case-sensitive, so Print("Hi") will cause an error.', a: true, j: ['lowercase|lower case|small p|capital*|case::print must be lowercase', 'error|won\'t run|will not run|nameerror::So Print causes an error'] },
      { q: 'Comments change how the program runs.', a: false, x: 'Comments are ignored by Python.' },
      { q: '\\n starts a new line inside a string.', a: true },
      { q: 'Text must be inside quotation marks in print().', a: true },
      { q: '"45" (in quotes) is an integer.', a: false, x: 'It is a string because it is in quotes.', j: ['string|text::It is a string', 'quot*|"::Because it is inside quotation marks'] },
      { q: 'A variable is like a labelled box in memory.', a: true },
      { q: 'An if-else statement can run both blocks of code.', a: false, x: 'Only one block runs – the if block when True, otherwise the else block.' },
      { q: 'elif lets a program check multiple conditions.', a: true },
      { q: '== is used to assign a value to a variable.', a: false, x: '= assigns; == compares.' },
      { q: 'Visual programming languages like Scratch use drag-and-drop blocks.', a: true },
      { q: 'input() always returns a string.', a: true },
      { q: 'The condition 10 > 5 evaluates to True.', a: true }
    ],
    cloze: [
      { t: 'Python is a popular [text-based|text based] programming language. The [print()|print] function displays output and the [input()|input] function lets the user type data. [Syntax] refers to the rules for writing code. Mistakes in the structure or spelling of code are called syntax [errors]. Comments start with the [#] symbol.', d: ['scratch', 'query'] },
      { t: 'A [variable] is a labelled box in memory. [String] data is text inside quotes. An [integer] is a whole number, and a [float] has a decimal point. A [Boolean] can only be True or False. We compare values using [relational] operators such as > and ==.', d: ['record', 'pixel'] },
      { t: 'A [conditional] statement controls the flow of a program. An [if] statement runs code when a condition is [True]. An [else] block runs when the condition is False. [elif] checks another condition. Every if line must end with a [colon|:].', d: ['loop', 'field'] }
    ],
    short: [
      { q: 'Give three syntax rules you must follow when writing print statements in Python.', m: 3, k: ['lowercase|lower case|small letter*|not capital|case::print must be lowercase', 'bracket*|parenthes*|\\(::Use brackets', 'quot*|speech marks|"::Text in quotation marks', 'spell*|pritn::Spell it correctly'], a: 'print must be lowercase and spelled correctly, it needs brackets (), and text must be inside quotation marks.' },
      { q: 'Explain what a comment is and why programmers use them.', m: 2, k: ['#|ignor*|not run|note*::A note starting with # that Python ignores', 'explain*|understand*|describe*|others|remind*::Explains what the code does'], a: 'A comment is a note starting with # that Python ignores. Programmers use them to explain what the code does so others can understand it.' },
      { q: 'Name four data types and give an example of each.', m: 4, k: ['string|str::String ("Sara")', 'integer|int::Integer (45)', 'float::Float (9.89)', 'boolean|bool::Boolean (True)'], a: 'String – "Sara"; Integer – 45; Float – 9.89; Boolean – True.' },
      { q: 'Write a program that asks the user\'s age and prints "You are an adult" if it is 18 or above.', m: 3, k: ['int\\(input|int\\(::Converts input to an integer', 'if & {>= 18|>=18}::if age >= 18', 'print\\(::Prints the message'], a: 'age = int(input("Enter your age: "))\nif age >= 18:\n    print("You are an adult")' },
      { q: 'Write a program that asks for a number and prints "Even number" or "Odd number".', m: 4, k: ['int\\(input::Converts input', '% 2|%2::Uses % 2 (remainder)', '== 0|==0::Checks remainder == 0', 'else::Uses else', 'even & odd::Prints both messages'], a: 'num = int(input("Enter a number: "))\nif num % 2 == 0:\n    print("Even number")\nelse:\n    print("Odd number")' },
      { q: 'Explain the difference between if-else and if-elif-else.', m: 2, k: ['two|2|one condition|either::if-else chooses between two options', 'more than two|multiple|several|many|another condition|more conditions::elif checks multiple conditions'], a: 'if-else chooses between two options based on one condition. if-elif-else can check multiple conditions to choose between more than two options.' },
      { q: 'What does == mean, and how is it different from =?', m: 2, k: ['== & {compar*|equal*|check*}::== compares/checks equality', '= & {assign*|store*|set*|give*}::= assigns a value'], a: '== compares two values to check if they are equal. = assigns (stores) a value in a variable.' },
      { q: 'List four relational (comparison) operators and what they mean.', m: 4, k: ['==::== equal to', '!=::!= not equal to', '>=|<=::>= or <=', '> |greater than::> greater than', '< |less than::< less than'], a: '== equal to; != not equal to; > greater than; < less than (also >= and <=).' }
    ],
    long: [
      { q: 'Write a Python mini project: ask the user for their name and their mark, then print their name with "Pass" if the mark is 50 or above, otherwise "Fail". Explain the data types and how you would test the program.', m: 6, min: 50, k: ['input\\(::Uses input()', 'float\\(|int\\(::Converts the mark to a number', 'if & {>= 50|>=50}::if marks >= 50', 'else::else', 'print\\(::Prints name and result', 'string|str::Name is a string', 'float|integer|int|number::Mark is a float/integer', 'test*|50|49|boundary|expected::Testing with boundary values'], a: 'name = input("Enter your name: ")\nmarks = float(input("Enter your marks: "))\nif marks >= 50:\n    print(name, "- Pass")\nelse:\n    print(name, "- Fail")\nThe name is a string, and the marks are converted to a float so they can be compared with 50. To test it I would try 65 (expect Pass), 50 (boundary – expect Pass), 49 (expect Fail) and 0 (expect Fail), checking the actual output matches the expected output.' },
      { q: 'Explain how conditional statements control the flow of a program. Describe if, if-else and if-elif-else with a code example of each, and explain why the order of conditions matters.', m: 6, min: 55, k: ['condition|true|false::Conditions evaluate to True/False', 'if & {true}|only if::if runs code when True', 'else::else runs when False', 'elif|else-if::elif checks multiple conditions', 'print\\(|input\\(|= |>|<::Code examples', 'only one|first true|stop*|skip*::Only the first True branch runs', 'order::Order of conditions', 'colon|:|indent*::Colon / indentation'], a: 'Conditional statements choose which code runs based on whether a condition is True or False. An if statement runs code only if the condition is True: if temp > 30: print("It is hot!"). An if-else chooses between two options: if grade >= 40: print("Pass") else: print("Fail"). An if-elif-else checks several conditions: if score >= 70: print("A") elif score >= 50: print("B") else: print("C"). Only the first True block runs and the rest are skipped, so order matters – if score >= 50 came first, a score of 80 would wrongly get a B. Each if line ends with a colon and the code inside is indented.' },
      { q: 'A student\'s program should print "Hot day" when the temperature is above 30, otherwise "Normal temperature". Their code is:\ntemperature = input("Enter the temperature: ")\nif temperature < 30\n    print("Hot day")\nelse:\n    Print("Normal temperature")\nIdentify all the errors, explain whether each is a syntax or logic error, and write the corrected program.', m: 6, min: 40, k: ['float\\(|int\\(::input must be converted to a number', 'string|text::input() returns a string', 'colon::Missing colon after the if condition', 'syntax::Identifies syntax errors', '>|greater::Should be > not <', 'logic::Identifies the logic error', 'print & {lowercase|lower case|capital|small p}::Print must be lowercase', 'temperature > 30|temp > 30|> 30::Corrected code'], a: 'Errors: (1) input() returns a string, so it must be converted with float() – otherwise the comparison fails (runtime/logic). (2) The if line is missing a colon – syntax error. (3) < should be > because hot means above 30 – logic error. (4) Print must be lowercase print – syntax error. Corrected:\ntemperature = float(input("Enter the temperature: "))\nif temperature > 30:\n    print("Hot day")\nelse:\n    print("Normal temperature")' }
    ]
  });
})();
