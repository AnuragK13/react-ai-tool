import { forwardRef } from "react";

import Answers from "./Answers";

const ResultContainer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="container h-110 overflow-auto">
      <div className="dark:text-zinc-300 text-zinc-800">
        <ul>
          {props.resultData &&
            props.resultData.map((item, index) => (
              <div
                key={index + Math.random()}
                className={item.type === "q" ? "flex justify-end" : ""}
              >
                {item.type === "q" ? (
                  <li
                    className="text-right p-1 dark:text-zinc-300 text-stone-700 border-8 dark:bg-zinc-700 bg-blue-300 dark:border-zinc-700 border-blue-300 w-fit rounded-tl-3xl rounded-bl-3xl rounded-br-3xl"
                    key={index + Math.random()}
                  >
                    <Answers
                      ansString={item.text}
                      index={index}
                      totalResult={item.length}
                      type={item.type}
                    />
                  </li>
                ) : (
                  item.text.map((ansItem, ansIndex) => (
                    <li
                      className="text-left p-1"
                      key={ansIndex + Math.random()}
                    >
                      <Answers
                        ansString={ansItem}
                        index={ansIndex}
                        totalResult={props.resultData.length}
                        type={item.type}
                      />
                    </li>
                  ))
                )}
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
});

export default ResultContainer;
