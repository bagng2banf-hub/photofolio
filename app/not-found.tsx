import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-500">
          404
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-950 dark:text-white">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          요청한 페이지가 이동되었거나 아직 준비되지 않았습니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-500 px-6 text-sm font-bold text-white shadow-glow transition hover:bg-blue-600"
        >
          <ArrowLeft size={17} />
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
