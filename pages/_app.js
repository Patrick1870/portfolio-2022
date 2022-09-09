import '../styles/globals.css'
import router from 'next/router';
import { motion } from 'framer-motion';


function App({ Component, pageProps, router}) {
  return  <motion.div key={router.route} animate={{
    scale: [1, 0.5, 0.5, 1, 1],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}>
    <Component {...pageProps} />
  </motion.div>
  
}

export default App
