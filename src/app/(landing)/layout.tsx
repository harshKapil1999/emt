import LandingHeadder from "@/components/landing-header";



export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
        {/* Landing Header */}
        <div className="w-full sticky top-0 z-50 shadow-md bg-white dark:bg-slate-950">
            <LandingHeadder />
        </div>

        {/* Main Content */}
        <main className="w-full h-full min-h-screen mt-16">
                {children}   
        </main>

        {/* Footer can be added here if needed */}
    </div>
);
}