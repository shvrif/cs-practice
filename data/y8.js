/* YEAR 8 question bank – based on the 2026-27 Y8 SOW and unit booklets.
   Format: see data/y7.js */
(function () {
  const U = CS.unit;

  /* ================= UNIT 1: E-SAFETY ================= */
  U({
    year: 8, num: 1, title: 'E-Safety', icon: '🛡️',
    topics: ['Files and folders refresher', 'Online identity', 'Privacy settings', 'Cyberbullying', 'Identity theft and phishing', 'Fake news and reliable sources', 'Safe online gaming', 'Networks and protocols (intro)'],
    vocab: [
      ['Online identity', 'How you present yourself on the internet through your username, profile, posts and behaviour'],
      ['Profile', 'Information such as name, photo and bio shown on a social platform'],
      ['Social networking', 'Using websites to interact with friends, family and people with similar interests'],
      ['Privacy settings', 'Controls that let you choose who can see your profile and posts'],
      ['Cyberbullying', 'Bullying others through technology such as a phone or the internet'],
      ['Identity theft', 'Using another person\'s personal details, often to steal money or pretend to be them'],
      ['Phishing', 'Fake emails or messages that trick people into giving personal information'],
      ['Secure password', 'A long password with a mix of letters, numbers and symbols that is hard to guess'],
      ['Fake news', 'False or misleading information presented as real news'],
      ['Reliable source', 'A trustworthy source of information that can be checked'],
      ['In-game purchase', 'Paying real money for items inside a game'],
      ['Computer network', 'Two or more devices connected together to share information'],
      ['Protocol', 'A set of rules that devices follow to communicate'],
      ['Digital footprint', 'The permanent record of everything you do online'],
      ['Screen time', 'The amount of time spent using a device with a screen']
    ],
    mcq: [
      { q: 'What is an online identity?', o: ['How you present yourself on the internet', 'Your home address', 'Your computer\'s IP address', 'A type of virus'] },
      { q: 'Which of these shapes your online identity?', o: ['Your posts, profile and behaviour', 'The brand of your laptop', 'Your internet speed', 'The colour of your keyboard'] },
      { q: 'What do privacy settings allow you to do?', o: ['Control who can see your profile and posts', 'Make your internet faster', 'Delete other people\'s posts', 'Remove all adverts'] },
      { q: 'If you are not sure what your privacy settings are, you should assume…', o: ['The whole world can see everything you post', 'Only your friends can see', 'Nobody can see', 'Only your teacher can see'] },
      { q: 'Which is the BEST response to cyberbullying?', o: ['Block the sender, keep evidence and tell someone', 'Reply angrily', 'Post about it publicly', 'Ignore it and delete the evidence'] },
      { q: 'What is identity theft?', o: ['Using another person\'s personal details to steal money or pretend to be them', 'Forgetting your username', 'Changing your profile picture', 'Blocking someone'] },
      { q: 'Which is a sign of fake news?', o: ['A shocking headline with no named source', 'It is on a well-known news website with sources', 'The author is named and checked', 'Other trusted sites report the same facts'], j: { k: ['source*|author|check*|evidence::No named source/author', 'shock*|clickbait|exaggerat*|emotion*::Shocking/exaggerated headline', 'other site*|cross-check|compare|trusted::Not reported elsewhere'] } },
      { q: 'How can you check if online information is reliable?', o: ['Compare it with other trusted sources', 'Believe it if it has lots of likes', 'Share it first and check later', 'Only read the headline'] },
      { q: 'Which is a SAFE thing to do when gaming online?', o: ['Keep personal details private and play with people you know', 'Share your address with teammates', 'Buy every in-game item', 'Accept friend requests from everyone'] },
      { q: 'What is an in-game purchase?', o: ['Paying real money for items inside a game', 'A free game download', 'A game cheat code', 'A type of controller'] },
      { q: 'What is a computer network?', o: ['Two or more devices connected to share information', 'A single computer', 'A type of software', 'A password'] },
      { q: 'What is a protocol?', o: ['A set of rules for communication', 'A type of cable', 'A virus', 'A web browser'] },
      { q: 'Which is an example of a NON-networking protocol?', o: ['Rules for a class discussion (raise your hand to speak)', 'TCP/IP', 'HTTP', 'FTP'] },
      { q: 'Which is the most secure password?', o: ['T!ger#Rain82&Moon', 'football', 'Sara2012', 'qwerty'] },
      { q: 'A phishing email usually asks you to…', o: ['Click a link and enter your personal details', 'Enjoy your day', 'Attend a lesson', 'Read a newsletter'] },
      { q: 'Why might future employers look at your online profile?', o: ['To see what kind of person you are', 'To check your internet speed', 'To fix your computer', 'To delete your account'] },
      { q: 'What should you do if you see inappropriate content online?', o: ['Use the Report button and tell an adult', 'Share it with friends', 'Comment on it', 'Download it'] },
      { q: 'What is a good way to manage screen time when gaming?', o: ['Set time limits and take regular breaks', 'Play all night', 'Skip meals to keep playing', 'Never tell parents'] },
      { q: 'Which folder name is the most organised choice for Year 8 CS homework?', o: ['Year8 > ComputerScience > Homework', 'New Folder (3)', 'stuff', 'Desktop'] }
    ],
    tf: [
      { q: 'It is best to include your real full name and address on a public profile.', a: false, x: 'Strangers could use it to find you or steal your identity.', j: ['stranger*|find you|locat*|danger*|unsafe::Strangers could find you', 'identity theft|steal*|scam*::Risk of identity theft'] },
      { q: 'Once something is posted online, it can be permanent even if you delete it.', a: true },
      { q: 'You should not tell anyone if you are being cyberbullied.', a: false, x: 'Always tell a trusted adult.', j: ['tell|adult|teacher|parent::Tell a trusted adult', 'help|support|stop|report::They can help stop it'] },
      { q: 'Privacy settings let you control who sees your information.', a: true },
      { q: 'A post with lots of likes must be true.', a: false, x: 'Popularity does not make something true – check trusted sources.', j: ['check*|compare|source*|trusted|reliable::Check reliable sources', 'fake|false|anyone can|popular::Fake news can be popular'] },
      { q: 'You need permission before posting pictures of other people.', a: true },
      { q: 'A protocol is a set of rules for communication.', a: true },
      { q: 'Games can contain strangers who pretend to be someone else.', a: true },
      { q: 'Cyberbullying only happens during school hours.', a: false, x: 'It can happen at any time, anywhere.' },
      { q: 'A network is two or more devices connected together.', a: true },
      { q: 'Your behaviour online is part of your online identity.', a: true },
      { q: 'It is safe to meet someone you only know online without telling an adult.', a: false },
      { q: 'In-game purchases can cost real money.', a: true },
      { q: 'Reliable websites usually show who wrote the information and when.', a: true }
    ],
    cloze: [
      { t: 'Your online [identity] is how you present yourself on the internet. It is shaped by your [behaviour], your [posts] and your [profile]. Once something is posted it is often [permanent], even if deleted later. Use [privacy] settings to control who sees your information.', d: ['router', 'password'] },
      { t: '[Cyberbullying] is bullying others through technology. If it happens: don\'t [reply], [block] the sender, keep any [evidence], tell somebody and use the [report] button. Using someone\'s personal details to steal money is called identity [theft].', d: ['share', 'protocol'] },
      { t: 'To check if information is [reliable], look at who the [author] is, check the date, and [compare] it with other trusted [sources]. False information presented as real news is called [fake] news. Shocking headlines designed to make you click are called [clickbait].', d: ['bandwidth', 'server'] }
    ],
    short: [
      { q: 'What is an online identity? Name two things that shape it.', m: 3, k: ['present*|how you|appear*|how others see|who you are online::How you present yourself online', 'post*|photo*|comment*|content::Posts', 'profile|bio|username|picture::Profile', 'behaviour|behave|interact*|language|tone::Behaviour'], a: 'Your online identity is how you present yourself on the internet. It is shaped by your posts, your profile (name, photo, bio) and your behaviour towards others.' },
      { q: 'Give two risks of having an online presence.', m: 2, k: ['never be deleted|permanent|forever|can\'t delete|cannot delete::Content can never be fully deleted', 'employ*|job*|universit*|future::Future employers could see it', 'stranger*|predator*|identity theft|stalk*|locat*::Strangers/identity theft', 'embarrass*|regret*|old post*::Old posts could embarrass you', 'bully*::Cyberbullying'], a: 'Nothing can ever really be deleted, and future employers could look at your old posts and judge you on them.' },
      { q: 'Explain how you can spot fake news. Give three checks.', m: 3, k: ['author|who wrote|writer::Check the author', 'date|when|recent|old::Check the date', 'source*|reference*|evidence::Check the sources/evidence', 'compare|other site*|trusted|cross-check|bbc::Compare with trusted sites', 'url|website|domain|address::Check the website address', 'headline|shock*|clickbait|exaggerat*|emotion*::Beware shocking headlines', 'spell*|grammar::Spelling mistakes', 'photo*|image*|edited::Check images'], a: 'Check who the author is, check the date it was published, and compare the story with other trusted news sources such as BBC. Be wary of shocking headlines.' },
      { q: 'Give three ways to stay safe while gaming online.', m: 3, k: ['personal|private|address|real name|details::Keep personal details private', 'stranger*|people you know|friends only|block*::Be careful with strangers / block', 'purchase*|money|pay|spend|card::Be careful with in-game purchases', 'time|limit*|break*|screen time::Limit screen time / take breaks', 'report*|adult|parent*::Report problems / tell an adult', 'age rating|pegi|appropriate::Play age-appropriate games', 'voice chat|chat::Control chat settings'], a: 'Keep your personal details private, only play with people you know and block strangers, ask a parent before in-game purchases, and set time limits for screen time.' },
      { q: 'What is a protocol? Give one networking and one non-networking example.', m: 3, k: ['rule*|standard*::A set of rules', 'tcp|ip|http|https|ftp|smtp::Networking example (e.g. TCP/IP, HTTP)', 'hand|queue|traffic|class|conversation|greet*|road|language|sport|game|meeting::Non-networking example (e.g. raising your hand)'], a: 'A protocol is a set of rules for communication. Networking example: HTTP. Non-networking example: raising your hand before speaking in class.' },
      { q: 'Describe what privacy settings do and why you should use them.', m: 2, k: ['control|choose|decide|limit*|restrict*::Control who sees your profile/posts', 'stranger*|safe|protect*|identity|world can see|public::Keeps information safe from strangers'], a: 'Privacy settings let you control who can access your profile and what they can see. Without them, you should assume the whole world can see everything you post.' },
      { q: 'Explain what identity theft is and give one way to prevent it.', m: 2, k: ['personal detail*|someone else\'s|another person|pretend*|impersonat*|steal money|information::Using someone\'s personal details', 'password*|private|don\'t share|do not share|phishing|shred|privacy|two-factor|2fa::A prevention method'], a: 'Identity theft is using another person\'s personal details to steal money from their accounts or pretend to be them. Prevent it by not sharing personal details online and using strong passwords.' },
      { q: 'Sarah posted a rude comment under a classmate\'s video. Her teacher saw it. Explain how this affects her online identity and what she should have done.', m: 4, k: ['identity|reputation|image|how others see::It damages her online identity/reputation', 'permanent|forever|screenshot|even if deleted::The comment may be permanent', 'behaviour::It shows poor online behaviour', 'think before|kind|respectful|not post|private message|appropriate::She should think before posting / be kind'], a: 'It damages her online identity because it shows poor behaviour and people see her as unkind, and the comment could be permanent even if deleted (e.g. screenshots). She should have thought before posting and only written something kind and respectful.' }
    ],
    long: [
      { q: 'Explain how young people can build and protect a positive online identity. Include advice about posts, profiles, privacy settings and behaviour.', m: 6, min: 60, k: ['think before|kind|respectful|appropriate::Think before you post', 'permanent|forever|delete*|screenshot::Posts are permanent', 'profile|bio|username|photo::Choose profile info carefully', 'personal information|address|school|phone|real name::Keep personal info private', 'privacy setting*|private::Use privacy settings', 'behaviour|respect*|polite|language::Behave respectfully', 'employ*|universit*|school|future::Future employers/universities may look', 'friend*|stranger*|know in real life::Only connect with people you know'], a: 'Think before you post – is it kind, respectful and appropriate? Posts can be permanent, even if deleted, because people screenshot them. Keep profile information minimal: don\'t include your address, school or phone number. Use privacy settings so only friends see your posts. Behave respectfully in comments and chats because your behaviour forms your identity. Only accept friend requests from people you know. This matters because schools, universities and employers may look you up in the future.' },
      { q: 'A friend shares a shocking news story on social media. Explain why fake news is a problem and describe the steps they should take to check whether the story is reliable before sharing it.', m: 6, min: 55, k: ['spread*|share*|quick*|viral::Fake news spreads quickly', 'believe|mislead*|panic|harm|confus*|wrong decision*::It misleads people / causes harm', 'author|who wrote::Check the author', 'date::Check the date', 'source*|evidence|reference*::Check sources/evidence', 'compare|other|trusted|bbc|reliable site*::Compare with trusted sites', 'url|website|domain::Check the website address', 'headline|clickbait|emotion*|shock*::Beware emotional/shocking headlines', 'don\'t share|do not share|not share|stop|report*::Don\'t share until checked'], a: 'Fake news is a problem because it spreads quickly and can mislead people, cause panic or lead to bad decisions. Before sharing, your friend should check who wrote it and when, look at the website address, check whether evidence and sources are given, and compare the story with trusted news sites like BBC. Shocking or emotional headlines are often clickbait. If it cannot be verified they should not share it and could report it.' },
      { q: 'Describe the dangers of online gaming for young people and explain how they can stay safe and balanced.', m: 6, min: 55, k: ['stranger*|groom*|predator*|pretend*::Strangers/grooming', 'personal|address|real name|details::Protecting personal info', 'bully*|toxic|abuse|harass*::Bullying/toxic players', 'purchase*|money|spend|loot box*|card::In-game purchases', 'screen time|addict*|hours|sleep|homework::Screen time/addiction', 'block*|report*|mute::Block/report', 'limit*|break*|balance*::Set limits/take breaks', 'adult|parent*::Tell an adult / parental controls'], a: 'Dangers include strangers who pretend to be young players to groom children, bullying and toxic chat, in-game purchases that spend real money, and spending too many hours gaming which affects sleep and homework. To stay safe, keep personal details private, only play with people you know, block and report abusive players, ask parents before purchases or use parental controls, and set time limits with regular breaks to stay balanced.' }
    ]
  });

  /* ================= UNIT 2: INTRODUCTION TO NETWORKS ================= */
  U({
    year: 8, num: 2, title: 'Introduction to Networks', icon: '🌐',
    topics: ['What is a network?', 'Data packets', 'Protocols', 'Network hardware', 'Wired vs wireless', 'Bandwidth'],
    vocab: [
      ['Computer network', 'A collection of connected devices that can communicate and share information'],
      ['Packet', 'A small unit of data sent across a network, containing destination and order information'],
      ['Protocol', 'A set of rules and standards that govern how data is sent and received'],
      ['Server', 'A powerful computer that provides a service to other computers on a network'],
      ['Router', 'Connects different networks and directs data to its destination'],
      ['Switch', 'Connects devices in a network and sends data only to the correct device'],
      ['Hub', 'Connects devices in a LAN but sends data to every device'],
      ['Modem', 'Converts between digital and analogue signals to connect to the internet'],
      ['Access point', 'Lets wireless devices connect to a wired network'],
      ['NIC', 'Network Interface Card – hardware that lets a device connect to a network'],
      ['Repeater', 'Boosts a signal so it can travel longer distances'],
      ['Bandwidth', 'The amount of data that can be transferred in a given time'],
      ['LAN', 'Local Area Network – covers a small area such as a school'],
      ['WAN', 'Wide Area Network – covers a large geographical area'],
      ['Gateway', 'Connects networks that use different protocols'],
      ['Wireless', 'A connection that uses radio waves (Wi-Fi) instead of cables']
    ],
    mcq: [
      { q: 'When data is sent across a network, it is broken into small units called…', o: ['Packets', 'Bytes', 'Folders', 'Cables'] },
      { q: 'Which device connects different networks and directs data to its destination?', o: ['Router', 'Hub', 'Monitor', 'Repeater'] },
      { q: 'Which device sends data ONLY to the device it is meant for?', o: ['Switch', 'Hub', 'Repeater', 'Modem'], j: { k: ['correct device|only|intended|right device|address*::Sends data only to the correct device', 'hub|every device|all devices|traffic|efficient::Unlike a hub, which sends to all – so less traffic'] } },
      { q: 'Which device sends data to EVERY connected device?', o: ['Hub', 'Switch', 'Router', 'Gateway'] },
      { q: 'What does a modem do?', o: ['Converts between digital and analogue signals', 'Stores all network files', 'Prints documents', 'Boosts Wi-Fi only'] },
      { q: 'Which device lets wireless devices connect to a wired network?', o: ['Access point', 'Hub', 'Printer', 'Repeater'] },
      { q: 'What is a server?', o: ['A powerful computer that provides a service to a network', 'A cable', 'A type of virus', 'A web browser'] },
      { q: 'What does NIC stand for?', o: ['Network Interface Card', 'New Internet Connection', 'Network Internal Cable', 'Node Information Centre'] },
      { q: 'Which device boosts a signal so it can travel further?', o: ['Repeater', 'Switch', 'Modem', 'Server'] },
      { q: 'Bandwidth is…', o: ['The amount of data that can be transferred in a given time', 'The length of a network cable', 'The number of computers in a network', 'The size of a hard drive'] },
      { q: 'Bandwidth is usually measured in…', o: ['Mbps (megabits per second)', 'GHz', 'MB of storage', 'Pixels'] },
      { q: 'Which is an ADVANTAGE of a wired connection over wireless?', o: ['Faster and more reliable', 'You can move around freely', 'No cables needed', 'Easier to set up anywhere'] },
      { q: 'Which is an ADVANTAGE of a wireless connection?', o: ['Users can move around and connect many devices easily', 'It is always faster than cable', 'It cannot be hacked', 'It never loses signal'] },
      { q: 'A network in a single school building is a…', o: ['LAN', 'WAN', 'Internet', 'Protocol'] },
      { q: 'The internet is an example of a…', o: ['WAN', 'LAN', 'Hub', 'NIC'] },
      { q: 'Which protocol is used to transfer web pages securely?', o: ['HTTPS', 'FTP', 'HTTP', 'Hub'] },
      { q: 'What does FTP stand for?', o: ['File Transfer Protocol', 'Fast Transmission Process', 'File Type Program', 'Free Transfer Port'] },
      { q: 'Which information is included in a data packet?', o: ['The destination address and the order to reassemble packets', 'The user\'s password', 'The colour of the screen', 'The price of the computer'] },
      { q: 'Which device connects networks that use DIFFERENT protocols?', o: ['Gateway', 'Hub', 'Repeater', 'Switch'] },
      { q: 'Network cables are often made of…', o: ['Copper wires or fibre-optic glass', 'Plastic only', 'Wood', 'Rubber bands'] },
      { q: 'Higher bandwidth means…', o: ['More data can be transferred per second', 'The computer has more storage', 'The screen is brighter', 'Fewer devices can connect'] }
    ],
    tf: [
      { q: 'A hub is more efficient than a switch.', a: false, x: 'A hub sends data to every device; a switch sends only to the correct one, so a switch is more efficient.', j: ['every|all devices|everyone::A hub sends to every device', 'switch & {correct|only|right|intended}::A switch sends only to the correct device', 'traffic|slow*|collision*|efficient::Hubs create more traffic'] },
      { q: 'Data is broken into packets before it is sent across a network.', a: true },
      { q: 'A server is a powerful computer that provides a service to a network.', a: true },
      { q: 'You need a hub to connect a network to the internet.', a: false, x: 'A router (with a modem) connects a network to the internet.' },
      { q: 'A router can act as a gateway.', a: true },
      { q: 'Wireless connections are always faster than wired connections.', a: false, x: 'Wired connections are usually faster and more reliable.', j: ['wired & {faster|quicker|reliable|stable}::Wired is usually faster/more reliable', 'interfer*|wall*|distance|signal::Wireless signal is affected by walls/distance/interference'] },
      { q: 'Protocols make sure devices can understand each other.', a: true },
      { q: 'Bandwidth is measured in GHz.', a: false, x: 'Bandwidth is measured in bits per second (e.g. Mbps). GHz is clock speed.' },
      { q: 'The receiving computer reassembles the packets into the original data.', a: true },
      { q: 'A LAN covers a large geographical area such as a country.', a: false, x: 'That is a WAN. A LAN covers a small area such as a school.' },
      { q: 'A NIC allows a device to connect to a network.', a: true },
      { q: 'A repeater boosts signals over long distances.', a: true },
      { q: 'Wireless networks can be easier for hackers to intercept than wired networks.', a: true }
    ],
    cloze: [
      { t: 'A computer [network] is a collection of connected devices that can share information. When data is sent it is broken into small units called [packets]. Each one includes the [destination] and the order in which to reassemble them. They are sent using [protocols] such as [TCP/IP|tcp ip|tcpip]. The receiving computer checks for [errors] and reassembles the data.', d: ['pixels', 'hub'] },
      { t: 'A [router] connects different networks and directs data. A [switch] sends data only to the correct device, while a [hub] sends data to all devices. A [modem] converts digital and analogue signals. An access [point] lets wireless devices join a wired network. A [server] is a powerful computer that provides a service.', d: ['monitor', 'printer'] },
      { t: '[Bandwidth] is the amount of data that can be transferred in a given time. It is measured in bits per [second], for example Mbps. [Wired] connections use cables and are usually faster and more [reliable]. [Wireless] connections use radio waves and let users [move] around.', d: ['GHz', 'pixels'] }
    ],
    short: [
      { q: 'Define a computer network and give two benefits of networking computers.', m: 3, k: ['connect*|linked|joined|two or more|collection::Devices connected together', 'share* file*|share* data|share* information|files::Share files/data', 'printer*|share* hardware|share* resources|internet connection::Share printers/internet', 'communicat*|email|messag*::Communicate', 'backup|central*|login from any|any computer::Central storage/log in anywhere'], a: 'A network is two or more devices connected together to share information. Benefits: users can share files and printers, and can communicate by email or messages.' },
      { q: 'Explain how data is sent across a network using packets.', m: 4, k: ['broken|split|divid*|small*::Data is split into packets', 'destination|address::Each packet has a destination address', 'order|sequence|number*::Packets are numbered/ordered', 'protocol*|tcp|ip::Sent using protocols (TCP/IP)', 'route*|different paths|travel*|hop*::Packets travel across the network', 'reassembl*|put back|rebuil*|check*|error*::Reassembled/checked at the destination'], a: 'The data is broken into small packets. Each packet contains the destination address and its order number. The packets travel across the network using protocols such as TCP/IP, possibly by different routes. The receiving computer checks for errors and reassembles them into the original data.' },
      { q: 'Explain the difference between a hub and a switch.', m: 2, k: ['hub & {all|every|everyone|broadcast*}::A hub sends data to all devices', 'switch & {only|correct|intended|right|specific}::A switch sends data only to the correct device'], a: 'A hub sends data to every device on the network. A switch sends data only to the device it is meant for, so it is more efficient.' },
      { q: 'Give one advantage and one disadvantage of a wireless network.', m: 2, k: ['move|mobil*|anywhere|no cable*|easy to add|many devices|cheaper to install::Advantage: mobility/no cables', 'slow*|interfer*|wall*|range|distance|hack*|intercept*|secur*|less reliable|signal::Disadvantage: slower/less secure/interference'], a: 'Advantage: users can move around and add devices easily without cables. Disadvantage: it is usually slower and less secure, as signals can be intercepted or blocked by walls.' },
      { q: 'What is bandwidth and why does higher bandwidth matter?', m: 2, k: ['amount of data|data transfer*|how much data::Amount of data transferred', 'per second|time|mbps|bps::In a given time (bps)', 'faster|quick*|stream*|download*|buffer*::Higher = faster downloads/streaming'], a: 'Bandwidth is the amount of data that can be transferred in a given time (bits per second). Higher bandwidth means files download faster and videos stream without buffering.' },
      { q: 'State the purpose of each device: router, modem, access point.', m: 3, k: ['router & {connect*|direct*|route*|network*}::Router – connects networks / directs data', 'modem & {convert*|digital|analogue|analog}::Modem – converts digital/analogue signals', 'access point & {wireless|wi-fi|wifi}|access point & {wired}::Access point – lets wireless devices join a wired network'], a: 'Router – connects different networks and directs data to its destination. Modem – converts digital signals to analogue and back to connect to the internet. Access point – allows wireless devices to connect to a wired network.' },
      { q: 'Why are protocols important in a network?', m: 2, k: ['rule*|standard*|same language|common::Common rules/standards', 'different device*|understand|communicat*|compatib*::Different devices can communicate', 'accurate*|secure*|error*|reliabl*::Data sent accurately/securely'], a: 'Protocols are agreed rules, so different devices and systems can understand each other, and data is transmitted accurately and securely.' },
      { q: 'Explain the difference between a LAN and a WAN. Give an example of each.', m: 4, k: ['small|local|one building|single site::LAN covers a small area', 'school|home|office|building::LAN example', 'large|wide|country|countries|world|geograph*::WAN covers a large area', 'internet|bank*|branches|company::WAN example'], a: 'A LAN covers a small area such as a school building. A WAN covers a large geographical area, such as the internet or a company\'s offices in different countries.' }
    ],
    long: [
      { q: 'A school is setting up a new computer network. Describe the hardware it would need and explain the role of each device.', m: 6, min: 60, k: ['server::Server', 'store*|files|service*|login|provide*::Server stores files/provides services', 'switch::Switch', 'connect* device*|correct device|only::Switch connects devices/sends to correct one', 'router::Router', 'internet|other network*|direct*::Router connects to the internet', 'cable*|ethernet|copper|fibre::Cables', 'access point|wireless|wi-fi|wifi::Access point for Wi-Fi', 'nic|network interface::NICs in each device', 'modem|firewall|repeater::Other suitable device'], a: 'The school needs a server to store students\' files and manage logins. Each computer needs a NIC to connect to the network. Ethernet cables connect computers to switches, which send data only to the correct device. A router connects the school network to the internet (via a modem) and directs data to its destination. Access points allow laptops and tablets to connect wirelessly. A hardware firewall would protect the network.' },
      { q: 'Compare wired and wireless connections. Discuss speed, reliability, security, cost and convenience, and recommend which a school computer lab should use.', m: 6, min: 60, k: ['wired & {faster|speed}|faster::Wired is faster', 'reliab*|stable|interfer*|drop*::Reliability/interference', 'secur*|hack*|intercept*::Security', 'cost*|cheap*|expensive|install*::Cost/installation', 'move|mobil*|convenien*|anywhere|flexib*::Convenience/mobility', 'cable*|trip*|messy::Cables', 'range|distance|wall*::Range limits for wireless', 'recommend*|should|best|choose|lab::Justified recommendation'], a: 'Wired connections are usually faster and more reliable because they are not affected by walls or interference, and they are more secure because data cannot easily be intercepted. However, cables cost more to install and devices cannot move around. Wireless is convenient – users can move and connect many devices without cables – but it can be slower, has limited range and signals can be intercepted. A computer lab should use wired connections because the computers do not move and speed, reliability and security matter most.' },
      { q: 'Explain what protocols are and why networks need them. Describe at least three protocols and what each is used for.', m: 6, min: 50, k: ['rule*|standard*::Protocols are rules', 'communicat*|understand|same language::Allow devices to communicate', 'different device*|compatib*|any device::Different devices work together', 'tcp::TCP', 'ip::IP', 'http::HTTP (web pages)', 'https|secure|encrypt*::HTTPS (secure web)', 'ftp|file transfer::FTP (transfer files)'], a: 'A protocol is a set of rules that defines how data is sent and received. Networks need them so that different devices – computers, phones and servers – can understand each other and exchange data accurately and securely. TCP breaks data into packets and checks they arrive correctly; IP addresses and routes the packets; HTTP transfers web pages; HTTPS is the secure, encrypted version; FTP transfers files between computers.' }
    ]
  });

  /* ================= UNIT 3: SOFTWARE AND COMMUNICATION ================= */
  U({
    year: 8, num: 3, title: 'Software and Communication', icon: '📡',
    topics: ['Surveillance technology', 'Application, OS and utility software', 'Operating system roles and types', 'User interfaces', 'Utility software', 'Internet hardware'],
    vocab: [
      ['Surveillance', 'Observing someone, often without their knowledge'],
      ['Facial recognition', 'Technology that identifies people from images of their faces'],
      ['Spyware', 'Software that secretly records keystrokes, documents and internet history'],
      ['Intercept', 'To secretly capture messages as they are being sent'],
      ['Application software', 'Software that lets users carry out specific tasks'],
      ['Operating system', 'The main software that manages a computer\'s hardware and software'],
      ['Utility software', 'Software that maintains, protects or optimises the computer'],
      ['GUI', 'Graphical User Interface – icons, windows and a pointer'],
      ['CLI', 'Command Line Interface – commands are typed as text'],
      ['Multitasking', 'Running more than one program at the same time'],
      ['Defragmentation', 'Rearranging files on a hard disk so they can be read faster'],
      ['Open source', 'Software whose source code is free to view and change'],
      ['ISP', 'Internet Service Provider – the company that provides your internet connection'],
      ['GPS', 'Global Positioning System – finds the exact location of a device'],
      ['Hack', 'Gaining unauthorised access to a computer system']
    ],
    mcq: [
      { q: 'What is surveillance?', o: ['Observing someone, often without their knowledge', 'Deleting files', 'Updating software', 'Charging a phone'] },
      { q: 'Which technology can identify people from CCTV images?', o: ['Facial recognition', 'Spreadsheets', 'Defragmentation', 'Compression'] },
      { q: 'Which software secretly records keystrokes and internet history?', o: ['Spyware', 'Antivirus', 'A word processor', 'A firewall'] },
      { q: 'How can a smartphone reveal its owner\'s location?', o: ['GPS and mobile network towers', 'Its screen brightness', 'Its battery size', 'Its ringtone'] },
      { q: 'Who can usually give police a user\'s internet history if legally required?', o: ['The Internet Service Provider (ISP)', 'The keyboard manufacturer', 'The printer', 'The web browser designer'] },
      { q: 'Which is an example of APPLICATION software?', o: ['Microsoft PowerPoint', 'Windows 11', 'Disk defragmenter', 'Antivirus'] },
      { q: 'Which is an example of UTILITY software?', o: ['Antivirus', 'Excel', 'Chrome', 'Android'] },
      { q: 'Which is NOT an operating system?', o: ['Microsoft Word', 'macOS', 'Linux', 'iOS'] },
      { q: 'Which interface lets users control a device with swipes, taps and pinches?', o: ['Gesture/touch interface', 'Command line interface', 'Printer interface', 'Menu-free interface'] },
      { q: 'Talking to a smart speaker to control it is an example of which interface?', o: ['Dialogue (voice)', 'Command line', 'Gesture', 'WIMP'] },
      { q: 'Running several programs at once is called…', o: ['Multitasking', 'Defragmenting', 'Formatting', 'Compressing'] },
      { q: 'Which OS function lets you install a printer or webcam?', o: ['Managing peripheral devices', 'Word processing', 'Browsing the web', 'Drawing images'] },
      { q: 'Which utility reorganises files on a hard disk so they load faster?', o: ['Disk defragmenter', 'Antivirus', 'Web browser', 'Spreadsheet'] },
      { q: 'Which utility reduces file size?', o: ['Compression software', 'Defragmenter', 'Antivirus', 'Firewall'] },
      { q: 'Which device contains an operating system?', o: ['All of these: smartphone, smart TV, games console', 'Only desktop computers', 'Only laptops', 'None of them'] },
      { q: 'Which is the MOST suitable software to create a school newsletter?', o: ['Desktop publishing / word processing', 'Spreadsheet', 'Antivirus', 'Command line'] },
      { q: 'What does "open source" mean?', o: ['The source code is free to view and change', 'The software is broken', 'The software only works online', 'The software has no licence'] },
      { q: 'Which hardware is needed to connect a home to the internet?', o: ['Router/modem', 'Printer', 'Scanner', 'Speakers'] },
      { q: 'What does ISP stand for?', o: ['Internet Service Provider', 'Internal System Program', 'Internet Security Protocol', 'Integrated Software Package'] },
      { q: 'A modern car uses an operating system to…', o: ['Manage the engine, entertainment and climate control', 'Print documents', 'Browse social media only', 'Store paper files'] }
    ],
    tf: [
      { q: 'Surveillance technology is often used by security services to detect or prevent crimes.', a: true },
      { q: 'Spyware can access a user\'s webcam without permission.', a: true },
      { q: 'An operating system is an example of application software.', a: false, x: 'An OS is system software.', j: ['system software|system::It is system software', 'manage*|control*|run*::It manages the hardware and software'] },
      { q: 'Antivirus is utility software.', a: true },
      { q: 'Smart TVs and games consoles do not need software.', a: false, x: 'They contain operating systems and applications.' },
      { q: 'A CLI requires the user to type text commands.', a: true },
      { q: 'A GUI is the most common way people interact with an operating system.', a: true },
      { q: 'Utility software is used to write essays.', a: false, x: 'That is application software (a word processor). Utilities maintain the computer.' },
      { q: 'Linux is an example of open-source software.', a: true },
      { q: 'Without an operating system you could still install printers and apps easily.', a: false, j: ['operating system|os::The OS is needed', 'driver*|manage*|install*|peripheral*::It manages installing devices/apps'] },
      { q: 'Social media activity can be used as a surveillance tool.', a: true },
      { q: 'Employers can use software to monitor work done by employees at home.', a: true },
      { q: 'Compression software makes files larger.', a: false }
    ],
    cloze: [
      { t: '[Surveillance] is observing someone without their knowledge. Cameras combined with [facial] recognition can track people\'s movements. Smartphones log their [GPS] position. [Spyware] can record keystrokes and internet history. Messages can be [intercepted] if a messaging service is hacked. Most law enforcement agencies can access internet history via the [ISP|internet service provider].', d: ['firewall', 'defragmenter'] },
      { t: 'There are three types of software. [Application] software helps users do tasks, e.g. PowerPoint. The [operating] system manages the hardware and software, e.g. Windows. [Utility] software maintains the computer, e.g. [antivirus]. Users interact with an OS through a [GUI], a CLI, voice (dialogue) or [gestures].', d: ['hardware', 'modem'] },
      { t: 'The operating system controls [hardware] such as the CPU and memory, manages [files] and folders, runs [applications], provides a user [interface] and manages tasks so several programs can run at once, called [multitasking]. It also manages [security] settings.', d: ['printing', 'spreadsheets'] }
    ],
    short: [
      { q: 'Give three examples of how technology is used for surveillance.', m: 3, k: ['camera*|cctv|facial recognition::Cameras/facial recognition', 'gps|smartphone|phone|location|smartwatch|tower*::Phone/GPS location data', 'spyware|keystroke*|keylog*::Spyware', 'intercept*|message*|hack*::Intercepting messages', 'social media|friend*::Social media', 'isp|internet history|provider::ISP internet history'], a: 'CCTV cameras with facial recognition track movements; smartphones reveal GPS location; spyware records keystrokes and internet history.' },
      { q: 'Explain the difference between application, operating system and utility software.', m: 3, k: ['application & {task*|user*|specific|help*}|application & {word|powerpoint|excel|game}::Application – user tasks', '{operating system|os} & {manage*|control*|run*}::OS – manages hardware/software', 'utility & {maintain*|protect*|optimis*|antivirus|clean*|backup}::Utility – maintains/protects the computer'], a: 'Application software lets users carry out specific tasks, e.g. PowerPoint. The operating system manages the hardware and software, e.g. Windows. Utility software maintains and protects the computer, e.g. antivirus.' },
      { q: 'Describe four roles of an operating system.', m: 4, k: ['hardware|cpu|memory|storage::Controls hardware (CPU/memory)', 'file*|folder*::Manages files and folders', 'application*|program*|run*::Runs applications', 'interface|gui|icon*|desktop::Provides a user interface', 'multitask*|task*::Manages tasks/multitasking', 'secur*|password*|account*|update*::Manages security', 'peripheral*|printer*|device*|driver*::Manages peripherals'], a: 'It controls hardware like the CPU and memory, manages files and folders, runs applications, provides a user interface, and allows multitasking.' },
      { q: 'Name four ways a user can interact with an operating system.', m: 4, k: ['gui|graphical::GUI', 'cli|command line::CLI', 'dialogue|voice|speech|talk*::Dialogue/voice', 'gesture*|touch*|swipe*::Gesture/touch'], a: 'Graphical user interface (GUI), command line interface (CLI), dialogue (voice) and gesture/touch screen.' },
      { q: 'Name three devices, other than desktop and laptop computers, that need an operating system.', m: 3, k: ['smartphone*|phone*|mobile*::Smartphone', 'tablet*|ipad::Tablet', 'smart speaker*|alexa|speaker*::Smart speaker', 'console*|playstation|xbox|games::Games console', 'tv|television*::Smart TV', 'car*::Modern car', 'watch*::Smartwatch'], a: 'Smartphones, tablets, smart speakers, games consoles, smart TVs and modern cars.' },
      { q: 'Describe what the term "open source" means.', m: 2, k: ['source code|code::The source code', 'free|anyone|public|view|change|modif*|edit*::…is free for anyone to view and change'], a: 'Open-source software is software whose source code is freely available, so anyone can view, change and share it.' },
      { q: 'Give two types of utility software and explain what each does.', m: 4, k: ['antivirus|anti-virus::Antivirus', 'virus*|malware|scan*|remov*::…scans for/removes malware', 'defrag*::Defragmenter', 'rearrang*|faster|fragment*::…rearranges files to load faster', 'backup::Backup', 'copy|restore::…copies files so they can be restored', 'compress*|zip::Compression', 'smaller|reduce*::…makes files smaller', 'firewall|disk clean*|clean*::Other utility with purpose'], a: 'Antivirus – scans for and removes malware. Disk defragmenter – rearranges fragmented files so the hard disk reads them faster.' },
      { q: 'Explain the difference between a GUI and a CLI.', m: 2, k: ['icon*|window*|menu*|pointer|click*|graphic*::GUI uses icons/windows/pointer', 'type*|text|command*::CLI uses typed commands'], a: 'A GUI lets users interact with icons, windows and menus using a pointer. A CLI requires users to type text commands.' }
    ],
    long: [
      { q: 'Discuss the advantages and disadvantages of surveillance technology in society. Use examples such as CCTV, facial recognition, phone tracking and spyware.', m: 6, min: 60, k: ['crime|criminal*|police|security|safe*::Helps prevent/detect crime', 'cctv|camera*::CCTV example', 'facial recognition::Facial recognition example', 'gps|location|phone|track*::Phone tracking example', 'spyware|keystroke*::Spyware example', 'privacy|without knowledge|consent|permission::Invasion of privacy', 'misuse*|hack*|stolen|abuse*|wrong person|mistake*::Data can be misused/errors', 'however|on the other hand|but|although::Balanced discussion', 'conclusion|overall|i think|therefore::Conclusion'], a: 'Surveillance helps keep society safe: CCTV and facial recognition help police find criminals and deter crime, and phone GPS tracking can locate missing people. However, it invades privacy because people are watched without their knowledge or consent. Data can be misused or hacked, and facial recognition can wrongly identify innocent people. Spyware can be used by criminals to steal passwords. Overall, surveillance is useful for security but must be controlled by laws to protect privacy.' },
      { q: 'Explain the purpose of an operating system. Describe its key roles and the different ways users can interact with it, giving examples of operating systems on different devices.', m: 6, min: 60, k: ['manage*|control*::Manages hardware and software', 'hardware|cpu|memory::Controls hardware', 'file*|folder*::File management', 'application*|program*|install*::Runs/installs applications', 'multitask*::Multitasking', 'secur*|update*|password*::Security', 'gui|cli|voice|dialogue|gesture|touch::Interaction methods', 'windows|macos|linux::Computer OS examples', 'android|ios|console|tv|car|speaker::Other device OS examples'], a: 'The operating system is the main software that manages a computer\'s hardware and software and lets users interact with it. It controls hardware such as the CPU and memory, manages files and folders, runs and installs applications, allows multitasking, and manages security and updates. Users can interact through a GUI (icons and windows), a CLI (typed commands), dialogue (voice, e.g. smart speakers) or gestures (touch screens). Examples include Windows, macOS and Linux on computers, and Android and iOS on phones and tablets.' },
      { q: 'A small business is choosing software. Recommend suitable application, operating system and utility software, explaining why each is needed.', m: 6, min: 55, k: ['operating system|windows|macos|linux::Chooses an OS', 'manage*|run*|hardware::Explains OS role', 'word|document*|letter*::Word processor for documents', 'excel|spreadsheet*|financ*|budget*|accounts::Spreadsheet for finances', 'powerpoint|presentation*::Presentation software', 'email|outlook|browser::Email/browser', 'antivirus|anti-virus|malware::Antivirus', 'backup::Backup software', 'firewall|compress*|defrag*::Other utility'], a: 'The business needs an operating system such as Windows to manage the computers\' hardware and run all other software. For applications, a word processor (Word) for letters, a spreadsheet (Excel) for accounts and budgets, presentation software for pitching to customers, and email software to communicate. For utilities, antivirus software to protect customer data from malware, backup software so data can be restored if lost, and a firewall to block unauthorised access.' }
    ]
  });

  /* ================= UNIT 4: SPREADSHEETS ================= */
  U({
    year: 8, num: 4, title: 'Spreadsheets', icon: '📈',
    topics: ['Purpose of spreadsheets', 'Cells, rows and columns', 'Formulas and functions', 'Cell referencing', 'Modelling: what-if and goal seek', 'Charts'],
    vocab: [
      ['Spreadsheet', 'A digital tool used to organise, store and analyse data in rows and columns'],
      ['Cell', 'A box where a row and column meet, e.g. B3'],
      ['Row', 'A horizontal line of cells, numbered 1, 2, 3…'],
      ['Column', 'A vertical line of cells, labelled A, B, C…'],
      ['Formula', 'An equation that calculates a value; it always starts with ='],
      ['Function', 'A built-in formula such as SUM or AVERAGE'],
      ['Cell reference', 'The address of a cell, like A1, used in a formula'],
      ['Relative reference', 'A reference that changes when the formula is copied, e.g. =A1+B1'],
      ['Absolute reference', 'A reference that stays the same when copied, e.g. =$A$1'],
      ['Range', 'A group of cells, e.g. A1:A5'],
      ['Spreadsheet model', 'A spreadsheet that represents a real-life problem to predict outcomes'],
      ['What-if analysis', 'Changing values to see how the results change'],
      ['Goal Seek', 'A tool that works backwards to find the input needed for a target result'],
      ['Chart', 'A visual representation of data'],
      ['Workbook', 'An Excel file that contains one or more worksheets'],
      ['Worksheet', 'A single sheet (grid) inside a workbook']
    ],
    gen: [{ g: 'sheetFn', t: ['mcq', 'short'], m: 2, w: 5 }],
    mcq: [
      { q: 'What must every formula in Excel start with?', o: ['=', '+', '#', '$'] },
      { q: 'What is a cell?', o: ['Where a row and column meet', 'A whole column', 'A chart', 'A worksheet'] },
      { q: 'Columns in a spreadsheet are labelled with…', o: ['Letters (A, B, C…)', 'Numbers (1, 2, 3…)', 'Colours', 'Symbols'] },
      { q: 'Which function adds a range of numbers?', o: ['SUM', 'AVERAGE', 'MAX', 'MIN'] },
      { q: 'Which function finds the mean?', o: ['AVERAGE', 'SUM', 'MAX', 'COUNT'] },
      { q: 'Which function finds the largest value?', o: ['MAX', 'MIN', 'SUM', 'AVERAGE'] },
      { q: 'Which function finds the smallest value?', o: ['MIN', 'MAX', 'SUM', 'AVERAGE'] },
      { q: 'Which is the correct formula to add cells A1 to A5?', o: ['=SUM(A1:A5)', 'SUM(A1-A5)', '=ADD(A1:A5)', '=A1:A5'] },
      { q: 'Which symbol is used for multiplication in Excel?', o: ['*', 'x', '×', '#'] },
      { q: 'Which symbol is used for division in Excel?', o: ['/', '÷', '\\', ':'] },
      { q: 'What is the difference between a formula and a function?', o: ['A function is a built-in formula like SUM', 'A formula is always a chart', 'They cannot be used together', 'Functions do not start with ='] },
      { q: 'Which is an ABSOLUTE cell reference?', o: ['$A$1', 'A1', 'A$', '1A'] },
      { q: 'What happens to a relative reference when you copy a formula down?', o: ['It changes to match the new position', 'It stays exactly the same', 'It is deleted', 'It turns into text'] },
      { q: 'Why is cell referencing useful?', o: ['If the values change, the formula updates automatically', 'It makes the text bold', 'It creates charts', 'It saves the file'] },
      { q: 'Which tool works BACKWARDS to find the input needed to reach a target?', o: ['Goal Seek', 'What-if scenario', 'SUM', 'Chart wizard'], j: { k: ['backward*|target|goal|result you want::Starts from the target result', 'input|value needed|find*::Finds the input needed'] } },
      { q: '"What if we increase the price by 10%?" is an example of…', o: ['A what-if scenario', 'Goal Seek', 'A chart', 'Formatting'] },
      { q: 'Which chart is best for showing parts of a whole?', o: ['Pie chart', 'Line chart', 'Column chart', 'Bar chart'] },
      { q: 'Which chart is best for showing trends over time (e.g. monthly sales)?', o: ['Line chart', 'Pie chart', 'Bar chart', 'Doughnut chart'] },
      { q: 'Which chart uses vertical bars to compare categories?', o: ['Column chart', 'Pie chart', 'Line chart', 'Scatter chart'] },
      { q: 'Which is a good use of a spreadsheet?', o: ['Planning a budget', 'Writing a story', 'Editing a photo', 'Recording a video'] },
      { q: 'In Excel, where do you find Goal Seek?', o: ['Data → What-If Analysis → Goal Seek', 'Insert → Pictures', 'Home → Bold', 'File → Print'] },
      { q: 'What is a workbook?', o: ['An Excel file containing one or more worksheets', 'A single cell', 'A type of chart', 'A function'] },
      { q: 'What does merging cells do?', o: ['Combines several cells into one', 'Deletes cells', 'Adds numbers', 'Sorts data'] }
    ],
    tf: [
      { q: 'Every Excel formula starts with an equals sign (=).', a: true },
      { q: 'Rows are labelled with letters.', a: false, x: 'Rows are numbered; columns use letters.', j: ['number*|1, 2|1 2::Rows are numbered', 'column*::Columns use letters'] },
      { q: '=AVERAGE(B1:B5) finds the mean of cells B1 to B5.', a: true },
      { q: 'An absolute reference changes when the formula is copied.', a: false, x: 'Absolute references ($A$1) stay the same; relative references change.', j: ['same|fixed|doesn\'t change|does not change|stays::Absolute stays the same', 'relative & {change*}|a1::Relative references change'] },
      { q: 'If you change a value in a cell, formulas that use that cell recalculate automatically.', a: true },
      { q: 'A pie chart is best for showing change over time.', a: false, x: 'A line chart shows trends over time. A pie chart shows parts of a whole.' },
      { q: 'Goal Seek finds the input needed to reach a specific result.', a: true },
      { q: 'Charts make data easier to understand and compare.', a: true },
      { q: '=A1*B1 adds A1 and B1.', a: false, x: '* multiplies. + adds.' },
      { q: 'A spreadsheet model can help a business predict outcomes.', a: true },
      { q: 'MIN finds the largest number in a range.', a: false },
      { q: 'A worksheet is a single sheet inside a workbook.', a: true },
      { q: 'Borders and cell colours are formatting tools.', a: true }
    ],
    cloze: [
      { t: 'A [spreadsheet] is made up of rows and columns. Columns are labelled with [letters] and rows with [numbers]. Where a row and column meet is called a [cell]. Every formula starts with an [equals|=] sign. A built-in formula like SUM is called a [function].', d: ['chart', 'pixel'] },
      { t: 'The [SUM] function adds a group of numbers. The [AVERAGE] function finds the mean. The [MIN] function finds the smallest number and the [MAX] function finds the largest. A cell [reference] like B3 tells Excel where to look. The reference $A$1 is an [absolute] reference.', d: ['COUNT', 'relative'] },
      { t: 'A spreadsheet [model] represents a real-life problem. A [what-if|what if] scenario lets you change values and see how results change. [Goal] Seek works [backwards] to find the input needed to reach a target. To show trends over time use a [line] chart, and to show parts of a whole use a [pie] chart.', d: ['column', 'forwards'] }
    ],
    short: [
      { q: 'Explain the difference between a formula and a function. Give an example of each.', m: 4, k: ['equation|calculat*|user|you write|created::A formula is an equation the user writes', '=a1|= a1|=b|+|\\*::Formula example (e.g. =A1+B1)', 'built-in|built in|pre-made|ready-made|named::A function is a built-in formula', 'sum|average|max|min::Function example (e.g. SUM)'], a: 'A formula is an equation written by the user, e.g. =A1+B1. A function is a built-in formula provided by Excel, e.g. =SUM(A1:A5).' },
      { q: 'Write a formula to find the average of cells B1 to B5.', m: 2, exact: ['=AVERAGE(B1:B5)', '=average(b1:b5)', '=AVERAGE(B1:B5) ', 'AVERAGE(B1:B5)'], a: '=AVERAGE(B1:B5)' },
      { q: 'Why is using cell references in formulas better than typing the numbers in?', m: 2, k: ['change*|update*|recalculat*|automatic*::Formula updates automatically when values change', 'time|mistake*|error*|accura*|copy::Saves time/fewer errors/can be copied'], a: 'If the values in the cells change, the formula updates automatically. This saves time and reduces mistakes.' },
      { q: 'Explain the difference between relative and absolute cell references.', m: 2, k: ['relative & {change*|adjust*|move*}::Relative changes when copied', 'absolute & {same|fixed|lock*|doesn\'t change|does not change|stay*|$}::Absolute stays the same ($)'], a: 'A relative reference (e.g. A1) changes when the formula is copied to another cell. An absolute reference (e.g. $A$1) stays the same when copied.' },
      { q: 'What is the difference between a what-if scenario and Goal Seek?', m: 2, k: ['change* & {see|result*|outcome*}|try different::What-if: change inputs to see results', 'backward*|target|goal & {input|find}|input needed::Goal Seek: finds the input needed for a target'], a: 'A what-if scenario lets you change input values to see how the results change. Goal Seek works backwards from the result you want to find the input needed.' },
      { q: 'Give two reasons why charts are used to present data.', m: 2, k: ['understand|easier|simple|clear::Easier to understand', 'trend*|pattern*::Spot trends/patterns', 'compar*::Compare values', 'engag*|interest*|attractive|visual::More engaging'], a: 'Charts make complex data easier to understand and help you spot trends and compare values quickly.' },
      { q: 'Name the most suitable chart for each: (a) monthly sales over a year, (b) how a budget is split, (c) number of students in each class.', m: 3, k: ['line::(a) Line chart', 'pie|doughnut::(b) Pie chart', 'column|bar::(c) Column/bar chart'], a: '(a) Line chart, (b) pie chart, (c) column (or bar) chart.' },
      { q: 'Give three uses of spreadsheets in real life.', m: 3, k: ['budget*|money|financ*|accounts|expense*::Budgets/finances', 'mark*|grade*|score*|results::Student marks', 'timetable*|schedul*|rota::Timetables', 'stock|inventor*|sales::Stock/sales', 'list*|register*|attendance::Lists/registers', 'model*|predict*|forecast*::Modelling/predictions', 'chart*|graph*::Charts'], a: 'Planning a budget, recording student marks, and tracking sales or stock for a shop.' },
      { q: 'You run a lemonade stand selling cups for $2. Explain how Goal Seek could find how many cups you must sell to earn $100.', m: 3, k: ['formula|= |price|quantity|\\*|multipl*::Set up a formula (price × quantity)', 'target|100|goal|set cell::Set the target value to 100', 'changing cell|quantity|cups|input|by changing::Change the quantity cell', '50::Answer: 50 cups'], a: 'Put the price ($2) and quantity in cells and a formula =B1*B2 for income. Use Data → What-If Analysis → Goal Seek, set the income cell to 100 by changing the quantity cell. Goal Seek finds 50 cups.' }
    ],
    long: [
      { q: 'A school tuck shop wants to use a spreadsheet to manage its sales. Explain how it could use formulas, functions, cell referencing, what-if scenarios and charts.', m: 6, min: 60, k: ['formula*|=::Formulas', 'price & {quantity|number sold}|\\*|multipl*::e.g. price × quantity', 'sum|total::SUM for totals', 'average|max|min::AVERAGE/MAX/MIN', 'cell referenc*|reference*|update*|automatic*::Cell references update automatically', 'what-if|what if|change the price|scenario::What-if scenarios', 'goal seek|target|profit goal::Goal Seek', 'chart*|graph*::Charts', 'best-selling|trend*|compare|pie|line|column::Uses chart to compare/show trends'], a: 'The tuck shop could list items with price and quantity sold, then use a formula =B2*C2 to calculate income for each item. SUM would total the day\'s income, MAX would find the best-selling item and AVERAGE the average daily sales. Using cell references means totals update automatically when a price changes. A what-if scenario could test "what if we raise the price of juice by 1 QAR?". Goal Seek could find how many items must be sold to reach a profit target. A column chart could compare sales of each item, and a line chart could show sales trends over the term.' },
      { q: 'Explain what a spreadsheet model is. Describe how what-if scenarios and Goal Seek help people make decisions, using a real-life example.', m: 6, min: 55, k: ['represent*|real-life|real life|real world|problem::A model represents a real-life problem', 'predict*|decision*|outcome*|forecast*::Used to predict outcomes/make decisions', 'formula*|function*|data::Uses data and formulas', 'what-if|what if::What-if scenarios', 'change* & {see|result*|value*}::Change inputs to see results', 'goal seek::Goal Seek', 'backward*|target|input needed::Works backwards from a target', 'budget|business|price|sales|t-shirt|lemonade|score|grade*|trip|party::Real-life example'], a: 'A spreadsheet model uses data, formulas and functions to represent a real-life problem so people can predict outcomes and make decisions. A what-if scenario lets you change input values and immediately see how the results change – e.g. a t-shirt business selling shirts at $15 can ask "what if we raise the price to $20?" and see the new income. Goal Seek works backwards: if the business wants to make $600, Goal Seek finds that 40 t-shirts must be sold. This helps the owner set prices and targets without guessing.' },
      { q: 'Compare the four main chart types (column, bar, line and pie). For each, describe what it looks like, what it is best used for, and give an example.', m: 6, min: 55, k: ['column & {vertical}::Column – vertical bars', 'bar & {horizontal}::Bar – horizontal bars', 'line & {point*|connect*|line*}::Line – points joined by lines', 'pie & {circle|slice*}::Pie – circle divided into slices', 'compar*|categor*::Column/bar for comparisons', 'trend*|over time::Line for trends over time', 'part* of a whole|proportion*|percentage*::Pie for parts of a whole', 'class*|country|population|month*|budget|survey::Examples given'], a: 'A column chart uses vertical bars and is best for comparing categories, e.g. students in each class. A bar chart uses horizontal bars and suits long category names, e.g. population by country. A line chart joins data points with lines and shows trends over time, e.g. monthly sales. A pie chart is a circle divided into slices showing parts of a whole, e.g. how a budget is split.' }
    ]
  });

  /* ================= UNIT 5: BINARY AND ONLINE GRAPHICS ================= */
  U({
    year: 8, num: 5, title: 'Binary and Online Graphics', icon: '🖼️',
    topics: ['Vector graphics', 'Bitmap images and pixels', 'Resolution', 'Vector vs bitmap', 'Binary pixels and colour depth', 'Image file size'],
    vocab: [
      ['Vector graphic', 'An image made from shapes, lines and coordinates that can be resized without losing quality'],
      ['Bitmap', 'An image made from a grid of pixels'],
      ['Pixel', 'The smallest element of a bitmap image – a single coloured square'],
      ['Resolution', 'The number of pixels in an image (width × height)'],
      ['Colour depth', 'The number of bits used to store the colour of each pixel'],
      ['Coordinates', 'x and y positions used to place shapes in a vector graphic'],
      ['Pixelation', 'When an enlarged bitmap looks blocky because the pixels become visible'],
      ['File size', 'The amount of storage an image needs: width × height × colour depth'],
      ['Binary sequence', 'A string of 0s and 1s that represents the pixels of an image'],
      ['Metadata', 'Extra data stored with an image, such as width, height and colour depth'],
      ['Scalable', 'Can be made bigger or smaller without losing quality'],
      ['Image quality', 'How clear and detailed an image appears']
    ],
    gen: [
      { g: 'colourDepth', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'imageSize', t: ['mcq', 'short'], m: 2, w: 4 },
      { g: 'binToDen', t: ['mcq', 'short'], m: 2, w: 2 },
      { g: 'denToBin', t: ['mcq', 'short'], m: 2, w: 2 }
    ],
    mcq: [
      { q: 'What is a pixel?', o: ['The smallest single coloured element of a bitmap image', 'A type of vector shape', 'A unit of sound', 'A computer virus'] },
      { q: 'Vector graphics are created using…', o: ['Shapes, lines and coordinates', 'A grid of pixels', 'Sound waves', 'Photographs only'] },
      { q: 'What happens when you enlarge a bitmap image a lot?', o: ['It becomes pixelated (blocky)', 'It becomes sharper', 'It turns into a vector', 'Its file size becomes zero'], j: { k: ['pixel*|block*|square*|blur*::The pixels become visible/blocky', 'fixed|stretch*|same number|no new detail|grid::It has a fixed number of pixels'] } },
      { q: 'Which is the BEST format for a company logo that must be printed on business cards and billboards?', o: ['Vector', 'Bitmap', 'Low-resolution JPEG', 'GIF animation'] },
      { q: 'Which is the BEST type of image for a detailed photograph?', o: ['Bitmap', 'Vector', 'Text file', 'Spreadsheet'] },
      { q: 'What is resolution?', o: ['The number of pixels in an image', 'The number of colours in a vector', 'The speed of the CPU', 'The size of the monitor'] },
      { q: 'What is colour depth?', o: ['The number of bits used for each pixel\'s colour', 'How dark an image is', 'The number of pixels wide', 'The screen brightness'] },
      { q: 'How many colours can a 1-bit image show?', o: ['2', '1', '4', '8'] },
      { q: 'How many colours can a 2-bit image show?', o: ['4', '2', '3', '8'] },
      { q: 'In a 1-bit black-and-white image, 1 could represent black and 0 could represent…', o: ['White', 'Red', 'Blue', 'Grey'] },
      { q: 'What is the formula for image file size (in bits)?', o: ['Width × height × colour depth', 'Width + height + colour depth', 'Width × height ÷ 8', 'Colour depth × 8'] },
      { q: 'Increasing the colour depth of an image will…', o: ['Increase the file size', 'Decrease the file size', 'Not change the file size', 'Delete the image'] },
      { q: 'Increasing the resolution of an image will…', o: ['Increase the file size and detail', 'Reduce the number of pixels', 'Remove colours', 'Turn it into a vector'] },
      { q: 'Which is an ADVANTAGE of vector graphics?', o: ['They can be resized without losing quality', 'They are best for photographs', 'They are made of pixels', 'They always have huge file sizes'] },
      { q: 'Which is a DISADVANTAGE of bitmap images?', o: ['They lose quality when enlarged', 'They cannot show photographs', 'They cannot be stored in binary', 'They only use 2 colours'] },
      { q: 'Metadata stored with an image includes…', o: ['Width, height and colour depth', 'The user\'s password', 'The CPU speed', 'The printer name'] },
      { q: 'Which software is commonly used to create vector graphics?', o: ['Illustrator / Inkscape', 'MS Paint', 'Notepad', 'Excel'] },
      { q: 'Why do vector graphic files often have a smaller file size than photographs?', o: ['They store shapes as instructions, not every pixel', 'They use no colours', 'They are compressed audio', 'They are always black and white'] }
    ],
    tf: [
      { q: 'Vector graphics can be enlarged without losing quality.', a: true, j: ['shape*|line*|coordinate*|mathemat*|instruction*::Made from shapes/coordinates', 'recalculat*|redraw*|no pixels|not pixels::They are redrawn, not stretched pixels'] },
      { q: 'A bitmap image is made from shapes and coordinates.', a: false, x: 'Bitmaps are made from a grid of pixels.', j: ['pixel*|grid::Bitmaps are a grid of pixels', 'vector::Vectors use shapes/coordinates'] },
      { q: 'A higher resolution image has more pixels.', a: true },
      { q: 'A 3-bit colour depth allows 8 different colours.', a: true, x: '2³ = 8.' },
      { q: 'Increasing colour depth reduces file size.', a: false, x: 'More bits per pixel means a larger file.' },
      { q: 'Photographs are usually stored as bitmaps.', a: true },
      { q: 'Each pixel\'s colour is stored as a binary number.', a: true },
      { q: 'A logo should be stored as a bitmap so it can be enlarged for a billboard.', a: false, x: 'A vector is better because it scales without losing quality.' },
      { q: 'File size in bits = width × height × colour depth.', a: true },
      { q: 'To convert bits to bytes you divide by 8.', a: true },
      { q: 'A 1-bit image can show only black and white.', a: true },
      { q: 'Enlarging a bitmap too much causes pixelation.', a: true }
    ],
    cloze: [
      { t: 'A [bitmap] image is made from a grid of [pixels]. The number of pixels in an image is its [resolution]. When a bitmap is enlarged too much it becomes [pixelated]. A [vector] graphic is made from shapes, lines and [coordinates], so it can be resized without losing quality.', d: ['packets', 'bandwidth'] },
      { t: 'Each pixel\'s colour is stored in [binary]. The number of bits used per pixel is called the colour [depth]. With 1 bit there are [2|two] colours, such as black and white. With 2 bits there are [4|four] colours. The more bits per pixel, the [more] colours can be shown and the [larger] the file size.', d: ['fewer', 'smaller'] },
      { t: 'To calculate the file size of an image, multiply the [width] by the [height] by the colour [depth]. This gives the size in [bits]. To convert the answer into bytes, divide by [8|eight]. Information such as width and height stored with the image is called [metadata].', d: ['pixels', '10'] }
    ],
    short: [
      { q: 'Explain the difference between a vector graphic and a bitmap image.', m: 2, k: ['vector & {shape*|line*|coordinate*|mathemat*|object*}::Vector – shapes/coordinates', 'bitmap & {pixel*|grid}::Bitmap – grid of pixels'], a: 'A vector graphic is made from shapes, lines and coordinates. A bitmap image is made from a grid of pixels.' },
      { q: 'Give one advantage and one disadvantage of vector graphics.', m: 2, k: ['resiz*|scal*|enlarg*|without losing quality|small file*::Advantage: scalable / small file', 'photo*|realistic|complex|detail*|natural::Disadvantage: not suitable for photos/complex images'], a: 'Advantage: they can be resized without losing quality. Disadvantage: they are not suitable for realistic photographs.' },
      { q: 'Explain why a bitmap image becomes pixelated when it is enlarged.', m: 2, k: ['fixed|set number|same number|limited::It has a fixed number of pixels', 'bigger|stretch*|enlarg*|visible|block*|square*::Pixels are stretched and become visible'], a: 'A bitmap has a fixed number of pixels. When it is enlarged, each pixel is stretched so the squares become visible, making it blocky.' },
      { q: 'What is colour depth? Explain how it affects an image.', m: 3, k: ['bits|bit::Number of bits', 'per pixel|each pixel::…per pixel', 'more colour*|colour*::More bits = more colours', 'file size|bigger|larger|storage::…and a larger file size', 'quality|realistic::Better quality'], a: 'Colour depth is the number of bits used to store the colour of each pixel. More bits allow more colours, so the image looks more realistic, but the file size is larger.' },
      { q: 'Explain how a black-and-white image can be stored in binary.', m: 3, k: ['pixel*::Image is split into pixels', '1 bit|one bit|single bit|1-bit::Each pixel uses 1 bit', '1 & {black|white}|0 & {black|white}::1 = black, 0 = white (or vice versa)', 'row*|sequence|order|left to right::Stored as a sequence row by row'], a: 'The image is split into pixels and each pixel is stored using 1 bit: 1 for black and 0 for white. The bits are stored as a binary sequence, row by row.' },
      { q: 'Give two factors that affect the file size of an image.', m: 2, k: ['resolution|width|height|number of pixels|dimension*::Resolution/number of pixels', 'colour depth|bits per pixel::Colour depth'], a: 'The resolution (width × height in pixels) and the colour depth (bits per pixel).' },
      { q: 'Recommend whether a bitmap or vector should be used for (a) a school logo and (b) a holiday photo. Explain why.', m: 4, k: ['vector::(a) Vector', 'resiz*|scal*|enlarg*|different size*|without losing quality::…because it can be resized without losing quality', 'bitmap::(b) Bitmap', 'detail*|colour*|realistic|photo*|shading::…because photos need detail and many colours'], a: '(a) Vector – the logo can be resized for letters and banners without losing quality. (b) Bitmap – a photo needs lots of detail and colour variation, which pixels can store.' }
    ],
    long: [
      { q: 'Compare vector graphics and bitmap images. Discuss how each is created, their advantages and disadvantages, and give situations where each would be most suitable.', m: 6, min: 60, k: ['vector & {shape*|coordinate*|line*|mathemat*}::Vector made from shapes/coordinates', 'bitmap & {pixel*|grid}::Bitmap made from pixels', 'scal*|resiz*|without losing quality::Vector scales without losing quality', 'small* file|file size::Vector smaller file sizes', 'photo*|realistic|detail*::Bitmap best for photos', 'pixelat*|block*|lose quality::Bitmap pixelates when enlarged', 'large* file|big file|colour depth|resolution::Bitmap file size depends on resolution/colour depth', 'logo*|icon*|diagram*|font*|map*::Vector suitable uses', 'photograph*|photo*|scan*|painting*::Bitmap suitable uses'], a: 'Vector graphics are made from shapes, lines and coordinates, stored as mathematical instructions. They can be resized to any size without losing quality and usually have small file sizes, but they cannot show realistic photos. They suit logos, icons and diagrams. Bitmaps are made from a grid of pixels, each storing a colour in binary. They can show detailed, realistic photographs, but they become pixelated when enlarged and have large file sizes that depend on resolution and colour depth. They suit photos and scanned images.' },
      { q: 'Explain how images are stored in binary. Include pixels, colour depth, resolution and how to calculate file size, with a worked example.', m: 6, min: 55, k: ['pixel*::Image is made of pixels', 'binary|bits::Each pixel stored in binary', 'colour depth|bits per pixel::Colour depth', '2|power|colours::More bits = more colours (2^n)', 'resolution|width & height::Resolution', 'width & height & {colour depth|depth}::File size = width × height × colour depth', '8|bytes::Divide by 8 for bytes', '\\d+ × \\d+|x|\\*|times|multipl*::Worked example with numbers', 'metadata::Metadata'], a: 'A bitmap is made from pixels. Each pixel\'s colour is stored as a binary number. The colour depth is the number of bits per pixel – 1 bit gives 2 colours, 2 bits give 4, 8 bits give 256 (2^n). Resolution is the number of pixels (width × height). File size in bits = width × height × colour depth. E.g. a 10 × 10 image with 2-bit colour = 10 × 10 × 2 = 200 bits, ÷ 8 = 25 bytes. Metadata such as width, height and colour depth is also stored so the computer can rebuild the image.' },
      { q: 'A web designer wants images on a website to load quickly but still look good. Explain how resolution, colour depth and image type affect quality and file size, and give them advice.', m: 6, min: 55, k: ['resolution::Resolution', 'more pixels|higher resolution & {detail*|quality|sharp*}::Higher resolution = more detail', 'larger|bigger file|file size::…but larger file size', 'colour depth::Colour depth', 'more colour*|realistic::More colour depth = more colours', 'load*|slow*|download*|fast*|bandwidth::Large files load slowly', 'vector::Use vectors for logos/icons', 'compress*|jpeg|jpg|png|reduce|resize::Compress/resize images', 'balance|trade-off|appropriate|suitable::Balance quality and size'], a: 'Higher resolution means more pixels and more detail, but also a larger file size. Higher colour depth gives more colours and more realistic images, but again increases file size. Large files take longer to download, so pages load slowly. The designer should use vector graphics for logos and icons because they are small and scale perfectly, resize photos to the size actually displayed, use a sensible colour depth, and compress photos (e.g. JPEG). This balances good quality with fast loading.' }
    ]
  });

  /* ================= UNIT 6: INTERNET ================= */
  U({
    year: 8, num: 6, title: 'Internet', icon: '🌍',
    topics: ['What is the internet?', 'Packets, protocols and addressing', 'Internet vs WWW vs services', 'IP addresses and TCP/IP', 'VoIP and email', 'HTTP vs HTTPS', 'Connectivity and IoT'],
    vocab: [
      ['Internet', 'A worldwide collection of interconnected networks'],
      ['World Wide Web', 'The collection of web pages and websites accessed through the internet using a browser'],
      ['Internet service', 'A way of using the internet, e.g. email, streaming or online shopping'],
      ['Packet', 'A small piece of data sent across the internet with an address label'],
      ['Addressing', 'The system used to identify the location of each device so packets reach the right place'],
      ['IP address', 'A unique number that identifies a device on a network or the internet'],
      ['TCP/IP', 'The set of protocols that govern how data is sent over the internet'],
      ['VoIP', 'Voice over Internet Protocol – making voice calls over the internet'],
      ['Email', 'Electronic mail – sending messages and files over the internet'],
      ['HTTP', 'HyperText Transfer Protocol – used to transfer web pages'],
      ['HTTPS', 'The secure, encrypted version of HTTP'],
      ['Web browser', 'Software used to view websites, e.g. Chrome'],
      ['IoT', 'Internet of Things – everyday devices connected to the internet that collect and share data'],
      ['Geolocation', 'Identifying the real-world location of a device'],
      ['Sensor', 'A device that detects and measures things such as sound, light or movement'],
      ['Connectivity', 'The ability of devices to connect and share information']
    ],
    mcq: [
      { q: 'What is the internet?', o: ['A worldwide collection of interconnected networks', 'A single website', 'A web browser', 'A type of computer'] },
      { q: 'What is the World Wide Web?', o: ['The collection of web pages accessed through the internet', 'The cables under the sea', 'Another name for email', 'A search engine'] },
      { q: 'Which statement is TRUE?', o: ['The WWW is one part of the internet', 'The internet is part of the WWW', 'They are exactly the same thing', 'The WWW has nothing to do with the internet'], j: { k: ['network*|hardware|infrastructure|connected computers::The internet is the network/infrastructure', 'web page*|website*|browser::The WWW is web pages viewed in a browser', 'part of|one of the services|service::The WWW is one service of the internet'] } },
      { q: 'Which is an example of an internet SERVICE?', o: ['Email', 'A keyboard', 'A CPU', 'A monitor'] },
      { q: 'What is an IP address?', o: ['A unique number that identifies a device on the internet', 'A website name', 'A password', 'A type of cable'] },
      { q: 'Which protocol breaks data into packets and checks they arrive correctly?', o: ['TCP', 'HTTP', 'FTP', 'VoIP'] },
      { q: 'Which protocol is responsible for addressing and routing packets?', o: ['IP', 'HTTP', 'HTML', 'USB'] },
      { q: 'What does VoIP allow you to do?', o: ['Make voice calls over the internet', 'Print over the internet', 'Download software faster', 'Store files'] },
      { q: 'Which is an example of VoIP?', o: ['A WhatsApp/Teams call', 'A printed letter', 'A text message sent by post', 'A USB drive'] },
      { q: 'Which is the SECURE version of HTTP?', o: ['HTTPS', 'HTTP2', 'FTP', 'SMTP'] },
      { q: 'How can you tell a website uses HTTPS?', o: ['The address starts with https:// and shows a padlock', 'The page is blue', 'It loads slowly', 'It has adverts'] },
      { q: 'What does HTTPS do that HTTP does not?', o: ['Encrypts the data sent', 'Makes pages load in colour', 'Blocks all adverts', 'Removes the need for a browser'] },
      { q: 'What is the Internet of Things (IoT)?', o: ['Everyday devices connected to the internet that collect and share data', 'A list of websites', 'A type of email', 'A video game'] },
      { q: 'Which is an IoT device?', o: ['A smart thermostat', 'A paper notebook', 'A pencil', 'A calculator with no connection'] },
      { q: 'Which data could a smart speaker collect, possibly without you knowing?', o: ['Voice recordings from its microphone', 'Your handwriting', 'The weight of your bag', 'Your shoe size'] },
      { q: 'What is geolocation?', o: ['Identifying the real-world location of a device', 'A type of rock', 'A web browser', 'A spreadsheet function'] },
      { q: 'What does each data packet carry so it reaches the right computer?', o: ['An address (destination)', 'A picture of the sender', 'The computer\'s password', 'A song'] },
      { q: 'Which software is used to view web pages?', o: ['A web browser', 'A spreadsheet', 'An antivirus', 'A compiler'] },
      { q: 'What happens when packets arrive at their destination?', o: ['They are put back together in the correct order', 'They are deleted', 'They are sent back', 'They are printed'] },
      { q: 'What does HTTP stand for?', o: ['HyperText Transfer Protocol', 'High Transfer Text Program', 'Home Text Transfer Protocol', 'HyperText Type Page'] }
    ],
    tf: [
      { q: 'The internet and the World Wide Web are the same thing.', a: false, x: 'The internet is the network; the WWW is one service that runs on it.', j: ['network*|hardware|infrastructure|connected::The internet is the global network', 'web page*|website*|browser|service::The WWW is web pages – one service on the internet'] },
      { q: 'Data sent across the internet is split into packets.', a: true },
      { q: 'Every device connected to the internet has an IP address.', a: true },
      { q: 'HTTPS encrypts data between your browser and the website.', a: true, j: ['encrypt*|scrambl*|secure*::Data is encrypted', 'hacker*|intercept*|steal*|can\'t read|cannot read|password*|bank::So it cannot be read if intercepted'] },
      { q: 'Email is an example of an internet service.', a: true },
      { q: 'VoIP is used to send printed letters.', a: false, x: 'VoIP is for voice calls over the internet.' },
      { q: 'IoT devices can collect information about you without your knowledge.', a: true },
      { q: 'Packets always travel the same route to their destination.', a: false, x: 'Packets can take different routes and are reassembled at the destination.' },
      { q: 'A web browser is needed to view websites on the WWW.', a: true },
      { q: 'TCP/IP is a set of rules for sending data over the internet.', a: true },
      { q: 'You should enter bank details on websites that only use HTTP.', a: false, x: 'Only use HTTPS sites (padlock) for sensitive information.' },
      { q: 'Smartphones can share your geolocation with apps.', a: true },
      { q: 'The internet was invented less than 100 years ago.', a: true }
    ],
    cloze: [
      { t: 'The [internet] is a worldwide collection of networks. The [World Wide Web|www] is a collection of web pages accessed using a web [browser]. Internet [services] are different ways to use the internet, like [email], video [streaming] and online shopping.', d: ['modem', 'pixel'] },
      { t: 'When you send data it is broken into [packets]. Each has an [address] label so it reaches the right place. The [IP] address identifies each device. [TCP] makes sure all packets arrive and are put back in [order]. Together these rules are called [protocols].', d: ['vector', 'cell'] },
      { t: '[HTTP] is the protocol used to transfer web pages. [HTTPS] is the secure version, which [encrypts] data and shows a [padlock]. [VoIP] lets people make voice calls over the internet. The Internet of [Things] connects everyday devices that use [sensors] to collect data.', d: ['FTP', 'router'] }
    ],
    short: [
      { q: 'Explain the difference between the internet and the World Wide Web.', m: 2, k: ['network*|hardware|infrastructure|connected computers|cables::Internet – global network of networks', 'web page*|website*|browser|hyperlink*::WWW – web pages accessed with a browser'], a: 'The internet is the global network of connected computers and cables. The World Wide Web is the collection of web pages and websites that are accessed over the internet using a browser.' },
      { q: 'Describe how data travels across the internet.', m: 4, k: ['packet*|broken|split::Data split into packets', 'address|destination|ip::Each packet has an address', 'route*|router*|hop*|different paths|travel*::Packets travel via routers/different routes', 'reassembl*|order|put back|rebuil*::Reassembled in order', 'protocol*|tcp::Using protocols (TCP/IP)'], a: 'The data is broken into packets. Each packet has the destination IP address and a number showing its order. The packets travel through routers, possibly by different routes. At the destination TCP puts them back together in the correct order.' },
      { q: 'What is an IP address and why is it needed?', m: 2, k: ['unique|number|identif*::A unique number identifying a device', 'find|locat*|deliver*|right place|correct device|send*::So data can be delivered to the right device'], a: 'An IP address is a unique number that identifies a device on the internet. It is needed so data packets can be delivered to the correct device.' },
      { q: 'Explain the difference between HTTP and HTTPS.', m: 2, k: ['http & {web page*|transfer*|not secure|unencrypt*|plain}::HTTP transfers web pages (not secure)', 'https & {secure|encrypt*|padlock}::HTTPS is secure/encrypted'], a: 'Both transfer web pages, but HTTPS is secure because it encrypts the data (shown by a padlock), so it cannot be read if intercepted. HTTP is not encrypted.' },
      { q: 'What is VoIP? Give one advantage and one disadvantage.', m: 3, k: ['voice|call*|speak*|talk*::Voice calls over the internet', 'cheap*|free|video|anywhere|international|cost::Advantage: cheap/free, video, international', 'internet|connection|bandwidth|quality|lag|delay|power::Disadvantage: needs good internet / quality issues'], a: 'VoIP (Voice over Internet Protocol) is making voice calls over the internet, e.g. WhatsApp calls. Advantage: calls are free or cheap, even internationally. Disadvantage: it needs a good internet connection or the call quality drops.' },
      { q: 'Give three examples of internet services.', m: 3, k: ['email::Email', 'stream*|youtube|netflix|video::Streaming', 'shop*|amazon::Online shopping', 'social media|instagram|tiktok::Social media', 'voip|call*|video call*::VoIP / video calls', 'www|web|website*|brows*::The World Wide Web', 'game*|gaming::Online gaming', 'cloud|file sharing|ftp::Cloud storage'], a: 'Email, video streaming and online shopping.' },
      { q: 'What is the Internet of Things? Give two examples.', m: 3, k: ['everyday|device*|object*|things::Everyday devices', 'connect*|internet|share|collect|data::Connected to the internet to collect/share data', 'smart speaker*|thermostat|fridge|doorbell|watch|light*|camera|tv|car|fitness|alexa::Correct IoT example'], a: 'The IoT is everyday devices connected to the internet that collect and share data, such as smart speakers and smart thermostats.' },
      { q: 'Explain one privacy risk of IoT devices.', m: 2, k: ['microphone*|camera*|record*|listen*|location|geolocation|gps::Devices use microphones/cameras/location', 'without|know*|consent|permission|shared|sold|hack*::Data collected/shared without your knowledge or hacked'], a: 'Smart speakers use microphones that could record conversations and share the data with companies without the owner knowing.' }
    ],
    long: [
      { q: 'Explain how a web page is sent from a server to your computer when you visit a website. Use the terms packets, IP address, protocols, TCP/IP, routers and HTTP/HTTPS.', m: 6, min: 60, k: ['browser|type*|url|request*::Browser requests the page', 'http|https::HTTP/HTTPS used for web pages', 'server::Web server holds the page', 'packet*::Page split into packets', 'ip address|ip::IP addresses identify sender/receiver', 'router*::Routers direct packets', 'different route*|path*|hop*::Packets may take different routes', 'tcp::TCP checks/reorders packets', 'reassembl*|order|put back::Reassembled in order', 'encrypt*|secure::HTTPS encrypts'], a: 'When you type a URL, your browser sends an HTTP (or HTTPS) request to the web server. The server splits the web page into packets. Each packet contains the destination IP address of your computer and a sequence number. Routers across the internet read the IP addresses and direct each packet, possibly by different routes. TCP checks that all packets arrive and reassembles them in the correct order, requesting any missing ones again. Your browser then displays the page. With HTTPS the data is encrypted so it cannot be read if intercepted.' },
      { q: 'Describe the Internet of Things (IoT). Explain how connected devices collect and share information and discuss the benefits and risks for users.', m: 6, min: 60, k: ['everyday|device*|object*::Everyday devices', 'connect*|internet::Connected to the internet', 'sensor*::Use sensors', 'microphone*|camera*|geolocation|location|gps::Microphones/cameras/location', 'smart speaker*|thermostat|watch|fridge|doorbell|light*|car::Examples', 'convenien*|save* energy|remote|automat*|health|safety::Benefits', 'privacy|without|knowledge|consent::Privacy risk', 'hack*|secur*|stolen|misuse*::Security risk', 'however|but|on the other hand::Balanced discussion'], a: 'The IoT is everyday devices such as smart speakers, smart watches and thermostats that connect to the internet. They use sensors, microphones, cameras and geolocation to collect data and share it with apps and companies. Benefits: convenience (controlling heating remotely), saving energy, and health tracking. However, they can collect information about us without our knowledge – a speaker might record conversations and a phone shares our location – which is a privacy risk. Poorly secured devices can be hacked, and data can be sold or misused. Users should check privacy settings and update devices.' },
      { q: 'Compare email and VoIP as ways of communicating over the internet. Explain how each works and the advantages and disadvantages of each.', m: 6, min: 55, k: ['email & {message*|text|written|send*}::Email sends written messages', 'address|@|inbox|server*::Email addresses/servers', 'attachment*|file*::Email can send attachments', 'record|any time|later|not instant|asynch*::Email – read later / keeps a record', 'voip & {voice|call*|speak*|talk*}::VoIP – voice calls', 'real time|instant|live::VoIP is real-time', 'cheap*|free|cost::Cost advantage', 'internet connection|bandwidth|quality|lag|delay::Needs a good connection', 'spam|phishing|virus*|malware::Email risks (spam/phishing)'], a: 'Email sends written messages and attachments to an email address. It is stored on a mail server until the recipient checks their inbox, so it can be read any time and keeps a written record, but replies are not instant and it can bring spam, phishing and viruses. VoIP (e.g. WhatsApp or Teams calls) sends voice as data packets in real time, so conversations are instant and calls are free or cheap even internationally, but it needs a fast, stable internet connection or calls lag or drop, and there is no automatic written record.' }
    ]
  });

  /* ================= UNIT 7: PYTHON PROGRAMMING ================= */
  U({
    year: 8, num: 7, title: 'Python Programming', icon: '🐍',
    topics: ['Algorithms and programming languages', 'Text-based vs visual coding', 'print() and input()', 'Variables and data types', 'Finding and fixing errors', 'Maths in Python', 'if / elif decisions'],
    vocab: [
      ['Algorithm', 'A step-by-step sequence of instructions to carry out a task or solve a problem'],
      ['Programming language', 'A language created by humans to program a computer'],
      ['Text-based language', 'A programming language where code is typed using keywords, e.g. Python'],
      ['Visual language', 'A programming language that uses graphical blocks, e.g. Scratch'],
      ['IDE', 'Integrated Development Environment – software where programs are written and tested'],
      ['Syntax', 'The rules for how code must be written in a language'],
      ['Variable', 'A named storage location that holds data which can change'],
      ['String', 'A data type for text, written inside quotation marks'],
      ['Integer', 'A data type for whole numbers'],
      ['Float', 'A data type for numbers with a decimal point'],
      ['Debugging', 'Finding and fixing errors in code'],
      ['Syntax error', 'An error caused by breaking the rules of the language, e.g. a missing bracket'],
      ['Logic error', 'An error where the program runs but gives the wrong result'],
      ['Comment', 'A note in code starting with # that the computer ignores'],
      ['Condition', 'A test that is either True or False, used in if statements']
    ],
    gen: [
      { g: 'pyArith', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'pyStr', t: ['mcq', 'short'], m: 2, w: 2 },
      { g: 'pyType', t: ['mcq'], w: 3 },
      { g: 'pyIf', t: ['mcq', 'short'], m: 2, w: 3 },
      { g: 'pyIfElse', t: ['mcq', 'short'], m: 2, w: 3 }
    ],
    mcq: [
      { q: 'What is an algorithm?', o: ['A step-by-step set of instructions to solve a problem', 'A type of computer', 'A programming error', 'A web browser'] },
      { q: 'Which is a TEXT-BASED programming language?', o: ['Python', 'Scratch', 'Blockly', 'A flowchart'] },
      { q: 'Which is a VISUAL programming language?', o: ['Scratch', 'Python', 'Java', 'C++'] },
      { q: 'What is an IDE?', o: ['Software where programs are written and tested', 'A type of error', 'A data type', 'A computer virus'] },
      { q: 'Why is Python popular in schools?', o: ['It is free and uses straightforward commands', 'It only works on one computer', 'It uses coloured blocks', 'It costs a lot of money'] },
      { q: 'What does the # symbol do in Python?', o: ['Starts a comment that Python ignores', 'Prints text', 'Multiplies numbers', 'Starts a loop'] },
      { q: 'Which function displays output on the screen?', o: ['print()', 'input()', 'output()', 'show()'] },
      { q: 'Which function lets the user type data in?', o: ['input()', 'print()', 'type()', 'enter()'] },
      { q: 'By default, what data type does input() return?', o: ['String', 'Integer', 'Float', 'Boolean'] },
      { q: 'Which line has a SYNTAX error?', o: ['print("Hello)', 'print("Hello")', 'name = "Ali"', 'x = 5'] },
      { q: 'Which is the correct way to store the number 25 in a variable called age?', o: ['age = 25', '25 = age', 'age == 25', 'age: 25'] },
      { q: 'A program to add two numbers subtracts them instead. What type of error is this?', o: ['Logic error', 'Syntax error', 'Runtime error', 'No error'] },
      { q: 'What is debugging?', o: ['Finding and fixing errors in code', 'Deleting a program', 'Adding comments', 'Running a program faster'] },
      { q: 'Which operator is used for multiplication in Python?', o: ['*', 'x', '×', '^'] },
      { q: 'What is the result of 7 / 2 in Python?', o: ['3.5', '3', '4', '3.0'] },
      { q: 'Which keyword checks another condition if the first is False?', o: ['elif', 'else', 'then', 'while'] },
      { q: 'Which symbol ends an if statement line in Python?', o: [':', ';', '.', ','] },
      { q: 'Which comparison operator means "greater than or equal to"?', o: ['>=', '=>', '>>', '=='] },
      { q: 'What is the error in: Print("Hi")?', o: ['Print should be lowercase print', 'Missing quotation marks', 'Missing colon', 'There is no error'] },
      { q: 'What does this output?\nprint("Nice to meet you", "Ahmed")', o: ['Nice to meet you Ahmed', 'Nice to meet youAhmed', '"Nice to meet you", "Ahmed"', 'Error'] },
      { q: 'Which is a good variable name?', o: ['total_score', 'total score', '1score', 'print'] },
      { q: 'Which data type would you use to store a price like 9.99?', o: ['Float', 'Integer', 'String', 'Boolean'] }
    ],
    tf: [
      { q: 'Scratch is a text-based programming language.', a: false, x: 'Scratch is a visual (block-based) language.', j: ['visual|block*|drag::Scratch uses visual blocks', 'python|java|c\\+\\+|typed::Text-based languages are typed, e.g. Python'] },
      { q: 'Python is used by companies such as Google and Netflix.', a: true },
      { q: 'The computer ignores comments when the program runs.', a: true },
      { q: 'input() returns an integer by default.', a: false, x: 'input() returns a string – use int() to convert.', j: ['string|text::It returns a string', 'int\\(|int|convert*::You must convert it with int()'] },
      { q: '"Hello" is a string.', a: true },
      { q: '10 is a float.', a: false, x: '10 is an integer; 10.0 would be a float.' },
      { q: 'A syntax error stops the program running.', a: true },
      { q: 'A logic error stops the program running.', a: false, x: 'Logic errors let the program run but give wrong results.' },
      { q: 'Python is case-sensitive, so print and Print are different.', a: true },
      { q: 'An if statement makes a decision based on a condition.', a: true },
      { q: 'Visual coding can be a good introduction before text-based coding.', a: true },
      { q: 'Text must be inside quotation marks in Python.', a: true },
      { q: 'Only one branch of an if / elif / else runs.', a: true }
    ],
    cloze: [
      { t: 'An [algorithm] is a step-by-step set of instructions. A programming [language] is used to program a computer. [Text-based|text based] languages such as [Python] use typed keywords. [Visual] languages such as Scratch use coloured [blocks]. Programs are written and tested in an [IDE].', d: ['spreadsheet', 'router'] },
      { t: 'The [print()|print] function displays output. The [input()|input] function lets the user type data. A [variable] stores data that can change. Text is stored as a [string], whole numbers as an [integer] and decimal numbers as a [float].', d: ['packet', 'pixel'] },
      { t: 'Finding and fixing errors is called [debugging]. A [syntax] error breaks the rules of the language, such as a missing [bracket]. A [logic] error means the program runs but gives the [wrong] answer. Lines starting with [#] are comments.', d: ['virus', 'formula'] }
    ],
    short: [
      { q: 'Explain the difference between a text-based and a visual programming language. Give an example of each.', m: 4, k: ['typ*|text|keyword*|written::Text-based – typed code', 'python|java|c\\+\\+|javascript::Text-based example', 'block*|drag|graphical|visual::Visual – drag-and-drop blocks', 'scratch|blockly::Visual example'], a: 'In a text-based language code is typed using keywords and exact syntax, e.g. Python. In a visual language programs are built by dragging graphical blocks together, e.g. Scratch.' },
      { q: 'Give two reasons why Python is used in schools.', m: 2, k: ['free|no cost|download::Free to download and use', 'devices|many computers|variety::Runs on many devices', 'google|netflix|business*|companies|industry|real world::Used by real companies', 'simple|easy|straightforward|beginner*|readable::Straightforward commands for beginners'], a: 'It is free to download and use, and it uses straightforward commands that beginners can understand.' },
      { q: 'Name three data types used in Python and give an example value of each.', m: 3, k: ['string|str::String (e.g. "Sara")', 'integer|int::Integer (e.g. 14)', 'float::Float (e.g. 9.99)', 'boolean|bool::Boolean (True/False)'], a: 'String – "Sara"; integer – 14; float – 9.99.' },
      { q: 'Find and fix the TWO errors in this code:\nPrint("Hello World"\nname = input("What is your name? ")', m: 2, k: ['print & {lowercase|lower case|small p|capital|p}::Print should be lowercase print', 'bracket|parenthes*|\\)::Missing closing bracket'], a: 'Print should be lowercase print, and the closing bracket is missing: print("Hello World").' },
      { q: 'Explain the difference between a syntax error and a logic error.', m: 2, k: ['syntax & {rule*|spell*|grammar|bracket*|won\'t run|stop*|typo|colon}::Syntax – breaks the rules, won\'t run', 'logic & {wrong|incorrect|unexpected|runs}::Logic – runs but gives the wrong result'], a: 'A syntax error breaks the rules of the language (e.g. a missing bracket) so the program will not run. A logic error lets the program run but it gives the wrong result.' },
      { q: 'Write a Python program that asks for two numbers and prints their total.', m: 4, k: ['int\\(input|float\\(input|int\\(|float\\(::Converts inputs to numbers', 'input\\(::Uses input()', '\\+::Adds the numbers', 'print\\(::Prints the result'], a: 'num1 = int(input("First number: "))\nnum2 = int(input("Second number: "))\ntotal = num1 + num2\nprint("Total:", total)' },
      { q: 'What is a variable? Give an example of creating one in Python.', m: 2, k: ['store*|hold*|contain*|box|location|memory::A named location that stores data', '= |=::Example using =, e.g. age = 13'], a: 'A variable is a named location in memory that stores data which can change, e.g. age = 13.' },
      { q: 'Write a program that asks for a temperature and prints "Hot" if it is above 30, otherwise "Not hot".', m: 4, k: ['float\\(input|int\\(input::Converts input', 'if & {> 30|>30}::if temperature > 30', 'else::else', 'hot & not hot|print\\(::Prints the correct messages'], a: 'temp = float(input("Temperature: "))\nif temp > 30:\n    print("Hot")\nelse:\n    print("Not hot")' }
    ],
    long: [
      { q: 'Write a Python program for a grade checker. It should ask for the student\'s name and mark, then print their name with "Distinction" (80+), "Merit" (60–79), "Pass" (40–59) or "Fail". Explain how your program works.', m: 6, min: 40, k: ['input\\(::Uses input()', 'int\\(|float\\(::Converts the mark to a number', 'if & {>= 80|>=80}::if mark >= 80', 'elif::Uses elif', '>= 60|>=60|>= 40|>=40::Correct boundaries', 'else::else for Fail', 'print\\(::Prints the result with the name', 'order|first true|only one|top to bottom::Explains that conditions are checked in order'], a: 'name = input("Name: ")\nmark = int(input("Mark: "))\nif mark >= 80:\n    print(name, "Distinction")\nelif mark >= 60:\n    print(name, "Merit")\nelif mark >= 40:\n    print(name, "Pass")\nelse:\n    print(name, "Fail")\nThe program stores the name as a string and converts the mark to an integer. The conditions are checked from the top; only the first one that is True runs, so the highest grade is checked first. If none are True, else prints "Fail".' },
      { q: 'Explain the three types of programming errors (syntax, runtime and logic). Give an example of each and describe strategies for debugging a program.', m: 6, min: 55, k: ['syntax::Syntax error', 'bracket*|colon|spell*|quot*|capital*::Syntax example', 'runtime::Runtime error', 'zero|crash*|divide::Runtime example', 'logic::Logic error', 'wrong|incorrect|unexpected::Logic gives wrong output', 'print statement*|print\\(::Use print statements to check values', 'test*|trace table|line by line|read the error|error message|comment out::Other debugging strategies'], a: 'A syntax error breaks Python\'s rules, e.g. a missing bracket or colon, and the program will not run. A runtime error happens while the program runs, e.g. dividing by zero, and it crashes. A logic error means the program runs but gives the wrong result, e.g. using + instead of *. To debug: read the error message and line number, add print statements to check variable values, test with known data and compare the expected output, and work through the code line by line with a trace table.' },
      { q: 'Compare text-based and visual programming languages. Explain the features, advantages and disadvantages of each and why students often learn Scratch before Python.', m: 6, min: 55, k: ['text-based|text based|typ*::Text-based – typed', 'syntax|spell*|bracket*|exact::Text-based requires exact syntax', 'python|java|c\\+\\+::Text-based example', 'powerful|real|industry|professional|complex|flexib*::Text-based is powerful/used in industry', 'visual|block*|drag::Visual – drag-and-drop blocks', 'scratch|blockly::Visual example', 'fewer errors|only fit|can\'t make syntax|cannot make syntax|easier::Visual – fewer errors, easier', 'limited|simple programs|not used in industry::Visual is limited', 'structure|introduc*|beginner*|first|then move::Scratch first to learn structure'], a: 'Text-based languages like Python and Java are typed using keywords and require exact syntax – spelling, brackets and colons – so it is easier to make errors, but they are powerful, flexible and used by professional programmers. Visual languages like Scratch use drag-and-drop blocks that only fit together in valid ways, so there are fewer errors and beginners can see the structure of an algorithm, but they are limited to simpler programs. Students learn Scratch first to understand sequence, selection and iteration without worrying about syntax, then move to Python.' }
    ]
  });
})();
