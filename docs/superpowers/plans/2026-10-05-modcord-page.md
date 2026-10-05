# Modcord Page, Privacy Policy and Terms Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a dedicated Modcord page with real, aliased moderation examples, plus a Privacy Policy and Terms of Service that match what the bot actually does.

**Architecture:** Three statically rendered routes under `/projects/modcord`, fed by typed data files (`lib/data/`). One shared retention table feeds both the landing page and the Privacy Policy. Only the examples switcher is a client component. Example data is generated from private Discord exports by scripts that live outside the repo, reviewed by the operator, then committed.

**Tech Stack:** Next.js 16.3.6 (App Router, non-standard, see docs step), React 19.3, Tailwind v4, base-ui `Button`, `class-variance-authority`, `lucide-react`. Python 3 for the one-off example-extraction and privacy-check scripts (scratchpad only).

**Spec:** `docs/superpowers/specs/2026-10-05-modcord-page-design.md` (read it first; this plan implements it).

## Verification model (read this)

This repo has **no test suite** and `CLAUDE.md` says so. Do not add vitest, jest or any test runner. Verification replaces TDD here:
- `npm run lint` and `npm run build` must pass after every task.
- Data files use `satisfies` so malformed content fails the build.
- A **privacy check script** (Task 2) must find zero forbidden tokens in `lib/`, `components/`, `app/`, `docs/` and `.next/`.
- Visual checks use `npm run dev` and, at the end, `npm run preview`.

## Global Constraints

- Operator is named **Henry Ng** in the legal pages; contact email `henry.rainbowfish@gmail.com`.
- Invite URL, exactly: `https://discord.com/oauth2/authorize?client_id=1387903423592005663` (no extra parameters; the app has default install settings).
- Repo URL: `https://github.com/HoneyBerries/Modcord`.
- Retention numbers appear in exactly one place: `retentionRows` in `lib/data/modcord.ts`. Values: actions 1 year; appeal text 90 days after resolution; message content not stored; backups up to 7 days.
- Liability cap in the Terms: **US$50**. Governing law: **California, USA**.
- Age minimum in the policy: **13 or older**. Deletion requests answered within **30 days**.
- Policy makes **no** claim that the AI provider keeps nothing or does not train on content, and **no** claim about log retention duration.
- Never mention a deleted-message snapshot or any feature that is not built.
- No real username, display name, nickname, user ID, server name or community name anywhere in the repo. Every example author is an invented alias, including the operator.
- No numbered markers, no all-caps eyebrow labels, no gradient hero, no feature cards, no scroll-reveal animation. Fonts: Geist Sans, plus Geist Mono only on slash commands.
- Link-styled buttons follow the repo's existing pattern: `<Button nativeButton={false} render={<Link href="..." />}>` (internal) or `render={<a href="..." target="_blank" rel="noopener noreferrer" />}` (external). Never put a `<button>` inside a link.
- Work on branch `dev`. End every commit message with these two lines:
  ```
  Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_01ESaY9UhPFRnZ3NWDhgkxvJ
  ```
- The legal pages must not go live until the spec's section 9 checklist is complete. Do not run `npm run deploy` as part of this plan; the operator deploys.

## Review Focus

Inputs and conditions the spec implies but that no happy-path build exercises. Each has a pinned check in the owning task.

1. **A name hidden in message or reason text** (a member, a game server, a community) slipping into the example data. Pinned in Task 2 (privacy check + human gate) and Task 7.
2. **Reduced motion and no JS:** the hero's resolved actions must be visible with animation disabled, and the first example must be visible before hydration. Pinned in Task 3.
3. **Phone width (360px):** tables, the chat panel and the hero must not cause horizontal page scroll. Pinned in Task 4 and Task 5.
4. **Keyboard use of the examples tabs:** arrows, Home, End, visible focus. Pinned in Task 3.
5. **Navigation:** the Modcord card opens in the same tab, other cards still open in a new tab, the navbar highlights Projects on nested routes, the sitemap lists all routes. Pinned in Task 1.
6. **Drift between the landing-page retention table and the policy:** both must render the same constant. Pinned in Task 4 and Task 5.

---

## File Structure

| File | Responsibility |
|---|---|
| `lib/data/site.ts` (modify) | Add `MODCORD_INVITE_URL`, `MODCORD_REPO_URL`, `MODCORD_CONTACT_EMAIL`. |
| `lib/data/modcord.ts` (create) | Features, commands, retention rows, legal dates, copy for the page. |
| `lib/data/modcord-example-types.ts` (create) | Types for examples. |
| `lib/data/modcord-examples.ts` (create, generated) | The three aliased examples and `HERO_EXAMPLE_ID`. |
| `components/modcord/chat.tsx` (create) | `ChatPanel`, `ChatTimeline` (messages, media chips, action embeds). |
| `components/modcord/hero-mock.tsx` (create) | Hero decision mock (server component, CSS-only motion). |
| `components/modcord/examples.tsx` (create) | Client component: accessible tabs over the examples. |
| `components/modcord/retention-table.tsx` (create) | Renders `retentionRows`. |
| `components/modcord/commands-table.tsx` (create) | Renders `commands`. |
| `components/modcord/feature-list.tsx` (create) | Ruled rows for `features`. |
| `components/legal/legal-page.tsx` (create) | Shared legal layout and prose helpers. |
| `app/projects/modcord/page.tsx` (create) | Landing page. |
| `app/projects/modcord/privacy/page.tsx` (create) | Privacy Policy. |
| `app/projects/modcord/terms/page.tsx` (create) | Terms of Service. |
| `app/globals.css` (modify) | One keyframe for the hero beat. |
| `components/site/navbar.tsx`, `footer.tsx`, `projects-section.tsx`, `lib/data/projects.ts`, `app/sitemap.ts` (modify) | Wiring. |

---

### Task 1: Site plumbing and shared data

**Files:**
- Modify: `lib/data/site.ts`, `lib/data/projects.ts`, `components/site/projects-section.tsx`, `components/site/navbar.tsx`, `components/site/footer.tsx`, `app/sitemap.ts`
- Create: `lib/data/modcord.ts`

**Interfaces:**
- Produces (`lib/data/site.ts`): `MODCORD_INVITE_URL: string`, `MODCORD_REPO_URL: string`, `MODCORD_CONTACT_EMAIL: string`.
- Produces (`lib/data/modcord.ts`):
  - `type RetentionRow = { data: string; contents: string; kept: string }` and `export const retentionRows: readonly RetentionRow[]`
  - `type CommandRow = { command: string; summary: string }` and `export const commands: readonly CommandRow[]`
  - `type Feature = { title: string; body: string }` and `export const features: readonly Feature[]`
  - `export const LEGAL_UPDATED: string` (display date) and `export const LEGAL_UPDATED_ISO: string`

- [ ] **Step 1: Read the Next.js docs this task touches**

This Next.js version is non-standard. Read before coding:

```bash
cd /home/honeyberries/Desktop/Projects/honeyberries.net
sed -n 1,120p node_modules/next/dist/docs/01-app/03-api-reference/02-components/link.md
sed -n 1,80p node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md
ls node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/ | grep -iE "sitemap|metadata"
```

Expected: confirm `Link` is imported from `next/link` and accepts `href`, `className`, `target`. If the docs show a deprecation affecting anything used below (for example a prop rename), follow the docs and note the change in the commit message.

- [ ] **Step 2: Add the Modcord constants to `lib/data/site.ts`**

Append to the end of the file:

