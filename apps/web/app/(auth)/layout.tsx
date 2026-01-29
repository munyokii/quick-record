import { firaSansCondensed } from '@/app/ui/fonts';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`${firaSansCondensed.className} min-h-screen bg-white antialiased`}>
      <div className="h-full">
        {children}
      </div>
    </section>
  );
}