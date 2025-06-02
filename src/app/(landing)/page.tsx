import { Button } from "@/components/ui/button";
import { ArrowLeftRightIcon, ArrowRightIcon, DollarSignIcon, HandCoinsIcon, LayersIcon, UserIcon, WalletIcon } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center gap-8 md:gap-16 lg:gap-24 xl:gap-32 p-4">

      {/* Introduction */}
      <div className="w-full flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6">
        <h1 className="w-full max-w-3xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-center">Maximize Your USDT with Trusted Investment Plans</h1>
        <p className="w-full max-w-5xl text-lg md:text-xl lg:text-2xl text-muted-foreground text-center">Start investing from just $50 and earn 1% daily. Build your crypto wealth effortlessly with secure plans, instant withdrawals, and a rewarding referral system.</p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button variant="blue" size="lg">Register Now</Button>
          <Button variant="outline" size="lg" className="">View More</Button>
        </div>
      </div>
      
      {/* Qick Cards */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 justify-items-center">
        <div className="w-full max-w-sm p-4 md:p-8 rounded-xl flex flex-col items-center justify-between border gap-4 bg-muted/10">
          <ArrowLeftRightIcon className="w-16 h-16 p-4 bg-muted rounded-full stroke-emerald-600" />
          <h2 className="text-xl font-bold">Secure Investment</h2>
          <p className="text-muted-foreground text-center">Invest in crypto anytime, anywhere with our safe, secure, and easy to use online platform</p>
          <Link href={'#'} className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold">Get Started <ArrowRightIcon className="w-4 h-4" /></Link>
        </div>
        <div className="w-full max-w-sm p-4 md:p-8 rounded-xl flex flex-col items-center justify-between border gap-4 bg-muted/10">
          <LayersIcon className="w-16 h-16 p-4 bg-muted rounded-full stroke-emerald-600" />
          <h2 className="text-xl font-bold">Daily Interest</h2>
          <p className="text-muted-foreground text-center">Earn 1% daily returns on your USDT investments automatically credited every 24 hours, with full transparency and control.</p>
          <Link href={'#'} className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold">Earn Money <ArrowRightIcon className="w-4 h-4" /></Link>
        </div>
        <div className="w-full max-w-sm p-4 md:p-8 rounded-xl flex flex-col items-center justify-between border gap-4 bg-muted/10">
          <WalletIcon className="w-16 h-16 p-4 bg-muted rounded-full stroke-emerald-600" />
          <h2 className="text-xl font-bold">Referral Bonus</h2>
          <p className="text-muted-foreground text-center">Invite friends, Earn bonuses, Grow together, Get rewarded every time someone joins and invests through your referral link</p>
          <Link href={'#'} className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold">Refer Your Friends <ArrowRightIcon className="w-4 h-4" /></Link>
        </div>
        </div>

      {/* Features Section */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center  gap-2 md:gap-4 lg:gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl  xl:text-6xl font-extrabold text-center">How It Works</h2>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center">Experience hassle-free crypto investments with our user-friendly platform. Start with just $50 and watch your wealth grow effortlessly.</p>
        <div className="w-full max-w-3xl grid grid-cols-1 gap-4 md:gap-8 lg:gap-12">
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <UserIcon className="w-16 h-16 p-4 bg-muted rounded-full stroke-emerald-600" />
            <div className="w-full p-4 rounded-xl flex flex-col gap-2 md:gap-4 bg-white dark:bg-slate-950">
              <h3 className="text-xl font-bold">Registration</h3>
              <p className="text-muted-foreground">Create your account in under a minute with basic details and verification</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <DollarSignIcon className="w-16 h-16 p-4 bg-muted rounded-full stroke-emerald-600" />
            <div className="w-full p-4 rounded-xl flex flex-col gap-2 md:gap-4 bg-white dark:bg-slate-950">
              <h3 className="text-xl font-bold">Deposit USDT</h3>
              <p className="text-muted-foreground">Create your account in under a minute with basic details and verification</p>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
              <HandCoinsIcon className="w-16 h-16 p-4 bg-muted rounded-full stroke-emerald-600" />
              <div className="w-full p-4 rounded-xl flex flex-col gap-2 md:gap-4 bg-white dark:bg-slate-950">
                <h3 className="text-xl font-bold">Earn Daily</h3>
                <p className="text-muted-foreground">Create your account in under a minute with basic details and verification</p>
              </div>
          </div>
        </div>
        <Button variant="blue" size="lg">Start Earning Now</Button>
      </div>
    </div>
  );
}
