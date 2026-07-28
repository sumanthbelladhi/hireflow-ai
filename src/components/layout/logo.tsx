import { BriefcaseBusiness } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-indigo-500
          to-violet-500
          shadow-lg
          shadow-indigo-500/20
        "
      >
        <BriefcaseBusiness className="h-5 w-5 text-white" />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight">
          HireFlow AI
        </h1>

        <p className="text-xs text-slate-400">
          Smart Career Platform
        </p>
      </div>
    </div>
  );
}

export default Logo;