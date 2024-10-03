import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import AlanShraga from "../../assets/Images/Fidelty-Group_Alan-Shraga-370x455.png";
import Mcnamara from "../../assets/Images/Fidelty-Group-UK_Ian-Mcnamara-370x455.png";
import AronTeacher from "../../assets/Images/Fidelty-Group-UK_Aron_Teacher-370x455.png";
import JamesShraga from "../../assets/Images/Fidelty-Group_James-Shraga-2-370x452@2x.png";
import DanMiles from "../../assets/Images/Fidelty-Group_Dan-Miles-370x452@2x.png";
import Cristian from "../../assets/Images/Fidelty-Group_Cristian-370x452@2x.png";
import PamMurrey from "../../assets/Images/Fidelity-Group_Pam-Murrey-370x452.jpg";
import Niki from "../../assets/Images/Fidelity-Group_Niki-Footer-1-370x452.jpg";

const TeamMember = ({ name, title, imageSrc }) => (
  <div className="relative flex flex-col items-center group">
    {/* Image with Hover Button */}
    <div className="relative w-full h-full">
      <img src={imageSrc} alt={name} className="w-full h-full object-cover mb-2" />
      
      {/* LinkedIn Button */}
      <div className="absolute inset-0 mx-5 mb-5 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-blue-900 text-white w-full py-3 flex items-center justify-center">
          <FaLinkedin size={20} />
        </button>
      </div>
    </div>
    
    <h3 className="font-bold text-2xl text-gray-600">{name}</h3>
    <p className="text-sm text-gray-600 text-center">{title}</p>
  </div>
);

const Leadership = () => {
  const teamMembers = [
    { name: "Alan Shraga", title: "Managing Director", imageSrc: AlanShraga },
    { name: "Ian McNamara", title: "Transformation Director", imageSrc: Mcnamara },
    { name: "Aron Teacher", title: "Commercial Director", imageSrc: AronTeacher },
    { name: "James Shraga", title: "Director of Sales and Partnerships", imageSrc: JamesShraga },
    { name: "Dan Miles", title: "UK Service Director", imageSrc: DanMiles },
    { name: "Cristian Siminea", title: "Head of Mobile", imageSrc: Cristian },
    { name: "Pamela Murray", title: "Group Finance Manager", imageSrc: PamMurrey },
    { name: "Niki Foote", title: "Head of Customer Marketing and Relations", imageSrc: Niki },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center my-14">
        "We live an ethos of trust, <span className="text-red-600">loyalty</span> and delivery."
      </h1>
      
      <div className="grid grid-cols-3 gap-8 mb-12">
        {teamMembers.slice(0, 3).map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        {teamMembers.slice(3).map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      
      <div className="text-center mb-8 bg-gray-200 py-20 flex justify-between items-center px-8">
        <div>
          <h2 className="text-5xl font-bold mb-2 text-gray-500">
            The UK's fastest growing, <span className="text-red-600">customer </span>
          </h2>
          <h2 className="text-5xl font-bold mb-4 text-red-600">
            centric <span className='text-gray-500'> service provider.</span>
          </h2>
        </div>
        <button className="bg-red-600 text-white px-8 py-4 rounded hover:bg-blue-900">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Leadership;
