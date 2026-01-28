'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NAVIGATION = [
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'How it Works', href: '/usage' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav aria-label="Global" className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
            <span className="sr-only">Quick Records</span>
            <Image
              alt="Logo"
              src="/favicon.ico"
              className="h-8 w-auto"
              width={200}
              height={200}
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold tracking-wide text-gray-900 hover:text-orange-600 transition-colors uppercase"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-gray-900/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <Image
                alt="Logo"
                src="/favicon.png"
                className="h-8 w-auto"
                width={300}
                height={300}
              />
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-orange-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}