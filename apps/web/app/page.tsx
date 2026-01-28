import Link from 'next/link';
import Navbar from '@/app/ui/navbar';

export default function HomePage() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="relative isolate px-6 pt-24 lg:px-8 lg:pt-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-xl -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-6xl" />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all">
              New updates for Quick Records.{' '}
              <Link href="/updates" className="font-semibold text-orange-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more &rarr;
              </Link>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl uppercase">
            Generate customer invoices the easy way
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 text-pretty">
            Manage your records with speed and precision. Built for businesses, optimized for scale.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-orange-600 transition-all hover:scale-105 focus-visible:outline-orange-500"
            >
              Get started
            </Link>
            <Link href="/docs" className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}