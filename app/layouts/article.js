import { motion } from "framer-motion";


const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.7, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        { (
          <header>
            <meta name="twitter:title"/>
            <meta property="og:title"/>
          </header>
        )}
        {children}

      </>
    </motion.article>
  );
};

export default Layout;