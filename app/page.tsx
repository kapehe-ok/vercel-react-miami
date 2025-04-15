import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl px-6 py-12 flex flex-col items-center text-center">
        <div className="mb-12">
          <Image 
            src="/vercel-logotype-dark.png" 
            alt="Vercel" 
            width={120} 
            height={120} 
            className="mb-4 mx-auto"
            priority
          />
          <p className="text-sm text-gray-400">Vercel @ React Miami</p>
        </div>

        <div className="relative mb-16 w-full max-w-[80%] mx-auto">
          <div className="sun-effect top-[-40px] right-[20%] w-[120px] h-[120px]"></div>
          <div className="sun-effect bottom-[-40px] left-[20%] w-[120px] h-[120px]"></div>
          <div className="header-background py-6 px-5">
            <div className="neon-text-grid">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight neon-text">
                CONNECT
                <br />
                WITH
                <br />
                VERCEL
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Link
            href="https://vercel.com/careers?department=Engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">JOIN OUR TEAM</span>
          </Link>

          <Link
            href="https://discord.com/invite/bUG2bvbtHy"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">NEXT.JS DISCORD</span>
          </Link>

          <Link
            href="https://community.vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">VERCEL COMMUNITY</span>
          </Link>

          <Link
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">VERCEL</span>
          </Link>

          <Link
            href="https://v0.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">v0</span>
          </Link>

          <Link
            href="https://sdk.vercel.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button p-6 flex items-center justify-center transition-all h-20"
          >
            <span className="text-center font-bold button-text">AI SDK</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