```ts
export const MODCORD_INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1387903423592005663"
export const MODCORD_REPO_URL = "https://github.com/HoneyBerries/Modcord"
export const MODCORD_CONTACT_EMAIL = "henry.rainbowfish@gmail.com"
```

- [ ] **Step 3: Create `lib/data/modcord.ts`**

```ts
export type RetentionRow = {
  data: string
  contents: string
  kept: string
}

// The only place retention numbers live. The landing page and the Privacy
// Policy both render this, and it mirrors the Modcord README. Change it only
// together with the bot's retention settings.
export const retentionRows = [
  {
    data: "Server settings",
    contents: "Preferences, rules, channel guidelines and exclusions.",
    kept: "Until Modcord is removed from the server or an admin resets them. Removing the bot deletes them.",
  },
  {
    data: "Moderation actions",
    contents:
      "The affected user's ID, the action, the AI's written reason (which can describe or quote the message), durations, IDs of deleted messages, and any reversal.",
    kept: "1 year. Longer only while an appeal is open or a temporary ban is still running.",
  },
  {
    data: "Appeals",
    contents:
      "The outcome, plus the free text: the member's reason and the moderator's note.",
    kept: "The outcome follows its action. The text is erased 90 days after the appeal is resolved.",
  },
  {
    data: "Message content",
    contents: "Message text, images and GIFs.",
    kept: "Not stored. Held in memory only while a check runs.",
  },
  {
    data: "Backups",
    contents: "Database backups.",
    kept: "Up to 7 days, so deleted data can survive in a backup for that long.",
  },
] as const satisfies readonly RetentionRow[]

export type CommandRow = {
  command: string
  summary: string
}

export const commands = [
  { command: "/preferences", summary: "Turn AI moderation and each action on or off, pick the rules and audit channels, allow appeals, reset." },
  { command: "/mod", summary: "Warn, timeout, kick, ban or unban by hand." },
  { command: "/exclude", summary: "Exempt users, roles or channels from AI moderation." },
  { command: "/rollback", summary: "Undo a moderation action." },
  { command: "/appeal", summary: "Appeal a decision, or review appeals as a moderator." },
  { command: "/status", summary: "Check health, ping and uptime." },
] as const satisfies readonly CommandRow[]

export type Feature = {
  title: string
  body: string
}

export const features = [
  {
    title: "It reads the conversation, not just keywords",
    body: "Modcord looks at the recent history of the channel (50 messages by default), so a joke between friends and a real problem are judged differently.",
  },
  {
    title: "It follows your rules",
    body: "Every server sets its own rules, and each channel can have its own guidelines. Modcord acts on those, not on a generic list.",
  },
  {
    title: "Every action comes with a reason",
    body: "Warnings, timeouts, kicks and bans are posted to your audit channel with the reason, and members can appeal.",
  },
] as const satisfies readonly Feature[]

export const LEGAL_UPDATED = "October 5, 2026"
export const LEGAL_UPDATED_ISO = "2026-10-05"
```

- [ ] **Step 4: Point the project card at the new page**

In `lib/data/projects.ts`, change only the Modcord entry's `href`:

```ts
    href: "/projects/modcord",
```

- [ ] **Step 5: Make the card open internal links in the same tab**

Replace the card `.map` body in `components/site/projects-section.tsx` so it branches on `href.startsWith("/")`. Add `import Link from "next/link"` at the top, and replace the `<a ...>...</a>` block with:

```tsx
        {projects.map(({ title, description, tags, href }, index) => {
          const accent = cardAccents[index % cardAccents.length]
          const card = (
            <Card
              className={cn(
                "h-full ring-1 ring-foreground/10 transition-all",
                accent.hover
              )}
            >
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col gap-4">
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <Badge key={tag} variant={accent.tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )

          return href.startsWith("/") ? (
            <Link key={title} href={href} className="block">
              {card}
            </Link>
          ) : (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {card}
            </a>
          )
        })}
```

- [ ] **Step 6: Highlight Projects on nested routes**

In `components/site/navbar.tsx`, replace the `cn(...)` active condition `pathname === href && "text-primary"` with:

```tsx
                (pathname === href || pathname.startsWith(`${href}/`)) &&
                  "text-primary"
```

- [ ] **Step 7: Add labeled legal links to the footer**

Replace `components/site/footer.tsx` with:

```tsx
import Link from "next/link"

import { SITE_NAME } from "@/lib/data/site"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 text-sm text-muted-foreground">
        <span>© 2026 {SITE_NAME}</span>
        <nav aria-label="Modcord legal" className="flex gap-4">
          <Link
            href="/projects/modcord/privacy"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Modcord privacy
          </Link>
          <Link
            href="/projects/modcord/terms"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Modcord terms
          </Link>
        </nav>
        <span className="font-medium">honeyberries.net</span>
      </div>
    </footer>
  )
}
```

- [ ] **Step 8: Add the routes to the sitemap**

In `app/sitemap.ts` change the routes array to:

```ts
  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/modcord",
    "/projects/modcord/privacy",
    "/projects/modcord/terms",
    "/contact",
  ]
```

- [ ] **Step 9: Verify**

```bash
npm run lint && npm run build
```

Expected: both succeed. (The three new routes do not exist yet, so the footer links 404 until Task 4 to 6; that is fine inside this branch.)

Check the card behavior in `npm run dev`: on `/projects`, clicking Modcord stays in the same tab (the page 404s until Task 4); clicking "This Website" opens a new tab. On `/projects` the Projects nav item is highlighted; this can only be re-checked on a nested route after Task 4.

- [ ] **Step 10: Commit**

```bash
git add lib/data/site.ts lib/data/modcord.ts lib/data/projects.ts components/site/projects-section.tsx components/site/navbar.tsx components/site/footer.tsx app/sitemap.ts
git commit -m "Add Modcord data, links and routes plumbing

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01ESaY9UhPFRnZ3NWDhgkxvJ"
```

---

### Task 2: Example data (extraction, privacy check, human gate)

This task turns the operator's private Discord exports into aliased example data. The scripts and exports stay in the **scratchpad** (`/tmp/claude-1000/-home-honeyberries-Desktop-Projects-honeyberries-net/ce35fd7a-db21-4fc7-8d6f-3dbab59834a9/scratchpad/`, called `$SP` below). They must never be copied into the repo, because they hold real names and IDs.

**Files:**
- Create: `lib/data/modcord-example-types.ts`, `lib/data/modcord-examples.ts` (generated, committed only after approval)
- Scratchpad only: `$SP/build_examples.py`, `$SP/check_privacy.py`, `$SP/extra-names.txt`

**Interfaces:**
- Produces (`lib/data/modcord-example-types.ts`):
  - `type Media = { kind: "gif" | "image"; count: number }`
  - `type TimelineItem = { type: "message"; author: string; text?: string; repeat?: number; media?: Media } | { type: "action"; kind: "warn" | "timeout"; target: string; reason: string; duration?: string }`
  - `type Example = { id: string; title: string; summary: string; capturedNote: string; othersOmitted: boolean; timeline: TimelineItem[] }`
- Produces (`lib/data/modcord-examples.ts`): `export const examples: Example[]` (ids `staff-pings`, `sixty-seven`, `gif-flood`) and `export const HERO_EXAMPLE_ID = "sixty-seven"`.

- [ ] **Step 1: Create the types file**

`lib/data/modcord-example-types.ts`:

