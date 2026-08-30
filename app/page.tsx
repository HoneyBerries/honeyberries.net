import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <ThemeToggle />
      <h1 className="text-3xl font-semibold tracking-tight">
        honeyberries.net
      </h1>
      <Button>Scaffold is working</Button>
    </div>
  );
}
