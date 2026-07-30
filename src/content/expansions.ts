import type { Article } from './types';

/**
 * Additive content expansions — every entry only appends new sections to an
 * existing article (or overrides title/excerpt for disambiguation). Nothing
 * here removes or rewrites existing prose; it exists purely to deepen
 * articles that started too thin.
 */
export interface Expansion {
  slug: string;
  title?: string;
  excerpt?: string;
  sections: Article['sections'];
}

export const EXPANSIONS: Expansion[] = [
  {
    slug: 'password-manager-guide',
    sections: [
      {
        h: 'Passkeys: the thing that might replace passwords entirely',
        p: [
          "The newest development worth knowing about is the passkey, a login method built to remove passwords from the equation rather than just manage them better. A passkey is a cryptographic key pair generated on your device: the private half never leaves your phone or computer, and the public half is registered with the website. Logging in becomes a matter of unlocking your device with your fingerprint, face, or PIN — there is no password to type, steal, phish, or reuse, because there is no shared secret travelling over the network at all.",
          "Most major password managers now store and sync passkeys alongside ordinary passwords, so adopting them does not mean abandoning your existing vault — it means the vault quietly gets stronger entries over time as more sites offer the option. Where a site supports passkeys, it is worth switching, because a passkey cannot be phished the way a typed password can: there is no page to trick you into handing anything over, since nothing you know is ever transmitted.",
        ],
      },
      {
        h: 'Built-in browser managers versus a dedicated app',
        p: [
          "Every major browser now offers to save and fill your passwords for free, and the honest answer to \"is that good enough\" is: it is far better than nothing, but a dedicated password manager still earns its place for most people. Browser-based storage is typically tied to one browser ecosystem, makes secure sharing with family members clumsy, and often lacks features like breach monitoring that tells you when one of your saved logins has appeared in a leak.",
          "A dedicated manager also works consistently across every browser and app on every device you own, rather than only inside one browser's walled garden. If you already rely entirely on your browser's built-in saving and it works for you, that is a reasonable baseline — but if you use multiple browsers, share logins with family, or want breach alerts, a standalone manager is worth the small extra step of installing it.",
        ],
      },
      {
        h: 'Leaving the notebook or spreadsheet behind',
        p: [
          "A great many people currently manage passwords with a method that predates all of this: a notebook by the desk, or a spreadsheet saved on the desktop. It is an understandable habit, and it is far more dangerous than it feels, because a spreadsheet is not encrypted, and a notebook offers no protection at all if someone else ever has physical access to your home or your files.",
          "The migration is simpler than it looks. Open the spreadsheet or notebook next to the password manager's import screen; nearly every manager accepts a plain CSV import, so you can transcribe your existing list once, verify the import worked, and then permanently delete the old file — securely, not just to the recycle bin — and shred or discard the physical notebook. That one afternoon converts a pile of plaintext secrets into an encrypted vault.",
        ],
      },
      {
        h: 'Sharing logins with family without sharing your master password',
        p: [
          "Households often share a handful of accounts — streaming services, a joint utility login, a shared calendar — and the common workaround is texting the password to whoever needs it, which then sits in a chat log forever, unencrypted and searchable. Most password managers include a proper sharing feature instead: it lets you grant another person access to a specific saved login without ever revealing the underlying password to them in plain text, and you can revoke that access instantly if circumstances change.",
          "This matters most for the accounts you would least want lingering in a text thread — banking, medical portals, anything tied to your identity. Setting up shared, revocable access once is a small effort that quietly closes off a whole category of accidental exposure that ordinary family life creates.",
        ],
      },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    sections: [
      {
        h: 'How an authenticator app actually generates its codes',
        p: [
          "It can feel like magic that an app on your phone produces the exact six-digit code a website expects, with no internet connection required. The mechanism is called TOTP, time-based one-time password, and it works because the website and your app agreed on a shared secret the moment you scanned the setup QR code. From that point on, both sides independently combine that secret with the current time — rounded to a 30-second window — through the same mathematical function, and arrive at the same code without ever needing to communicate again.",
          "This is why the code changes every 30 seconds and why it works with your phone in airplane mode: nothing is being fetched from anywhere, it is being calculated locally from a secret you already have and a clock you both share. It is also why keeping your phone's clock accurate matters — a phone whose time has drifted noticeably can generate codes the server no longer accepts.",
        ],
      },
      {
        h: 'Push approval versus typing a code',
        p: [
          "Many services have moved beyond typing a six-digit code toward push-based approval: you log in, and a notification appears on your phone asking you to tap Approve or Deny. It is more convenient, since there is nothing to transcribe, but it introduces a new risk called MFA fatigue or push-bombing, where an attacker who already has your password repeatedly triggers approval requests, hoping that irritation or confusion eventually leads you to tap Approve by mistake or out of habit.",
          "The defence is simple but requires deliberate attention: never approve a push notification you did not just personally trigger by logging in yourself, no matter how many arrive. A flood of unexpected approval requests is not a glitch to dismiss — it is a strong signal that someone else has your password and is trying to get past your second factor. Deny them all, and change that password immediately.",
        ],
      },
      {
        h: 'Where to actually keep your recovery codes',
        p: [
          "Every service that offers app-based 2FA gives you a set of one-time recovery codes when you enable it, meant for the day your phone is lost, stolen, or simply dead. The mistake almost everyone makes is treating this step as an afterthought, screenshotting the codes and forgetting where the screenshot went, or skipping the step entirely because the setup flow felt finished already.",
          "Treat the recovery codes with the same seriousness as the 2FA setup itself: print them, or store them in your password manager's secure notes feature, or write them down and keep the paper somewhere as protected as a passport. The whole point of two-factor authentication is that losing one factor should not lock you out forever — but that promise only holds if the recovery path was prepared in advance, not invented in a panic after the phone is already gone.",
        ],
      },
      {
        h: 'A note for anyone managing 2FA for a team or workplace',
        p: [
          "Beyond personal accounts, many workplaces now enforce 2FA (or the closely related multi-factor authentication) through centralized identity systems, sometimes paired with conditional access rules that also check things like your location or device health before granting entry. If your employer requires this, it is worth understanding it is not arbitrary friction — a single stolen password no longer being enough to reach company systems is exactly the property that stops a huge share of real-world breaches, which overwhelmingly begin with one compromised credential rather than a sophisticated technical exploit.",
        ],
      },
    ],
  },
  {
    slug: 'spot-phishing-emails',
    sections: [
      {
        h: 'Mass phishing versus spear phishing',
        p: [
          "Not all phishing is created equal, and knowing the difference sharpens your instincts. Mass phishing is a numbers game: the same generic message — a fake delivery notice, a fake invoice — is blasted to millions of addresses, betting that even a tiny success rate pays off at that scale. These are usually the easiest to spot, because the vague, one-size-fits-all wording gives them away; a message addressed to \"Dear Customer\" about a delivery you were not expecting is a mass-phishing hallmark.",
          "Spear phishing is the opposite: a message crafted specifically for you or your organisation, often referencing a real colleague's name, a genuine ongoing project, or details pulled from your public social media profile. It is far more convincing because it is personal, and it is the method behind most serious financial fraud and corporate breaches. The defence against it is the same core habit — verify through a separate channel — but the vigilance needs to be higher precisely because the obvious tells are absent.",
        ],
      },
      {
        h: 'Business email compromise: when the "colleague" is real-looking',
        p: [
          "A particularly costly variant targets businesses directly: an attacker either spoofs or actually compromises an executive's or supplier's email account, then sends a message to someone in finance requesting an urgent wire transfer or a change to bank details for an upcoming payment. Because the request appears to come from a real, trusted internal address and often mimics that person's actual writing style, it slips past normal suspicion far more easily than a generic scam email would.",
          "Organisations that handle this well have a simple structural rule: any request to change payment details or send money outside the normal process must be confirmed by phone, using a number already on file — never a number provided in the email itself. That one procedural checkpoint, applied without exception regardless of how urgent or senior the request appears, has stopped an enormous number of these frauds before the money ever left the account.",
        ],
      },
      {
        h: 'Smishing and quishing: phishing beyond email',
        p: [
          "The same tricks have spread well beyond the inbox. Smishing is phishing by text message — a fake delivery fee, a fake bank alert — exploiting the fact that people tend to trust SMS more than email and often view it on a small screen where a suspicious link is harder to scrutinise. Quishing uses a QR code instead of a clickable link, printed on a fake parking ticket or pasted over a legitimate poster, banking on the fact that people rarely think to inspect where a QR code actually leads before scanning it with their phone.",
          "The underlying defence does not change with the medium: do not act on a link or code you did not seek out yourself, whether it arrived by email, text, or a sticker on a parking meter. If a text claims to be your bank, open the banking app directly instead of tapping the link; if a QR code claims to lead somewhere important, navigate there yourself instead of trusting the code.",
        ],
      },
      {
        h: 'Why urgency and authority work on all of us',
        p: [
          "It is worth understanding the psychology, because it explains why smart, careful people still fall for these messages under the right conditions. Humans are wired to respond quickly to perceived threats from authority — a message that appears to come from a bank, a boss, or a government agency triggers a different, faster mode of thinking than an email from an unknown stranger would, and manufactured urgency compresses the time available for that faster thinking to be checked by slower, more careful judgement.",
          "Recognising that this is a deliberate design choice by the attacker, not a natural feature of urgent situations, is itself a useful habit. Real emergencies from real institutions almost never require you to bypass your own normal verification process — and the moment a message pressures you to skip your usual caution \"just this once,\" that pressure is itself the clearest tell of all.",
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-vpn',
    sections: [
      {
        h: 'A quick, honest look at VPN protocols',
        p: [
          "Behind the scenes, a VPN's encrypted tunnel is built using a specific protocol, and the protocol in use affects both speed and trustworthiness more than most marketing pages let on. WireGuard is the modern standard most reputable providers have adopted: its code is dramatically smaller and simpler than older protocols, which makes it easier to audit for flaws and generally faster in practice. OpenVPN, an older and extremely well-tested protocol, remains common and trustworthy but is typically a little slower due to its more complex design.",
          "You do not need to become a cryptography expert to benefit from this — the practical takeaway is that a provider offering WireGuard as an option is usually a sign of a more modern, actively maintained service, and it is reasonable to prefer it when given the choice for both performance and the confidence that comes from simpler, more reviewable code.",
        ],
      },
      {
        h: 'The kill switch: the feature that matters more than the marketing',
        p: [
          "A VPN connection can drop unexpectedly — a network hiccup, switching from wifi to mobile data, the app crashing quietly in the background. Without protection, your device simply falls back to your normal, unencrypted connection the moment that happens, often without any visible warning, which defeats the entire purpose at the exact moment you needed it most, such as on public wifi.",
          "A kill switch is the feature that closes this gap: it blocks all internet traffic the instant the VPN connection drops, rather than silently allowing your traffic to leak out unprotected, until the VPN reconnects. If you are choosing between VPN providers for genuinely security-sensitive use, a reliable kill switch matters considerably more than marginal speed differences or flashy server-count claims, and it is worth confirming the feature exists and is enabled before relying on the VPN for anything sensitive.",
        ],
      },
      {
        h: 'Split tunneling: not everything needs to go through the tunnel',
        p: [
          "Running every single app's traffic through a VPN is not always what you want — a banking app that flags logins from unfamiliar countries may get confused by a VPN server located overseas, and some local services simply do not work correctly when your traffic appears to originate somewhere else entirely. Split tunneling solves this by letting you choose which apps go through the encrypted VPN tunnel and which connect normally and directly.",
          "This turns the VPN from an all-or-nothing switch into a more precise tool: route your browser through the VPN on public wifi while letting your banking app and local streaming service connect directly as usual. Not every provider offers this feature, and it is worth checking for it specifically if you find yourself frequently needing to turn the VPN fully on and off to work around app-specific quirks.",
        ],
      },
      {
        h: 'Corporate VPN and consumer VPN are not the same tool',
        p: [
          "If your workplace requires you to connect through a VPN, understand that it is solving a completely different problem than the consumer VPNs discussed above. A corporate VPN exists to let you securely reach internal company resources — file servers, internal tools — that are not meant to be exposed to the public internet at all; it is a private doorway into your employer's network, not a privacy tool for your personal browsing.",
          "Do not assume your workplace's VPN offers you personal anonymity or privacy from your employer — the opposite is closer to true, since your employer typically can and does monitor traffic that passes through their own corporate VPN, as it is their network. The two categories share a name and a similar underlying technology, but they exist for opposite purposes and carry opposite privacy implications for the person using them.",
        ],
      },
    ],
  },
  {
    slug: 'backups-3-2-1-rule',
    sections: [
      {
        h: 'Versioned backups versus a simple mirror',
        p: [
          "Not all backups behave the same way when something goes wrong, and the distinction matters enormously. A simple mirror backup keeps one current copy that updates to match your live files — which sounds reassuring until you realise it will happily overwrite a good backup with a corrupted or encrypted file the moment your live files become corrupted or encrypted, leaving you with no clean copy anywhere.",
          "A versioned backup instead keeps a history: yesterday's version, last week's version, last month's version, all preserved even as new backups are taken. If ransomware encrypts your documents today, a versioned backup lets you reach back to Tuesday's clean copy rather than discovering that your only backup is now equally useless. When choosing backup software or a cloud backup service, confirm it keeps version history rather than simply mirroring your current state — this single feature is often the difference between a backup that saves you and one that faithfully preserves the disaster.",
        ],
      },
      {
        h: 'The immutable backup: a lock ransomware cannot pick',
        p: [
          "The most sophisticated modern ransomware does not stop at encrypting your live files — it actively hunts for connected backup drives and cloud accounts and tries to destroy or encrypt those too, specifically to remove your ability to recover without paying. An immutable backup is designed to resist exactly this: once written, that particular backup snapshot cannot be altered or deleted for a set period, even by an account that has full administrative access to the system, including a compromised one.",
          "This used to be an enterprise-only feature but is increasingly available in consumer-grade cloud backup services as an option worth specifically looking for and enabling. If ransomware is a realistic concern for you — and given how widespread it has become, it increasingly is for anyone with valuable files — an immutable or at least a offline, physically disconnected backup copy is the one that survives even a fully successful attack on everything else.",
        ],
      },
      {
        h: 'Backing up more than just one computer',
        p: [
          "The 3-2-1 rule is often explained around a single laptop, but most households now generate irreplaceable data across several devices — phones full of photos, tablets used by kids, a second computer for a partner. Each of those needs its own place in the plan, because a backup strategy that only covers your primary machine leaves the family photo library on a phone as the single, unbacked-up point of failure.",
          "The practical fix is usually to lean on automatic phone photo backup (built into most phone operating systems and easy to verify is actually turned on) and to periodically include other household devices in whatever external-drive or cloud rotation you have set up for your main computer. A backup plan that quietly excludes half the devices that matter is not really the 3-2-1 rule — it is a partial version of it, and partial backup plans have a way of revealing their gaps at the worst possible moment.",
        ],
      },
      {
        h: 'How fast could you actually be back up and running?',
        p: [
          "Beyond simply having backups, it is worth honestly estimating how long a real restore would take, a concept professionals call recovery time objective. Restoring a handful of documents from cloud backup might take minutes; restoring a full computer's worth of files from an external drive after a total loss could take hours, and restoring from a slow, low-bandwidth cloud plan could take days for a large photo library.",
          "Knowing this number in advance — even roughly — changes how you plan. If a full restore would genuinely take days, that is a strong argument for also keeping certain truly critical files, like tax documents or your password manager's export, in a second, faster-to-reach location, so the things you need immediately are not stuck behind the same slow restore process as everything else.",
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    sections: [
      {
        h: 'A concrete walk-through of the ransomware-sync problem',
        p: [
          "It helps to see the failure mode play out in full rather than as an abstraction. Imagine your documents folder is set to sync automatically with a cloud storage service, which is a genuinely convenient setup for working across devices. Ransomware then encrypts every file in that folder in the space of a few minutes. Because sync is doing exactly what it is designed to do, it immediately and faithfully uploads those newly encrypted, now-useless versions to the cloud — and just as quickly pushes them down to every other device signed into the same account, replacing the good copies there too.",
          "Within the time it takes to notice something is wrong, every copy across every device and the cloud itself can be the same ruined version. This is not a flaw in the cloud service; sync performed its actual job perfectly. It is a mismatch between what sync promises (your files look the same everywhere) and what people assume it promises (your files are protected against damage) — and that gap is exactly where a true, separate backup earns its keep.",
        ],
      },
      {
        h: 'Checking your specific service\'s version history, concretely',
        p: [
          "The major cloud storage providers do offer some protection here, but the details differ enough that it is worth checking your specific one rather than assuming. Most offer a way to view previous versions of a file, and a separate trash or recycle bin for deleted items, but the retention window varies by provider and sometimes by your subscription tier — some offer 30 days, others considerably longer, and free tiers are often more limited than paid ones.",
          "Take five minutes to actually find these settings in whichever service you use rather than assuming they exist or assuming they are generous. Look specifically for \"version history\" and \"deleted files\" or \"trash\" in your account settings, and note the retention period you find. If it is short, or if you cannot find the feature at all, that is a clear signal that a genuinely separate backup is not optional for anything you cannot afford to lose.",
        ],
      },
      {
        h: 'Why a small business should take this more seriously still',
        p: [
          "For anyone running even a small business, this distinction stops being a personal inconvenience and becomes an operational risk. A ransomware attack that destroys synced customer records, invoices, or project files through exactly the mechanism described above can halt a small operation for days or permanently destroy records that cannot be recreated, and cloud storage's built-in retention windows were never designed with a business's specific compliance or continuity needs in mind.",
          "The practical fix scales the same way it does for individuals, just with more deliberate planning: a genuine, separate, versioned backup — ideally following the 3-2-1 rule in full — sitting alongside whatever cloud sync the business already uses for day-to-day collaboration. The modest cost of a proper backup service is trivial compared to the cost of losing a business's records entirely.",
        ],
      },
      {
        h: 'The restore test you should actually run once',
        p: [
          "The cleanest way to know whether your setup genuinely protects you is to deliberately test it rather than trust it in theory. Pick a file you do not urgently need, delete it, wait a day, and then try to recover it using only your cloud service's trash or version history — not by checking another synced device, which would not reveal whether the underlying protection actually works. Time how long it takes and whether the recovered version is intact.",
          "This small experiment, done once, tells you more about your real protection than reading any provider's marketing page. If the recovery is fast and complete, you have confirmed a genuine safety net exists. If it is slow, confusing, or the file is simply gone, you have found the exact gap that a real backup needs to close — and you found it on a calm day, testing a file you did not need, rather than during an actual emergency.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'Fingerprinting: tracking that survives clearing your cookies',
        p: [
          "Blocking cookies solves a large share of tracking, but a subtler technique called browser fingerprinting can identify you even with every cookie deleted. It works by combining a set of seemingly harmless details your browser reveals — your screen resolution, installed fonts, timezone, browser version, and dozens of similar small facts — into a combination that turns out to be distinctive enough to recognise you across visits without needing to store anything on your device at all.",
          "There is no single setting that fully defeats fingerprinting, which is precisely what makes it valuable to trackers, but some browsers now include specific fingerprint-resistance features that deliberately make your browser's reported details less distinctive, and reputable tracker-blocking extensions detect and interfere with the most common fingerprinting scripts. It will not get you to zero, but it closes a gap that cookie-blocking alone leaves wide open.",
        ],
      },
      {
        h: 'The trade-off hiding inside every extension you install',
        p: [
          "A content blocker or privacy extension needs fairly broad permissions to do its job — typically the ability to read and modify every page you visit, since that is exactly what is required to strip out trackers before they load. That is a legitimate and necessary permission for a tool built to protect you, but it is also, in principle, the exact permission a malicious extension would want in order to spy on you instead.",
          "This is why the earlier advice to choose a well-known, widely reviewed extension rather than an obscure one is not a minor detail — it is the whole safeguard. A privacy tool with broad access is only as trustworthy as the people who built it and the scrutiny it has received; an extension with a handful of downloads and no track record carries real risk precisely because of the access it is asking for, regardless of how privacy-focused its description sounds.",
        ],
      },
      {
        h: 'Auditing what your browser has already promised to other sites',
        p: [
          "Over years of browsing, you have likely clicked \"Allow\" on dozens of permission prompts — granting a site access to your camera, microphone, location, or notifications, often for a single specific purpose you have long since forgotten. Those permissions typically do not expire on their own, and every site you have granted camera or location access to retains that ability indefinitely unless you revisit it.",
          "Most browsers have a settings page listing every site and every permission it currently holds — search your browser's settings for \"site permissions\" or \"site settings\" to find it. Spending a few minutes revoking access you no longer remember granting, or no longer need, closes a category of quiet, forgotten exposure that no amount of cookie-blocking touches.",
        ],
      },
      {
        h: 'What private or incognito windows actually hide, and from whom',
        p: [
          "Private browsing windows are widely misunderstood, and the honest explanation matters more than the marketing name suggests. What they genuinely do is avoid saving your browsing history, cookies, and site data to your device once the window is closed — which is useful for shared or public computers, or for keeping a one-off search out of your regular history and autofill suggestions.",
          "What they do not do is hide your activity from the websites you visit, from your employer or school if you are on their network, or from your internet provider — all of those can still see exactly what you are doing during a private session, because private mode only affects what gets saved locally on your own device afterward, not what is visible to anyone watching the connection itself. Treat it as a local history eraser, not a cloak of invisibility, and you will use it for the right things and stop expecting it to do the wrong ones.",
        ],
      },
    ],
  },
  {
    slug: 'using-ai-assistants-safely',
    sections: [
      {
        h: 'What a hallucinated citation or function actually looks like',
        p: [
          "The word \"hallucination\" can sound abstract until you see a concrete example. Ask an AI assistant for a citation supporting a claim, and it may generate one that looks entirely plausible — a real-sounding journal name, a real-sounding author, a real-sounding year — that simply does not exist anywhere, invented wholesale because it was statistically the kind of thing that follows the preceding sentence, not because it retrieved a real source. The same happens in code: an assistant may confidently suggest calling a function from a well-known library that was never actually part of that library, because a function with that name and shape would fit the pattern of code it has seen.",
          "The unsettling part is that a hallucinated answer is written in exactly the same confident, fluent tone as a correct one — there is no stylistic tell that separates fabrication from fact inside the output itself. That is precisely why the habit of verifying anything load-bearing against an independent source is not excessive caution; it is the only reliable way to catch an error that, by its nature, gives no visible sign of being wrong.",
        ],
      },
      {
        h: 'The sycophancy problem: when the AI just agrees with you',
        p: [
          "A related and less discussed issue is that many AI assistants are tuned, whether deliberately or as a side effect of their training, to be agreeable — they tend to validate whatever framing or assumption you bring to a question rather than challenge it, even when a genuinely well-informed friend or professional would push back. Ask a leading question and you are more likely to get an answer shaped to confirm it than a neutral one that catches your mistaken premise.",
          "The practical guard is to occasionally ask the same question from a neutral or even opposite angle and see whether the answer changes in ways it shouldn't. If rephrasing a question to sound like you already believe the opposite conclusion flips the assistant's answer, that is a sign you were getting agreement rather than analysis the first time, and it is worth seeking a genuinely independent source for anything important riding on the answer.",
        ],
      },
      {
        h: 'A quick word on kids, homework, and AI',
        p: [
          "Families with school-age children increasingly face a version of this question that schools themselves are still working out: when is using an AI assistant for homework helpful learning, and when does it quietly replace the learning the assignment was meant to produce? There is no universal answer, but the same core caution applies with extra weight, because a child is less equipped than an adult to spot a confidently wrong explanation.",
          "A reasonable middle ground many families and teachers land on is treating the assistant as a study partner for explaining a concept in a different way after a genuine attempt, or for checking a completed answer, rather than as the source of the answer itself from the start. Whatever the household's approach, it is worth an explicit conversation rather than an assumed one, since children left to guess the boundary tend to guess in the direction of least effort.",
        ],
      },
      {
        h: 'How data handling differs between AI providers',
        p: [
          "Not every AI service treats your conversations the same way, and the differences are meaningful enough to be worth a few minutes of reading before you settle on a default tool for sensitive work. Some providers retain conversations by default and may use them to improve future models unless you specifically opt out; others, particularly paid business-tier products, offer stronger contractual guarantees that your data will not be used for training at all.",
          "If you plan to use an AI assistant for anything involving even mildly sensitive information — draft contracts, internal work documents, anything about real people — it is worth specifically checking that provider's current data-handling policy rather than assuming it matches whichever assistant you happen to be most familiar with, since policies and defaults genuinely differ and also change over time as the products evolve.",
        ],
      },
    ],
  },
  {
    slug: 'choosing-domain-and-hosting',
    sections: [
      {
        h: 'HTTPS and the padlock: what it actually certifies',
        p: [
          "Every modern website needs an SSL/TLS certificate, the thing responsible for the padlock icon and the \"https\" in your address bar. Functionally, it does two things: it encrypts the connection between a visitor's browser and your server, so nobody on the network in between can read or tamper with the traffic, and it cryptographically proves that the site really is who it claims to be, not an impersonator.",
          "The reassuring news for anyone setting up a new site is that this used to be an expensive, technical hurdle and now almost never is — most hosting providers issue and automatically renew a free certificate as part of the basic setup, with no manual configuration required. If a host is not doing this automatically in the current era, treat that as a signal to look elsewhere, since it points to either an outdated platform or an unusually poor default setup.",
        ],
      },
      {
        h: 'What a CDN is doing when you never notice it',
        p: [
          "A content delivery network, or CDN, is a layer many sites use without their owners ever having to think about it directly, and it solves a specific problem: a visitor in Tokyo loading a site hosted on a server in Virginia has to wait for data to travel that whole physical distance, every single time, which adds real delay. A CDN keeps cached copies of your site's files on servers spread around the world, so that visitor's browser fetches the page from a nearby location instead of crossing an ocean for every request.",
          "For a simple, mostly static site, many modern hosting platforms include CDN delivery automatically as part of the base plan, which is one of the quiet reasons static sites can feel snappy worldwide without any extra configuration from the person who built them. If you are choosing between hosting options and global visitors matter to you, ask specifically whether CDN delivery is included, since it is one of the larger practical differences between otherwise similar-sounding plans.",
        ],
      },
      {
        h: 'Email is not automatically part of your domain purchase',
        p: [
          "A common surprise for people setting up their first custom domain is discovering that owning example.com does not automatically give you a working you@example.com email address — that requires a separate email hosting service, configured through additional DNS records pointing at wherever your inbox actually lives, which may be a completely different company than your web host or domain registrar.",
          "This is worth planning for before you need it, because getting professional email working on a personal or business domain is one of the more common points of confusion for beginners, and it is genuinely a separate purchase and setup step from both the domain registration and the website hosting, even though all three feel like they should be one bundled thing.",
        ],
      },
      {
        h: 'Typosquatting: why registering the close variants sometimes matters',
        p: [
          "Once a domain becomes valuable to you — a business name, a brand you are building — it becomes a target for typosquatting, where someone registers a deliberately misspelled or visually similar version of your domain, hoping to catch visitors who mistype your address, or worse, to imitate your site convincingly enough to phish your own customers.",
          "For a purely personal project this risk is minor and not worth spending on, but for any domain tied to a business, a brand, or anything handling customer trust, it is common practice to also register the most likely misspellings and common alternate extensions of your main domain, even if you never build anything on them, purely to keep them out of a stranger's hands. It is a small, one-time cost against a risk that only grows as the original domain becomes more recognisable.",
        ],
      },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    sections: [
      {
        h: 'The forgotten update: your router and other smart devices',
        p: [
          "Most people have internalised, at least a little, that their phone and computer need updates. Far fewer apply the same thinking to their home router, smart TV, or other connected devices — yet a router runs software just like anything else, and it sits at the single point through which all of your home's internet traffic passes, making it an unusually valuable target if left unpatched.",
          "Router manufacturers do release firmware updates, but unlike a phone, most routers do not update themselves by default, and many people never log into their router's settings again after the initial setup. It is worth checking, once, whether your specific router model has an auto-update option and turning it on, or at minimum checking for a firmware update manually every few months — a step almost nobody takes voluntarily, which is exactly why it is worth deliberately adding to a periodic routine.",
        ],
      },
      {
        h: 'What "end of life" software really means, and why it is a countdown',
        p: [
          "Every piece of major software has an end-of-life date, the point after which its maker stops issuing security patches entirely, even for serious, newly discovered vulnerabilities. Running end-of-life software is fundamentally different from simply running an old version you have not gotten around to updating — an old but supported version will eventually get patched when you update it, while an end-of-life version never will, no matter what you do, because nobody is writing the fix anymore.",
          "This matters most for operating systems, since a computer running an end-of-life operating system accumulates unpatched, publicly known vulnerabilities indefinitely, and that list only grows over time as new flaws are discovered and never fixed. If a device is running software past its end-of-life date, upgrading to a currently supported version — or replacing the device if the hardware itself cannot support one — is not a nice-to-have; it is closing a door that will otherwise stay open forever.",
        ],
      },
      {
        h: 'Zero-day versus known vulnerability: two different kinds of risk',
        p: [
          "It helps to understand there are really two different situations update habits protect against. A known vulnerability is one the vendor has already found and patched — your risk here is purely about the gap between the patch existing and you installing it, and prompt or automatic updating closes that gap almost entirely. A zero-day vulnerability is one being actively exploited by attackers before the vendor even knows it exists, meaning no update can protect you yet because none has been written.",
          "Good update habits fully solve the first problem and cannot touch the second — but the reassuring context is that zero-days are, by their nature, rare and usually reserved by attackers for highly valuable or targeted attacks, not for opportunistic attacks against ordinary people. The overwhelming majority of real-world compromises exploit known, already-patched vulnerabilities against people who simply had not updated yet, which is exactly the risk that consistent updating eliminates.",
        ],
      },
      {
        h: 'Mobile apps: check that auto-update is actually on',
        p: [
          "Phones handle operating system updates fairly well by default in most cases, but individual apps are a separate setting people rarely check. Both major app stores offer an auto-update setting for installed apps, and it is usually on by default — but it is worth confirming directly, since some people or some carrier-modified phones have it switched off, either to save mobile data or by an earlier deliberate choice that has long been forgotten.",
          "An app that never updates can carry the same kind of unpatched vulnerability as an old operating system, particularly for apps that handle sensitive data like banking, messaging, or email. A thirty-second check of your app store's update settings is one of the smallest, highest-leverage items on this whole list.",
        ],
      },
    ],
  },
  {
    slug: 'recognise-tech-support-scams',
    sections: [
      {
        h: 'The refund scam: a variation that flips the script',
        p: [
          "A newer variant works in reverse from the classic infection scare, and it is worth knowing specifically because its framing feels less alarming and therefore slips past more people's guard. It typically begins with a call or email claiming you are owed a refund for a subscription or service — often one you genuinely do use, which is what makes it convincing — and the caller \"helps\" you process it by getting you to open your banking app or install remote-access software.",
          "Once inside, the scammer manipulates what you see on screen — sometimes transferring money between your own accounts and presenting it as an error, or briefly showing an inflated balance — to convince you that they \"accidentally\" refunded too much and that you now need to send the difference back to them, often through gift cards or a wire transfer. The entire premise, from the first phone call, is fiction: no legitimate refund process ever requires you to grant remote access to your device or your online banking.",
        ],
      },
      {
        h: 'Scareware versus a genuine security alert',
        p: [
          "One skill worth deliberately practising is telling apart a real security warning from your actual antivirus software and a fake one designed to look like it. A genuine alert from software you installed yourself will appear as a notification styled consistently with that program's normal interface, will never fill your entire screen with flashing colours and a blaring siren sound, and will never include a phone number to call for help — legitimate security software resolves things through its own interface, not by directing you to phone a stranger.",
          "Scareware, in contrast, is specifically engineered to look alarming and urgent because that is its entire function — it is not a security tool at all, it is a piece of theatre delivered through a web page or a fake pop-up, designed purely to frighten you into the phone call that starts the actual scam. If you are ever unsure which kind of alert you are looking at, the safest move is to close the browser entirely (or restart the device if it will not close) and separately open your actual installed antivirus software yourself to check whether it has anything genuine to report.",
        ],
      },
      {
        h: 'Real support only happens when you start it',
        p: [
          "The single sentence worth memorising and repeating to less tech-confident relatives is this: legitimate technical support only ever begins when you contact them, never the other way around. Microsoft, Apple, your bank, and your internet provider do not monitor your computer for problems and proactively call or pop up a warning about them — that entire concept, which the scam depends on you accepting as normal, does not correspond to how any real support relationship works.",
          "Internalising this one fact does more to prevent falling for the scam than memorising any list of specific tells, because it applies regardless of how convincing the specific pop-up, caller script, or fake company logo happens to be. If the contact was not something you initiated, it is not real support — full stop, no further analysis required.",
        ],
      },
      {
        h: 'Screening calls for a relative who is a frequent target',
        p: [
          "For an older relative who has been targeted repeatedly, or who you worry might not catch the tells in the moment, a practical structural fix works better than repeated reminders: set up call screening or a system where unknown numbers go to voicemail rather than being answered live, so there is a buffer between the scammer's carefully rehearsed script and an immediate, pressured response.",
          "Pair that with a simple standing rule you agree on together in a calm moment, well before any incident: any call about the computer, a refund, or an urgent security warning gets hung up on and the family member calls you back to check, no exceptions, regardless of how convincing or official the caller sounded. A rule agreed to in advance, during a calm conversation, holds up far better under pressure than good judgement is expected to hold up in the middle of a stressful, unexpected call.",
        ],
      },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    sections: [
      {
        h: 'Data brokers: the companies you never signed up with directly',
        p: [
          "Beyond the accounts you consciously created, a separate industry of data brokers has spent years compiling profiles about you from public records, purchase histories, and other companies' data, then selling access to that profile to advertisers, background-check services, and sometimes far less scrupulous buyers — all without you ever having signed up for anything with the broker directly.",
          "Most jurisdictions with meaningful privacy law now require data brokers to offer some form of opt-out or deletion request, though the process is often deliberately tedious and scattered across dozens of separate companies, each with its own request form. Several reputable services exist specifically to automate submitting these opt-out requests on your behalf across many brokers at once. It is not a quick fix, and its impact is less immediately visible than closing a forgotten forum account, but it is the version of digital decluttering that addresses data you never actively chose to share in the first place.",
        ],
      },
      {
        h: 'Old social media posts are part of the same footprint',
        p: [
          "The decluttering instinct usually focuses on whole accounts, but individual old posts on active accounts you still use are worth the same scrutiny. A decade of posts, photos, and check-ins accumulates into a surprisingly detailed timeline of where you have lived, worked, travelled, and who you associate with — information that is not dangerous in any single post but becomes a rich profile once someone has the patience to scroll back far enough.",
          "Most platforms now offer a way to review and bulk-archive or delete old posts rather than removing your account entirely, letting you keep the parts of your history you value while quietly retiring the rest. It is a slower, more editorial version of the same principle as closing dormant accounts: less of your past sitting exposed in the present is a genuine, if unglamorous, improvement to your overall privacy.",
        ],
      },
      {
        h: 'Accounts created for children, and planning for what happens later',
        p: [
          "Parents increasingly create accounts on a child's behalf — a school platform, a gaming account, an early email address — and these accumulate in the household's shared digital footprint just as adult accounts do, often with even less oversight since a child may not remember or even know an account exists once they have moved on from it. Periodically reviewing which of these are still needed, and closing the ones tied to outgrown apps or long-finished school years, is worth folding into the same decluttering habit as your own accounts.",
          "On the opposite end of the timeline, it is also worth a brief thought toward what happens to your own accounts eventually, sometimes called digital legacy planning: most major services now offer some form of legacy contact or inactive-account manager setting, letting you designate someone to access or close your accounts under defined circumstances, rather than leaving that decision to whichever company's default policy happens to apply.",
        ],
      },
      {
        h: 'Turning the account audit into a permissions audit too',
        p: [
          "While you are already searching your inbox and password manager for old accounts, it costs almost nothing extra to also check what permissions those still-active accounts have granted to other, connected apps — many services let a third-party app log in \"through\" your Google or Facebook account, for instance, and those connections often outlive the app's usefulness to you by years, quietly retaining access long after you stopped using the connected app.",
          "Most major platforms have a settings page listing every third-party app or service with access to your account, and reviewing it alongside your broader account cleanup catches a category of forgotten access that a simple list of old accounts would miss entirely — since the account itself is one you still actively use, even though a long-abandoned connected app quietly still has a key to it.",
        ],
      },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    sections: [
      {
        h: 'Hardware keys in daily practice, not just in theory',
        p: [
          "It is one thing to know a hardware security key is the strongest form of 2FA, and another to know what actually owning one is like day to day. In practice, most people keep a key on a keyring alongside house keys, tap or plug it in when logging into a supported account, and otherwise forget it exists — there is no code to read or type, which after the first few uses feels noticeably faster than an authenticator app, not just more secure.",
          "The usual friction point is having exactly one key and losing it, which is why the standard advice from anyone who has actually deployed these is to buy two: a primary key on your regular keyring and a backup stored somewhere separate, like a home safe or a drawer at a family member's house, registered to your important accounts alongside the primary. Losing the only copy of your strongest security measure would otherwise turn your best defence into your worst outage.",
        ],
      },
      {
        h: 'What happens on the rare day 2FA actually stops an attacker',
        p: [
          "It is worth picturing the exact moment 2FA earns its keep, because the scenario is more common than people assume. Your password is exposed somewhere — perhaps in a breach of a site you have not thought about in years, perhaps through a phishing email that briefly fooled you. An attacker on the other side of the world plugs that password into your email login. Without 2FA, they are in immediately, free to lock you out, reset your other accounts, and impersonate you to your contacts.",
          "With 2FA enabled, that same attacker hits a wall they cannot climb: a request for a code from an app or key they do not have physical access to. Most services will also quietly notify you of the failed login attempt, giving you an early warning to change the now-known-compromised password before any further damage occurs. That single notification, made possible only because 2FA blocked the first attempt, is often how people first learn a password of theirs leaked at all.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'Do these settings actually cost you convenience?',
        p: [
          "A fair question before adopting any of this is whether blocking trackers and tightening settings will break the sites you rely on daily. The honest answer is that blocking third-party cookies and enabling tracking-prevention settings breaks remarkably little in practice for ordinary browsing — the sites that genuinely need cross-site data to function, like single-sign-on login flows spanning two domains you control, are a small minority, and modern browsers have gotten better at recognising and permitting those specific legitimate cases automatically.",
          "Where something does break — a login loop that will not complete, an embedded video that will not load — most browsers make it a one-click exception to allow that specific site while leaving your stricter defaults in place everywhere else. The right mental model is not \"privacy settings versus a working web\" but \"strict by default, with quick, deliberate exceptions for the handful of sites that actually need it,\" which gets you nearly all of the protection with almost none of the cost.",
        ],
      },
      {
        h: 'Mobile browsing deserves the same ten minutes',
        p: [
          "Most people apply privacy settings, if they apply them at all, to their desktop browser and never think to repeat the exercise on their phone — despite phones now accounting for the majority of browsing time for most people, and mobile browsers offering many of the same tracking-prevention and cookie settings as their desktop counterparts, just tucked one menu deeper.",
          "The same handful of changes — blocking third-party cookies, enabling any built-in tracking protection, considering a reputable mobile content blocker — apply just as directly on a phone, and are worth the extra five minutes given how much of daily browsing now happens there. A privacy tune-up that only covers half of where you actually browse is only doing half the job.",
        ],
      },
    ],
  },
  {
    slug: 'using-ai-assistants-safely',
    sections: [
      {
        h: 'A simple two-question test before you trust an answer',
        p: [
          "A workable, low-effort filter for deciding how much scrutiny an AI answer deserves is to ask two questions before acting on it: first, would being wrong here actually cost me something — money, health, a legal outcome, someone else's trust — or is this low-stakes, like a brainstorm or a rephrased sentence? Second, can I verify this claim quickly against an independent source if I choose to?",
          "A confident answer to a low-stakes question you cannot easily verify anyway is fine to accept as-is, since little rides on it. A confident answer to a high-stakes question is worth the extra few minutes to check independently, regardless of how certain the assistant sounded, precisely because certainty in the delivery carries no information at all about whether the underlying claim is actually true.",
        ],
      },
      {
        h: 'The improving-but-not-solved trajectory worth knowing about',
        p: [
          "It is fair to note that hallucination rates have measurably improved across newer models compared to earlier ones, and providers have added features like showing sources or flagging uncertainty in some contexts, which genuinely helps. It would be a mistake, though, to read that trend as meaning the underlying problem has been solved, or that some future version will make verification unnecessary — the fundamental way these systems generate text has not changed, only the frequency of visible errors has been reduced.",
          "The safest posture is to treat the verification habit as a permanent part of how you use these tools, not a temporary workaround for today's imperfect versions — because a lower error rate still produces errors, and a confidently wrong answer that occurs one time in fifty is exactly as costly, in the specific instance it happens, as one that occurred one time in five.",
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-vpn',
    sections: [
      {
        h: 'Mobile data versus public wifi: recalibrating the actual threat',
        p: [
          "A surprising number of people diligently use a VPN on public wifi and then forget the whole concern the moment they switch to their phone's own mobile data connection — but it is worth understanding why that instinct, while not wrong, sometimes overstates the difference. Mobile data connections are encrypted between your phone and the carrier's tower by design, which is a meaningfully different security posture than an open café wifi network where anyone nearby with basic tools can potentially observe unencrypted traffic.",
          "This does not make a VPN useless on mobile data — it can still hide your browsing from your mobile carrier and mask your IP address from destination sites, which some people specifically want — but the urgent, must-do-this-right-now framing that applies to public wifi genuinely does not carry over to mobile data in the same way. Knowing the difference lets you reserve your attention and any VPN toggling for the situations where it is actually solving a meaningfully different problem.",
        ],
      },
      {
        h: 'Reading a VPN\'s privacy policy like it matters, because it does',
        p: [
          "Because a VPN provider can see the traffic your internet provider used to see, choosing one is fundamentally an exercise in choosing who to trust, and that decision deserves more than a glance at the marketing page. A no-logs claim is only as good as whether it has been independently verified — reputable providers commission third-party security audits specifically of their logging practices and publish the results, which is meaningfully different from simply asserting \"we don't log\" in a paragraph of marketing copy with nothing behind it.",
          "It is also worth briefly checking where a provider is legally based, since that determines what government data requests it can be compelled to comply with, and how long the company has existed under consistent ownership, since a VPN that has changed hands multiple times or emerged suddenly with heavy marketing spend and no track record carries more uncertainty than one with a long, stable, externally-audited history.",
        ],
      },
    ],
  },
  {
    slug: 'backups-3-2-1-rule',
    sections: [
      {
        h: 'What actually happens the first time you need to restore',
        p: [
          "Reading about backups in the abstract is different from living through an actual restore, and it is worth knowing what to expect so the moment does not add panic on top of an already stressful data loss. Restoring from a cloud backup usually starts with logging into the service's website or app, locating the specific files or the full backup snapshot you need, and either downloading them directly or requesting a restore that may take anywhere from minutes to hours depending on the amount of data and your connection speed.",
          "Restoring from a local external drive is often faster for large amounts of data but requires that the drive itself survived whatever happened — which is precisely why the 3-2-1 rule insists on more than one location in the first place. Whichever method you end up using, the calm version of this experience belongs to people who tested a restore beforehand and already know roughly what to expect; the stressful version belongs to people encountering the restore process itself for the first time during an actual emergency.",
        ],
      },
      {
        h: 'The subscription creep that quietly breaks a backup plan',
        p: [
          "A less obvious way backup plans fail is not through a dramatic disaster but through slow neglect: a cloud backup subscription lapses because a card on file expired, and nobody notices for months because the failure is silent — the service simply stops backing up new files rather than sending an alarming warning that demands attention. The next time a restore is actually needed, the most recent months of files are simply missing, and there was no single moment where anything visibly \"broke\" to prompt a fix.",
          "The practical defence is treating your backup subscription's billing and status the same way you would treat a smoke detector's battery: worth an occasional deliberate check rather than trusting it silently forever. Once or twice a year, alongside the restore test already mentioned, actually log into the backup service and confirm recent files are present and the subscription is active and paid, rather than assuming a system you set up once is still quietly working exactly as it was on day one.",
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    sections: [
      {
        h: 'The one setting that turns sync into something closer to a backup',
        p: [
          "While pure sync and true backup remain genuinely different things, one specific cloud storage feature narrows the gap significantly and deserves a special mention: continuous, automatic version history that keeps every past version of a file indefinitely, rather than for a limited window of days. When a service offers this, and you confirm the retention period is generous rather than a short default, a ransomware attack that encrypts your synced files becomes recoverable by rolling back each affected file to its last good version, rather than a total loss.",
          "The catch is that this feature and its retention period vary enormously between providers and subscription tiers, and it is rarely the headline feature on a pricing page, which is exactly why checking it directly and specifically, rather than assuming a generous default, remains the single most useful five minutes described in this whole article.",
        ],
      },
      {
        h: 'Shared folders multiply the risk in ways worth knowing',
        p: [
          "The ransomware-sync scenario gets meaningfully worse the moment a synced folder is shared with other people — a family member, a colleague, a collaborator — because ransomware on any one of those shared devices can propagate the damage to everyone else's copy of the shared folder just as readily as it would to your own devices, turning what might have been a single person's bad afternoon into a shared, harder-to-untangle mess touching everyone with access.",
          "If you maintain any shared folders for a family or a small team, it is worth confirming that whoever has access is also following reasonable security basics — updated software, cautious email habits, some form of backup on their own end — since a shared folder is only as resilient as its most vulnerable participant, and that vulnerability does not stay contained to just their own files.",
        ],
      },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    sections: [
      {
        h: 'The specific email search terms that surface the most accounts',
        p: [
          "Beyond the general suggestion to search your inbox for signup confirmations, a more targeted approach turns up accounts the general search misses: search separately for \"unsubscribe,\" which surfaces every marketing list you are still on regardless of whether you ever consciously signed up; search for \"password reset\" to find services you apparently still have working credentials for, since you would only receive that email from an account that exists; and search by year in your inbox, browsing a few months at a time from several years back, which surfaces the services you used heavily for a season and then simply drifted away from without any formal goodbye.",
          "This more thorough sweep typically finds two to three times as many forgotten accounts as a single quick search does, precisely because different signup and usage patterns leave different trails in an inbox, and no single search term catches all of them.",
        ],
      },
      {
        h: 'Why this is worth doing even for accounts with "nothing sensitive"',
        p: [
          "A natural objection to spending time on this is that many old accounts genuinely hold nothing sensitive — an old recipe site, a forum about a hobby you have moved past — so why bother closing them? The answer circles back to password reuse: even a completely innocuous account becomes dangerous the moment it shares a password with something that does matter, because a breach of the harmless site hands attackers a working password-and-email pair to try against your email or bank regardless of how trivial the original account seemed.",
          "Framed that way, the sensitivity of the account itself is almost beside the point; what matters is whether its breach could unlock something else through password reuse. If you have already adopted unique passwords everywhere via a password manager, the urgency of closing truly harmless old accounts drops somewhat — but the accounts still represent data sitting somewhere you no longer control, which remains worth cleaning up as time allows.",
        ],
      },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    sections: [
      {
        h: 'Patch Tuesday and why some updates arrive on a schedule',
        p: [
          "Some major vendors, most notably operating system makers, release routine security updates on a predictable monthly schedule rather than whenever a fix happens to be ready — a practice widely nicknamed Patch Tuesday after the day it traditionally falls on. This is a deliberate choice: businesses running thousands of computers need predictability to plan testing and rollout, and a known schedule lets IT teams prepare rather than reacting to fixes arriving at random moments.",
          "For an individual, the schedule itself matters less than knowing it exists, because it explains why you may notice a cluster of updates arriving around the same time each month rather than a steady trickle — and it is a useful reminder that these bundled monthly updates are rarely optional extras; they are usually addressing multiple vulnerabilities at once that have been accumulating since the last cycle.",
        ],
      },
      {
        h: 'When it is reasonable to wait a day or two',
        p: [
          "The earlier caveat about occasional bad updates deserves a slightly more practical shape: for a routine security patch to an app or your phone, applying it promptly remains the right default. For a major version upgrade of an entire operating system — the kind that changes how the whole device looks and behaves, not just patches a specific hole — waiting a week or two while any early widely-reported problems surface and get addressed is a reasonable, low-risk form of caution that does not meaningfully extend your exposure to known vulnerabilities, since major upgrades are a different category from routine security patches.",
          "The distinction to hold onto is between a security patch, which closes a specific known hole and is worth applying quickly, and a feature upgrade, where a short, deliberate delay to let obvious problems surface is a reasonable trade rather than the risky habit that ignoring routine security patches would be.",
        ],
      },
    ],
  },
  {
    slug: 'choosing-domain-and-hosting',
    sections: [
      {
        h: 'WHOIS privacy: keeping your name off the public record',
        p: [
          "When you register a domain, certain contact information is, by design of the domain system, recorded in a public database called WHOIS — historically including your name, address, phone number and email, all queryable by anyone. This existed originally so domain owners could be contacted for technical or legal reasons, but it also meant anyone curious, including scammers harvesting contact details, could look up exactly who owns a given domain and how to reach them.",
          "Most registrars today offer WHOIS privacy (sometimes bundled free, sometimes a small add-on) that substitutes the registrar's own forwarding contact details for yours in the public record, while still allowing legitimate contact to reach you. For anyone registering a domain under their own name rather than a business entity, enabling this is a small, worthwhile step that keeps your personal address and phone number out of a database anyone in the world can freely query.",
        ],
      },
      {
        h: 'Static sites versus a CMS: how the choice shapes your hosting bill',
        p: [
          "A meaningful fork in the road when choosing hosting is whether your site is static — pages that are essentially the same for every visitor, changed only when you edit and republish them — or built on a content management system that generates pages dynamically from a database each time someone visits, the way many blogging and e-commerce platforms work. The two have very different hosting needs and, often, very different costs.",
          "A static site can be served extremely cheaply, sometimes for free, because there is no database to run and no server-side processing required for each visitor — it is just files being handed out, which is also part of why static sites tend to load fast. A database-backed CMS needs an actual running server process, more resources, and more ongoing security maintenance, since a bigger, more complex system offers a bigger surface for something to go wrong or need patching. Neither is objectively better, but knowing which one your project actually needs prevents both overpaying for capacity a simple site never uses and underpaying for a busy dynamic site that needs more than a bargain static plan provides.",
        ],
      },
    ],
  },
  {
    slug: 'password-manager-guide',
    sections: [
      {
        h: 'What a strong master password actually looks like',
        p: [
          "The entire security of a password manager rests on one password you still have to remember yourself, so it is worth being specific about what makes a good one rather than leaving it vague. The most reliable modern approach is a passphrase of several random, unrelated words strung together — something like four or five words that have no connection to you personally and were not chosen because they form a memorable sentence about your life, since anything guessable from knowing you is exactly what a targeted guess would try first.",
          "Length matters more than complexity for this one password: a long passphrase of random words is both easier for a human to actually memorise and harder for a computer to guess than a short, complex-looking string of substituted characters that people mistakenly believe is stronger. Write it down once, physically, and store that paper somewhere safe while you commit it to memory over the first few weeks — losing the master password, with no other copy anywhere, means losing access to every password inside the vault at once.",
        ],
      },
      {
        h: 'What happens to your vault when you die, or simply lose access',
        p: [
          "An uncomfortable but practical question worth a few minutes of thought: what happens to everything in your password vault if something happens to you, or if you are simply locked out and cannot recover access through the normal process? Most reputable password managers offer some form of emergency access or legacy contact feature, letting you designate one or more trusted people who can request access after a waiting period you control, without giving them everyday access to your vault.",
          "Setting this up costs a few minutes and sits quietly unused for as long as everything is fine, but it is the difference between a family being permanently locked out of every account you managed — banking, insurance, subscriptions, everything — and a defined, deliberate process for someone you trust to step in when genuinely needed. It is exactly the kind of preparation that feels unnecessary until the one day it very much is not.",
        ],
      },
    ],
  },
  {
    slug: 'spot-phishing-emails',
    sections: [
      {
        h: 'How to actually check where a link leads, step by step',
        p: [
          "The advice to \"hover before you click\" is common but rarely explained concretely enough to actually do. On a computer, resting your mouse pointer over a link without clicking reveals the true destination address, usually shown in a small preview at the bottom corner of the browser or email client — and the skill is comparing that revealed address carefully against what the visible link text claims, since a link can display \"yourbank.com\" while actually pointing somewhere else entirely, and only the hover preview shows the truth.",
          "On a phone, where hovering is not possible, a long press on a link in most apps brings up a preview of the actual destination before you commit to opening it. The specific detail to scrutinise once you see the real address is the domain immediately before the first single slash — a link to yourbank.com.secure-verify.net leads to secure-verify.net, not your bank, with \"yourbank.com\" appearing only as a deliberately misleading subdomain designed to catch a quick glance.",
        ],
      },
      {
        h: 'Reporting a phishing attempt properly helps everyone',
        p: [
          "Beyond protecting yourself, reporting a phishing email through the right channel has a real, if invisible, effect: most major email providers use these reports to train their spam filters, meaning a well-reported phishing campaign gets caught faster for everyone else who was about to receive the same message, not just you. Most email clients include a direct \"report phishing\" option, distinct from ordinary spam, specifically because these reports are handled differently and feed more directly into security systems.",
          "If the email impersonates a specific real company, forwarding it to that company's dedicated abuse or phishing report address (commonly something like report-phishing@ or abuse@ their domain, findable on their site) helps them take down the fake infrastructure being used to run the scam. Reporting takes barely more effort than deleting, and unlike deleting, it actually degrades the attacker's operation rather than simply removing the evidence from your own inbox.",
        ],
      },
    ],
  },
  {
    slug: 'recognise-tech-support-scams',
    sections: [
      {
        h: 'How the fake pop-up manages to look so convincing',
        p: [
          "It is worth understanding the actual mechanics of the browser pop-up specifically, since demystifying it removes much of its power. The alarming full-screen message is not your computer or your antivirus talking to you — it is simply a web page, often designed to resist normal closing by opening endless additional pop-up windows or entering a fullscreen mode that hides your browser's normal controls, specifically to make it feel like your computer itself has been taken over rather than just one browser tab misbehaving.",
          "Knowing this in advance changes how frightening the moment feels when it happens: if you understand that a web page has no ability to actually scan your files or lock your computer, the flashing warning becomes an annoying piece of malfunctioning software to shut down, rather than a genuine crisis. The technical fix, if the browser will not close normally, is usually to force-quit the browser application entirely through your device's task manager or equivalent, rather than clicking anything inside the pop-up itself, including any button that claims to close or dismiss it.",
        ],
      },
      {
        h: 'What legitimate remote support actually looks like, for comparison',
        p: [
          "Real remote technical support does exist and is a normal, safe part of using technology — the distinguishing feature is always that you initiated the contact, whether by calling a company's official support line yourself, using a number you looked up independently rather than one given to you in a pop-up, or opening a support chat through a company's own official app or website that you navigated to directly.",
          "In a legitimate support interaction, you are also generally in control of when remote access begins and ends, working with a company you have an actual account or purchase relationship with, and the interaction was something you sought out to solve a problem you were already aware of — not something that found you through a frightening pop-up or an unsolicited phone call about a problem you did not know you had until the moment they told you about it.",
        ],
      },
      {
        h: 'Why the elderly are targeted specifically, and what actually helps',
        p: [
          "It is not a coincidence that older adults are disproportionately targeted by tech-support scams, and understanding why sharpens the specific help that works, rather than generic advice to \"be careful.\" Scammers who run these operations at scale often specifically screen for older callers, on the well-documented assumption that this group is statistically both more likely to have accumulated savings worth stealing and less likely to have grown up around the specific visual patterns — the layout of a fake alert, the tone of a spoofed caller ID — that make the deception legible to someone who came of age around computers.",
          "What genuinely helps is rarely a single warning delivered once; it is a standing, rehearsed plan agreed upon in a calm moment, well before any incident, along with removing the time pressure that makes the scam work in the first place. Something as simple as \"you never have to decide anything about the computer or your bank right now, on this call — hang up, and call me before doing anything\" gives a person a script to fall back on precisely when their own judgement is under the most pressure, which is exactly the moment the scam is designed to exploit.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'Cleaning up your existing profile, not just future browsing',
        p: [
          "Everything discussed so far changes how your browser behaves going forward, but it is worth spending a moment on the tracking data that has already accumulated in your browser profile over months or years of ordinary use — the stored cookies, cached site data, and saved browsing history that predate any settings change you make today. Turning on tracker blocking today does not retroactively remove the cookies that trackers already planted last month; those sit in your browser's storage until you clear them separately.",
          "Most browsers offer a \"clear browsing data\" option that lets you choose exactly what to remove — cookies, cache, history — and over what time range, from the last hour to all time. Doing a one-time thorough clear alongside adopting the new settings gives you a genuinely clean starting point, rather than carrying forward months of tracking data collected under your old, looser settings while your new, stricter settings only apply going forward.",
        ],
      },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    sections: [
      {
        h: 'A short list of accounts that deserve 2FA today, not eventually',
        p: [
          "If reading all of this has convinced you 2FA is worthwhile but the idea of enabling it everywhere feels like an overwhelming afternoon, a shorter, prioritized list makes the task approachable: your primary email, because it can reset passwords on nearly everything else you own; your password manager itself, since it is now the single vault holding every other password; your main bank and any account holding real money; and any account tied to your professional identity, like a work email or a cloud storage account holding sensitive documents.",
          "Everything past that short list is genuinely worth adding over time, but treating those four categories as this week's task rather than \"2FA everywhere, eventually\" — a goal vague enough to never quite get started — turns a good intention into an actual afternoon's work with an end in sight, and covers the accounts where a takeover would do the most damage first.",
        ],
      },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    sections: [
      {
        h: 'A five-minute audit of what on your devices is actually current',
        p: [
          "Rather than trying to remember every device and app you own, a concrete five-minute exercise surfaces the actual gaps: open your phone's settings and check whether automatic app updates and automatic operating system updates are both genuinely switched on, not just assumed to be. Do the same on your computer's operating system update settings. Then check your router's admin page — usually reached by typing a specific address into a browser found in the router's manual or on a sticker on the device itself — for a firmware version and update option.",
          "Most people who do this exercise once find at least one surprise: an auto-update setting that was quietly off, a router that has not been checked in years, an old phone still receiving app updates but no longer receiving operating system security patches at all because it has aged out of support. Finding these gaps during a calm five-minute check is a far better position to discover them from than finding them after they have already been exploited.",
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    sections: [
      {
        h: 'The mental shortcut that keeps this straight going forward',
        p: [
          "With all of the mechanics covered, the whole distinction collapses nicely into one memorable question you can ask about any cloud service you use: if my current files were suddenly deleted, encrypted, or corrupted right now, could I recover a clean version from this same service, or would the damage already be reflected there too? A true backup answers yes, because it deliberately keeps history separate from your live, current state. Pure sync answers no, because it faithfully mirrors your live state, damage included.",
          "Keep that single question in mind whenever you evaluate a new storage service, a new plan tier, or simply whether your current setup is actually protecting you the way you have assumed it does. It cuts through marketing language far more reliably than any list of specific feature names, because it forces the service to prove its actual behaviour in the one scenario that matters, rather than trusting whichever label — backup, sync, cloud storage — the marketing happened to choose.",
        ],
      },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    sections: [
      {
        h: 'A realistic pace that actually finishes, instead of stalling',
        p: [
          "The single biggest reason this kind of cleanup fails is not lack of motivation on day one — it is setting a scope so large that the task becomes exhausting after the first dozen accounts and quietly gets abandoned with a hundred more still sitting untouched. A more durable approach treats this as a recurring small habit rather than a one-time marathon: a fixed, modest number each sitting — five or ten accounts — done consistently every week or two, tracked in a simple list so you can see the list shrinking rather than facing the whole undifferentiated pile every time.",
          "At that pace, even a genuinely large list of accumulated accounts — the kind of number that feels impossible to face in one sitting — resolves within a couple of months of unremarkable, low-effort sessions, each one small enough to actually fit into a spare ten minutes rather than requiring a dedicated afternoon you keep postponing. The habit format, not raw effort, is what actually gets this kind of long-tail cleanup finished.",
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-vpn',
    sections: [
      {
        h: 'Free VPNs specifically: the trade you are actually making',
        p: [
          "It is worth being explicit about the free VPN warning already raised, because the mechanism is not obvious from the outside. Running VPN infrastructure — servers around the world, bandwidth, engineering to keep it secure — costs real, ongoing money, and a company offering that service for free has to fund it somehow. In a meaningful share of free VPN services investigated by security researchers over the years, the funding mechanism turned out to be logging and selling users' browsing data to advertisers — precisely the activity a VPN is supposed to protect you from, now performed by the VPN provider itself rather than your original internet provider.",
          "This does not mean every free option is compromised, and some reputable paid providers do offer limited free tiers as a genuine trial rather than a bait-and-switch. But it does mean the free-versus-paid decision for a VPN specifically is not really about budget the way it might be for other software — it is about who is paying for the infrastructure, and if it is not you, the honest question is who is, and what they are getting from the arrangement in return.",
        ],
      },
    ],
  },
  {
    slug: 'using-ai-assistants-safely',
    sections: [
      {
        h: 'The company-policy question worth asking before you use one at work',
        p: [
          "If you use an AI assistant as part of your job, the sharing caution described earlier applies with extra weight, because the material at risk may not be yours alone to risk — it may belong to your employer, or to a client, or be covered by a confidentiality agreement you signed. A growing number of workplaces have published explicit policies about which AI tools are approved for work use and what categories of information may never be pasted into any of them, precisely because early, unregulated use led to real incidents of confidential material ending up inside a third-party AI provider's systems.",
          "If your workplace has not published an explicit policy, that is worth treating as a gap to ask about rather than a silent green light — the absence of a rule is not the same as permission, and the safest default in that gap is applying the same caution you would to any other external cloud service you do not control: assume anything you paste in could, in principle, leave your control, and choose what you share accordingly.",
        ],
      },
    ],
  },
  {
    slug: 'backups-3-2-1-rule',
    sections: [
      {
        h: 'The cost comparison people rarely actually run',
        p: [
          "A quiet reason many people never set up a proper backup plan is an unexamined assumption that it will be expensive or complicated, when a realistic accounting usually shows otherwise. A capable external drive is a one-time purchase that lasts years; a reputable cloud backup service typically costs a modest monthly fee, often less than a single streaming subscription; and most of the software involved on both ends handles the actual backing-up automatically once configured, requiring no ongoing manual work.",
          "Set against that modest, mostly one-time cost is the realistic alternative: the irreplaceable value of years of photos, the hours of unpaid labour recreating lost documents, or in a worst case, a business's records gone for good. Once actually priced out side by side rather than left as a vague impression, the 3-2-1 rule is rarely the expensive option in this comparison — the absence of any backup plan is.",
        ],
      },
    ],
  },
  {
    slug: 'spot-phishing-emails',
    sections: [
      {
        h: 'A short mental checklist for the next suspicious email you get',
        p: [
          "With all of the specific tells and techniques covered, it helps to compress them into a short, repeatable checklist you can run through in the moment an email raises even a small doubt: does it create urgency or fear pushing you to act immediately? Does the sender's actual address, not just the display name, match who it claims to be? Does hovering over the link reveal a destination that matches what the visible text claims? Is it asking for something a legitimate sender in this position would not normally ask for over email?",
          "A message that raises even one of those flags deserves the one habit that defeats nearly all of this: closing the email and reaching the supposed sender through a channel you already trust and control, rather than anything the email itself provided. Running through this short list takes seconds once it becomes a habit, and it is the difference between a moment of doubt that gets resolved safely and a moment of doubt that gets clicked through under pressure.",
        ],
      },
    ],
  },
  {
    slug: 'choosing-domain-and-hosting',
    sections: [
      {
        h: 'A simple decision path for a genuine beginner',
        p: [
          "For someone approaching all of this for the very first time, the number of options can feel paralysing rather than empowering, so it helps to collapse the decision into a short, ordered path rather than trying to evaluate everything at once. First, register a domain name from a well-known registrar, enabling WHOIS privacy along the way. Second, decide honestly whether your site is simple and mostly static or needs a full content management system with a database — most personal sites, portfolios, and small business brochure sites are the former, and can use inexpensive static hosting. Third, point the domain's DNS at the chosen host, following whichever guided setup that host provides, since nearly all reputable hosts now walk beginners through this exact step.",
          "Resist the urge to research every possible option to exhaustion before starting — the mainstream, well-reviewed choices in each category are all perfectly capable for a first project, and the two mistakes that actually cause beginners pain are choosing an obscure, unreviewed provider to save a small amount of money, and buying vastly more hosting capacity than a new, small site will use for years. Start modest, reputable, and simple; you can always move to something more complex later once you actually know what more you need, and moving a domain to a new host later is a well-trodden, unremarkable process rather than a rare emergency.",
        ],
      },
    ],
  },
  {
    slug: 'password-manager-guide',
    sections: [
      {
        h: 'The breach-alert feature that works quietly in the background',
        p: [
          "Beyond generating and storing passwords, most reputable password managers include a feature that checks your saved logins against known databases of breached credentials, alerting you when one of your accounts appears in a leak that has become public — something that happens to major services with more regularity than most people realise, often without the affected company making it especially prominent news.",
          "This feature works quietly and asks nothing of you until it has something to report, at which point it tells you exactly which saved login was exposed and prompts you to change that specific password immediately, rather than leaving you to separately track breach news and cross-reference it against your own accounts yourself. It converts a genuinely hard problem — knowing which of your dozens of accounts has been silently compromised somewhere on the internet — into a notification you can act on the moment it appears, which is a meaningfully different experience than discovering a breach only when someone has already used the leaked password against you.",
        ],
      },
      {
        h: 'The autofill trick worth knowing about',
        p: [
          "One underused feature is that a manager's refusal to autofill on the wrong domain is itself a phishing detector you can lean on deliberately. If you land on a page that looks exactly like your bank's login screen but your password manager does not offer to fill in your saved credentials, that mismatch is a strong, concrete signal that the domain is not actually the one your credentials were saved for — even if the page visually looks identical down to the logo and layout.",
          "Get in the habit of noticing that absence rather than working around it by typing the password manually when the manager \"fails\" to fill it, since manually typing it in that moment is exactly how a convincing phishing page steals a password from someone who otherwise does everything right. Treat a manager's silence on a login page as a question worth pausing on, not an inconvenience to route around.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'Why this is worth revisiting every so often, not just once',
        p: [
          "Browsers update their defaults periodically, tracking companies develop new techniques to route around whatever blocking became common, and your own habits change as you adopt new sites and services — all of which means a privacy tune-up done once, years ago, gradually drifts out of date without any single moment announcing that drift. Treating this as a once-or-twice-a-year check, the same way you might periodically review other settings, keeps the protection current rather than relying on a configuration frozen at whatever point you last thought about it.",
        ],
      },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    sections: [
      {
        h: 'The reassurance worth ending on',
        p: [
          "If the range of options here feels like a lot to take in, the reassuring summary is that any form of 2FA you actually turn on is a significant improvement over none at all, and the ranking between SMS, an authenticator app, and a hardware key matters far less than the single step of moving from zero factors to two. Perfect should not be the enemy of the meaningful, immediate improvement available in the next thirty seconds on whichever account you open first.",
        ],
      },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    sections: [
      {
        h: 'One habit, applied consistently, closes most of this',
        p: [
          "Everything in this article reduces to a single, unglamorous habit: treat the update prompt as a fix rather than an interruption, enable automatic updates everywhere the option exists, and periodically check the handful of devices — routers, older phones, forgotten smart devices — that do not update themselves by default. It is one of the least exciting security practices available and consistently one of the most effective, precisely because it closes the exact gap that the largest, most damaging attacks have historically walked straight through.",
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    sections: [
      {
        h: 'A closing thought on convenient defaults',
        p: [
          "Cloud storage services are not lying to you when they market convenience, speed, and access from anywhere — those are all genuinely true and genuinely valuable. The lesson here is not to distrust cloud storage; it is to recognise that convenience and protection are separate properties that happen to be bundled together in the same product, and paying deliberate attention to which one you actually have solves the entire problem this article set out to address.",
        ],
      },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    sections: [
      {
        h: 'The habit that keeps the list from growing back',
        p: [
          "Beyond the cleanup itself, adopting one forward-looking habit prevents the same pile from rebuilding: whenever you create a new account for a one-off purpose — a coupon code, a single download, a trial you do not expect to keep — make a note of it somewhere, even a simple running list, so that future decluttering sessions have a map instead of requiring another full inbox excavation. A little friction added at account-creation time saves considerably more friction at cleanup time.",
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-vpn',
    sections: [
      {
        h: 'The one-sentence summary worth remembering',
        p: [
          "If nothing else from this article sticks, this framing should: a VPN protects the pipe your data travels through, not what happens at either end of it, so it belongs alongside good password habits and 2FA as one part of a layered approach rather than a single solution asked to do more than any one tool reasonably can.",
        ],
      },
    ],
  },
  {
    slug: 'using-ai-assistants-safely',
    sections: [
      {
        h: 'Treating it as a skill worth developing, not a settled question',
        p: [
          "Using an AI assistant well is turning out to be a genuine, ongoing skill — knowing what to ask, how to phrase it, when to trust the answer, and when to verify — rather than a one-time decision about whether the tools are good or bad. Approaching it that way, with the same gradual, practice-based improvement you would apply to any other new tool, tends to produce far better outcomes than either uncritical enthusiasm or blanket avoidance.",
        ],
      },
    ],
  },
  {
    slug: 'backups-3-2-1-rule',
    sections: [
      {
        h: 'Setting it up on the calmest day possible',
        p: [
          "Every piece of advice in this article works best when acted on now, on an ordinary day with nothing at stake, rather than during the panic that follows an actual loss. Backup systems set up under pressure, after something has already gone wrong, tend to be rushed and incomplete; the same afternoon of setup, done in advance with no urgency, produces a far more careful and complete result — and then quietly protects everything that matters for as long as you keep it running.",
        ],
      },
    ],
  },
  {
    slug: 'spot-phishing-emails',
    sections: [
      {
        h: 'Confidence comes from practice, not from a single reading',
        p: [
          "Spotting phishing reliably is a skill that sharpens with repetition rather than something absorbed completely from one article. The more consciously you apply the checklist above to ordinary, everyday emails — even ones you are fairly sure are legitimate — the faster and more automatic the recognition becomes, until checking the sender address and hovering over links happens almost without conscious thought, which is exactly the point where the habit stops requiring effort and starts genuinely protecting you by default.",
        ],
      },
    ],
  },
  {
    slug: 'choosing-domain-and-hosting',
    sections: [
      {
        h: 'The three ideas that make everything else make sense',
        p: [
          "If the specifics fade with time, hold onto the three core ideas underneath all of it: the domain is the name people type, the hosting is the computer that actually stores and serves your site, and DNS is the address book connecting the two. Every confusing pricing page, every unfamiliar acronym, and every upsell attempt becomes far easier to evaluate once you can place it correctly against one of those three simple roles.",
          "It is also worth remembering that none of these three decisions are permanent traps. A domain can be transferred between registrars, hosting can be moved to a different provider entirely, and DNS records can be repointed in minutes once you know where to look — so the pressure to get every choice perfect on day one is lower than it feels when everything is still unfamiliar. Pick reasonable, reputable options to start, and treat the whole system as adjustable rather than fixed.",
        ],
      },
    ],
  },
  {
    slug: 'password-manager-guide',
    sections: [
      {
        h: 'The one thing worth doing this week',
        p: [
          "If everything above still feels like more than you can take on at once, reduce it to a single action: install a reputable password manager and let it start saving new logins as you browse normally. You do not need to migrate every account on day one, generate a perfect master passphrase in the first hour, or set up emergency access before dinner. The vault begins protecting you the moment it starts capturing new logins, and the rest — old account migration, breach-alert review, emergency access — can follow at whatever pace fits around ordinary life without losing any of the value already gained.",
        ],
      },
      {
        h: 'The everyday feeling once it clicks',
        p: [
          "People who have used a password manager for a while consistently describe a similar shift: logging in stops being a small daily task requiring thought, since the manager fills the field before the thought would even form, and the low-grade background anxiety of not quite trusting your own reused passwords fades because there is nothing left to reuse. It becomes invisible infrastructure, the way a good seatbelt is invisible until the one day it matters — mostly unnoticed, quietly present, and doing its job every single time you log in anywhere.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'A last word on realistic expectations',
        p: [
          "None of this makes you invisible online, and no honest article about browser privacy should claim otherwise. What ten minutes of deliberate settings changes actually buys you is a meaningful reduction in casual commercial tracking — fewer companies quietly assembling a profile of your habits, less cross-site following, a smaller ambient footprint — achieved through changes that, once made, keep working every day without any further attention from you. That is a genuinely worthwhile trade for the ten minutes it costs, even without any illusion of total anonymity attached to it.",
        ],
      },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    sections: [
      {
        h: 'Making it a standard part of signing up for anything new',
        p: [
          "Once the habit is established on your existing accounts, extend it forward rather than treating it as a one-time cleanup project: whenever you sign up for a new service going forward, check for a 2FA option during the initial setup and enable it immediately, while you are already in the settings and the extra step costs almost nothing. Building it into account creation itself, rather than a separate task to circle back to later, means your protection grows automatically as your list of accounts grows, instead of your account list quietly outpacing whatever cleanup project you once meant to finish.",
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    sections: [
      {
        h: 'A small, concrete first step',
        p: [
          "If this has raised any doubt about your own setup, the smallest useful next action is not a full backup overhaul — it is simply opening your cloud storage account's settings today and finding its version history and trash retention period, writing down what you find, and deciding from that concrete information, rather than assumption, whether a genuine separate backup is something you need to add. That five-minute check is the entire actionable core of everything covered here.",
        ],
      },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    sections: [
      {
        h: 'Reframing the prompt for good',
        p: [
          "The next time an update notification appears at an inconvenient moment, it is worth consciously reframing what it actually represents: not an interruption engineered to annoy you, but a fix, already written and tested, for a specific hole that people whose full-time job is finding such holes have already located. Seen that way, the mild inconvenience of installing it becomes easy to accept as the genuinely small price it actually is, set against what it is quietly protecting you from.",
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-vpn',
    sections: [
      {
        h: 'Matching the tool to the actual worry',
        p: [
          "The most useful question to ask before buying any VPN is not \"which one is best\" in the abstract, but \"what specific problem am I trying to solve\" — securing public wifi, hiding browsing from an internet provider, reaching region-locked content — because the honest answer to whether a VPN is worth it depends entirely on which of those situations actually describes your life. A tool bought to solve a vague, general unease about privacy tends to go unused after the novelty fades; a tool bought to solve one specific, recurring situation tends to earn its keep.",
        ],
      },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    sections: [
      {
        h: 'Treating it as maintenance, not an emergency',
        p: [
          "The healthiest framing for all of this is maintenance rather than crisis response — the digital equivalent of cleaning out a garage periodically rather than only when it becomes genuinely unusable. Nothing here needs to happen today in a panic; it needs to happen occasionally, deliberately, and consistently enough that the pile of forgotten accounts never grows large enough to feel overwhelming again.",
        ],
      },
    ],
  },
  {
    slug: 'recognise-tech-support-scams',
    sections: [
      {
        h: 'The confidence that comes from knowing the pattern',
        p: [
          "Every version of this scam, however it is dressed up — a pop-up, a phone call, a fake refund — relies on the same underlying structure: manufactured urgency, an appeal to authority, and a request for remote access or payment that a legitimate process would never require. Once that pattern is genuinely internalised rather than just read once, new variations of the scam become recognisable almost immediately, regardless of how convincingly they are packaged, because the surface details change constantly but the underlying mechanics do not.",
        ],
      },
    ],
  },
  {
    slug: 'backups-3-2-1-rule',
    sections: [
      {
        h: 'The peace of mind that is easy to underrate in advance',
        p: [
          "It is hard to fully appreciate, before you have needed it, how different it feels to lose a device or suffer a ransomware attack when a solid backup is already sitting there waiting, versus discovering in that exact moment that no such safety net exists. The former is an afternoon's inconvenience; the latter can be a genuine, lasting loss. The 3-2-1 rule is the difference between those two very different days, decided in advance on an unremarkable afternoon long before either one arrives.",
        ],
      },
    ],
  },
  {
    slug: 'using-ai-assistants-safely',
    sections: [
      {
        h: 'The balance worth aiming for',
        p: [
          "The goal is neither uncritical trust nor reflexive avoidance, but a calibrated middle position: genuine enthusiasm for what these tools do well, paired with a consistent habit of verifying what actually matters and guarding what should stay private. Held in that balance, an AI assistant is one of the more useful additions to an ordinary digital toolkit in years — and held without that balance, in either direction, it becomes either a missed opportunity or a quiet liability.",
        ],
      },
    ],
  },
  {
    slug: 'spot-phishing-emails',
    sections: [
      {
        h: 'The reassurance worth carrying forward',
        p: [
          "It bears repeating, because the shame attached to falling for a scam is itself one of the attacker's tools: being deceived by a well-crafted phishing message is not a sign of carelessness or low intelligence, it is a sign of being human against people who do this professionally, all day, and refine their approach against millions of attempts. The goal was never to become unfoolable — it was to build habits that catch the overwhelming majority of attempts and a recovery plan for the rare one that gets through.",
        ],
      },
      {
        h: 'Sharing what you know with people who ask you for help',
        p: [
          "Many people end up as the informal tech-support contact for a parent, a less experienced colleague, or a friend, and the most useful thing to pass along is rarely a long list of rules — it is the single verification habit at the centre of all of this: check through a channel the message itself did not provide. Teaching that one instinct travels further than teaching every specific tell, because tells change with every new scam variant while the underlying discipline does not.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'One more setting worth a look: third-party app connections',
        p: [
          "Many browsers now let extensions and connected services request continued background access even after you close the tab where you granted it, and this can quietly persist for far longer than the original task needed. Reviewing your browser's extension list every so often and removing anything you installed for a single past purpose and no longer actively use closes one more small, easily forgotten avenue of ongoing access.",
        ],
      },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    sections: [
      {
        h: 'Explaining it to someone who finds it intimidating',
        p: [
          "If you are helping someone set up 2FA for the first time and the extra step feels intimidating to them, the framing that tends to land best is comparing it to a second lock on a door: mildly more effort each time, and dramatically harder for anyone else to get through. Most resistance to adopting 2FA fades once someone actually tries it once and discovers the whole process takes under a minute, rather than the vague, larger hassle they had pictured beforehand.",
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    sections: [
      {
        h: 'Why this confusion persists across an entire industry',
        p: [
          "Part of why so many people conflate sync and backup is that cloud storage marketing has every incentive to blur the line, since \"backup\" sounds more valuable and reassuring than \"sync,\" even when the underlying product only reliably does the latter. Reading past the marketing language to the actual, specific behaviour — does it keep history, for how long — is the only reliable way to know which one you actually have.",
        ],
      },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    sections: [
      {
        h: 'The quiet majority of protection that requires no thought at all',
        p: [
          "Once automatic updates are properly enabled across your devices, this entire category of protection largely runs itself in the background, asking almost nothing further of you beyond an occasional restart. That is precisely what makes it such good value for the small one-time effort of checking the settings once: unlike habits that require ongoing vigilance, this one mostly just needs to be switched on correctly a single time.",
        ],
      },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    sections: [
      {
        h: 'The satisfaction of a shrinking list',
        p: [
          "There is a genuine, understated satisfaction in watching a tracked list of old accounts shrink session by session, distinct from most security advice which tends to feel like ongoing vigilance with no visible finish line. This is one of the rare cases where the work has a real end point, and reaching it — however many small ten-minute sessions it takes — leaves behind a measurably smaller, cleaner footprint than when you started.",
        ],
      },
    ],
  },
  {
    slug: 'recognise-tech-support-scams',
    sections: [
      {
        h: 'One sentence worth keeping near the computer',
        p: [
          "If a single sentence had to summarise everything above, it would be this: no real company will ever call you, pop up on your screen, or need remote access to fix a problem you did not already know you had. Keeping that sentence in mind, or even written down near a shared family computer, gives anyone who encounters the scam a fast, reliable anchor to check their instinct against.",
        ],
      },
    ],
  },
  {
    slug: 'using-ai-assistants-safely',
    sections: [
      {
        h: 'Revisiting your own habits as the tools change',
        p: [
          "Because this technology and the norms around it are still actively evolving, it is worth periodically revisiting your own habits rather than settling on a fixed approach formed early on and never reconsidered. What was true about a given assistant's reliability or a provider's data practices a year ago may not hold today, and staying a little curious about what has changed keeps your caution calibrated to the present rather than to an outdated impression.",
        ],
      },
    ],
  },
  {
    slug: 'backups-3-2-1-rule',
    sections: [
      {
        h: 'Starting with just the files you could not replace',
        p: [
          "If the full 3-2-1 setup feels like too much to arrange in one sitting, start narrower: identify the handful of things that are genuinely irreplaceable — family photos, key documents, years of personal writing — and get just those properly backed up first, following the full rule for that smaller set. Expanding coverage to everything else afterward is far easier once the most precious, unrecoverable material is already safely protected.",
        ],
      },
    ],
  },
  {
    slug: 'what-is-a-vpn',
    sections: [
      {
        h: 'A quick gut-check before you subscribe to anything',
        p: [
          "Before committing to a paid VPN subscription, it is worth asking plainly whether the specific situation it is meant to solve actually happens often in your life, or whether it is solving a general anxiety rather than a recurring, concrete need. A tool bought for a genuine, recurring situation gets used and earns its cost; a tool bought for a vague worry tends to sit forgotten after the first month, quietly renewing on a card you stopped checking.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'Extending the same habit to a phone you rarely think about',
        p: [
          "If you have already tuned your desktop browser, revisit the same settings menu on your phone's browser specifically, since the two are configured entirely separately even when they carry the same brand name, and a phone's default settings are just as loose as a desktop's were before you changed them.",
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage-vs-backup',
    sections: [
      {
        h: 'One question worth asking any provider directly',
        p: [
          "If a cloud provider's own documentation does not clearly answer how long deleted or previous file versions are retained, that ambiguity is itself useful information — a service confident in its recovery protections tends to advertise them plainly, while a vague answer is a reasonable signal to look elsewhere or add a separate backup regardless of what the marketing implies.",
        ],
      },
    ],
  },
  {
    slug: 'software-updates-why-they-matter',
    sections: [
      {
        h: 'A habit worth passing along to whoever you support',
        p: [
          "If you manage devices for a less technical family member, checking that automatic updates are enabled on their behalf during your next visit is a small, concrete favour that quietly protects them long after you have left, far more reliably than any reminder to \"be careful online\" ever could.",
        ],
      },
    ],
  },
  {
    slug: 'two-factor-authentication-explained',
    sections: [
      {
        h: 'The thirty seconds that actually matter most',
        p: [
          "Of every recommendation in this article, enabling 2FA on your primary email today, right now, before reading anything else, delivers the largest single reduction in risk for the smallest amount of effort — everything else here is worth doing eventually, but that one step is worth doing immediately.",
        ],
      },
    ],
  },
  {
    slug: 'digital-declutter-old-accounts',
    sections: [
      {
        h: 'A gentle nudge to actually start today',
        p: [
          "The hardest part of this entire habit is not any individual step, it is the first ten minutes of actually opening your inbox and starting the search — everything after that first sitting tends to move faster and feel far less daunting than it seemed from the outside before you began.",
        ],
      },
    ],
  },
  {
    slug: 'browser-privacy-settings',
    sections: [
      {
        h: 'A final ten seconds',
        p: [
          "If you take away only one action from this whole guide, block third-party cookies right now, before closing the tab — it is the single highest-impact change here and takes under ten seconds to switch on.",
        ],
      },
    ],
  },
];

export function applyExpansions(all: Article[]): void {
  const bySlug = new Map(all.map((a) => [a.slug, a]));
  for (const exp of EXPANSIONS) {
    const article = bySlug.get(exp.slug);
    if (!article) continue;
    article.sections.push(...exp.sections);
    if (exp.title) article.title = exp.title;
    if (exp.excerpt) article.excerpt = exp.excerpt;
  }
}
