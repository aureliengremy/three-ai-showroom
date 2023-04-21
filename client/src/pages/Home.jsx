import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store/index";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <>
          <motion.section className="home" {...slideAnimation("left")}>
            <motion.header {...slideAnimation("down")}>
              <img
                src="./pick-logo-64.png"
                alt="logo"
                className="w-8 h-8 object-contain"
              />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  PICK <br className="xl:block hidden" /> YOUR.
                </h1>
              </motion.div>
              <motion.div className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Create your unique and exclusive pick with this brand-new 3D
                  customization tool. <strong>Unleash you imagination!</strong>{" "}
                  and define you own style.
                </p>
                <CustomButton
                  type="filled"
                  title="Customize it"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
            <motion.div className="invisible lg:visible" {...slideAnimation("up")}>
              <div className="flex justify-center items-center group">
                <img
                  src="./Me_smiling.png"
                  alt="logo"
                  className="w-8 h-8 rounded-full object-contain"
                />
                <a
                  className="pl-2 md:opacity-0 md:group-hover:opacity-100 ease-in duration-200 decoration-orange-400 decoration-2 underline-offset-4 decoration-wavy md:hover:underline font-bold text-gray-600 text-base"
                  href="http://aureliengremy.com"
                >
                  Visit my website
                </a>
              </div>
            </motion.div>
          </motion.section>
          <motion.div className="absolute left-5 bottom-5 z-10 visible lg:invisible" {...slideAnimation("up")}>
              <div className="flex flex-col justify-center items-center group">
                <a
                  className="decoration-orange-400 decoration-2 underline-offset-4 decoration-wavy underline font-bold text-black text-base"
                  href="http://aureliengremy.com"
                >
                  Visit my website
                </a>
              </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Home;
