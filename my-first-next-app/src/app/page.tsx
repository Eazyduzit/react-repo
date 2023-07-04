"use client"

import Counter from "./counter";

import {Counter as SdsCounter} from "@sikt/sds-confetti-button"; 

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-64">
      <div className="test-class">Hola, Mundo!</div>
      <Counter />
      <SdsCounter />
    </div>
  );
}
