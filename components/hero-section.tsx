import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: 'url("/hero.png")' }}
      >
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Modern Essentials
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">
              Shop our curated collection of high-quality products designed for
              modern living.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                className="text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