```ts
export type Media = {
  kind: "gif" | "image"
  count: number
}

export type TimelineItem =
  | {
      type: "message"
      author: string
      text?: string
      repeat?: number
      media?: Media
    }
  | {
      type: "action"
      kind: "warn" | "timeout"
      target: string
      reason: string
      duration?: string
    }

export type Example = {
  id: string
  title: string
  summary: string
  capturedNote: string
  othersOmitted: boolean
  timeline: TimelineItem[]
}
```

- [ ] **Step 2: Write the extraction script (scratchpad, not the repo)**

Create `$SP/extra-names.txt`, one name per line, containing every community, game-server or personal name (first names, nicknames, in-jokes) that appears in message or reason text in the whole export and is not a Discord username. Build it by reading the three windows' messages and the audit reasons, and also by skimming the surrounding history for names that members use for each other. **Do not write these names anywhere in the repo**, including this plan, the spec or commit messages: the privacy check scans `docs/` too. The file starts as whatever you find on first read and grows in Step 4 and Step 5.

Create `$SP/build_examples.py`:

```python
import datetime as dt
import glob
import json
import pathlib
import re

SP = pathlib.Path(__file__).parent
ALIASES = ["Mika", "Jun", "Ravi", "Skye", "Tomas", "Nia", "Orla", "Dev", "Lio", "Pia"]
CAPTURED = "Captured from a Modcord-moderated server. Names changed."

EXAMPLES = [
    dict(
        id="staff-pings",
        title="Pinging staff to open the server",
        summary="A member keeps pinging staff to open a game server. The first warning mentions an earlier timeout for the same thing; a second follows when they insult the moderator.",
        start="2026-10-05T16:07:00", end="2026-10-05T16:13:00", focus="first-action",
    ),
    dict(
        id="sixty-seven",
        title="Four in a row",
        summary="Four \"67\"s in a row get a warning. Four more right after get a 30-minute timeout, and the messages are removed.",
        start="2026-10-04T02:47:00", end="2026-10-04T02:50:30", focus="first-action",
    ),
    dict(
        id="gif-flood",
        title="A GIF flood",
        summary="The channel fills with GIFs. One member is warned, timed out for 30 minutes, then for an hour as they keep going.",
        start="2026-10-02T23:27:00", end="2026-10-02T23:48:30", focus="first-timeout",
    ),
]

msgs = []
for f in glob.glob(str(SP / "full" / "**" / "*.json"), recursive=True):
    msgs += json.load(open(f))
msgs.sort(key=lambda m: m["timestamp"])

# Everything that identifies a person or a place, taken from the export itself.
forbidden = {}
for m in msgs:
    a = m["author"]
    for key in ("username", "global_name"):
        if a.get(key):
            forbidden[a[key].lower()] = "someone"
    forbidden[str(a["id"])] = "someone"
for line in (SP / "extra-names.txt").read_text().splitlines():
    if line.strip():
        forbidden[line.strip().lower()] = "[name]"

alias_by_id = {}
def alias_for(uid):
    uid = str(uid)
    if uid not in alias_by_id:
        alias_by_id[uid] = ALIASES[len(alias_by_id) % len(ALIASES)]
    return alias_by_id[uid]

warnings = []

def scrub(text):
    if text is None:
        return None
    def mention(mo):
        uid = mo.group(1)
        return "@" + alias_for(uid) if uid in alias_by_id else "@owner"
    text = re.sub(r"<@!?(\d+)>", mention, text)
    text = re.sub(r"<@&\d+>", "@role", text)
    text = re.sub(r"<#\d+>", "#general", text)
    for token, repl in sorted(forbidden.items(), key=lambda kv: -len(kv[0])):
        if len(token) < 3:
            continue
        pattern = re.compile(r"(?<!\w)" + re.escape(token) + r"(?!\w)", re.I)
        if pattern.search(text):
            warnings.append(f"replaced '{token}' in: {text[:80]!r}")
            text = pattern.sub(repl, text)
    if re.search(r"\d{15,}", text):
        warnings.append(f"long number left in: {text[:80]!r}")
    return text

def is_media(m):
    kinds = []
    if any(e.get("type") == "gifv" for e in m["embeds"]) or re.search(r"(tenor|giphy|klipy)\.", m["content"]):
        kinds.append("gif")
    if m["attachments"]:
        kinds.append("image")
    return kinds[0] if kinds else None

def fields(embed):
    return {f["name"]: f["value"] for f in embed.get("fields", [])}

def action_of(m):
    if not m["author"].get("bot") or not m["embeds"]:
        return None
    e = m["embeds"][0]
    title = e.get("title") or ""
    if "Issued" not in title:
        return None
    f = fields(e)
    uid = re.search(r"\d+", f.get("User", "")).group(0)
    kind = "timeout" if "TIMEOUT" in title else "warn"
    dur = f.get("Duration")
    if dur:
        dur = dur.split(" — ")[0].strip()
    return dict(kind=kind, uid=uid, reason=f.get("Reason", ""), duration=dur)

out = []
for ex in EXAMPLES:
    window = [m for m in msgs if ex["start"] <= m["timestamp"][:19] <= ex["end"]]
    acts = [(m, action_of(m)) for m in window if action_of(m)]
    if ex["focus"] == "first-timeout":
        focus_uid = next(a["uid"] for _, a in acts if a["kind"] == "timeout")
    else:
        focus_uid = acts[0][1]["uid"]
    alias_for(focus_uid)  # the focus member is always the first alias

    timeline = []
    for m in window:
        a = action_of(m)
        if a:
            if a["uid"] == focus_uid:
                item = dict(type="action", kind=a["kind"], target=alias_for(focus_uid),
                            reason=scrub(a["reason"]))
                if a["duration"]:
                    item["duration"] = a["duration"]
                timeline.append(item)
            continue
        if m["author"].get("bot") or str(m["author"]["id"]) != focus_uid:
            continue
        media = is_media(m)
        text = scrub(m["content"]) if m["content"] and not media else None
        item = dict(type="message", author=alias_for(focus_uid))
        if text:
            item["text"] = text
        if media:
            item["media"] = dict(kind=media, count=1)
        if not text and not media:
            continue
        prev = timeline[-1] if timeline else None
        if prev and prev["type"] == "message":
            if media and not text and prev.get("media", {}).get("kind") == media and "text" not in prev:
                prev["media"]["count"] += 1
                continue
            if text and prev.get("text") == text and "media" not in prev:
                prev["repeat"] = prev.get("repeat", 1) + 1
                continue
        timeline.append(item)

    out.append(dict(id=ex["id"], title=ex["title"], summary=ex["summary"],
                    capturedNote=CAPTURED, othersOmitted=True, timeline=timeline))

ts = ['import type { Example } from "./modcord-example-types"', "",
      "// Real moderation decisions captured from a Modcord-moderated server, with",
      "// every name replaced by an invented alias. See the design spec before editing.",
      "export const examples = " + json.dumps(out, indent=2, ensure_ascii=False) + " satisfies Example[]",
      "", 'export const HERO_EXAMPLE_ID = "sixty-seven"', ""]
(SP / "modcord-examples.generated.ts").write_text("\n".join(ts))
print("\n".join(ts))
print("\n--- SCRUB WARNINGS (review each) ---")
print("\n".join(warnings) or "(none)")
```

- [ ] **Step 3: Write the privacy check script (scratchpad)**

`$SP/check_privacy.py`:

