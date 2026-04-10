export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Website Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
