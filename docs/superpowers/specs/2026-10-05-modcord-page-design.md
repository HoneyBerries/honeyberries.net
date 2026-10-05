# Modcord project page, Privacy Policy and Terms of Service: design

Status: draft for review. Nothing in this spec has been implemented.

## 1. Intent

**Who it is for:** Discord server owners and moderators deciding whether to add Modcord, and anyone affected by it who wants to know what it stores.

**Job of the page:** get a visitor to invite the bot, and give them enough honest detail about data handling that they are comfortable doing so.

**Why now:** `/projects` currently sends the Modcord card straight to GitHub. The old site had a dedicated Modcord page plus a Privacy Policy and Terms of Service whose claims (for example "zero retention") were false. The bot has since been changed so that its data practices are minimal and enforced by code (Modcord 3.10.1: retention purge task, `ai_log` table dropped). The new legal pages must describe that reality, not aspiration.

**Not legal advice.** The operator is an individual and will not hire a lawyer. The goal is pages that are accurate, specific and consistent with the code. Plain and true is the standard, not aggressive.

### Success criteria
- `/projects/modcord` exists, loads fast, and has a working invite button.
- `/projects/modcord/privacy` and `/projects/modcord/terms` exist and are linked from the landing page, the footer and each other.
- Every factual claim in the legal pages matches Modcord's code and deployment (checklist in section 9).
- The examples are real moderation decisions, aliased, shown as stylable text rather than screenshots.

## 2. Scope

**In scope:** the three routes, the shared legal-page layout, the content data file, the example data, the Modcord card change on `/projects`, footer links, sitemap entries.

**Out of scope (separate work):** Modcord repo changes (opt-in support-access toggle, deleted-message snapshot, admin export, log rotation); analytics; embedded GIFs or click-to-play media; i18n; a docs/command reference beyond the compact table.

## 3. Routes and files

| Route | File |
|---|---|
| `/projects/modcord` | `app/projects/modcord/page.tsx` |
| `/projects/modcord/privacy` | `app/projects/modcord/privacy/page.tsx` |
| `/projects/modcord/terms` | `app/projects/modcord/terms/page.tsx` |

Supporting files:
- `lib/data/modcord.ts`: all page content as typed data (features, commands, retention table, invite URL, last-updated dates). Follows the repo's content-as-data pattern.
- `lib/data/modcord-examples.ts`: the three examples (section 5).
- `components/modcord/`: `hero-mock.tsx`, `examples.tsx` (client component, the only one that needs JS), `commands-table.tsx`, `retention-table.tsx`, `feature-list.tsx`, `chat-message.tsx` (shared by hero and examples).
- `components/legal/legal-page.tsx`: shared layout for both legal pages.
- `lib/data/projects.ts` and `components/site/projects-section.tsx`: the Modcord entry links to `/projects/modcord` in the same tab (via `next/link`); other cards keep opening in a new tab.
- `components/site/footer.tsx`: add Privacy and Terms links next to the copyright line.
- `app/sitemap.ts`: add the three routes.
- `lib/data/site.ts`: add `MODCORD_INVITE_URL` and `MODCORD_REPO_URL`.
- Each page uses the existing `pageMetadata()` helper with a path, title and description.

**Invite URL:** `https://discord.com/oauth2/authorize?client_id=1387903423592005663`. The app has default install settings configured in the Developer Portal, so no scope or permission parameters are added. (If those settings are ever removed the link breaks; noted here so it is easy to diagnose.)

**Next.js note:** this repo runs a non-standard Next.js version. Before writing routing, metadata or `next/link` code, read the relevant guide in `node_modules/next/dist/docs/` and follow any deprecation notices.

## 4. Landing page design (`/projects/modcord`)

### Visual direction
- **Palette:** the site's existing tokens, used with meaning. Violet (`primary-500`) is the brand and invite button. Cyan (`accent-500`) means "left alone". Pink (`secondary-500`) means "acted". Neutral ink/paper from `neutral-950`/`neutral-50`.
- **Chat mock:** one dark panel (approximately `#2b2d31`) in both themes, like a screenshot. It uses generic chat styling and does not copy Discord's logo or branding.
- **Type:** Geist Sans only (already on the site), weight 600 headings with tight tracking. Geist Mono only for slash commands.
- **Alignment:** left-aligned, body copy under about 70 characters per line. This deliberately breaks from the centered section headings elsewhere on the site.
- **Structure devices:** no card grids for features, no numbered markers (content is not a sequence), no all-caps eyebrow labels, no gradient hero.
- **Motion:** one beat only. In the hero mock, the second message is resolved after a short pause. Disabled under `prefers-reduced-motion`. No scroll-reveal animations.
- **Quality floor:** responsive to phone width, visible focus states, sufficient contrast in light and dark, mock readable by screen readers as a list of messages with a labeled outcome.