```python
import glob
import json
import pathlib
import re
import subprocess
import sys

SP = pathlib.Path(__file__).parent
REPO = pathlib.Path("/home/honeyberries/Desktop/Projects/honeyberries.net")

tokens = set()
for f in glob.glob(str(SP / "full" / "**" / "*.json"), recursive=True):
    for m in json.load(open(f)):
        a = m["author"]
        for key in ("username", "global_name"):
            if a.get(key):
                tokens.add(a[key])
        tokens.add(str(a["id"]))
        for u in m.get("mentions", []):
            tokens.add(str(u["id"]))
            if u.get("username"):
                tokens.add(u["username"])
for line in (SP / "extra-names.txt").read_text().splitlines():
    if line.strip():
        tokens.add(line.strip())
# Public strings that legitimately appear in the repo: the site and bot names, the
# bot's client ID, and a friend already credited on the existing projects page.
ALLOW = {"honeyberries", "modcord", "1387903423592005663", "pepmon270"}
tokens = {
    t for t in tokens
    if len(re.findall(r"[A-Za-z0-9]", t)) >= 3 and t.lower() not in ALLOW
}

targets = ["lib", "components", "app", "docs"]
if (REPO / ".next").exists():
    targets.append(".next")

hits = 0
for t in sorted(tokens):
    r = subprocess.run(
        ["grep", "-rIliw", "--", t] + targets,
        cwd=REPO, capture_output=True, text=True,
    )
    if r.stdout.strip():
        hits += 1
        print(f"FOUND '{t}' in:\n  " + r.stdout.strip().replace("\n", "\n  "))

print(f"\nchecked {len(tokens)} tokens, {hits} found")
sys.exit(1 if hits else 0)
```

- [ ] **Step 4: Run the extraction and read the output yourself**

```bash
cd /tmp/claude-1000/-home-honeyberries-Desktop-Projects-honeyberries-net/ce35fd7a-db21-4fc7-8d6f-3dbab59834a9/scratchpad
python3 build_examples.py
```

Expected: a TypeScript file printed, followed by "SCRUB WARNINGS". (The operator's own handle is the same as the site name; it is replaced by an alias in the data like every other author, and the privacy check allows the public site and bot names.) Read every message and reason. For each warning or any name you notice that the script did not catch (a first name, a server name, a nickname used as a word), add it to `extra-names.txt` and re-run until nothing identifying remains.

- [ ] **Step 5: HUMAN GATE. Show the operator and stop**

Print the final `modcord-examples.generated.ts` to the operator and say: "These are the three examples with names changed. Please read every line. Tell me anything that identifies a person, a server or a community, or anything that looks wrong." **Stop here. Do not copy the file into the repo or commit it until the operator approves.** Apply their corrections by editing `extra-names.txt` or the script and re-running.

- [ ] **Step 6: After approval, copy the data file in and run the privacy check**

```bash
cp "$SP/modcord-examples.generated.ts" lib/data/modcord-examples.ts
python3 "$SP/check_privacy.py"
```

Expected: `checked N tokens, 0 found` and exit status 0. If anything is found, fix the data (or the extra-names list) and re-run before continuing.

- [ ] **Step 7: Verify types**

```bash
npm run lint && npm run build
```

Expected: both succeed (the examples file is typed with `satisfies Example[]`).

- [ ] **Step 8: Commit**

```bash
git add lib/data/modcord-example-types.ts lib/data/modcord-examples.ts
git commit -m "Add aliased real moderation examples

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01ESaY9UhPFRnZ3NWDhgkxvJ"
```

---

### Task 3: Chat components, hero mock and examples tabs

**Files:**
- Create: `components/modcord/chat.tsx`, `components/modcord/hero-mock.tsx`, `components/modcord/examples.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `Example`, `TimelineItem` from `@/lib/data/modcord-example-types`; `examples`, `HERO_EXAMPLE_ID` from `@/lib/data/modcord-examples`.
- Produces:
  - `ChatPanel({ label, children, className })`
  - `ChatTimeline({ items, animateActions })`
  - `HeroMock()` (no props, server component)
  - `Examples()` (no props, client component)

- [ ] **Step 1: Add the single hero keyframe**

Append to `app/globals.css`:

```css
@keyframes resolve-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@layer components {
  .animate-resolve {
    animation: resolve-in 400ms ease-out both;
  }
}
```

(With `both`, the element stays hidden until its `animation-delay`. Only the hero applies the class, and only under `motion-safe:`, so reduced-motion users see everything immediately.)

- [ ] **Step 2: Create `components/modcord/chat.tsx`**

```tsx
import { Image as ImageIcon, TriangleAlert, Timer } from "lucide-react"
import type { ReactNode } from "react"

import type { TimelineItem } from "@/lib/data/modcord-example-types"
import { cn } from "@/lib/utils"

export function ChatPanel({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "flex flex-col gap-3 rounded-xl bg-[#2b2d31] p-4 text-sm text-[#dbdee1] shadow-lg ring-1 ring-black/20",
        className
      )}
    >
      {children}
    </div>
  )
}

function MediaChip({
  kind,
  count,
}: {
  kind: "gif" | "image"
  count: number
}) {
  const noun = kind === "gif" ? "GIF" : "image"
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-[#1e1f22] px-2 py-1 text-xs text-[#b5bac1]">
      <ImageIcon aria-hidden className="size-3.5" />
      {count > 1 ? `${noun} ×${count}` : noun}
    </span>
  )
}

function Message({ item }: { item: Extract<TimelineItem, { type: "message" }> }) {
  const lines = Array.from({ length: item.repeat ?? 1 })
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-semibold text-[#f2f3f5]">{item.author}</span>
      {item.text &&
        lines.map((_, i) => (
          <p key={i} className="break-words leading-snug">
            {item.text}
          </p>
        ))}
      {item.media && (
        <div>
          <MediaChip kind={item.media.kind} count={item.media.count} />
        </div>
      )}
    </div>
  )
}

function ActionEmbed({
  item,
  className,
  style,
}: {
  item: Extract<TimelineItem, { type: "action" }>
  className?: string
  style?: React.CSSProperties
}) {
  const Icon = item.kind === "timeout" ? Timer : TriangleAlert
  const title = item.kind === "timeout" ? "Timeout issued" : "Warn issued"
  return (
    <div
      style={style}
      className={cn(
        "flex flex-col gap-2 rounded-md border-l-4 border-secondary-500 bg-[#313338] p-3",
        className
      )}
    >
      <p className="flex items-center gap-2 font-semibold text-[#f2f3f5]">
        <Icon aria-hidden className="size-4 text-secondary-400" />
        {title}
        <span className="font-normal text-[#b5bac1]">Modcord</span>
      </p>
      <p className="text-xs text-[#b5bac1]">
        User <span className="text-[#f2f3f5]">@{item.target}</span>
        {item.duration && (
          <>
            {" "}
            · Duration <span className="text-[#f2f3f5]">{item.duration}</span>
          </>
        )}
      </p>
      <p className="leading-snug">{item.reason}</p>
    </div>
  )
}

export function ChatTimeline({
  items,
  animateActions = false,
}: {
  items: TimelineItem[]
  animateActions?: boolean
}) {
  let actionIndex = 0
  return (
    <>
      {items.map((item, i) => {
        if (item.type === "message") {
          return <Message key={i} item={item} />
        }
        const delay = animateActions ? `${1.2 + actionIndex * 1.6}s` : undefined
        actionIndex += 1
        return (
          <ActionEmbed
            key={i}
            item={item}
            className={animateActions ? "motion-safe:animate-resolve" : undefined}
            style={delay ? { animationDelay: delay } : undefined}
          />
        )
      })}
    </>
  )
}
```

- [ ] **Step 3: Create `components/modcord/hero-mock.tsx`**

```tsx
import { ChatPanel, ChatTimeline } from "@/components/modcord/chat"
import { examples, HERO_EXAMPLE_ID } from "@/lib/data/modcord-examples"

