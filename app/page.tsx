import { Metadata } from "next";
import Link from "next/link";

const features = [
            {
              title: "Real-time Messaging",
              desc: "Chat instantly with low latency and high reliability.",
              icon: "💬",
            },
            {
              title: "Secure & Encrypted",
              desc: "Your privacy matters. End-to-end encryption included.",
              icon: "🔒",
            },
            {
              title: "Cloud Sync",
              desc: "Access your chats from any device, anytime.",
              icon: "☁️",
            },
            {
              title: "Custom Themes",
              desc: "Personalize your chat experience with themes.",
              icon: "🎨",
            },
            {
              title: "Group Chats",
              desc: "Stay connected with your friends, team or community.",
              icon: "👥",
            },
            {
              title: "Media Sharing",
              desc: "Send images, videos, and more with a tap.",
              icon: "📎",
            },
          ]

export default function Home() {
  return (
    <main className="max-h-screen">
      <section className="relative isolate overflow-hidden bg-gradient-to-br pt-24 from-blue-900 via-indigo-800 to-purple-700 text-white h-screen">
        <div
          aria-hidden
          className="absolute -top-20 -left-40 h-96 w-96 rounded-full bg-purple-500/40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -right-40 h-96 w-96 rounded-full bg-blue-500/40 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 py-32 sm:py-40 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tight">
            BhinoChats
          </h1>
          <p className="mt-4 text-lg sm:text-3xl md:text-4xl font-light">
            <span className="font-semibold">Safe&nbsp;and&nbsp;Fast</span>&nbsp;is&nbsp;right&nbsp;here
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/home"
              className="inline-block rounded-lg bg-white/90 px-10 py-5 text-xl text-blue-900 font-semibold backdrop-blur hover:bg-white"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-lg border border-white/60 px-10 py-5 text-xl text-white/90 hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx + Math.random()}
              className="backdrop-blur rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg hover:bg-white/20 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BhinoChats. All rights reserved.
      </footer>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home- Bhinochats",
  description: "Safe and Fast is right here",
};
