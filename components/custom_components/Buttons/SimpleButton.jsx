"use client";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

export default function SimpleButton({ type, children, href }) {
  const [clickCounter, setClickCounter] = useState(0);
  const router = useRouter();

  const onClick = () => {
    switch (type) {
      case "add":
        setClickCounter((prev) => prev + 1);
        break;
      case "Reset":
        console.log("HERE!");
        setClickCounter(0);
        break;
      case "redirect":
        router.push(href);
        break;
      default:
        break;
    }
  };
  console.log("COUNT: ", clickCounter);
  return (
    <Fragment>
      <button onClick={onClick} className="submit-button-class">
        {children}
      </button>
      {type === "add" && clickCounter > 0 && (
        <p className=" text-sm text-gray-600">Clicked {clickCounter} Times!</p>
      )}
    </Fragment>
  );
}
