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
