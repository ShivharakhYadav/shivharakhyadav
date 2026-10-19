import { Fragment } from "react";

const wordCycle = 2.5; // seconds each word stays on screen

/** Keyframes for RotatingWords. Render it outside the heading so the CSS isn't part of the h1's text. */
export function RotatingWordsStyle({ count }: { count: number }) {
  const total = count * wordCycle;
  const share = 100 / count;
  const css = `
    @keyframes rotate-word {
      0% { opacity: 0; transform: translateY(45%); filter: blur(6px); }
      4% { opacity: 1; transform: translateY(0); filter: blur(0); }
      ${(share - 4).toFixed(2)}% { opacity: 1; transform: translateY(0); filter: blur(0); }
      ${share.toFixed(2)}%, 100% { opacity: 0; transform: translateY(-45%); filter: blur(6px); }
    }
    .rotate-word { opacity: 0; animation: rotate-word ${total}s cubic-bezier(.2,.7,.2,1) infinite backwards; }
    @media (prefers-reduced-motion: reduce) {
      .rotate-word { animation: none; }
      .rotate-word:first-child { opacity: 1; }
    }`;
  // raw HTML so the CSS isn't escaped during server rendering
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

/**
 * Cycles through `words` in place (CSS only; needs RotatingWordsStyle on the page).
 * All words share one grid cell, so the line keeps the width of the longest
 * word and nothing below jumps. Screen readers get the full list once;
 * reduced-motion shows the first word.
 */
export default function RotatingWords({ words }: { words: string[] }) {
  return (
    <span className="block">
      <span className="sr-only"> {words.join(", ")} </span>
      <span className="inline-grid py-1 text-teal" aria-hidden="true">
        {/* the spaces keep the words apart in the text content; grid layout ignores them */}
        {words.map((w, i) => (
          <Fragment key={w}>
            {" "}
            <span
              className="rotate-word whitespace-nowrap [grid-area:1/1]"
              style={{ animationDelay: `${i * wordCycle}s` }}
            >
              {w}
            </span>
          </Fragment>
        ))}
      </span>{" "}
    </span>
  );
}
