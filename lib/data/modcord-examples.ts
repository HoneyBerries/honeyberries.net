import type { Example } from "./modcord-example-types"

// Moderation decisions from a Modcord-moderated server, with every name
// replaced by an invented alias. Examples whose capturedNote says "Recreated"
// are rebuilt from a pattern that really happened, not verbatim captures.
// See the design spec before editing.
export const examples = [
  {
    "id": "sixty-seven",
    "title": "Four in a row",
    "summary": "Four \"67\"s in a row get a warning. Four more right after get a 30-minute timeout, and the messages are removed.",
    "capturedNote": "Captured from a Modcord-moderated server. Names changed.",
    "othersOmitted": false,
    "timeline": [
      {
        "type": "message",
        "author": "Mika",
        "text": "67",
        "repeat": 4
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "67",
        "repeat": 3
      },
      {
        "type": "action",
        "kind": "warn",
        "target": "Mika",
        "reason": "Firing off '67' four times in a row turns a joke into a mini spam flood and buries what others are saying. One is fine — just keep it to that next time."
      },
      {
        "type": "message",
        "author": "Mika",
        "text": "67",
        "repeat": 4
      },
      {
        "type": "action",
        "kind": "timeout",
        "target": "Mika",
        "reason": "You were warned about spamming '67' just a couple minutes ago, and you fired off four more right after. Those have been removed — please drop the spam so the chat stays readable.",
        "duration": "30m"
      }
    ]
  },
  {
    "id": "gif-flood",
    "title": "A GIF flood",
    "summary": "The channel fills with the same GIF over and over. One member who posted it seven times in a row is warned, and the repeats are removed.",
    "capturedNote": "Captured from a Modcord-moderated server. Names changed.",
    "othersOmitted": false,
    "timeline": [
      {
        "type": "message",
        "author": "Jun",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Ravi",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Skye",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Tralaleo tralala shark in blue shoes, sliding on the seashore like hes got norhing to lose"
      },
      {
        "type": "message",
        "author": "Ravi",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Mika",
        "media": {
          "kind": "gif",
          "count": 6
        }
      },
      {
        "type": "message",
        "author": "Ravi",
        "media": {
          "kind": "gif",
          "count": 2
        }
      },
      {
        "type": "message",
        "author": "Mika",
        "media": {
          "kind": "gif",
          "count": 2
        }
      },
      {
        "type": "message",
        "author": "Nia",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Ravi",
        "text": "alright enough sponging around"
      },
      {
        "type": "message",
        "author": "Skye",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Mika",
        "media": {
          "kind": "gif",
          "count": 4
        }
      },
      {
        "type": "message",
        "author": "Ravi",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Mika",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Mika",
        "text": "am breaking up the tung"
      },
      {
        "type": "message",
        "author": "Jun",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Nia",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "message",
        "author": "Mika",
        "text": "we cant have too dense tung"
      },
      {
        "type": "message",
        "author": "Mika",
        "media": {
          "kind": "gif",
          "count": 1
        }
      },
      {
        "type": "action",
        "kind": "warn",
        "target": "Mika",
        "reason": "Hey, you posted the same GIF seven times in a row, and that turns the channel into a flood — those repeats have been removed. A one-off meme is fine, just don't spam it."
      },
      {
        "type": "message",
        "author": "Skye",
        "text": "LOL"
      },
      {
        "type": "message",
        "author": "Ravi",
        "text": "LOL"
      },
      {
        "type": "message",
        "author": "Mika",
        "text": "WAAAAAAAAAAAA"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Haha"
      }
    ]
  },
  {
    "id": "free-nitro-scam",
    "title": "A free Nitro scam",
    "summary": "A brand-new account posts a free Nitro and crypto giveaway. Modcord bans it and removes the messages before anyone clicks.",
    "capturedNote": "Recreated from a scam pattern that has happened a few times. Not a verbatim capture. Names changed.",
    "othersOmitted": false,
    "timeline": [
      {
        "type": "message",
        "author": "Ravi",
        "text": "ok who's up for a match later"
      },
      {
        "type": "message",
        "author": "Kade",
        "text": "FREE Discord Nitro for everyone! Claim yours before it expires: https://example.com/free-nitro"
      },
      {
        "type": "message",
        "author": "Kade",
        "text": "Also giving away 0.5 BTC to the first 100 people, just connect your wallet to claim"
      },
      {
        "type": "action",
        "kind": "ban",
        "target": "Kade",
        "reason": "This account just joined and immediately posted a free Nitro and crypto giveaway link, which is a common scam. The messages have been removed and the account banned."
      },
      {
        "type": "message",
        "author": "Nia",
        "text": "lol the scammers found us"
      }
    ]
  }
] satisfies Example[]

export const HERO_EXAMPLE_ID = "sixty-seven"