### Layout (top to bottom)
1. **Hero:** left column headline, one plain sentence, `Add to Discord` (primary) and `View on GitHub` (secondary), a line stating it is free and GPL-3.0. Right column: the hero mock. Stacks with the mock below on mobile.
2. **What it does:** three ruled rows (no cards): reads recent conversation for context; uses your server's rules and per-channel guidelines; records every action with its reasoning.
3. **Examples:** switcher between the three real examples (section 5). Each shows the messages, the outcome(s) as Modcord posted them, and the capture note.
4. **Commands:** compact table of `/preferences`, `/mod`, `/appeal`, `/rollback`, `/exclude`, `/status` (sourced from the README).
5. **What we keep:** the retention table (section 6) with links to the Privacy Policy and Terms.
6. **Closing invite button.**

### Hero mock content
Uses the "67" thread (example 2) as it happened: a member posts "67" four times in a row, gets a warn whose reason says one is fine but four is a flood, posts four more, and gets a 30-minute timeout. The reasons carry the context-awareness in Modcord's own words. Messages Modcord did not act on are marked cyan; actions are pink. Only the one member's lines are shown, with "other messages omitted" noted. No beat is invented or merged from different days.

## 5. Examples (real, aliased, text-only)

All examples come from a Modcord-moderated server the operator controls. They are stored as structured text, not screenshots.

**Data shape** (per example): `title`, `capturedNote`, `messages[]` (`author` alias, `text`, optional `gifCount`, optional `outcome` marker), `actions[]` (`type`: warn or timeout, `reason` verbatim, optional `duration`).

**Privacy rules (applied when the data file is written):**
- Every author is replaced with an invented alias, including the operator. No real handle, display name, nickname, user ID, avatar or role badge appears. Server and channel names are generic.
- Audit-embed reasons are kept verbatim except that any name, nickname or server name in them (for example a member's name or a game server's name) is replaced with the same alias or a generic term. Message text is checked the same way. Action IDs are dropped.
- A privacy check (section 10) must pass before the data file is committed, and the operator approves the aliased file first.
- Discord timestamp markup (for example "expires `<t:...>`") is dropped; durations show as "30m".
- GIFs and images render as a chip such as "GIF ×12". The actual media is not republished or embedded.
- The raw exports stay out of the repository.

**Selected examples (UTC times from the export):**
1. **Pinging staff to open the server.** 2026-10-05, about 16:07 to 16:13. A member keeps pinging staff with a string of short messages, gets a warn that references an earlier timeout, then calls the moderator a name and gets a second warn. A second member in the same thread gets a warn for a burst of one-line messages. Use the first member's arc.
2. **The "67" thread.** 2026-10-04, about 02:47 to 02:50 (the 02:45 warn is excluded). One member posts "67" four times, is warned, posts four more, and is timed out for 30 minutes with the messages removed. This is also the hero mock. There is no single left-alone "67" in this window, so none is shown.
3. **GIF flood.** 2026-10-02, about 23:27 to 23:48. About ten members flood the channel at once. Follow one member's arc: about ten GIFs over fifteen minutes, a warn (23:43), a 30-minute timeout (23:45), a 1-hour timeout (23:48). GIFs render as chips with counts.

**Excluded:** the single-line gibberish warn (removed by the operator), a warn that does not match its triggering message, a warn about another server's specific rule, and anything where the surrounding messages are missing.

**Labeling:** each example carries "Captured from a Modcord-moderated server; names changed." No claim of illustration or invention.

## 6. Retention table (single source of truth)

One typed constant in `lib/data/modcord.ts` rendered on both the landing page and the Privacy Policy, and mirrored from the Modcord README. The table is the only place retention numbers appear.

| Data | What it contains | Kept for |
|---|---|---|
| Server settings | Preferences, rules, channel guidelines, exclusions | Until Modcord is removed from the server, or the admin resets them. Removal deletes them. |
| Moderation actions | Affected user ID, action type, reason, durations, IDs of deleted messages, reversals | 1 year. Kept longer only while an appeal is open or a temporary ban is still running. |
| Appeals | Outcome with the action. The appeal text (user reason, moderator note) | Outcome follows the action. Text is erased 90 days after resolution. |
| Message content | Message text, images, GIFs | Not stored by Modcord. Held in memory while a batch is processed. |
| Backups | Database backups | Up to 7 days, so a deleted record can briefly survive in a backup. |

Notes carried into the policy text: deleted messages are recorded by ID only, never by content; the optional deleted-message snapshot is not built and must not be mentioned until it ships.

## 7. Legal pages

### Shared layout (`LegalPage`)
Title, a "last updated" date, a short plain-language summary box at the top, a table of contents (sticky on desktop, collapsible on mobile), numbered sections, readable line length (under about 70 characters), and a short change history at the bottom. Both pages state the Terms apply to the **hosted bot only**; self-hosters are their own operators, matching the README.

