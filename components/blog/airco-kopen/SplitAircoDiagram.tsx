import { motion } from "framer-motion";

export function SplitAircoDiagram() {
  return (
    <div className="my-16 bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
      <motion.h3 
        className="text-2xl font-bold text-blue-800 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hoe Werkt een Split Airco Systeem?
      </motion.h3>
      
      <div className="relative">
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-10 -right-10 h-32 w-32 bg-blue-400 rounded-full mix-blend-multiply opacity-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-10 -left-10 h-32 w-32 bg-cyan-400 rounded-full mix-blend-multiply opacity-10"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <div className="relative bg-white p-4 rounded-xl shadow-md overflow-hidden">
          {/* Using a different approach without requiring an external image */}
          <div className="relative bg-white h-[400px] flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-around w-full p-6">
              {/* Outside unit */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="w-40 h-64 bg-gray-200 rounded-lg border-2 border-blue-500 flex flex-col items-center justify-center p-4">
                  <motion.div 
                    className="w-full h-24 bg-gray-300 rounded mb-2 flex items-center justify-center"
                    animate={{
                      boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 15px rgba(59, 130, 246, 0.3)", "0px 0px 0px rgba(59, 130, 246, 0)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 text-blue-500" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </motion.svg>
                  </motion.div>
                  <div className="text-center text-blue-800 font-semibold">Buitenunit</div>
                  <div className="text-xs text-gray-600 mt-2 text-center">Bevat compressor, condensor en ventilator</div>
                </div>
                <motion.div 
                  className="absolute -top-3 -right-3 h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <span className="text-white font-bold">1</span>
                </motion.div>
              </motion.div>

              {/* Connection pipes */}
              <div className="h-10 w-32 md:w-40 relative my-6 md:my-0 transform md:rotate-0 rotate-90">
                {/* Cold line */}
                <motion.div 
                  className="absolute top-3 left-0 right-0 h-4 bg-blue-300 rounded-full"
                  initial={{ opacity: 0.7 }}
                >
                  {/* Animated flow */}
                  <motion.div
                    className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
                    animate={{ x: ["0%", "100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                {/* Hot line */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-4 bg-red-300 rounded-full"
                  initial={{ opacity: 0.7 }}
                >
                  {/* Animated flow */}
                  <motion.div
                    className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-transparent via-red-100 to-transparent"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                <motion.div 
                  className="absolute top-6 left-0 right-0 border-b-2 border-dashed border-gray-400"
                  animate={{
                    borderColor: ["#9ca3af", "#d1d5db", "#9ca3af"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
                <div className="text-xs text-gray-500 absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Koelmiddel leidingen</div>
              </div>

              {/* Inside unit */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <div className="w-56 h-40 bg-white rounded-lg border-2 border-teal-500 flex flex-col items-center justify-center p-4 shadow-md">
                  <div className="w-full h-8 bg-teal-100 rounded mb-2"></div>
                  <div className="w-full h-16 bg-teal-50 rounded flex items-center justify-center relative overflow-hidden">
                    {/* Airflow simulation */}
                    <motion.div 
                      className="absolute inset-0 flex items-center"
                      animate={{
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {[...Array(6)].map((_, index) => (
                        <motion.div
                          key={index}
                          className="h-1 mx-1 bg-teal-200 rounded-full"
                          style={{ width: `${Math.max(10, Math.random() * 40)}px` }}
                          animate={{
                            y: ["0%", "100%", "0%"],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-teal-500 z-10" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg>
                  </div>
                  <div className="text-center text-teal-800 font-semibold mt-2">Binnenunit</div>
                </div>
                <motion.div 
                  className="absolute -top-3 -right-3 h-6 w-6 bg-teal-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    backgroundColor: ["#14b8a6", "#2dd4bf", "#14b8a6"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                >
                  <span className="text-white font-bold">2</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <motion.div 
          className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center mb-2">
            <motion.span 
              className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-2"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-bold">1</span>
            </motion.span>
            <h4 className="font-semibold text-blue-800">Buitenunit</h4>
          </div>
          <p className="text-blue-700">Bevat de compressor die de warmte uit de binnenlucht naar buiten afvoert en koude lucht produceert.</p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-4 rounded-lg shadow border-l-4 border-teal-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="flex items-center mb-2">
            <motion.span 
              className="h-6 w-6 bg-teal-500 rounded-full flex items-center justify-center mr-2"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-white font-bold">2</span>
            </motion.span>
            <h4 className="font-semibold text-teal-800">Binnenunit</h4>
          </div>
          <p className="text-teal-700">Blaast de gekoelde lucht de ruimte in en zuigt tegelijkertijd warme binnenlucht aan.</p>
        </motion.div>
      </div>
    </div>
  );
}
