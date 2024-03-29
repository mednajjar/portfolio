import '@/styles/globals.css'
import Header from './components/header'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function App ({ Component, pageProps }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={(pathname !== '/') && pathname}>
        <Header pathname={pathname} />
        <Component {...pageProps} />
        <motion.div
        className='slide-in'
        initial={{scaleY: 0}}
        animate={{scaleY: 0}}
        exit={{scaleY: 1}}
        transition={{duration: 1, ease:[0.22, 1, 0.36, 1]}}
        >
        </motion.div>
        <motion.div
        className='slide-in'
        initial={{scaleY: 1}}
        animate={{scaleY: 0}}
        exit={{scaleY: 0}}
        transition={{duration: 1, ease:[0.22, 1, 0.36, 1]}}
        >
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
