import { retentionRows } from "@/lib/data/modcord"

const label =
  "before:mb-0.5 before:block before:text-xs before:font-medium before:text-muted-foreground before:content-[attr(data-label)] sm:before:hidden"

export function RetentionTable() {
  return (
    <div className="overflow-x-auto rounded-xl ring-1 ring-foreground/10">
      <table className="block w-full border-collapse text-left text-sm sm:table sm:min-w-[34rem]">
        <caption className="sr-only">
          What Modcord stores and for how long
        </caption>
        <thead className="sr-only sm:not-sr-only sm:table-header-group">
          <tr className="border-b bg-muted/50">
            <th scope="col" className="px-4 py-3 font-medium">Data</th>
            <th scope="col" className="px-4 py-3 font-medium">What it contains</th>
            <th scope="col" className="px-4 py-3 font-medium">How long we keep it</th>
          </tr>
        </thead>
        <tbody className="block sm:table-row-group">
          {retentionRows.map((row) => (
            <tr
              key={row.data}
              className="block border-b px-4 py-3 last:border-0 sm:table-row sm:px-0 sm:py-0 sm:align-top"
            >
              <th scope="row" className="block pb-1 font-medium sm:table-cell sm:px-4 sm:py-3">{row.data}</th>
              <td data-label="What it contains" className={`block pb-2 text-muted-foreground sm:table-cell sm:px-4 sm:py-3 ${label}`}>{row.contents}</td>
              <td data-label="How long we keep it" className={`block sm:table-cell sm:px-4 sm:py-3 ${label}`}>{row.kept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
