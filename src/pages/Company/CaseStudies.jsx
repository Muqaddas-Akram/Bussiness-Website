import React from 'react';
import Contact from "../../components/Contact/contact";
import logoone from "../../assets/Images/Tigers-Telecoms.png"
import logotwo from "../../assets/Images/invictus.png"
import logothree from "../../assets/Images/mission-express.png"

const CaseStudies = () => {
  const categories = [
    'All', 'Billing Platform', 'Cloud Services', 'Connectivity and Data', 
    'Cyber Security', 'Energy', 'Hosted Telephony', 'IT Consultancy', 
    'IT Security', 'Partner Programme Case study category', 'Voice Over IP'
  ];

  const caseStudies = [
    {
      logo: logoone,
      name: 'Tigers Telecoms',
      categories: ['Cloud Services', 'Connectivity and Data', 'Energy', 'Hosted Telephony', 'Voice Over IP'],
      description: 'Leicester Tigers is a professional rugby union club based in Leicester, England. It plays Premiership Rugby, England\'s top division of rugby. The club was founded in 1880 and ...'
    },
    {
      logo: logotwo,
      name: 'Invictus Communications',
      categories: ['Billing Platform', 'Cloud Services', 'Connectivity and Data', 'Cyber Security', 'Energy', 'Hosted Telephony', 'IT Consultancy', 'IT Security', 'Partner Programme Case study category', 'Voice Over IP'],
      description: 'Invictus Group are a multi award winning IT, Telecoms and Energy provider with over 100 years of combined industry knowledge. ...'
    },
    {
      logo: logothree,
      name: 'Mission Express',
      categories: ['Cloud Services', 'Energy', 'Hosted Telephony', 'IT Consultancy'],
      description: 'Mission Express is a worldwide document and parcel express courier based at London\'s Heathrow Airport. British-owned, with over 18 years\' experience, they provide flexible, cost effective and reliable ...'
    }
  ];

  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-500 mb-6">Case Studies</h1>
        
        <div className="flex flex-wrap gap-4 mb-8 mt-20 mx-14 font-bold text-lg justify-center">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`px-3 py-1 rounded text-red-600 ${index === 0 ? 'border-b-2 border-red-600' : 'hover:border-b-2 hover:border-red-600'} hover:text-red-600`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className={`h-60 flex items-center justify-center ${
                index === 0 ? 'bg-green-800' : 
                index === 1 ? 'bg-yellow-400' : 
                'bg-green-500'
              }`}>
                <img src={study.logo} alt={`${study.name} logo`} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{study.name}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.categories.map((category, catIndex) => (
                    <span key={catIndex} className="text-xs text-red-600">{category}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4 flex-grow">{study.description}</p>
                <a 
                  href="#" 
                  className="text-red-600 text-sm text-center font-semibold mt-auto px-3 py-2 rounded bg-transparent hover:bg-red-600 hover:text-white transition-colors"
                >
                  View case study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact/>
    </>
  );
};

export default CaseStudies;
