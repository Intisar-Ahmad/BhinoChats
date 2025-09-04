import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const topics = [
  {
    title: "Python",
    img: "/python.png",
    desc: "Discussion about Python",
    slug: "python-chat"
  },
  {
    title: "JavaScript",
    img: "/javascript.png",
    desc: "Talks around JavaScript, Node, and frameworks",
    slug: "javascript-chat"
  },
  {
    title: "Cpp",
    img: "/cpp.png",
    desc: "C++ algorithms, performance, and systems talk",
    slug: "cpp-chat"
  },
  {
    title: "Web-Development",
    img: "/web-development.png",
    desc: "Frontend, backend, and full-stack discussions",
    slug: "web-development-chat"
  },
  {
    title: "Machine-Learning",
    img: "/machine-learning.png",
    desc: "Models, data science, and AI-related topics",
    slug: "machine-learning-chat"
  },
  {
    title: "DevOps",
    img: "/devops.png",
    desc: "CI/CD, Docker, Kubernetes, and infrastructure",
    slug: "devops-chat"
  },
  {
    title: "Cybersecurity",
    img: "/cybersecurity.png",
    desc: "Security best practices, hacking, and defense",
    slug: "cybersecurity-chat"
  }
];




const page = () => {
  return (

<main className="md:pt-48 pt-36 min-h-screen flex flex-col items-center overflow-auto pb-10 px-4 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 text-white">

    <div className="max-w-7xl mx-auto text-center mb-12 bg relative">
    <h2 className="text-4xl font-extrabold">Explore Topics</h2>
    <p className="mt-2 text-lg text-white/80">Join discussions and sharpen your skills</p>
     
  </div>
    
  
    


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto overflow-auto h-[60vh]  p-3 hide-scrollbar">
    {topics.map((topic, idx) => (
      <div
        key={idx}
        className="group backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-xl"
      >
       <div className='w-16 h-16 rounded-full overflow-hidden relative'>
         <Image
          src={topic.img}
          alt={topic.title}
          fill={true}
        sizes='min-width(768px),80vw,100vw'
        className='object-cover'
        />
       </div>
        <h3 className="text-xl font-semibold text-white cursor-pointer"><Link href={`/forums/${topic.slug}`}>
        {topic.title}
        </Link></h3>
        <p className="text-white/70 mt-2">{topic.desc}</p>
      </div>
    ))}
  </div>

  
    
</main>


  )
}

export default page