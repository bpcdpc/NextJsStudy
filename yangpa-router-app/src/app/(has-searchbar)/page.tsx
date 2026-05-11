"use client";

export default function Home() {
  console.log("인덱스 페이지 컴포넌트");
  return (
    <div>
      <h1>인덱스페이지입니다.</h1>
      <button onClick={() => console.log("클릭")}>클릭</button>
    </div>
  );
}
