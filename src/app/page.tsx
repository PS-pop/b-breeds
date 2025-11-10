"use client";
import React, { Suspense } from 'react';
import Genera from "components/app/components/genera";
import Topbar from "./components/topbar";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Topbar isAdmin={false} />
      <Genera isAdmin={false}/>
    </Suspense>
  );
}
