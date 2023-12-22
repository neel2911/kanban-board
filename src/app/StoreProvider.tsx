"use client";

import { AppStore, makeStore } from "@/lib/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";

type StoreProviderType = {
  children: React.ReactNode;
};
const StoreProvider = ({ children }: StoreProviderType) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
