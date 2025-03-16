import React from 'react';
import WebIcon from '@mui/icons-material/Web'; // For Frontend Development
import StorageIcon from '@mui/icons-material/Storage'; // For Backend Development
import LayersIcon from '@mui/icons-material/Layers'; // For Full Stack MERN Development
import BuildIcon from '@mui/icons-material/Build'; // For Rebuild Websites

const ServiceCards = () => {
  const services = [
    {
      id: 1,
      title: 'Frontend Development',
      description:
        'Creating responsive and visually stunning user interfaces using modern technologies like React.js, Tailwind CSS, and more.',
      icon: <WebIcon fontSize="large" className="text-pink-500" />,
      animation: 'zoom-in',
    },
    {
      id: 2,
      title: 'Backend Development',
      description:
        'Building robust and scalable server-side applications using Node.js, Express.js, and other backend technologies.',
      icon: <StorageIcon fontSize="large" className="text-pink-500" />,
      animation: 'zoom-out',
    },
    {
      id: 3,
      title: 'Full Stack MERN Development',
      description:
        'Providing end-to-end web application development solutions with the MERN stack: MongoDB, Express.js, React.js, and Node.js.',
      icon: <LayersIcon fontSize="large" className="text-pink-500" />,
      animation: 'zoom-in',
    },
    {
      id: 4,
      title: 'Rebuild Websites',
      description:
        "Transforming outdated websites into modern, optimized, and visually appealing designs tailored to your brand's needs.",
      icon: <BuildIcon fontSize="large" className="text-pink-500" />,
      animation: 'zoom-in',
    },
  ];

  return (
    <div className="bg-black border-t-2  py-12">
      <h1 className="text-pink-600 font-bold text-3xl mb-4 text-center">
        What I DO
      </h1>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            data-aos={service.animation}
            key={service.id}
            className="bg-gray-800 text-white rounded-lg p-6 shadow-lg hover:shadow-pink-500 transition-shadow"
          >
            <div className="flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
