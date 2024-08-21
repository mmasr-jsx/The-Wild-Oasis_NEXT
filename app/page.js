import Image from "next/image";
import Link from "next/link";
import background from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      {/* fill attribute fills up the entire page and with className "object-cover" we cover the container  and with object-top we prevent it from moving
      and with priority */}
      <Image
        src={background}
        fill
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
        priority
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
