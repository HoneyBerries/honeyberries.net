import type { Example } from "./modcord-example-types"

// Real moderation decisions captured from a Modcord-moderated server, with
// every name replaced by an invented alias. See the design spec before editing.
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
  }
] satisfies Example[]

export const HERO_EXAMPLE_ID = "sixty-seven"
