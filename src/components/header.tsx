import { LibraryIcon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          <Link href="/">Dream Tales AI</Link>
        </h1>

        <Link href="/library">
          <LibraryIcon className="size-6 md:size-8" />
        </Link>
      </div>
    </header>
  );
}
