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
      className="flex flex-col gap-2 transition-all duration-300 w-full min-w-0"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-[18px] opacity-80 text-white">{title}</p>
      <h1 className="font-['Font_1'] text-2xl leading-[120%] tracking-[-0.0216em] text-white">
        {name}
      </h1>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className="px-2 pb-4 text-sm text-gray-300">
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
    <div className="flex flex-col items-center justify-center relative w-full overflow-x-hidden">
      <div className="flex flex-col items-center w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-0">
        <em className="playfair bg-gradient-to-r from-white to-[#074FF7] bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-transparent font-extrabold italic text-center mb-10">
          Our Team
        </em>

        {teamSections.map((section, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center gap-3 justify-center mt-10 mb-16"
          >
            <h2 className="font-bold text-[40px] bg-gradient-to-b from-white to-[#074FF7] bg-clip-text text-transparent text-center">
              {section.title}
            </h2>
            <p className="text-lg opacity-80 font-body font-normal text-center leading-[27px] max-w-xl px-4 mb-6 text-white">
              {section.description}
            </p>

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
    </div>
  );
};

export default Team;