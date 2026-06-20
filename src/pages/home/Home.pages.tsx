import { Link } from "react-router-dom"
import "./styles.css"
import { ButtonClassName } from "../../shared/ui/Button"
import { InfoBox } from "../../fetures/home/ui/infoBox"
import {motion} from "framer-motion"
import { useAuthRedirect } from "../../fetures/user/module/useAuthRedirest"

export default function HomePage() {

    useAuthRedirect()

  return (
    <div>
      <section className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
             viewport={{ once: true }}
         className="text-5xl font-bold
         ">Generate presentations with AI</motion.h1>
        <motion.p 
        initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.1 }}
             viewport={{ once: true }}

        className="text-xl text-muted
        ">Create professional presentations in seconds</motion.p>
         <motion.div
         initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:0.3 }}
             viewport={{ once: true }}
         
         className="flex gap-4">
    <Link to="/auth/register" className="bg-primary text-bg
     bg-text px-6 py-3 rounded-lg
     text-xl
      hover:scale-105
                            transition-all 
                            ease-in-out 
                            duration-200
     ">
      Get started
    </Link>
    <Link to="/auth/login" className="
    border-2 border-border-color 
     px-6 py-3 rounded-lg
     shadow-lg
     text-xl
     hover:scale-105
                            transition-all 
                            ease-in-out 
                            duration-200
     ">
      Sign in
    </Link>
  </motion.div>
      </section>

      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <InfoBox title="Fast" info="Generate in seconds"></InfoBox>
         <InfoBox title="AI Powered" info="Multiple AI providers"></InfoBox>
         <InfoBox title="Easy" info="Just type your idea"></InfoBox>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-20 gap-6">
        <h2 className="text-3xl font-bold">Ready to start?</h2>
        <Link to="/auth/register" className={ButtonClassName}>
          Create free account
        </Link>
      </section>
    </div>
  )
}