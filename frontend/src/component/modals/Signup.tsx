import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import SignupForm from "../forms/SignupForm";

type SignupProps = {
  onClose: () => void;
};

const Signup = ({ onClose }: SignupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full z-10 min-h-screen top-0 left-0 bg-[rgba(0,0,0,0.6)]"
    >
      <div className="w-full h-full mt-12 mb-12 flex flex-col items-center justify-center">
        <div className="bg-white w-1/2 max-md:w-[90%] shadow-xl px-12 py-8">
          <div className="flex justify-between items-center">
            <h2 className="font-heading text-2xl font-semibold">Sign up</h2>
            <IoClose
              size={28}
              className="text-black cursor-pointer"
              onClick={onClose}
            />
          </div>
          <SignupForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
