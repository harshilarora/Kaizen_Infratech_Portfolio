import React, { useState } from 'react';
import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight.js';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown.js';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp.js';

function ServiceCard({ number, title, description, isInitiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <div className="bg-gray-100 rounded-3xl p-8 transition-all duration-300 ease-in-out">
      
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="text-gray-400 text-2xl font-light mb-2 font-tertiary">{number}</div>
          <h3 className="text-3xl md:text-4xl font-md text-gray-900 font-secondary">{title}</h3>
        </div>
        
        <button 
          className="bg-white rounded-full p-4 hover:bg-gray-200 transition-colors duration-200 ml-4 shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <FaChevronUp className="text-gray-700 text-xl" />
          ) : (
            <FaChevronDown className="text-gray-700 text-xl" />
          )}
        </button>
      </div>

      {/* Expandable Content */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        {Array.isArray(description) ? (
          <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 leading-relaxed w-3/5">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Example usage
function ServiceCards() {
  const services = [
    {
      number: '01/',
      title: 'Civil Construction',
      description: 'With decades of experience in the industry, we undertake civil construction services and management for clients in all over North India. These services are used to facilitate our clients with a "SINGLE POINT SERVICES CONCEPT". It includes the entire spectrum from civil construction to furnishing of structure. We ensure that the construction is earthquake resistant, technically sound and aesthetically beautiful. Our objective is to provide time-bound, quality construction within the financial parameters provided to us.'
    },
    {
      number: '02/',
      title: 'Petrol & Gas Station Construction',
      description: 'At Kaaizen Engineers, we are also engaged in the construction of Petrol & Gas Stations. Starting with planning we provide a gamut of services in the construction of Petrol & Gas stations including civil, Mechanical & Electrical & Automation Services required to run a petrol or gas station. During our two decade-long existence we have established ourselves as a leading name in the construction business. Petrol & Gas station involves intelligent thinking and careful designing to not only enhance the space visually, but optimally using it to accommodate current needs and requirements.'
    },
    {
      number: '03/',
      title: 'MS Storage Tank Fabrication',
      description: 'With our in-depth expertise in Horizontal & Vertical MS Tank Fabrication, we are able to create safe & sound structure to store petroleum products & chemicals. We boast of an extraordinary team of Engineers & Fabricators that is adept at designing of tanks.'
    },
    {
      number: '04/',
      title: 'Steel Structure Fabrication',
      description: 'Design & Fabrication of steel structure is highly skilled job with in depth knowledge about behavior of different steel members. With our strong team & associates, we have executed numerous steel structures in North India spanning in the states of Delhi, Haryana, Punjab and Rajasthan.'
    },
    {
      number: '05/',
      title: 'Warehouse Construction',
      description: 'Constructing a ware house is a mixture of Civil & Mechanical Engineering. Both teams have to work in tandem to get optimum results. At Kaaizen Engineers, we have a team of highly skilled engineers & associates to take care of all designing & execution needs to construct an economical & practical ware house in given time frame.',
    },
    {
        number: '06/',
        title: 'Interior Furnishing',
        description: 'Interior Decoration ServicesInterior decoration, be it commercial or residential is a work of visual art. Practical aspect of the area to be decorated should be top priority while designing along with its aesthetic value. With our dedicated interior design associates, we provide solution to customer needs with optimum use of space money.'
        
    },
    {
        number: '07/',
        title: 'Architecture',
        description: 'We architect your dreams at Kaaizen Engineers. With a highly professional associates of licensed and well qualified architects, we offer a range of architectural services using cutting edge technology and an innovative approach. We follow the specifications given by our clients very closely and co-ordinate with them at all levels to perfectly chime with their expectations. All the laws governing construction and architecture are strictly adhered to, resulting in a smooth process devoid of any legal tangle.'
    },
    {
        number: '08/',
        title: 'Project Management Consultancy',
        description: [
            'Estimation and costing (BOQ/MOQ)',
            'Co-ordination of Architects - Interior designing and Contractors', 
            'Site supervision (24X7)',
            'Vendors/Management contractors',
            'Manage time scheduling',
            'Quality assessment',
            'Market assistance',
            'Final bill checking - Item rate/covered area'
        ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
          isInitiallyOpen={service.isInitiallyOpen}
        />
      ))}
    </div>
  );
}

export default ServiceCards;