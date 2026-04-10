"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_LINKS } from "@/lib/utils/constants";

export function Header() {
  const pathname = usePathname();
  const isExternal = (href: string) => href.startsWith("http");
  const isActive = (href: string) => !isExternal(href) && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4 pl-8 pr-4 md:pl-10">
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Image
            src="/images/perseus-logo-white.png"
            alt="Perseus"
            width={220}
            height={64}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center px-6 lg:flex">
          <div className="rounded-full bg-gradient-to-r from-violet-300/55 via-fuchsia-300/45 to-indigo-300/55 p-[1px] shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <nav className="flex items-center gap-1 rounded-full bg-transparent p-1 text-sm font-medium">
              {HEADER_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={isExternal(item.href) ? "_blank" : undefined}
                  rel={isExternal(item.href) ? "noreferrer" : undefined}
                  className={`rounded-full px-4 py-2 transition-all ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-violet-300/35 to-fuchsia-300/30 text-white shadow-[0_0_18px_rgba(168,85,247,0.2)]"
                      : "text-slate-300 hover:bg-gradient-to-r hover:from-violet-300/20 hover:to-fuchsia-300/20 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="https://app.perseus.lettria.net/auth/registration?flow=f17d1da6-6370-41d3-b3b6-0359a67dc704"
            className="btn-primary px-4 py-2 text-sm font-semibold"
          >
            Start for free
          </Link>
          <Link
            href="https://app.perseus.lettria.net/auth/login?flow=6361ee16-adcb-425b-976e-bd3d0bd93098"
            className="btn-secondary px-4 py-2 text-sm font-semibold"
          >
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}
