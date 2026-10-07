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
