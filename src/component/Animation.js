import React from "react";

import { TfiTwitterAlt } from "react-icons/tfi";
import {
  FaMediumM,
  FaYoutube,
  FaGithub,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const icon_bitcoin = require("../assets/icon-bitcoin.png");
const icon_custom = require("../assets/icon-custom.png");
const gfx_d_dark = require("../assets/gfx-d-dark.png");

export default function Animation() {
  return (
    <div className=" text-white self-center">
      <div className="flex flex-col gap-8 justify-center items-center h-full">
        <div className="w-full sm:w-[725px]   flex justify-center items-center">
          <div className=" relative ">

            <img
            id="img1"
              src={icon_custom}
              alt="img"
              className="animate-bounce  absolute "
            ></img>
            <img
             id="img2"
              src={icon_bitcoin}
              alt="img"
              className="animate-bounce-2  absolute "
            ></img>
            <img src={gfx_d_dark} alt="img" className="w-full "></img>

          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <p className="md:text-4xl sm:text-2xl text-lg font-bold">
              Combining the power of Staking and Caming
            </p>
            <p className="sm:text-xl text-sm">Presenting Venos on OPBNB</p>
          </div>
          <div className=" flex  gap-8  justify-center w-full">
            <button className="bg-gradient-to-l  hover:from-cyan-400 from-blue-700   to-cyan-400 py-3  sm:px-10 px-8 rounded-full">
              <p className="sm:text-xl text-xs font-bold">OPEN APP</p>
            </button>
            <button className=" bg-gradient-to-l  hover:from-purple-700  from-cyan-400  to-purple-700   py-3  sm:px-10 px-8 rounded-full">
              <p className="sm:text-xl text-xs font-bold">WHITEPAPER</p>
            </button>
          </div>
          <div className="flex gap-3 justify-center sm:text-2xl text-base">
            <button className="bg-slate-500 duration-300 hover:bg-cyan-400 px-3 py-3 rounded-full">
              <TfiTwitterAlt />
            </button>
            <button className="bg-slate-500 duration-300 hover:bg-cyan-400 px-3 py-3 rounded-full">
              <FaTelegram />
            </button>
            <button className="bg-slate-500 duration-300 hover:bg-cyan-400 px-3 py-3 rounded-full">
              <FaYoutube />
            </button>
            <button className="bg-slate-500 duration-300 hover:bg-cyan-400 px-3 py-3 rounded-full">
              <FaGithub />
            </button>
            <button className="bg-slate-500 duration-300 hover:bg-cyan-400 px-3 py-3 rounded-full">
              <FaInstagram />
            </button>
            <button className="bg-slate-500 duration-300 hover:bg-cyan-400 px-3 py-3 rounded-full">
              <FaMediumM />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
