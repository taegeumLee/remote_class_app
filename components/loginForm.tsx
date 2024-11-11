"use client";

export default function LoginForm() {
  return (
    <form action="" className="flex flex-col gap-2 mx-auto mb-8">
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col gap-2">
          <input
            className="bg-neutral-100 p-2 rounded-lg"
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <input
            className="bg-neutral-100 p-2 rounded-lg"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="w-1/2">
          <button className="bg-blue-400 text-neutral-100 p-2 rounded-lg">
            로그인
          </button>
        </div>
      </div>
    </form>
  );
}
