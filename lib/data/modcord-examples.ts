import type { Example } from "./modcord-example-types"

// Real moderation decisions captured from a Modcord-moderated server, with
// every name replaced by an invented alias. See the design spec before editing.
export const examples = [
  {
    "id": "sixty-seven",
    "title": "Four in a row",
    "summary": "Four \"67\"s in a row get a warning. Four more right after get a 30-minute timeout, and the messages are removed.",
    "capturedNote": "Captured from a Modcord-moderated server. Names changed.",
    "othersOmitted": true,
    "timeline": [
      {
        "type": "message",
        "author": "Mika",
        "text": "67",
        "repeat": 4
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
    "summary": "The channel fills with GIFs. One member is warned, timed out for 30 minutes, then for an hour as they keep going.",
    "capturedNote": "Captured from a Modcord-moderated server. Names changed.",
    "othersOmitted": true,
    "timeline": [
      {
        "type": "message",
        "author": "Jun",
        "media": {
          "kind": "gif",
          "count": 3
        }
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "LOL"
      },
      {
        "type": "message",
        "author": "Jun",
        "media": {
          "kind": "gif",
          "count": 3
        }
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Ts?"
      },
      {
        "type": "message",
        "author": "Jun",
        "media": {
          "kind": "gif",
          "count": 3
        }
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Canabilisnsm"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Canibealismmej"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Canibalism"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Canabaioamsismsm"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Cooy"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Copy"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Kiwi...?"
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
        "author": "Jun",
        "text": "Bye"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Cannaialbeleism"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "2 hr big back"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Jk jk"
      },
      {
        "type": "message",
        "author": "Jun",
        "media": {
          "kind": "gif",
          "count": 2
        }
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Nuh uh"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Never"
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
        "author": "Jun",
        "text": "Englishhshshshshsoahsiahel"
      },
      {
        "type": "action",
        "kind": "warn",
        "target": "Jun",
        "reason": "Hey, general turned into a GIF-and-meme flood just now and your posts were part of it. Joking around is fine, just help keep the channel from getting flooded next time."
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
        "author": "Jun",
        "text": "Wow"
      },
      {
        "type": "message",
        "author": "Jun",
        "text": "Wth is a soggo???"
      },
      {
        "type": "action",
        "kind": "timeout",
        "target": "Jun",
        "reason": "You kept rapid-posting GIFs into general even after being asked to stop spamming. Those have been removed — please leave the GIF floods out and keep general readable when you're back.",
        "duration": "30m"
      },
      {
        "type": "action",
        "kind": "timeout",
        "target": "Jun",
        "reason": "You were already warned and timed out tonight for the GIF spam, and you went straight back to it. Take a longer break, and please leave the floods out when you're back.",
        "duration": "1h"
      }
    ]
  }
] satisfies Example[]

export const HERO_EXAMPLE_ID = "sixty-seven"
