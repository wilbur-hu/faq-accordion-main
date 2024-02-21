import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-betweenp-24 
      bg-grayish-purple
      bg-[url('/images/background-pattern-mobile.svg')] sm:bg-[url('/images/background-pattern-desktop.svg')] bg-repeat-x"
    >
      Hello
    </main>
  );
}
