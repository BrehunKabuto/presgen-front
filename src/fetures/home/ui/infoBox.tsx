import {motion} from "framer-motion"

export const InfoBox = ({title, info }: {title: string, info: string}) => {

   return( <motion.div
            initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            

          className="flex flex-col items-center gap-4 p-6 bg-card rounded-xl">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted text-center">{info}</p>
          </motion.div>)
}