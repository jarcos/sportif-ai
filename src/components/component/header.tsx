import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#fc5200] py-4 px-6 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-xl font-bold" href="#">
          Sportif-AI
        </Link>
        <nav className="space-x-4">
          <Link className="hover:underline" href="#">
            Dashboard
          </Link>
          <Link className="hover:underline" href="#">
            Goals
          </Link>
          <Link className="hover:underline" href="#">
            Training
          </Link>
          <Link className="hover:underline" href="#">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  )
}
