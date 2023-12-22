"use client";

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { EventNameType, PubSubContextType } from "@/app/types";

type Subscriber = Record<EventNameType, Function[]>;

const PubSubContext = createContext<PubSubContextType>({});
const PubSubProvider: React.FC<PropsWithChildren> = (props) => {
  const subscribers = useRef<Subscriber>({});
  const { children } = props;

  const subscribe: PubSubContextType["subscribe"] = (
    eventName: EventNameType,
    callback: (data: any) => void
  ) => {
    if (!subscribers.current[eventName]) {
      subscribers.current[eventName] = [];
    }
    subscribers.current[eventName].push(callback);
    return callback;
  };

  const unsubscribe = (eventName: EventNameType, callback: Function | null) => {
    if (!subscribers.current[eventName]) {
      subscribers.current[eventName] = subscribers.current[eventName].filter(
        (cb) => cb !== callback
      );
    }
  };
  const publish: PubSubContextType["publish"] = (
    eventName: EventNameType,
    data: any
  ) => {
    if (subscribers.current[eventName]) {
      subscribers.current[eventName].forEach((callback) => callback(data));
    }
  };
  return (
    <PubSubContext.Provider value={{ subscribe, publish, unsubscribe }}>
      {children}
    </PubSubContext.Provider>
  );
};

export default PubSubProvider;
export const usePubSub = () => useContext(PubSubContext);
