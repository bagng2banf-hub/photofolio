export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-mist text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="flex flex-col items-center gap-5">
        <div className="size-12 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500" />
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-sky-300">
          Loading Portfolio
        </p>
      </div>
    </div>
  );
}
