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
