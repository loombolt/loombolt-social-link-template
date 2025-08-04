import SocialProfile from "@/components/feature/social-profile";
import Link from "next/link";
import { Sparkle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-auto">
      
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col items-center justify-center">
        <SocialProfile />
      </main>
      
      <footer className="w-full pb-6">
        <div className="container mx-auto flex flex-col items-center justify-center space-x-4 py-2 text-sm text-muted-foreground">
          <Link href="https://loombolt.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Sparkle className="h-4 w-4"/>
            <span>Built with</span>
            <span className="font-medium">Loombolt</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}