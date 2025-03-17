export const About = () => {

    const frontendSkills = [
        "React", 
        "Typescript", 
        "TailswindCSS",
        "React",
        "Typescript",
        "TailswindCSS",
    ];

    const backendSkills = [
        "Node.js", 
        "Python",
        "Node.js", 
        "Python",
        "Node.js",
        "Python",
    ];

    return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6 text-justify">
                   I am currently a college student pursuing a Bachelor of Science in Computer Science. Alongside my studies, I am passionate about photography and graphic design, using my creativity to capture and create compelling visuals. My skills in both tech and art allow me to approach projects with a unique and innovative perspective.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div> 
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div> 
                    </div>      
                </div>
            </div>

{/* text-justify */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                        <li>
                            <strong>Bachelor of Computer Science</strong> - Filamer Christian University (2021 - 2026)
                        </li>
                        <li>
                            <strong>High School</strong> - Filamer Christian University (2016 - 2020)
                        </li>
                        <li>
                            <strong>Elementary</strong> - Filamer Christian University (2009 - 2016)
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
                    <div className="space-y-4 text-gray-300 text-justify">
                        <div>
                            <h4 className="font-semibold">FCU CCS FITC Organization</h4>
                            <p className="">Documented various events at FCU, capturing memorable moments through photography and creating engaging promotional materials. Managed the organization’s online presence by sharing event highlights and updates on social media.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Student Organizations</h4>
                            <p className="">Active member of the Filamerian Information Technology Circle (FIT-C), focusing on photography. I documented various events, capturing memorable moments through photography and managing the organization’s online presence by sharing event highlights and updates on social media.</p>
                        </div>


                    </div>
                </div>


            </div>
        </div>
    </section>
    );
};

// **FCU CCS FITC Organization:** Documented various events at FCU, capturing memorable moments through photography and creating engaging promotional materials. Managed the organization’s online presence by sharing event highlights and updates on social media.  xcvbxvbxv