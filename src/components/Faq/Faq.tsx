import { useState } from "react";
import styles from "./styles.module.css";

export interface Props {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="transition-all">
      <div className="flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="text-main font-bold text-xl md:text-2xl">{question}</h1>
        <span className="text-main font-bold text-xl md:text-2xl">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <p
        className={`mt-5 ${isOpen ? "max-h-auto" : "hidden max-h-0"}`}
        id={styles.answer}
      >
        {answer}
      </p>
      <div className="border-b border-slate-700 mt-5"></div>
    </div>
  );
}
