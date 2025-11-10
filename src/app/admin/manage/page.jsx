"use client";
import React, { Suspense } from 'react';
import Genera from 'components/app/components/genera';
import Topbar from 'components/app/components/topbar';

export default function MyShop() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Topbar isAdmin={true} />
      <Genera isAdmin={true} />
    </Suspense>
  );
}