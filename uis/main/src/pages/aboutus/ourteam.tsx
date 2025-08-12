//import person1 from '../../assets/images/person1.jpg';
import person2 from '../../assets/images/person2.jpg';
import person3 from '../../assets/images/person3.jpg';
import person4 from '../../assets/images/person4.jpg';
import { useState } from 'react';

const defaultExpandableText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis, nulla id rutrum blandit, orci justo laoreet lacus, sed pharetra.';

const TeamMemberCard = ({ image, title, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
  className="flex flex-col  rounded-tl-[16px] rounded-tr-[16px] transition-all duration-300 w-full min-w-0"
  onMouseEnter={() => setIsExpanded(true)}
  onMouseLeave={() => setIsExpanded(false)}
>
  <div className="w-[226px] rounded-tl-[16px] rounded-tr-[16px]  overflow-hidden">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Title */}
  <div className="bg-[#FAFAFA33] flex flex-col rounded-[16px] w-[226px] h-[88px] gap-[8px p-[12px]">
  <p className="text-[18px] worksans opacity-80 text-white  px-2 py-1 rounded">
    {title}
  </p>

  {/* Name */}
  <h1 className="worksans text-2xl leading-[120%] tracking-[-0.0216em] text-white  px-2  rounded">
    {name}
  </h1>
  </div>

  {/* Expandable Section */}
  <div
    className={`overflow-hidden transition-all duration-300 ease-in-out ${
      isExpanded ? 'max-h-40' : 'max-h-0'
    }`}
  >
    <div className="px-2 pb-4 text-sm text-gray-300 bg-[#FAFAFA33] rounded-[16px]">
      {defaultExpandableText}
    </div>
  </div>
</div>

  );
};

const teamSections = [
  {
    title: 'Leadership',
    description: 'About Leadership',
    members: [
      { image: person2, title: 'Director/title', name: 'Alice Johnson' },
      { image: person2, title: 'Director/title', name: 'Bob Lee' },
      { image: person3, title: 'Director/title', name: 'Carol Wang' },
      { image: person4, title: 'Director/title', name: 'David Kim' },
    ],
  },
  {
    title: 'Founders',
    description:
      'Our Founders hold backgrounds in electrical engineering and sustainable energy',
    members: [
      { image: person2, title: 'Founder', name: 'Emily Chen' },
      { image: person2, title: 'Co-Founder', name: 'Frank Zhang' },
      { image: person3, title: 'CTO', name: 'Grace Park' },
      { image: person4, title: 'CEO', name: 'Hank Patel' },
    ],
  },
  {
    title: 'Technical Leadership',
    description: 'Our experts in motor design and manufacturing',
    members: [
      { image: person2, title: 'Tech Lead', name: 'Ivy Rao' },
      { image: person2, title: 'Engineer', name: 'Jack Singh' },
      { image: person3, title: 'Engineer', name: 'Kiran Das' },
      { image: person4, title: 'Engineer', name: 'Liam Roy' },
    ],
  },
  {
    title: 'Business Development Team',
    description:
      'Comes with an experience in Indias energy and automotive sectors',
    members: [
      { image: person2, title: 'BD Manager', name: 'Maya Iyer' },
      { image: person2, title: 'Analyst', name: 'Nikhil Rao' },
      { image: person3, title: 'Strategist', name: 'Olivia Thomas' },
      { image: person4, title: 'Growth Lead', name: 'Pranav Desai' },
    ],
  },
];

const Team = () => {
  return (

      <div className="flex flex-col items-center w-full max-w-[1000px] mx-auto gap-[128px] sm:px-6 lg:px-0">
        <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center ">
          Our Team
        </em>

        {teamSections.map((section, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center gap-[32px] justify-center "
          >
            <div className="flex flex-col items-center gap-[16px]">
            <h2 className="font-bold worksans text-[40px] bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-transparent leading-[1] tracking-normal text-center">
              {section.title}
            </h2>
            <p className="text-sm leading-[27px] worksans opacity-80 font-body font-normal text-center  max-w-xl text-white">
              {section.description}
            </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-full">
              {section.members.map((member, i) => (
                <TeamMemberCard
                  key={i}
                  image={member.image}
                  title={member.title}
                  name={member.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
   
  );
};

export default Team;