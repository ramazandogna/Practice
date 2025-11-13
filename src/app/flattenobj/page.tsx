import React from "react";
import { flattenObject } from "./flattenobj";

export default function FlattenObj() {
  const exampleObj = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: {
        code: "US",
        name: "United States",
      },
    },
    hobbies: ["reading", "traveling"],
  };

  const exmapleObj2 = {
    obj: {
      a: {
        b: 1,
        c: {
          d: 2,
        },
      },
    },
  };

  const exampleFlattened = flattenObject(exampleObj);

  const flatten = flattenObject({ obj: { a: { b: 1, c: { d: 2 } } } });
  console.log("Flattened Object:", flatten);
  return <div>

    <h2 className="font-bold text-[16px]">Original Object 1:</h2>
    <pre className="text-[12px]">{JSON.stringify(exampleObj, null, 2)}</pre><br />
    <h2 className="font-bold text-[16px]">Flattened Object 2:</h2>
    <pre className="text-[12px]">{JSON.stringify(exampleFlattened,)}</pre>
    <br /><br />
    <h2 className="font-bold text-[16px]">Original Object 2:</h2>
    <pre className="text-[12px]">{JSON.stringify(exmapleObj2, null, 2)}</pre><br />
    <h2 className="font-bold text-[16px]">Flattened Object 2:</h2>
    <pre className="text-[12px]">{JSON.stringify(flatten,)}</pre>
  </div>;
}
