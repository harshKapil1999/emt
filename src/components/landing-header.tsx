"use client";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LandingHeadder() {
    const { setTheme } = useTheme()
    const router = useRouter()

    return (
        <header className="w-full flex items-center justify-around p-4 gap-4">
            <h1 className="text-2xl font-bold">EMT</h1>
            <nav className="flex items-center gap-2 md:gap-4 lg:gap-6">
                <Link href="/" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                    Home
                </Link>
                <Link href="/about" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                    About
                </Link>
                <Link href="/contact" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                    Contact
                </Link>
                <div className="hidden md:flex items-center gap-2">
                    <Button variant="blue">Log In</Button>
                    <Button
                        onClick={() => router.push("/dashboard")}
                        variant={"outline"}
                    >
                        Sign Up
                    </Button>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
                >
                    <Sun className="hidden dark:inline" />
                    <Moon className="inline dark:hidden" />
                </Button>
            </nav>
        </header>
    )
}
export default LandingHeadder