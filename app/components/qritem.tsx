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
      <div className="flex flex-row justify-between ">
        <h3>{props.question}</h3>
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <NextImage
            src={expanded ? minus : plus}
            width="24"
            height="24"
            alt={expanded ? "fold" : "expand"}
            priority={true}
          />
        </button>
      </div>
    );
  }

  function Answer() {
    if (!expanded) {
      return null;
    }

    return <p>{props.answer}</p>;
  }

  return (
    <>
      <Question />
      <Answer />
    </>
  );
}
