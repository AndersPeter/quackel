// ✅ Next.js 14 + Tailwind Portfolio Template (Improved Layout)
// Images placed under "In development" headings

import Image from "next/image";

export const metadata = {
  title: "Quackel.dk – Indie Game Developer | Anders Peter Sørensen",
  description:
    "Indie game developer portfolio. Anders Peter Sørensen builds games in Godot and creates 3D assets. Projects: Neon Grind and Snotty Trollz.",
};

export default function Home() {
  return (
    <main className="bg-[#0b0f1a] text-white min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Anders Peter Sørenen</h1>
        <h2 className="text-3xl font-bold mb-6">Indie Game Developer & 3D Artist</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Jeg bygger spil med fokus på humor og laver 3d modeller med kant.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Se projekter
          </a>
          <a
            href="#contact"
            className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
          >
            Kontakt
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">Projekter</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Neon Grind */}
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold">Neon Grind</h3>
            <p className="text-sm text-cyan-400 mb-4">In development</p>

            <div className="relative w-full h-[260px] mb-4">
              <Image
                src="/Neon.jpeg"
                alt="Neon Grind indie game gameplay – futuristic tunnel runner in Godot"
                fill
                priority
                className="rounded-xl object-cover"
              />
            </div>

            <p className="text-gray-300">
              Hurtigt, reaktionsbaseret spil i futuristisk neon synth space med
              fokus på flow og timing.
            </p>
          </div>

          {/* Snotty Trollz */}
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold">Snotty Trollz</h3>
            <p className="text-sm text-cyan-400 mb-4">In development</p>

            <div className="relative w-full h-65 mb-4">
              <Image
                src="/snotty.jpeg"
                alt="Snotty Trollz indie game gameplay – funny troll game"
                fill
                className="rounded-xl object-cover"
              />
            </div>

            <p className="text-gray-300">
              Børnespil med snottede trolde, som kun øsnker sig en snottet
              snack.
            </p>
          </div>
        </div>
      </section>
      {/* 3D models */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10">3D modeller</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Asset Pack */}
          <div className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold">Asset pack</h3>
            <p className="text-sm text-cyan-400 mb-4">In development</p>

            <div className="relative w-full h-[260px] mb-4">
              <Image
                src="/Crate.png"
                alt="Sci-fi crate"
                fill
                priority
                className="rounded-xl object-cover"
              />
            </div>

            <p className="text-gray-300">
              Første asset til en asset pack.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Kontakt</h2>
        <p className="text-gray-300 mb-4">contact@quackel.dk</p>
        <a
          href="mailto:contact@quackel.dk"
          className="bg-cyan-500 px-6 py-3 rounded-2xl hover:scale-105 transition"
        >
          Send mail
        </a>
      </section>
    </main>
  );
}
