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
