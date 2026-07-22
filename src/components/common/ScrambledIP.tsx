'use client';

import {useState, useEffect, useRef} from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambledIP() {
  const [text, setText] = useState("New Delhi, IN");
  const [ip, setIp] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp(""));
  }, []);

  useEffect(() => {
    if (isHovered && ip) {
      frameRef.current = 0;
      const target = ip;
      const maxFrames = 20;

      intervalRef.current = setInterval(() => {
        frameRef.current++;
        const progress = frameRef.current / maxFrames;
        const revealCount = Math.floor(target.length * Math.min(progress, 1));

        setText(
          target
            .split("")
            .map((char, i) =>
              i < revealCount
                ? char
                : CHARS[Math.floor(Math.random() * CHARS.length)],
            )
            .join(""),
        );

        if (frameRef.current >= maxFrames) {
          setText(target);
          clearInterval(intervalRef.current);
        }
      }, 50);

      return () => clearInterval(intervalRef.current);
    } else {
      setText("New Delhi, IN");
    }
  }, [isHovered, ip]);

  return (
    <span
      className="mt-1 inline-block cursor-default text-sm text-muted-foreground transition-colors hover:text-foreground"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}
