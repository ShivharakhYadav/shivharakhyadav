"use client";

import { useEffect, useState } from "react";

/**
 * The current time in India, e.g. ", currently 3:45 PM". Rendered only after
 * mount so the server HTML (which can't know the visitor's moment) matches.
 */
export default function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Asia/Kolkata",
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return <span className="font-normal text-muted">, currently {time}</span>;
}
