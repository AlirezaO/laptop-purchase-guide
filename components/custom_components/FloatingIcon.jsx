"use client";

import { ArrowBigUpDash } from "lucide-react";
import React from "react";
import {
  AnimatePresenceWrapper,
  MotionDivWrapper,
} from "../providers/FramerMotionProvider";

const FloatingIcon = () => {
  return (
    <AnimatePresenceWrapper>
      <MotionDivWrapper
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 2 }}
        className="flex justify-center items-center fixed bottom-4 right-4 w-10 h-10 rounded-full cursor-pointer bg-cyan-600"
        onClick={() => document.getElementById("chatTextArea").focus()}
      >
        <ArrowBigUpDash />
      </MotionDivWrapper>
    </AnimatePresenceWrapper>
  );
};

export default FloatingIcon;