export function HeroMock() {
  const example = examples.find((e) => e.id === HERO_EXAMPLE_ID)
  if (!example) {
    throw new Error(`Hero example "${HERO_EXAMPLE_ID}" is missing from examples`)
  }

  return (
    <figure className="flex flex-col gap-2">
      <ChatPanel label={`Example: ${example.title}`}>
        <ChatTimeline items={example.timeline} animateActions />
      </ChatPanel>
      <figcaption className="text-xs text-muted-foreground">
        {example.capturedNote} Other members&apos; messages omitted.
      </figcaption>
    </figure>
  )
}
```

- [ ] **Step 4: Create `components/modcord/examples.tsx` (client component with accessible tabs)**

```tsx
"use client"

import { useRef, useState, type KeyboardEvent } from "react"

import { ChatPanel, ChatTimeline } from "@/components/modcord/chat"
import { examples } from "@/lib/data/modcord-examples"
import { cn } from "@/lib/utils"

export function Examples() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function move(to: number) {
    const next = (to + examples.length) % examples.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key === "ArrowRight") move(i + 1)
    else if (e.key === "ArrowLeft") move(i - 1)
    else if (e.key === "Home") move(0)
    else if (e.key === "End") move(examples.length - 1)
    else return
    e.preventDefault()
  }

  const example = examples[active]

  return (
    <div className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Moderation examples"
        className="flex flex-wrap gap-2"
      >
        {examples.map((ex, i) => (
          <button
            key={ex.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            role="tab"
            id={`example-tab-${ex.id}`}
            aria-selected={i === active}
            aria-controls="example-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-sm font-medium outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50",
              i === active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {ex.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="example-panel"
        aria-labelledby={`example-tab-${example.id}`}
        className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-start"
      >
        <p className="max-w-prose leading-relaxed text-muted-foreground">
          {example.summary}
        </p>
        <figure className="flex flex-col gap-2">
          <ChatPanel label={`Example: ${example.title}`}>
            <ChatTimeline items={example.timeline} />
          </ChatPanel>
          <figcaption className="text-xs text-muted-foreground">
            {example.capturedNote}
            {example.othersOmitted && " Other members' messages omitted."}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Verify build and behavior**

```bash
npm run lint && npm run build
```

Expected: both succeed.

Then verify in `npm run dev` once Task 4's page exists (this task has no route yet; if verifying now, temporarily render `<HeroMock />` and `<Examples />` from a scratch page you delete before committing). Check:
- **No-JS / pre-hydration:** with JavaScript disabled in the browser, the first example's panel and text are visible.
- **Reduced motion:** with the OS or devtools "prefers-reduced-motion: reduce" set, all hero actions are visible immediately with no fade.
- **Normal motion:** the hero's action embeds fade in after about 1.2s and 2.8s.
- **Keyboard:** Tab reaches the active tab; Left/Right/Home/End move and select; focus ring is visible.
- **Phone width (360px):** no horizontal page scroll; long messages wrap.

- [ ] **Step 6: Commit**

```bash
git add components/modcord app/globals.css
git commit -m "Add chat mock, hero decision mock and examples tabs

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01ESaY9UhPFRnZ3NWDhgkxvJ"
```

---

### Task 4: Landing page

**Files:**
- Create: `components/modcord/retention-table.tsx`, `components/modcord/commands-table.tsx`, `components/modcord/feature-list.tsx`, `app/projects/modcord/page.tsx`

**Interfaces:**
- Consumes: `retentionRows`, `commands`, `features` from `@/lib/data/modcord`; `MODCORD_INVITE_URL`, `MODCORD_REPO_URL` from `@/lib/data/site`; `HeroMock`, `Examples`.
- Produces: `RetentionTable()`, `CommandsTable()`, `FeatureList()` (no props each).

- [ ] **Step 1: Create `components/modcord/retention-table.tsx`**

```tsx
import { retentionRows } from "@/lib/data/modcord"

export function RetentionTable() {
  return (
    <div className="overflow-x-auto rounded-xl ring-1 ring-foreground/10">
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
        <caption className="sr-only">
          What Modcord stores and for how long
        </caption>
        <thead>
          <tr className="border-b bg-muted/50">
            <th scope="col" className="px-4 py-3 font-medium">Data</th>
            <th scope="col" className="px-4 py-3 font-medium">What it contains</th>
            <th scope="col" className="px-4 py-3 font-medium">How long we keep it</th>
          </tr>
        </thead>
        <tbody>
          {retentionRows.map((row) => (
            <tr key={row.data} className="border-b last:border-0 align-top">
              <th scope="row" className="px-4 py-3 font-medium">{row.data}</th>
              <td className="px-4 py-3 text-muted-foreground">{row.contents}</td>
              <td className="px-4 py-3">{row.kept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

- [ ] **Step 2: Create `components/modcord/commands-table.tsx`**

```tsx
import { commands } from "@/lib/data/modcord"

export function CommandsTable() {
  return (
    <dl className="divide-y rounded-xl ring-1 ring-foreground/10">
      {commands.map(({ command, summary }) => (
        <div
          key={command}
          className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4"
        >
          <dt className="font-mono text-sm text-primary">{command}</dt>
          <dd className="text-sm text-muted-foreground">{summary}</dd>
        </div>
      ))}
    </dl>
  )
}
```

- [ ] **Step 3: Create `components/modcord/feature-list.tsx`**

```tsx
import { features } from "@/lib/data/modcord"

export function FeatureList() {
  return (
    <ul className="divide-y border-y">
      {features.map(({ title, body }) => (
        <li
          key={title}
          className="grid gap-2 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10"
        >
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="max-w-prose leading-relaxed text-muted-foreground">
            {body}
          </p>
        </li>
      ))}
    </ul>
  )
}
```

- [ ] **Step 4: Create `app/projects/modcord/page.tsx`**

```tsx
import Link from "next/link"

import { CommandsTable } from "@/components/modcord/commands-table"
import { Examples } from "@/components/modcord/examples"
import { FeatureList } from "@/components/modcord/feature-list"
import { HeroMock } from "@/components/modcord/hero-mock"
import { RetentionTable } from "@/components/modcord/retention-table"
import { Section } from "@/components/site/section"
import { Button } from "@/components/ui/button"
import { MODCORD_INVITE_URL, MODCORD_REPO_URL } from "@/lib/data/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects/modcord",
  title: "Modcord",
  description:
    "Modcord is a free, open-source Discord moderation bot that uses AI to read the conversation and your server's rules before it acts.",
})

function InviteButton({ className }: { className?: string }) {
  return (
    <Button
      size="lg"
      className={className ?? "h-10 px-5 text-base"}
      nativeButton={false}
      render={
        <a href={MODCORD_INVITE_URL} target="_blank" rel="noopener noreferrer" />
      }
    >
      Add to Discord
    </Button>
  )
}

export default function ModcordPage() {
  return (
    <>
      <Section className="grid gap-12 py-16 md:grid-cols-[1fr_1.1fr] md:items-center md:py-24">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Moderation that reads the room.
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
            Modcord uses AI to read recent conversation and your server&apos;s
            rules before it acts, so a joke between friends and a real problem
            are treated differently.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <InviteButton />
            <Button
              variant="outline"
              size="lg"
              className="h-10 px-5 text-base"
              nativeButton={false}
              render={
                <a
                  href={MODCORD_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              View on GitHub
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Free and open source under the GPL-3.0.
          </p>
        </div>
        <HeroMock />
      </Section>

      <Section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          What it does
        </h2>
        <FeatureList />
      </Section>

      <Section className="py-12">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          Real examples
        </h2>
        <p className="mb-8 max-w-prose text-muted-foreground">
          These are actual decisions Modcord made in a server I run. The
          reasons are exactly what it posted.
        </p>
        <Examples />
      </Section>

      <Section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Commands</h2>
        <CommandsTable />
      </Section>

      <Section className="py-12">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          What we keep
        </h2>
        <p className="mb-6 max-w-prose text-muted-foreground">
          Modcord does not store your messages. Here is what it does store, and
          for how long. The full details are in the{" "}
          <Link
            href="/projects/modcord/privacy"
            className="text-primary underline underline-offset-4"
          >
            Privacy Policy
          </Link>{" "}
          and the{" "}
          <Link
            href="/projects/modcord/terms"
            className="text-primary underline underline-offset-4"
          >
            Terms of Service
          </Link>
          .
        </p>
        <RetentionTable />
      </Section>

      <Section className="flex flex-col items-start gap-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">
          Try it in your server
        </h2>
        <InviteButton />
      </Section>
    </>
  )
}
```

- [ ] **Step 5: Verify**

```bash
npm run lint && npm run build
```

Expected: both succeed, with `/projects/modcord` in the build's route list.

In `npm run dev` check:
- `/projects` → click the Modcord card: opens `/projects/modcord` in the **same tab**; the Projects nav item stays highlighted.
- The Add to Discord button opens the invite URL in a new tab; GitHub button opens the repo.
- Light and dark themes: text contrast is readable; the chat panel stays dark in both.
- Phone width (360px): no horizontal page scroll. The retention table scrolls inside its own box.
- The hero stacks with the mock below the copy on mobile.
- The retention table content equals `retentionRows` (it is the same constant; confirm the page and, after Task 5, the policy show identical rows).

- [ ] **Step 6: Commit**

```bash
git add components/modcord app/projects/modcord/page.tsx
git commit -m "Add the Modcord landing page

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01ESaY9UhPFRnZ3NWDhgkxvJ"
```

---

### Task 5: Legal layout and Privacy Policy

**Files:**
- Create: `components/legal/legal-page.tsx`, `app/projects/modcord/privacy/page.tsx`

**Interfaces:**
- Consumes: `RetentionTable`, `LEGAL_UPDATED`, `LEGAL_UPDATED_ISO`, `MODCORD_CONTACT_EMAIL`, `MODCORD_REPO_URL`.
- Produces (`components/legal/legal-page.tsx`):
  - `type LegalSectionData = { id: string; title: string; body: ReactNode }`
  - `LegalPage({ title, updated, updatedIso, summary, sections, changes })`
  - prose helpers `P`, `UL`, `LI`, `A` (props: `children`, and `href` for `A`)

- [ ] **Step 1: Create `components/legal/legal-page.tsx`**

```tsx
import type { ReactNode } from "react"

export type LegalSectionData = {
  id: string
  title: string
  body: ReactNode
}

export function P({ children }: { children: ReactNode }) {
  return <p className="max-w-prose leading-relaxed">{children}</p>
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="max-w-prose list-disc space-y-2 pl-5 leading-relaxed">
      {children}
    </ul>
  )
}

export function LI({ children }: { children: ReactNode }) {
  return <li>{children}</li>
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className="text-primary underline underline-offset-4"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

export function LegalPage({
  title,
  updated,
  updatedIso,
  summary,
  sections,
  changes,
}: {
  title: string
  updated: string
  updatedIso: string
  summary: ReactNode
  sections: LegalSectionData[]
  changes: { date: string; note: string }[]
}) {
  const toc = (
    <ol className="space-y-1.5 text-sm">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {i + 1}. {s.title}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 lg:grid-cols-[14rem_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <details className="rounded-lg border p-3 lg:hidden">
          <summary className="cursor-pointer text-sm font-medium">
            On this page
          </summary>
          <nav aria-label="On this page" className="mt-3">
            {toc}
          </nav>
        </details>
        <nav aria-label="On this page" className="hidden lg:block">
          {toc}
        </nav>
      </aside>

      <article className="flex min-w-0 flex-col gap-8">
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">
            Last updated <time dateTime={updatedIso}>{updated}</time>
          </p>
        </header>

        <div className="rounded-xl border bg-muted/40 p-5">
          <h2 className="mb-2 text-base font-semibold">The short version</h2>
          <div className="flex flex-col gap-2 text-sm leading-relaxed">
            {summary}
          </div>
        </div>

        {sections.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="flex scroll-mt-24 flex-col gap-3"
          >
            <h2 className="text-xl font-semibold tracking-tight">
              {i + 1}. {s.title}
            </h2>
            {s.body}
          </section>
        ))}

        <section className="flex flex-col gap-2 border-t pt-6">
          <h2 className="text-base font-semibold">Change history</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {changes.map((c) => (
              <li key={c.date + c.note}>
                {c.date}: {c.note}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  )
}
```

- [ ] **Step 2: Create `app/projects/modcord/privacy/page.tsx`**

```tsx
import { A, LegalPage, LI, P, UL, type LegalSectionData } from "@/components/legal/legal-page"
import { RetentionTable } from "@/components/modcord/retention-table"
import { LEGAL_UPDATED, LEGAL_UPDATED_ISO } from "@/lib/data/modcord"
import { MODCORD_CONTACT_EMAIL, MODCORD_REPO_URL } from "@/lib/data/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects/modcord/privacy",
  title: "Modcord Privacy Policy",
  description:
    "What the hosted Modcord Discord bot stores, who else handles your data, and how to ask for it to be deleted.",
})

const sections: LegalSectionData[] = [
  {
    id: "who",
    title: "Who runs Modcord",
    body: (
      <>
        <P>
          Modcord is a Discord moderation bot run by Henry Ng, an individual
          (&ldquo;I&rdquo; and &ldquo;me&rdquo; below). This policy covers the
          hosted bot: the one you add to your server from the invite link on
          this site.
        </P>
        <P>
          If you run your own copy from the{" "}
          <A href={MODCORD_REPO_URL}>open-source code</A>, you are the operator
          of that copy and this policy does not apply to it. I do not receive
          data from self-hosted copies.
        </P>
      </>
    ),
  },
  {
    id: "store",
    title: "What I store",
    body: (
      <>
        <P>
          Modcord does not store the text of messages. It stores the following,
          and a daily job deletes it when the time below is up.
        </P>
        <RetentionTable />
        <P>
          When Modcord deletes a message, the record keeps only the
          message&apos;s Discord ID, not what it said. The reason for an action
          is written by the AI and can describe or quote part of the message
          that caused it, so it is kept with the action for the same time.
        </P>
      </>
    ),
  },
  {
    id: "passes-through",
    title: "What passes through without being stored",
    body: (
      <>
        <P>
          Modcord has Discord&apos;s message content access so it can moderate.
          While AI moderation is on in a channel, it reads new messages there
          and the recent history of the channel (up to 50 messages from the
          last 24 hours by default) for context.
        </P>
        <P>For each check, Modcord sends this to the AI provider:</P>
        <UL>
          <LI>message text, images and GIFs</LI>
          <LI>usernames, user IDs and roles</LI>
          <LI>your server&apos;s rules and the channel guidelines</LI>
          <LI>
            the member&apos;s recent moderation actions from the last 30 days
          </LI>
        </UL>
        <P>
          Modcord keeps this in memory while the check runs and does not save
          it.
        </P>
      </>
    ),
  },
  {
    id: "others",
    title: "Who else handles data",
    body: (
      <>
        <UL>
          <LI>
            <strong>AI provider.</strong> W&amp;B Inference, operated by
            CoreWeave, receives what section 3 lists and returns a decision.
            Their policy is{" "}
            <A href="https://docs.coreweave.com/policies/terms-of-service/privacy-policy">
              here
            </A>
            . I do not control what they do with that content, and the
            documents I could find do not say whether they keep prompts or use
            them for training. Please do not assume they do not.
          </LI>
          <LI>
            <strong>Database hosting.</strong> Microsoft Azure (Azure Database
            for PostgreSQL) hosts the database that holds what section 2
            lists. See the{" "}
            <A href="https://privacy.microsoft.com/privacystatement">
              Microsoft privacy statement
            </A>
            .
          </LI>
          <LI>
            <strong>Discord.</strong> Modcord runs on Discord, which handles
            your messages and account under its own{" "}
            <A href="https://discord.com/privacy">Privacy Policy</A>.
          </LI>
        </UL>
        <P>
          I do not sell your data, show advertising, or run analytics on it. I
          would disclose data if the law required it.
        </P>
        <P>
          If sending messages to an AI provider is not acceptable for your
          server, turn AI moderation off with <code>/preferences</code> or
          remove the bot.
        </P>
      </>
    ),
  },
  {
    id: "choices",
    title: "Your choices",
    body: (
      <>
        <UL>
          <LI>
            <strong>Server admins</strong> can change or reset settings with{" "}
            <code>/preferences</code>. Removing Modcord from your server
            deletes the server&apos;s settings, rules, guidelines, exclusions,
            actions and appeals. Copies in backups last up to 7 days.
          </LI>
          <LI>
            <strong>Anyone</strong> can email me at{" "}
            <A href={`mailto:${MODCORD_CONTACT_EMAIL}`}>
              {MODCORD_CONTACT_EMAIL}
            </A>{" "}
            to ask what is stored about their Discord user ID, or to ask for it
            to be deleted. I will answer within 30 days. I may need you to show
            you control the account, and I will tell you if something has to be
            kept and why.
          </LI>
          <LI>
            <strong>Appeals.</strong> Where a server allows it, you can appeal
            an action with <code>/appeal</code>.
          </LI>
        </UL>
        <P>
          California residents: I do not sell or share personal information.
          You can use the same email address to ask about your data.
        </P>
      </>
    ),
  },
  {
    id: "support-access",
    title: "Developer support access",
    body: (
      <>
        <P>
          A small number of developer accounts can act as an admin in any
          server the bot is in, so that I can help when something goes wrong.
          Actions taken through <code>/mod</code> by those accounts appear as
          Modcord&apos;s.
        </P>
        <P>
          I look at a server&apos;s data only when a server admin asks me for
          help, and I do not copy it or use it for anything else. Otherwise I
          leave servers alone.
        </P>
      </>
    ),
  },
  {
    id: "security",
    title: "Security, logs and backups",
    body: (
      <P>
        I use reasonable measures to protect the database and credentials, but
        no system is perfectly secure and I cannot promise it will never be
        breached. Operational logs never contain message content, but they can
        contain server names and user or server IDs; I do not promise a
        particular retention period for logs. Database backups last up to 7
        days.
      </P>
    ),
  },
  {
    id: "age",
    title: "Age",
    body: (
      <P>
        Modcord runs on Discord, which requires users to be at least 13 (or
        older where local law says so). I do not knowingly collect data from
        anyone under 13. If you think I have, email me and I will delete it.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <P>
        If I change this policy I will update the date at the top and add a
        line to the change history below. If a change is significant I will also
        say so on the Modcord page.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <P>
        Questions or requests:{" "}
        <A href={`mailto:${MODCORD_CONTACT_EMAIL}`}>{MODCORD_CONTACT_EMAIL}</A>.
      </P>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Modcord Privacy Policy"
      updated={LEGAL_UPDATED}
      updatedIso={LEGAL_UPDATED_ISO}
      summary={
        <>
          <p>Modcord reads messages to moderate them but does not store them.</p>
          <p>
            It stores a record of each moderation action for 1 year, and
            appeal text for 90 days after an appeal is resolved.
          </p>
          <p>
            Message text and images are sent to an AI provider for each check.
          </p>
          <p>
            Removing the bot deletes your server&apos;s data. You can also email
            a deletion request.
          </p>
        </>
      }
      sections={sections}
      changes={[
        {
          date: LEGAL_UPDATED,
          note: "First version of this policy for the hosted bot.",
        },
      ]}
    />
  )
}
```

- [ ] **Step 3: Verify**

```bash
npm run lint && npm run build
```

Expected: both succeed, with `/projects/modcord/privacy` in the route list.

In `npm run dev` check `/projects/modcord/privacy`:
- The retention table matches the one on `/projects/modcord` row for row (same `retentionRows` constant).
- Section numbers in the text match: "section 3" in the AI provider paragraph is "What passes through without being stored" and "section 2" is "What I store". Fix the numbers in the prose if you reorder sections.
- Table of contents links jump to the right sections; on mobile the collapsible "On this page" works.
- Phone width (360px): no horizontal page scroll.
- Read every sentence against the spec's section 7 and the Global Constraints: no zero-retention claim, no log duration, no unbuilt feature.

- [ ] **Step 4: Commit**

```bash
git add components/legal app/projects/modcord/privacy
git commit -m "Add the legal page layout and Modcord Privacy Policy

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01ESaY9UhPFRnZ3NWDhgkxvJ"
```

---

### Task 6: Terms of Service

**Files:**
- Create: `app/projects/modcord/terms/page.tsx`

**Interfaces:**
- Consumes: `LegalPage`, `LegalSectionData`, `P`, `UL`, `LI`, `A` from `@/components/legal/legal-page`; `LEGAL_UPDATED`, `LEGAL_UPDATED_ISO`; `MODCORD_CONTACT_EMAIL`, `MODCORD_REPO_URL`.

- [ ] **Step 1: Create `app/projects/modcord/terms/page.tsx`**

```tsx
import { A, LegalPage, LI, P, UL, type LegalSectionData } from "@/components/legal/legal-page"
import { LEGAL_UPDATED, LEGAL_UPDATED_ISO } from "@/lib/data/modcord"
import { MODCORD_CONTACT_EMAIL, MODCORD_REPO_URL } from "@/lib/data/site"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  path: "/projects/modcord/terms",
  title: "Modcord Terms of Service",
  description:
    "The terms for using the hosted Modcord Discord bot, including what the AI can get wrong and who is responsible.",
})

const sections: LegalSectionData[] = [
  {
    id: "agreement",
    title: "Agreement",
    body: (
      <>
        <P>
          These terms are between you and Henry Ng, who runs the hosted Modcord
          bot (&ldquo;I&rdquo; and &ldquo;me&rdquo;). By adding Modcord to a
          server or using it, you agree to them. If you add it to a server, you
          confirm that you have the permission to do so (Manage Server) and the
          authority to agree for that server.
        </P>
        <P>
          These terms cover the hosted bot only. If you run your own copy, they
          do not apply to it.
        </P>
      </>
    ),
  },
  {
    id: "what",
    title: "What Modcord does",
    body: (
      <P>
        Modcord reads messages in channels where you turn it on and uses an AI
        model to decide whether they break your server&apos;s rules. Depending
        on the actions your server allows, it can warn, delete messages, time
        out, kick or ban members, and it records what it did. How it handles
        data is described in the{" "}
        <A href="/projects/modcord/privacy">Privacy Policy</A>.
      </P>
    ),
  },
  {
    id: "ai-errors",
    title: "The AI can be wrong",
    body: (
      <>
        <P>
          Modcord&apos;s decisions are made by an AI model. It can miss
          violations, act on harmless messages, and misread context, sarcasm or
          a language it handles poorly. It is a tool to help moderators, not a
          replacement for them.
        </P>
        <P>
          Server admins are responsible for what happens in their servers: for
          the rules they set, the actions they enable, and for reviewing
          actions and appeals. You can turn off any action you do not want with{" "}
          <code>/preferences</code>.
        </P>
      </>
    ),
  },
  {
    id: "admins",
    title: "What server admins agree to",
    body: (
      <UL>
        <LI>
          Follow Discord&apos;s{" "}
          <A href="https://discord.com/terms">Terms of Service</A> and{" "}
          <A href="https://discord.com/developers/docs/policies-and-agreements/developer-policy">
            Developer Policy
          </A>
          , and the law.
        </LI>
        <LI>
          Tell your members that an AI provider processes their messages for
          moderation, as the Privacy Policy describes.
        </LI>
        <LI>
          Do not use Modcord to harass, discriminate against or target people,
          or to break the rules of any platform.
        </LI>
      </UL>
    ),
  },
  {
    id: "use",
    title: "Acceptable use",
    body: (
      <UL>
        <LI>Do not try to disrupt the service or overload it.</LI>
        <LI>
          Do not try to get at another server&apos;s data or at anything you
          are not allowed to access.
        </LI>
        <LI>Do not use appeals to harass moderators or other members.</LI>
      </UL>
    ),
  },
  {
    id: "service",
    title: "The service as offered",
    body: (
      <>
        <P>
          Modcord is free and run by one person. There is no promise that it
          will be available, fast or error-free. I may change it, pause it or
          stop it at any time.
        </P>
        <P>
          I may remove the bot from a server or block its use if it is abused,
          if Discord or the law requires it, or to protect the service. You can
          remove it from your server at any time, which deletes the server&apos;s
          data as the Privacy Policy describes.
        </P>
      </>
    ),
  },
  {
    id: "warranty",
    title: "No warranty",
    body: (
      <P>
        Modcord is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo;
        To the extent the law allows, I make no warranties of any kind,
        including that moderation decisions will be accurate, complete or
        timely, or that the service will be uninterrupted.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Limit of liability",
    body: (
      <>
        <P>
          To the extent the law allows, I am not liable for indirect,
          incidental or consequential damages, for lost data or lost profits, or
          for harm that results from Modcord acting on a message or failing to
          act on one.
        </P>
        <P>
          For any claim about Modcord, my total liability is limited to US$50.
          Some places do not allow these limits, in which case they apply only
          as far as the law permits.
        </P>
      </>
    ),
  },
  {
    id: "open-source",
    title: "Open source",
    body: (
      <P>
        Modcord&apos;s code is licensed under the GPL-3.0 and available on{" "}
        <A href={MODCORD_REPO_URL}>GitHub</A>. That license governs what you can
        do with the code. These terms govern use of the hosted service. Modcord
        is not affiliated with Discord Inc. or any AI provider.
      </P>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    body: (
      <P>
        These terms are governed by the laws of California, USA. Disputes will
        be brought in the state or federal courts located in California.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <P>
        If I change these terms I will update the date at the top and add a line
        to the change history below. Using Modcord after a change means you
        accept it. If you do not accept it, remove the bot.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <P>
        Questions:{" "}
        <A href={`mailto:${MODCORD_CONTACT_EMAIL}`}>{MODCORD_CONTACT_EMAIL}</A>.
      </P>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Modcord Terms of Service"
      updated={LEGAL_UPDATED}
      updatedIso={LEGAL_UPDATED_ISO}
      summary={
        <>
          <p>Modcord is free, run by one person, and has no uptime promise.</p>
          <p>
            Its AI can be wrong. Server admins are responsible for their rules
            and for reviewing actions and appeals.
          </p>
          <p>
            Liability is limited to US$50. These terms are governed by
            California law.
          </p>
        </>
      }
      sections={sections}
      changes={[
        {
          date: LEGAL_UPDATED,
          note: "First version of these terms for the hosted bot.",
        },
      ]}
    />
  )
}
```

- [ ] **Step 2: Verify**

```bash
npm run lint && npm run build
```

Expected: both succeed, with `/projects/modcord/terms` in the route list.

In `npm run dev` check `/projects/modcord/terms`: table of contents works; no horizontal scroll at 360px; the link to the Privacy Policy (`/projects/modcord/privacy`) works and opens in the same tab; external links open in a new tab.

- [ ] **Step 3: Commit**

```bash
git add app/projects/modcord/terms
git commit -m "Add the Modcord Terms of Service

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01ESaY9UhPFRnZ3NWDhgkxvJ"
```

---

### Task 7: End-to-end verification and release prep

**Files:** none created. Fixes found here are committed on top.

- [ ] **Step 1: Full build and privacy check**

```bash
npm run lint && npm run build
python3 /tmp/claude-1000/-home-honeyberries-Desktop-Projects-honeyberries-net/ce35fd7a-db21-4fc7-8d6f-3dbab59834a9/scratchpad/check_privacy.py
```

Expected: lint and build succeed; the privacy check prints `0 found` (it scans `lib/`, `components/`, `app/`, `docs/` and the fresh `.next/` output). If it finds anything, remove it from the file it names, rebuild and re-run before continuing. If the leak is in git history (an earlier commit), tell the operator; do not rewrite history without asking.

- [ ] **Step 2: Preview the OpenNext build locally**

```bash
npm run preview
```

Expected: the Worker preview starts. Open `/`, `/projects`, `/projects/modcord`, `/projects/modcord/privacy`, `/projects/modcord/terms` and `/sitemap.xml`. The sitemap lists the three new routes. Stop the preview afterwards.

- [ ] **Step 3: Click-through and accessibility pass**

Check each of these and fix anything that fails:
- `/projects` Modcord card → landing page (same tab); other cards open in a new tab.
- Landing page → Privacy Policy → Terms → back; footer "Modcord privacy" and "Modcord terms" links work from every page.
- Navbar highlights Projects on all three nested routes.
- Keyboard-only: Tab order is sensible, every focus is visible, tabs respond to arrows/Home/End.
- Light and dark themes at desktop and 360px width: no horizontal page scroll anywhere.
- Reduced motion: no motion at all on the landing page.

- [ ] **Step 4: Compare the pages against the Modcord README and the spec checklist**

Open `/home/honeyberries/Desktop/Projects/Modcord/README.md` ("Data handling and privacy") next to `/projects/modcord/privacy`. Confirm: 365 days actions, 90 days appeal text, no message content stored, backups 7 days. Then read the spec's section 9 and report the status of each item to the operator. Items still open for them (sign-off on the example data is done in Task 2; the day-of-publish README comparison is this step).

- [ ] **Step 5: Final review**

Request a whole-branch review (superpowers:requesting-code-review) covering: spec coverage, the Global Constraints, the privacy check result and the legal prose against the retention table.

- [ ] **Step 6: Hand off**

Report to the operator: what was built, the verification results, any item from the spec's checklist still open, and that the legal pages and landing page ship together (the landing page links to them). Do **not** deploy. Tell them to run `npm run deploy` when they are ready, and to re-read the retention table against the bot's `config/app_config.yml` retention settings that day.
