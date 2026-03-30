import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-dark text-white px-6 py-4 flex items-center justify-between">
        <span className="font-bold">Full Deck Admin</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
