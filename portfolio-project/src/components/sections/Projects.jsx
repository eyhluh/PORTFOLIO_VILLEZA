import {RevealOnScroll} from "../RevealOnScroll"

export const Projects = () => {

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">PROJECTS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* 1 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-justify"> 
                        <h3 className="text-xl-bold mb-2">Cload Platform</h3>
                        <p className="text-gray-400 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique ab. Eveniet placeat totam doloremque adipisci, eligendi unde neque, consectetur, accusamus voluptates earum incidunt ipsa sed ex aliquid esse. Quis!</p>
                        <div className="flex flex-wrap gap-2 bb-4">
                            {["React", "Node.js"].map((tech, key)=> (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,246,0.1)] transition-all ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
{/* 1 */}

{/* 2 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-justify"> 
                        <h3 className="text-xl-bold mb-2">Cload Platform</h3>
                        <p className="text-gray-400 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique ab. Eveniet placeat totam doloremque adipisci, eligendi unde neque, consectetur, accusamus voluptates earum incidunt ipsa sed ex aliquid esse. Quis!</p>
                        <div className="flex flex-wrap gap-2 bb-4">
                            {["React", "Node.js"].map((tech, key)=> (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,246,0.1)] transition-all ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
{/* 2 */}

{/* 3 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-justify"> 
                        <h3 className="text-xl-bold mb-2">Cload Platform</h3>
                        <p className="text-gray-400 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique ab. Eveniet placeat totam doloremque adipisci, eligendi unde neque, consectetur, accusamus voluptates earum incidunt ipsa sed ex aliquid esse. Quis!</p>
                        <div className="flex flex-wrap gap-2 bb-4">
                            {["React", "Node.js"].map((tech, key)=> (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,246,0.1)] transition-all ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
{/* 3 */}

{/* 4 */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-justify"> 
                        <h3 className="text-xl-bold mb-2">Cload Platform</h3>
                        <p className="text-gray-400 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique ab. Eveniet placeat totam doloremque adipisci, eligendi unde neque, consectetur, accusamus voluptates earum incidunt ipsa sed ex aliquid esse. Quis!</p>
                        <div className="flex flex-wrap gap-2 bb-4">
                            {["React", "Node.js"].map((tech, key)=> (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,246,0.1)] transition-all ">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center ">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
{/* 4 */}
                </div>
            </div>

        </RevealOnScroll>
        </section>
        
    );
}