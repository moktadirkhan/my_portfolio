import { GetServerSideProps, GetStaticPropsContext } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeFade, stagger } from "../animations";

const index = ({BASE_URL}) => {
  console.log(services);
  
  return (
    <motion.div  className="flex flex-col px-6 pt-1-grow" variants={routeFade} initial="initial" animate="visible" exit="exit">
      <h5 className="my-3 font-medium">I am a self-taught web developer. I have gained skills 
in Backend Web Development. My passion is to learn 
about the tech market and stay up to date about the 
current world. I give my full determination to get the 
best possible output and adapting to work in any situation</h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft:'-1.5rem',marginRight:'-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            services.map(service=>
            <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 "
            key={service.title}
            >
              
              <ServiceCard service={service}/>
            </motion.div>
            )
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export const getServerSideProps=async(
  context:GetServerSideProps
)=>{
  // const res=await fetch('${process.env.VERCEL_URL}/api/services')
  // const res=await fetch('http://localhost:3000/api/services')
  const res=await fetch('http://moktadirkhan.com/api/services')
  const data =await res.json()

  console.log("SERVER",services);
  
  return {
    props:{
      services:data.services,
    },
  }
}

// we can use this functions in such pages like FAQ, where we don need to render from the server
// export const getStaticProps=async(
//   context:GetStaticPropsContext
// )=>{
//   const res=await fetch('http://localhost:3000/api/services')
//   const data =await res.json()

//   console.log("SERVER",services);
  
//   return {
//     props:{
//       services:data.services,
//     },
//   }
// }
export default index
