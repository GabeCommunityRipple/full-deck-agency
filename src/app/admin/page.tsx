import Link from "next/link";

export default function AdminDashboard() {
  const sections = [
    { label: "Blog Posts", href: "/admin/blog" },
    { label: "Leads", href: "/admin/leads" },
    { label: "Case Studies", href: "/admin/case-studies" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-dark-gray mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <span className="font-semibold text-brand-dark-gray">{s.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
