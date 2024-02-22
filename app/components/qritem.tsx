"use client";

import NextImage from "next/image";
import { useState, useEffect } from "react";
import minus from "@/public/images/icon-minus.svg";
import plus from "@/public/images/icon-plus.svg";

type QAItemProps = {
  question: string;
  answer: string;
  expanded?: boolean;
};

function prefetch(url: string) {
  const img = new Image();
  img.src = url;
}

export default function QAItem(props: QAItemProps) {
  const initExpanded = !!props.expanded;

  const [expanded, setExpanded] = useState(initExpanded);

  useEffect(() => {
    prefetch(minus.src);
    prefetch(plus.src);
  }, []);

  function Question() {
    return (
      <div className="flex flex-row justify-between items-start ">
        <h3 className=" text-dark-purple font-bold">{props.question}</h3>
        <button
          className="relative shrink-0"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <NextImage
            className="relative"
            src={plus}
            width="24"
            height="24"
            alt={"expand"}
            priority={true}
            style={{"visibility": expanded ? "hidden": "visible"}}
          />

          <NextImage
            className="absolute left-0 top-0"
            src={minus}
            width="24"
            height="24"
            alt={"fold"}
            priority={true}
            style={{"visibility": !expanded ? "hidden": "visible"}}
          />
        </button>
      </div>
    );
  }

  function Answer() {
    if (!expanded) {
      return null;
    }

    return <p className="mt-8 text-[#9a8d9a]">{props.answer}</p>;
  }

  return (
    <>
      <Question />
      <Answer />
    </>
  );
}
