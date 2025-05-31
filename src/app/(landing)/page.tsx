import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center gap-4 md:gap-8 lg:gap-12 p-4">

      {/* Introduction */}
      <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
        <h1 className="w-full max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">Maximize Your USDT with Trusted Investment Plans</h1>
        <p className="w-full max-w-5xl text-lg md:text-xl lg:text-2xl text-muted-foreground text-center">Start investing from just $50 and earn 1% daily. Build your crypto wealth effortlessly with secure plans, instant withdrawals, and a rewarding referral system.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button>Register Now</Button>
          <Button variant="outline" className="ml-2">View More</Button>
        </div>
      </div>
      
      
    </div>
  );
}
