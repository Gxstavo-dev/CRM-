import type { Button } from "../../interface/buttons";

export default function Buttons({ type, text }: Button) {
  return (
    <div className="w-2/4 h-15  flex items-center justify-center">
      <button
        type={type}
        className="w-full h-full bg-slate-100 text-black p-3 rounded-2xl hover:bg-slate-200"
      >
        {text}
      </button>
    </div>
  );
}