### Privacy Policy sections
1. **Who runs Modcord.** The operator as an individual, with contact email `henry.rainbowfish@gmail.com`. Scope: the hosted bot only.
2. **What we store.** The retention table. Plain statement that no message text is stored, and that deletions are recorded by message ID only.
3. **What passes through without being stored.** Message text, images and GIFs, usernames, user IDs, roles, and recent channel history (50 messages by default) are sent to the AI provider per batch. The bot has Discord's message content access for this purpose.
4. **Who else touches data.** W&B Inference (operated by CoreWeave) for AI; Microsoft Azure for database hosting; Discord. No sale of data, no advertising, no analytics. Statement that what the AI provider does with content is governed by its own terms and policy (linked), and that Modcord does not control it. No claim of zero retention or no-training on the provider's side, because the provider's published documents do not state either.
5. **Your choices.** Admins can change or reset settings and can remove the bot, which deletes the server's data. Anyone can email a deletion request; answered within 30 days. Appeals are available where a server allows them.
6. **Developer support access.** A small number of developer accounts can act as an admin in any server the bot is in, so the developer can help with problems; their `/mod` actions appear as Modcord's. Server data is looked at only when a server admin asks for help, and is not copied or used otherwise.
7. **Security and backups.** Reasonable measures, no guarantee. Backups last up to 7 days.
8. **Age.** 13 or older, matching Discord's minimum.
9. **Changes and contact.** Dated; material changes are announced where practical.

### Terms of Service sections
1. **Who can add the bot.** Server admins who accept the Terms and follow Discord's Terms and Developer Policy.
2. **AI can be wrong.** Decisions are automated and may be mistaken. Admins are responsible for their rules and for reviewing actions and appeals.
3. **Admin responsibilities.** Tell members that an AI provider processes their messages; lawful use; no harassment or discrimination.
4. **The service as offered.** Free, no uptime promise, may change or stop, bot may be removed from abusive servers.
5. **Warranty disclaimer and liability cap.** As-is; liability capped at a small fixed amount (US$50 proposed); exclusions as allowed by law.
6. **No indemnity clause.** Deliberately omitted: it reads as aggressive for a free tool and is often unenforceable against consumers.
7. **Open source.** The code is GPL-3.0; the Terms govern the hosted service only.
8. **Governing law.** California, USA; disputes in the state or federal courts of California.
9. **Changes and contact.**

## 8. Data flow and error handling

- All pages are statically rendered server components. Only `examples.tsx` is a client component (tab switching), and it renders a complete first example with no JS.
- Content comes from typed data files; no runtime fetching.
- If a content value is missing at build time (for example an example with no `reason`), TypeScript fails the build rather than rendering a hole.
- The invite and repo URLs are constants so the landing page, closing button and footer cannot diverge.

## 9. Pre-publish checklist

The policy must not get ahead of reality. Before the legal pages go live:
- [x] Modcord 3.10.1 deployed (retention purge job, `ai_log` dropped). Confirmed by the operator.
- [x] Removing the bot deletes a server's data. Verified in code: `GuildListener.onGuildLeave` deletes the `guild_preferences` row, and rules, guidelines, exemptions, actions (with deleted-message IDs and reversals) and appeals all cascade from it.
- [x] Azure backups kept 7 days. Stated by the operator.
- [x] AI provider retention checked. The provider's published documents state neither zero retention nor no-training, so the policy makes no such claim.
- [x] Support-access wording confirmed by the operator: server data is looked at only on request.
- [x] Application logs checked by the operator: they do not print message content. They may contain server names and user or server IDs. The policy says exactly that and makes no claim about how long logs are kept, because no log retention window is built. If one is added to Modcord later, add it to the retention table and the policy.
- [ ] The operator confirms the aliased example data before it is committed.
- [ ] Re-read both pages against the Modcord README retention table on the day of publish.

## 10. Testing and verification

The repo has no test suite. Verification is:
- `npm run lint` and `npm run build` pass.
- `npm run preview` (OpenNext) loads all three routes; check light and dark themes, phone width, keyboard navigation, and reduced-motion.
- Click through: card on `/projects` → landing page → Privacy → Terms → back; footer links; sitemap lists the routes.
- Compare the rendered retention table against the README by eye.
- Privacy check: a script kept outside the repo builds a forbidden-token list from the source exports (every username, display name, user ID, `<@...>` mention, and every member, game-server or community name appearing in message or reason text), then searches `lib/data/modcord-examples.ts` and the built `.next/` output for each token. It must find none.

## 11. Risks

- **Policy drift.** Retention numbers live in the Modcord config and in this site. Mitigation: one table in this repo, a checklist item to compare against the README, and a note in the policy's change history when they change.
- **Provider claims.** The AI provider's data handling is outside our control; the policy says so rather than overstating.
- **Support access.** Always-on developer access is disclosed, not restricted. An opt-in per-server toggle is the stronger long-term design and is tracked in the Modcord repo, not here.
- **Not legal advice.** The pages are written to be accurate and plain, not to be reviewed by counsel.
