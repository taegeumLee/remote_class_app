import LoginForm from "@/components/loginForm";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-neutral-100 *:text-neutral-900">
      <div className="flex flex-col bg-white justify-between rounded-2xl p-4 w-full max-w-screen-md min-h-screen ">
        <div className="my-auto flex flex-col items-center gap-2 *:font-medium ">
          <span className="text-8xl text-blue-400 ">VIVA</span>
          <h4 className="text-l ">새로운 수업! 재밌는 수업!</h4>
        </div>
        <LoginForm />
        <div className="flex flex-col items-center gap-2 w-full ">
          <button className="py-2.5 mb-2 text-lg w-full text-neutral-900 bg-neutral-100 rounded-lg p-4 hover:bg-blue-400 hover:text-neutral-100 transition-all">
            구글 로그인
          </button>
          <button className="py-2.5 mb-2 text-lg w-full text-neutral-900 bg-neutral-100 rounded-lg p-4 hover:bg-green-400 hover:text-neutral-100 transition-all">
            네이버 로그인
          </button>
          <button className="py-2.5 mb-2 text-lg w-full text-neutral-900 bg-neutral-100 rounded-lg p-4 hover:bg-yellow-400 hover:text-neutral-100 transition-all">
            카카오 로그인
          </button>

          <div className="w-3/4 h-px bg-neutral-700"></div>

          <Link
            href="/create-account"
            className="py-2.5 mb-2  text-lg w-full text-neutral-900 bg-neutral-100 rounded-lg p-4 hover:bg-blue-400 hover:text-neutral-100 transition-all"
          >
            이메일로 가입하기
          </Link>
          <div className="flex flex-row gap-2  justify-center items-center ">
            <span>이미 계정이 있으신가요?</span>
            <Link
              href="/login"
              className="rounded-lg px-1 p-1.5 hover:underline transition-all"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
