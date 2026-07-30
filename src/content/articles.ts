import type { Article, Category } from './types';
import { applyExpansions } from './expansions';

/**
 * xad.es editorial library — original, independent, plain-English technology
 * explainers. Educational only, no affiliate spin, every article original.
 */

export const CATEGORIES: Category[] = [
  { slug: 'security', name: 'Security', tagline: 'Passwords, 2FA, phishing and staying safe online', icon: '🔒' },
  { slug: 'privacy', name: 'Privacy', tagline: 'VPNs, tracking, data and taking back control', icon: '🕵️' },
  { slug: 'software', name: 'Software', tagline: 'Tools, backups and getting more from your devices', icon: '💻' },
  { slug: 'cloud', name: 'Cloud & Web', tagline: 'Hosting, domains and how the web really works', icon: '☁️' },
  { slug: 'ai', name: 'AI Tools', tagline: 'Using AI assistants sensibly and safely', icon: '🤖' },
];

export const ARTICLES: Article[] = [
  {
    slug: 'password-manager-guide',
    category: 'security',
    title: 'Why You Need a Password Manager (and How to Start Today)',
    excerpt:
      'Reusing passwords is the single biggest security mistake most people make. A plain guide to what a password manager does, why it is safer than your memory, and how to switch.',
    date: '2026-07-02',
    minutes: 8,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'Almost every serious account compromise traces back to the same root cause: password reuse. One website you signed up to years ago gets breached, the attackers take the leaked email-and-password list, and they try that same combination on your email, your bank and your shopping accounts. Because most people reuse a handful of passwords, it works far too often.',
        'A password manager exists to end that problem completely. It generates a long, random, unique password for every account, stores them all in an encrypted vault, and fills them in for you — so the only thing you ever have to remember is one strong master password.'] },
      { h: 'Why a vault beats your memory', p: [
        'Human memory forces a trade-off: passwords you can remember are weak, and passwords that are strong you cannot remember. A password manager removes the trade-off. Each site gets a genuinely random 16-plus character password that no human would ever memorise, and you never need to — the manager remembers for you and types it in on the right site.',
        'That "right site" part is a hidden security bonus: a good manager only offers to fill a password on the exact domain it was saved for, so it quietly refuses to hand your bank password to a look-alike phishing page. Your memory has no such safeguard.'] },
      { h: 'Is it safe to put everything in one place?', p: [
        'The common worry is that one vault is a single point of failure. In practice the vault is encrypted so that even the provider cannot read it without your master password, and reputable managers are built so that decryption happens only on your device. The realistic risk of forgetting a hundred unique passwords is far larger than the risk of a well-designed vault.',
        'You do need to protect the master password well — make it a long passphrase you have never used elsewhere — and turn on two-factor authentication for the vault itself. With those two steps, a manager is dramatically safer than the reuse-everything habit it replaces.'] },
      { h: 'How to switch without pain', p: [
        'Do not try to fix every account in one sitting. Install a manager, set a strong master passphrase, and let it save logins as you use sites normally over the next weeks. Each time you log in somewhere, let the manager generate a new unique password for that account and update it. Start with the accounts that matter most: email first (because it can reset everything else), then banking and finances.',
        'Within a month of normal browsing, your most important accounts will each have a unique, strong password, and the old reused password will be retired. It is one of the highest-return security moves available, and it costs almost nothing but the decision to start.'] },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    category: 'security',
    title: 'Two-Factor Authentication: The 30-Second Setup That Stops Most Attacks',
    excerpt:
      'A stolen password is useless to an attacker if a second factor blocks them. What 2FA is, why app-based codes beat SMS, and where to turn it on first.',
    date: '2026-07-04',
    minutes: 7,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'Two-factor authentication, or 2FA, is the security feature with the best effort-to-protection ratio in all of computing. It takes half a minute to enable and blocks the overwhelming majority of account-takeover attempts, because even if an attacker has your password, they still cannot get in without the second factor that only you hold.',
        'The idea is simple: logging in requires something you know (your password) plus something you have (your phone, or a small hardware key). Stealing one is common; stealing both at once is hard.'] },
      { h: 'Why not all 2FA is equal', p: [
        'The most common form is a one-time code sent by SMS. It is far better than nothing, but text messages can be intercepted or redirected through "SIM-swap" attacks where a criminal convinces your carrier to move your number to their device. For that reason, an authenticator app that generates codes on your device — offline, with nothing sent over the network — is a meaningful step up.',
        'The strongest option is a hardware security key, a small device you tap or plug in. It is essentially immune to phishing because it verifies the real website cryptographically before responding. For most people, an authenticator app is the sweet spot of security and convenience; for high-value accounts, a hardware key is worth it.'] },
      { h: 'Where to turn it on first', p: [
        'Prioritise by blast radius. Your primary email account comes first, because whoever controls your email can trigger password resets on almost everything else. Then your financial accounts, then any account tied to your identity or work. Most major services now offer 2FA in their security settings; it is usually a few taps to enable.',
        'The one catch to plan for is recovery. When you set up app-based 2FA, save the backup or recovery codes the service gives you somewhere safe and offline, so that a lost phone does not lock you out permanently. Set up the safety net at the same time as the lock.'] },
      { h: 'The habit that makes it effortless', p: [
        'Pair 2FA with a password manager and the daily friction nearly vanishes: the manager fills the password, the authenticator supplies the code, and you are in. The small inconvenience of a second step is trivial next to the cost of an account takeover — the drained account, the stolen identity, the days of cleanup.',
        'If you do only one security thing this week, enabling 2FA on your email is the highest-value candidate. It is the lock on the door that unlocks all your other doors.'] },
    ],
  },
  {
    slug: 'spot-phishing-emails',
    category: 'security',
    title: 'How to Spot a Phishing Email Before It Costs You',
    excerpt:
      'Phishing does not break technology — it breaks trust. The recurring tells of a scam message, and the one habit that defeats nearly all of them.',
    date: '2026-07-06',
    minutes: 7,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'The most successful cyberattacks rarely involve breaking any technology. They involve tricking a person — and the favourite tool for that is the phishing email, a message crafted to make you click a link, hand over a password, or approve a payment while your guard is down.',
        'Understanding phishing is less about technical knowledge and more about recognising the emotional pattern it exploits: urgency, fear and authority, pushing you to act fast before you think.'] },
      { h: 'The recurring tells', p: [
        'Watch for manufactured urgency: "your account will be suspended tonight", "unusual activity, verify immediately". Real institutions rarely demand instant action through a link. Watch for a mismatch between the friendly display name and the actual sending address, and for links whose visible text differs from where they truly lead — hover before you click and read the real destination.',
        'Watch for requests that a legitimate organisation would never make: a bank asking for your full password, a service asking you to "confirm" card details over email, or a colleague suddenly needing gift cards. Generic greetings, odd grammar, and attachments you did not expect are all further flags — though modern phishing can be polished, so no single tell is proof.'] },
      { h: 'The one habit that defeats most of it', p: [
        'The single most protective habit is this: never act on a message\'s own links or numbers. If an email claims to be from your bank, do not click its link — open your browser and go to the bank\'s site yourself, or call the number on the back of your card. If a "colleague" asks for an unusual payment, confirm through a separate channel you already trust.',
        'This one rule — verify through a channel the message did not give you — neutralises the entire category, because it removes the attacker\'s control over where you land. The scam depends on you following their link; refuse to, and the trick collapses.'] },
      { h: 'What to do if you slipped', p: [
        'Everyone can be caught on a tired day, so know the recovery steps. If you entered a password on a suspicious page, change that password immediately everywhere you used it, and enable 2FA. If you approved a payment, contact your bank at once — speed matters for recovery. Report the message to your email provider and, where relevant, your employer, so others are warned.',
        'Falling for a phish is not stupidity; it is being human on a bad day against professionals. The shame that keeps people silent is the scammer\'s best friend — reporting quickly is what limits the damage.'] },
    ],
  },
  {
    slug: 'what-is-a-vpn',
    category: 'privacy',
    title: 'What a VPN Actually Does — and the Things It Doesn\'t',
    excerpt:
      'VPNs are marketed as a magic cloak of anonymity. Here is the honest version: what they genuinely protect, what they don\'t, and when one is actually worth it.',
    date: '2026-07-08',
    minutes: 8,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'Few technology products are marketed with as much exaggeration as the VPN. Adverts promise total anonymity and invulnerability, which sets people up to misunderstand what they bought. A VPN is a genuinely useful tool with a specific job — and knowing its real boundaries is what lets you use it sensibly.',
        'At its core, a VPN (virtual private network) creates an encrypted tunnel between your device and a server run by the VPN provider. Your internet traffic travels through that tunnel, so the network you are on — and your internet provider — sees only encrypted data going to the VPN, not the sites you visit.'] },
      { h: 'What it genuinely protects', p: [
        'A VPN is most valuable on networks you do not control, such as public Wi-Fi in a café or airport. It stops others on that network, and the network operator, from seeing which sites you visit or intercepting unencrypted traffic. It also hides your real IP address from the websites you visit, showing the VPN server\'s address instead, which can help with region-based access and reduces one crude form of tracking.',
        'For those specific purposes — securing traffic on untrusted networks and masking your IP from destination sites — a reputable VPN does its job well.'] },
      { h: 'What it does not do', p: [
        'A VPN does not make you anonymous. The websites you log into still know exactly who you are, because you signed in. Trackers and cookies still follow you, advertisers still build profiles, and your accounts still identify you. The VPN moves trust rather than removing it: your provider can now see the traffic your internet company used to — so the provider\'s honesty and no-logs practices matter enormously.',
        'It also does not protect you from malware, phishing or weak passwords. A VPN encrypts the pipe; it does nothing about what you do at either end. Treating it as all-purpose protection is exactly the mistake the marketing encourages.'] },
      { h: 'When one is worth it', p: [
        'A VPN earns its keep if you regularly use public or untrusted networks, want to keep your browsing from your internet provider, or need to access content tied to a different region. If you only ever use your own secured home network and care mainly about account security, your effort is better spent on a password manager and 2FA than on a VPN.',
        'If you do choose one, favour a provider with an independently audited no-logs policy and a clear ownership history, and be wary of "free" VPNs — running a VPN costs money, and a free one is often paying its bills by monetising the very traffic you hoped to protect.'] },
    ],
  },
  {
    slug: 'backups-3-2-1-rule',
    category: 'software',
    title: 'The 3-2-1 Backup Rule: How to Never Lose Your Files Again',
    excerpt:
      'Everyone means to back up; almost nobody does until after a loss. A simple, memorable rule that protects your photos, documents and work from every common disaster.',
    date: '2026-07-10',
    minutes: 7,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'Data loss is not a rare misfortune; it is a certainty deferred. Drives fail, phones are dropped in water, laptops are stolen, and ransomware encrypts everything in a single afternoon. The only question is whether, on that day, you have a copy — and most people discover the answer at the worst possible moment.',
        'The good news is that a genuinely robust backup strategy fits in one memorable line: the 3-2-1 rule. Follow it and virtually every common way of losing files is covered.'] },
      { h: 'What 3-2-1 means', p: [
        'Keep three copies of anything you care about: the original plus two backups. Store them on two different types of media or devices, so a single failure mode cannot take them all — for example, your computer plus an external drive, not two folders on the same disk. And keep one copy off-site, physically away from the others, so a fire, flood or theft at home cannot destroy everything at once.',
        'Each part of the rule defends against a different disaster. Three copies covers accidental deletion and corruption; two media types covers a device failure; one off-site copy covers the physical catastrophes that wipe out everything in one location.'] },
      { h: 'A practical setup', p: [
        'A common, workable version for a household: your files live on your computer (copy one), sync automatically to a reputable cloud service (copy two, and your off-site copy), and are periodically copied to an external drive kept in a drawer (copy three, a second media type). That single arrangement satisfies all three parts of the rule with modern, largely automatic tools.',
        'The word that matters is "automatic". A backup that depends on you remembering to run it manually is a backup that will be out of date on the day you need it. Set it up so it happens without your attention.'] },
      { h: 'Test it before you need it', p: [
        'The final, most-skipped step: occasionally check that you can actually restore. A backup you have never tested is a hope, not a safety net — countless people have discovered at recovery time that their backup was incomplete, corrupted, or covered the wrong folders. Once or twice a year, try restoring a file and confirm it opens.',
        'Set the whole thing up on a calm ordinary day, not in a panic after a loss. The 3-2-1 rule takes an afternoon to arrange and then quietly protects years of photos, documents and work for as long as you keep it running.'] },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    category: 'cloud',
    title: 'Cloud Storage Is Not a Backup: The Difference That Bites People',
    excerpt:
      'Syncing your files to the cloud feels like a backup, until a deletion or ransomware syncs the damage everywhere. Why the two are different and how to cover both.',
    date: '2026-07-12',
    minutes: 6,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'A dangerous assumption hides inside modern computing: that because your files sync to the cloud, they are backed up. Sync and backup feel similar, and the marketing blurs them, but they solve different problems — and the gap between them is where people lose data they thought was safe.',
        'Sync keeps the same set of files identical across your devices and the cloud. Backup keeps a separate historical copy that you can restore from even after the live files are damaged. The distinction sounds subtle until it costs you.'] },
      { h: 'Why sync can spread the damage', p: [
        'The trouble with pure sync is that it faithfully replicates whatever happens to your files — including the bad things. Delete a folder by mistake and the deletion syncs everywhere. Get hit by ransomware that encrypts your documents, and the encrypted, useless versions sync to the cloud and to every other device, overwriting the good copies. Sync did exactly its job; its job just was not protection.',
        'A true backup, by contrast, keeps versions and history. If today\'s files are ruined, you can roll back to last week\'s. That "go back in time" ability is the thing sync alone does not give you.'] },
      { h: 'How to get both', p: [
        'Many cloud services do include some backup-like features — file version history and a recycle bin that retains deletions for a period. Learn whether yours does, and for how long, because a 30-day window may not save you if you notice a problem late. For anything truly important, add a genuine backup on top: a separate service or a local drive that keeps its own independent history.',
        'The clean mental model is to treat cloud sync as one convenient copy in your overall plan, not as the plan itself. Combined with the 3-2-1 rule, sync becomes one useful leg of a stool rather than a single point that can fail silently.'] },
      { h: 'A five-minute check', p: [
        'Spend five minutes finding out what your current setup actually does. Where do deleted files go, and for how long? Can you restore a previous version of a document? If your computer were encrypted by malware right now, could you recover clean copies? If any answer is uncomfortable, you have found the gap before it found you.',
        'The people who never lose data are not lucky; they simply understood that convenient and protected are two different properties, and arranged for both.'] },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    category: 'privacy',
    title: 'Take Back Your Browser: Privacy Settings Worth Ten Minutes',
    excerpt:
      'Your browser is the most-tracked app you own. A short, practical tune-up that cuts tracking without breaking the sites you use.',
    date: '2026-07-14',
    minutes: 6,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'The browser is where most of us spend our online lives, and by default it is a remarkably leaky window. Advertisers, data brokers and analytics firms follow you from site to site, quietly assembling a profile of your interests, habits and identity. You cannot close every gap, but ten minutes of settings can meaningfully shrink the surveillance without breaking the web.',
        'The aim here is not paranoia or perfect anonymity — it is reasonable hygiene, the digital equivalent of closing the curtains.'] },
      { h: 'The high-value settings', p: [
        'Start with third-party cookies — the ones set by companies other than the site you are visiting, which are the backbone of cross-site tracking. Most modern browsers let you block them, and doing so breaks very little while cutting a lot of tracking. Next, look for tracking-prevention or "enhanced protection" options and turn them up. Turn off ad-personalisation where the browser offers it.',
        'A reputable content blocker extension goes further, stopping many trackers and intrusive ads before they load, which also makes pages faster and lighter. Choose a well-known, open one rather than an obscure extension that could itself be spying on you.'] },
      { h: 'Search, and the small habits', p: [
        'Your search engine sees an enormous amount about you, because searches are among the most revealing data there is. Switching your default to a search engine that does not build an advertising profile is a single change with an outsized privacy return, and the results are good enough for everyday use.',
        'Two small habits help too: sign out of accounts you are not actively using so you are not tracked while logged in, and use your browser\'s private window for one-off sensitive searches. Neither is magic, but together they reduce the trail you leave.'] },
      { h: 'Know the limits', p: [
        'Be honest about what this achieves. These steps reduce casual, commercial tracking; they do not make you invisible, and the sites you log into still know who you are. Treat them as raising the cost and lowering the volume of tracking, not eliminating it.',
        'That modest framing is the right one. A browser you have tuned in ten minutes leaks far less than a default one, and you can do it once and forget it — the settings keep working every day without further effort.'] },
    ],
  },
  {
    slug: 'using-ai-assistants-safely',
    category: 'ai',
    title: 'Using AI Assistants Sensibly: What to Share, What to Check, What to Skip',
    excerpt:
      'AI chat tools are genuinely useful and confidently wrong in equal measure. A practical guide to getting value from them without being misled or oversharing.',
    date: '2026-07-16',
    minutes: 8,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'AI assistants have gone from novelty to everyday tool with startling speed, and they are genuinely helpful for drafting, summarising, brainstorming and explaining. They are also confidently, fluently wrong on a regular basis — and the fluency is exactly what makes the errors dangerous. Using them well is a skill, and it starts with understanding what they actually are.',
        'An AI assistant predicts plausible text; it does not "know" facts the way a database does. That single insight explains both its remarkable usefulness and its characteristic failure mode.'] },
      { h: 'What to check, always', p: [
        'Because these tools generate plausible-sounding text rather than verified truth, treat any factual claim, statistic, quotation, legal or medical statement, or citation as unverified until you check it. They can invent references that look real, misremember details, and state falsehoods with total confidence. For anything that matters — a health decision, a legal question, a number you will act on — the AI is a starting point, never the final source.',
        'The reliable pattern is to use the assistant for structure, phrasing and first drafts, then verify every load-bearing fact against a trustworthy source. It is a fast, tireless intern, not an oracle.'] },
      { h: 'What not to share', p: [
        'Be deliberate about what you type in. Depending on the service and its settings, your conversations may be stored and, in some cases, used to improve the system. Treat the chat box like a semi-public place: do not paste passwords, financial account details, other people\'s personal data, confidential work documents, or anything you would be uncomfortable seeing leaked. Where a service offers a setting to exclude your chats from training, and you care, turn it on.',
        'This is not a reason to avoid the tools — it is a reason to use them like any other cloud service you do not fully control: useful, but not the place for your secrets.'] },
      { h: 'Where they shine, and where to skip them', p: [
        'AI assistants are strongest where being roughly right and fast is more valuable than being authoritative: rewording an email, explaining a concept in simpler terms, generating ideas to react to, summarising a long document you will still skim yourself. In those roles they save real time.',
        'Skip them, or lean on them only lightly, where confident errors are costly and hard to catch: precise medical or legal advice, exact figures, anything about very recent events, and situations where you cannot verify the output. Used within its lane, an AI assistant is a genuine productivity gain; used as a substitute for judgement, it is a liability wearing a friendly face.'] },
    ],
  },
  {
    slug: 'choosing-domain-and-hosting',
    category: 'cloud',
    title: 'Domains and Hosting Explained: How a Website Actually Gets Online',
    excerpt:
      'Behind every website are two separate things people constantly confuse: the domain and the hosting. What each does, and how to choose without overpaying.',
    date: '2026-07-18',
    minutes: 7,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'If you have ever tried to put a site online, you have met two words that get tangled together: domain and hosting. They are different things bought from sometimes-different companies, and mixing them up is where beginners overpay or get stuck. Separating them makes the whole process suddenly clear.',
        'Think of it as a shop. The domain is the address on the door — the name people type to find you. The hosting is the actual premises — the computer, somewhere, that stores your site and serves it to visitors. You need both, and they are independent.'] },
      { h: 'The domain: your address', p: [
        'A domain name is registered, not bought forever — you pay an annual fee to a registrar to hold the rights to a name like example.com. Behind the scenes it works through DNS, the internet\'s address book, which translates your human-friendly name into the numeric address of the server that hosts your site. When you point your domain\'s DNS records at your hosting, the two connect.',
        'Practical advice: keep it simple and memorable, prefer a well-established extension unless a newer one genuinely fits your purpose, and watch the renewal price rather than just the cheap first-year offer. Registrars often lure you with a low introductory rate and raise it sharply at renewal.'] },
      { h: 'The hosting: the premises', p: [
        'Hosting is where your site\'s files live and run. For a simple site the choice ranges from basic shared hosting (cheap, fine for small sites), to platforms that serve static files from a global network (fast and often very low cost), to full servers you manage yourself (powerful and more work). Most people starting out need far less than the industry tries to sell them.',
        'The right amount of hosting depends on what the site does. A personal blog or brochure site has tiny needs; a busy application with a database is a different matter. Match the plan to the reality, and resist paying for capacity you will not use for years.'] },
      { h: 'Putting it together without pain', p: [
        'The clean approach is to register the domain and arrange the hosting, then point the domain\'s DNS at the host — a step most providers now walk you through. Keeping the domain registration and the hosting at separate, reputable companies is often wise, because it means you are never locked in: you can move your site to a new host and simply repoint the same domain.',
        'None of this is as mysterious as it first appears. Domain is the name, hosting is the home, DNS is the map between them. Once those three ideas click, the confusing sales pages become easy to see through.'] },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    category: 'software',
    title: 'Why "Update Later" Is the Most Expensive Button on Your Device',
    excerpt:
      'Nagging update prompts are easy to dismiss, but most of them are quietly patching the exact holes attackers rely on. Why updates matter and how to make them painless.',
    date: '2026-07-20',
    minutes: 6,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'The little "update available" prompt is one of the most reflexively dismissed messages in modern life. It arrives at inconvenient moments, it interrupts, and "remind me later" is right there. Yet behind a large share of those updates is a security fix for a hole that criminals are actively exploiting — which makes "later" a surprisingly expensive habit.',
        'Software is written by humans and therefore contains mistakes, some of which are security vulnerabilities. When one is discovered, the vendor issues a patch. The gap between a patch being released and you installing it is precisely the window attackers race to exploit.'] },
      { h: 'The race you are unknowingly in', p: [
        'Here is the uncomfortable dynamic: when a security update ships, its release effectively announces to the world that a vulnerability existed. Attackers study the patch to understand the flaw, then hunt for devices that have not yet applied it. Unpatched, out-of-date software is the low-hanging fruit of the internet — the equivalent of a house with a known-faulty lock and a sign advertising it.',
        'This is why the biggest, most damaging attacks so often spread through vulnerabilities that had already been patched weeks or months earlier. The fix existed; the victims just had not installed it.'] },
      { h: 'Make updates painless', p: [
        'The solution is to remove yourself from the decision. Turn on automatic updates for your operating system, your browser, and your apps wherever the option exists, so patches install quietly without you needing to act on every prompt. For most people, most of the time, automatic updating is safer than manual caution, because it closes the window before attackers can use it.',
        'Schedule any updates that require a restart for a convenient time rather than declining them repeatedly, and do not run software so old that it no longer receives security updates at all — unsupported systems are permanently unlocked doors.'] },
      { h: 'The one caveat', p: [
        'Balanced honesty: updates occasionally introduce new bugs, and very rarely a bad update causes problems. That real but small risk is why some cautious users wait a day or two on major upgrades. But for routine security patches, the maths is overwhelmingly in favour of applying promptly — the danger of the known, unpatched hole vastly outweighs the danger of a rare faulty fix.',
        'Reframe the prompt in your mind: it is not an interruption, it is the vendor handing you a fix for a lock criminals already know how to pick. Seen that way, "install now" is usually the cheap choice and "later" the expensive one.'] },
    ],
  },
  {
    slug: 'recognise-tech-support-scams',
    category: 'security',
    title: 'Tech-Support Scams: The Call or Pop-up That Wants Into Your Computer',
    excerpt:
      'A frightening pop-up, a helpful "Microsoft" caller, remote access to your machine — and your savings gone. How this scam works and how to shut it down.',
    date: '2026-07-22',
    minutes: 7,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'The tech-support scam is one of the most effective frauds of the internet era because it turns a person\'s own caution against them. It begins with fear — a scary pop-up, a warning sound, or a phone call claiming your computer is infected — and channels that fear into a single disastrous action: giving a stranger remote access to your machine.',
        'It preys especially on people who are not confident with technology, which is exactly why understanding the pattern is a gift worth sharing with less tech-savvy family members.'] },
      { h: 'How the trick unfolds', p: [
        'The classic version is a full-screen browser pop-up that claims your computer is infected and locked, often with an alarming sound and a phone number to call "Microsoft" or "Apple" support. Sometimes it arrives as an unsolicited phone call instead. Either way, the "technician" is friendly, urgent and reassuring, and guides you to install a remote-access program so they can "fix" it.',
        'Once they have remote access, the theatre begins: they open harmless system logs and present them as evidence of infection, then charge you for fake repairs, install actual malware, or walk you into your banking to "process a refund" that drains your account instead.'] },
      { h: 'The facts that break the spell', p: [
        'Anchor these truths. Microsoft, Apple, your bank and legitimate companies do not cold-call you about a virus, and a real virus warning never comes with a phone number to call. A web page cannot actually scan your computer or know it is infected — the "warning" is just a web page designed to look like a system alert. And no legitimate support process requires you to grant remote access to an unsolicited caller.',
        'If a scary pop-up appears, do not call the number. Close the browser — and if it will not close, restart the computer. The threat was theatre; there was nothing to fix.'] },
      { h: 'If it already happened', p: [
        'If you granted access or paid, act quickly and without shame. Disconnect the computer from the internet, then have it checked or reset by someone you trust, since malware may have been installed. Contact your bank immediately if any financial information was involved or any payment was made — speed is what limits the loss. Change passwords for important accounts from a different, clean device.',
        'Then tell the people around you, especially older relatives, how the scam works — because forewarning is the strongest defence, and the criminals count on victims being too embarrassed to warn the next target.'] },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    category: 'privacy',
    title: 'Digital Decluttering: Closing Old Accounts Is a Security Move, Not Just Tidiness',
    excerpt:
      'Every dormant account you forgot about is a door someone else might walk through. Why deleting old accounts protects you, and how to hunt them down.',
    date: '2026-07-24',
    minutes: 6,
    author: 'The Xad Desk',
    sections: [
      { h: '', p: [
        'Over a decade of internet life, most of us accumulate hundreds of accounts — forums we posted on once, shops we bought a single item from, apps we tried and forgot. Each one still sits on some company\'s server holding a slice of your data and, often, a password you reused. Those forgotten accounts are not just clutter; they are a quiet security liability.',
        'Cleaning them up is one of the rare chores that improves both your privacy and your security at the same time, and it costs nothing but an afternoon.'] },
      { h: 'Why dormant accounts are dangerous', p: [
        'The risk is not that you will suddenly use an old forum again — it is that the old forum will be breached. Small, neglected sites are breached constantly, and when they are, the email-and-password pairs they held end up on lists that attackers feed into other services. If you reused that password, a decade-old hobby site can become the crack that exposes your email or bank today.',
        'Every account you close is one fewer place your data lives, one fewer password floating around, and one fewer future breach that can touch you. Deletion is the most complete form of protection there is: data that is gone cannot be leaked.'] },
      { h: 'How to find the forgotten ones', p: [
        'Start where the evidence is: search your email inbox for phrases like "welcome", "verify your account", "your receipt" and "sign up" to surface services you registered with over the years. Your password manager, if you have one, is another map of where you have accounts. Browsers that saved logins hold clues too.',
        'For each one you no longer need, look for the account-deletion option — usually buried in settings under privacy or account. Some services make deletion deliberately hard; persistence, or a direct request to their support, usually gets there. Prioritise accounts that hold sensitive data or a reused password.'] },
      { h: 'Make it a small habit', p: [
        'You do not need to delete two hundred accounts in one heroic session. Set a modest goal — a handful each month, or a short session twice a year — and work through the list over time. Going forward, when you sign up for something you suspect you will use once, note it, so future-you can close it without a hunt.',
        'The result is a smaller digital footprint: fewer companies holding your data, fewer breaches that can reach you, and a genuine, if quiet, improvement to your security. Tidiness, in this one case, really is protection.'] },
    ],
  },
];

applyExpansions(ARTICLES);

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
export function getArticlesByCategory(cat: string): Article[] {
  return ARTICLES.filter((a) => a.category === cat).sort((a, b) => (a.date < b.date ? 1 : -1));
}
