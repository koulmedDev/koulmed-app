 'use client';
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function TransitionalText({ TEXTS,className }: { TEXTS: string[], className?:string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Corrected cleanup
  }, [TEXTS]);

  return (
    <span className={className}>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index]}
      </TextTransition>
    </span>
  );
}
