import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavTabProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export default function NavTab({ href, icon: Icon, label }: NavTabProps) {
  return (
    <Link
      href={href}
      className="inline-flex flex-col items-center gap-1 px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
}

