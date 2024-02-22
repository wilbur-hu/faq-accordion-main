import Image from "next/image";
import { QA } from "./lib/qa";
import FaqCard from "./components/faqcard";

export default function Home() {
  const qas = [
    new QA(
      "1",
      "What is Frontend Mentor, and how will it help me?",
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    ),
    new QA(
      "2",
      "Is Frontend Mentor free?",
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    ),
    new QA(
      "3",
      "Can I use Frontend Mentor projects in my portfolio?",
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    ),
    new QA(
      "4",
      "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    ),
  ];

  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center justify-between p-24 
      bg-grayish-purple
      bg-[url('/images/background-pattern-mobile.svg')] sm:bg-[url('/images/background-pattern-desktop.svg')] bg-repeat-x"
      >
        <FaqCard qas={qas} />
      </main>
      
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/wilbur-hu" target="_blank">Wilbur Hu</a>.
        </div>
      </footer>
    </>
  );
}
