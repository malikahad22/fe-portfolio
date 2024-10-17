import { motion } from 'framer-motion';

const Page = () => (
   <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      viewBox="0 0 100 100"
      className="absolute"
   >
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="transparent" />
   </motion.svg>
);

export default Page;