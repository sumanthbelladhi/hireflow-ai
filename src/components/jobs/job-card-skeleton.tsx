function JobCardSkeleton() {
  return (
    <div
      className="
        animate-pulse
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-6
      "
    >
      <div className="h-14 w-14 rounded-2xl bg-slate-800" />

      <div className="mt-6 h-6 w-2/3 rounded bg-slate-800" />

      <div className="mt-3 h-4 w-1/3 rounded bg-slate-800" />

      <div className="mt-8 h-4 w-1/2 rounded bg-slate-800" />

      <div className="mt-6 flex gap-2">
        <div className="h-8 w-20 rounded-full bg-slate-800" />
        <div className="h-8 w-20 rounded-full bg-slate-800" />
      </div>

      <div className="mt-8 h-12 rounded-2xl bg-slate-800" />
    </div>
  );
}

export default JobCardSkeleton;