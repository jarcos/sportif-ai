import Link from "next/link";
import Cookies from 'js-cookie';
import Image from 'next/image';

export function Header() {
  let athlete = null;
  const athleteCookie = Cookies.get('athlete');

  if (athleteCookie) {
    athlete = JSON.parse(athleteCookie);
  }

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
        {athlete && (
          <div className="flex items-center space-x-2">
            <h2>Hello, {athlete.firstname} {athlete.lastname}</h2>
            <Image src={athlete.profile} alt="Athlete profile" width={50} height={50} />
          </div>
        )}
      </div>
    </header>
  )
}
