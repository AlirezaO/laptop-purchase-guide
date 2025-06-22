"use client";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function AuthButton({ children, handleClick }) {
  // const onClick = async () => {
  //   switch (text) {

  //       break;
  //     case "Sign in with Google":
  //       "use server";
  //       await signIn("google");
  //       break;
  //     case "Logout":
  //       "use server";
  //       await signOut();
  //       break;
  //     default:
  //       console.log("Clicked: ", text);
  //       break;
  //   }
  // };
  return (
    <form action={handleClick}>
      <button type="submit" className="submit-button-class">
        {children}
      </button>
    </form>
  );
}
