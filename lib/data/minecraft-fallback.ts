import type { ModrinthProject } from "@/lib/modrinth"

// Snapshot of the Modrinth project list (2026-10-31), served only when the
// live API is unreachable. Refresh by hand occasionally.
export const minecraftFallback: ModrinthProject[] = [
  {
    "slug": "fps-display-plus",
    "title": "FPS Display+",
    "description": "A easy-to-use FPS display mod with infinite customizability.",
    "icon_url": "https://cdn.modrinth.com/data/hKRDgptX/df8536c946cab01a82656c30f7c195df92b8d599_96.webp",
    "downloads": 16538,
    "loaders": [
      "fabric"
    ],
    "categories": [
      "utility"
    ],
    "status": "approved",
    "project_type": "mod"
  },
  {
    "slug": "exploding-players",
    "title": "Exploding Players",
    "description": "Allows players to be exploded for fun",
    "icon_url": "https://cdn.modrinth.com/data/l7ieLoSA/7cf8e4820748dbdd42909f9ea9d6d687d5ac9489_96.webp",
    "downloads": 281,
    "loaders": [
      "paper",
      "purpur"
    ],
    "categories": [
      "game-mechanics",
      "magic"
    ],
    "status": "approved",
    "project_type": "mod"
  },
  {
    "slug": "automatic-clutch",
    "title": "AutoClutch",
    "description": "Clutching so that you don't die thanks to the Ender Dragon",
    "icon_url": "https://cdn.modrinth.com/data/RIZyD6HA/7ce548c71da150fcf68419ed16ced375827ece67.webp",
    "downloads": 3625,
    "loaders": [
      "fabric"
    ],
    "categories": [
      "utility"
    ],
    "status": "approved",
    "project_type": "mod"
  },
  {
    "slug": "ping-players",
    "title": "Player Ping",
    "description": "Lets you ping other players to get their latency on the server",
    "icon_url": "https://cdn.modrinth.com/data/4mxNaSgs/4be4e6cb9dc923884df5e97e045d40ddcdfcf99f_96.webp",
    "downloads": 8425,
    "loaders": [
      "folia",
      "paper",
      "purpur"
    ],
    "categories": [
      "management",
      "technology",
      "utility"
    ],
    "status": "approved",
    "project_type": "mod"
  },
  {
    "slug": "tp-spawn",
    "title": "TP Spawn",
    "description": "Lets you go to world spawn with a command.",
    "icon_url": "https://cdn.modrinth.com/data/GDhdsO6S/be808c5f1d639d8a148fcf489ab26d206a406040_96.webp",
    "downloads": 12480,
    "loaders": [
      "folia",
      "paper",
      "purpur"
    ],
    "categories": [
      "game-mechanics",
      "transportation",
      "utility"
    ],
    "status": "approved",
    "project_type": "mod"
  },
  {
    "slug": "inventory-restore",
    "title": "Inventory Restore",
    "description": "Lets players restore their inventory when they die.",
    "icon_url": "https://cdn.modrinth.com/data/LmiGnKXM/d7a02fc7eb4ba08a292ef2a9e99dd3f89edbfefc_96.webp",
    "downloads": 860,
    "loaders": [
      "folia",
      "paper",
      "purpur"
    ],
    "categories": [
      "utility"
    ],
    "status": "archived",
    "project_type": "mod"
  },
  {
    "slug": "carpet-2-wool",
    "title": "Carpet 2 Wool",
    "description": "Lets you craft 3 carpets into 2 wool blocks. Works for all colors.",
    "icon_url": "https://cdn.modrinth.com/data/Px8v4Yvn/92b74ecf43eece97d8b305f0041e9144012bb9ee_96.webp",
    "downloads": 399,
    "loaders": [
      "datapack"
    ],
    "categories": [
      "game-mechanics"
    ],
    "status": "approved",
    "project_type": "mod"
  },
  {
    "slug": "xp-bottling",
    "title": "XP Bottling",
    "description": "Lets you store XP losslessly into an experience bottle",
    "icon_url": "https://cdn.modrinth.com/data/Tb1HV98q/dfb0285854ebef295ace90356f44e180e97318dd_96.webp",
    "downloads": 2773,
    "loaders": [
      "folia",
      "paper",
      "purpur"
    ],
    "categories": [
      "game-mechanics"
    ],
    "status": "approved",
    "project_type": "mod"
  }
]
