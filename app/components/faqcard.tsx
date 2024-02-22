import { QA } from "@/app/lib/qa";
import Image from "next/image";
import QAItem from "./qritem";
import star from "@/public/images/icon-star.svg"

export default function FaqCard({ qas }: { qas: QA[] }) {
  return (
    <section className="bg-white w-[330px] sm:w-[584px] rounded-xl p-10">
      <h2 className="flex flex-row items-center text-dark-purple">
        <Image src={star} width="36" height="36" alt="star" />
        <span className=" text-5xl font-bold pl-7">FAQs</span>
      </h2>
      <ul className="mt-10">
        {qas.map((qa, idx) => {
          return (
            <li key={qa.id}>
              <QAItem {...qa} expanded={idx == 0} />
              {(idx != qas.length - 1) && <hr className="my-7"/>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
