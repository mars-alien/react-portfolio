import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const SolarSystemBackground = ({}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  
 

  const planets = [
    {
      id: 1,
      size: 60,
      orbitRadius: 120,
      orbitDuration: 20,
      planetColor: "bg-gradient-to-br from-blue-400 to-cyan-300",
      ringColor: "from-blue-300/30 to-cyan-200/30",
      hasRing: true,
    },
    {
      id: 2,
      size: 40,
      orbitRadius: 200,
      orbitDuration: 15,
      planetColor: "bg-gradient-to-br from-cyan-400 to-blue-500",
      ringColor: "from-cyan-300/20 to-blue-400/20",
      hasRing: false,
    },
    {
      id: 3,
      size: 80,
      orbitRadius: 300,
      orbitDuration: 25,
      planetColor: "bg-gradient-to-br from-blue-300 to-indigo-400",
      ringColor: "from-blue-200/40 to-indigo-300/40",
      hasRing: true,
    },
    {
      id: 4,
      size: 35,
      orbitRadius: 400,
      orbitDuration: 18,
      planetColor: "bg-gradient-to-br from-indigo-400 to-purple-500",
      ringColor: "from-indigo-300/25 to-purple-400/25",
      hasRing: false,
    },
  ];

  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
      
      {/* Animated Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-blue-300 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Solar System Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Sun */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-500 rounded-full shadow-2xl shadow-blue-400/50"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 50px rgba(59, 130, 246, 0.5)",
              "0 0 80px rgba(59, 130, 246, 0.8)",
              "0 0 50px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Sun Glow Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Orbiting Planets */}
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: planet.orbitDuration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: planet.orbitRadius * 2,
            height: planet.orbitRadius * 2,
          }}
        >
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
            style={{
              width: planet.size,
              height: planet.size,
            }}
          >
            {/* Planet Ring */}
            {planet.hasRing && (
              <motion.div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-gradient-to-r ${planet.ringColor} rounded-full opacity-60`}
                style={{
                  width: planet.size * 1.8,
                  height: planet.size * 0.4,
                }}
                animate={{
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  duration: planet.orbitDuration * 0.7,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            )}
            
            {/* Planet */}
            <motion.div
              className={`${planet.planetColor} rounded-full shadow-lg shadow-blue-400/30`}
              style={{
                width: planet.size,
                height: planet.size,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: planet.orbitDuration * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Particles */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-300/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
      />
    </div>
  );
};

export default SolarSystemBackground;
