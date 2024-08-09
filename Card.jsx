import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={1}
    >
      <div className="  relative w-60 h-72 text-zinc-100 flex-shrink-0 rounded-[45px] bg-zinc-900 px-8 py-10   overflow-hidden">
        <FaRegFileAlt />
        <p className=" text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full  left-0">
          <div className=" flex items-center justify-between mb-10 py-3 px-8">
            <h5>{data.filesize}</h5>
            <span className=" w-7 h-7 bg-sky-300 rounded-full flex items-center justify-center ">
              {data.close ? (
                <IoClose />
              ) : (
                <MdOutlineFileDownload size=".8em" color="#000" />
              )}
            </span>
          </div>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag absolute -translate-x-8 bottom-0 w-full h-10 ${
              data.tag.tagColore === "blue" ? "bg-blue-600" : "bg-green-600"
            } , flex items-center justify-center`}
          >
            <h3 className="text-md font-semibold">{data.tag.tagTitel}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
