import React, { useRef, useState } from "react";
import Card from "./Card";

function Fourground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam! ",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitel: " Download Now", tagColore: "green" },
    },
    {
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      filesize: ".6mb",
      close: false,
      tag: { isOpen: true, tagTitel: " Download Now", tagColore: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id aspernatur dolore quia. ",
      filesize: ".20mb",
      close: true,
      tag: { isOpen: true, tagTitel: " Download Now", tagColore: "green" },
    },
  ];
  return (
    <div>
      <div
        ref={ref}
        className=" p-5 fixed z-[3] w-full h-full  top-0 left-0  flex  gap-10"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}

export default Fourground;
