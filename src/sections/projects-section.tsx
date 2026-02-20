import { Link } from "react-router-dom";
// import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "E-Shop",
            description: "E-commerce web app",
            image: "/assets/e-shop.jpeg",
            github: "https://github.com/ahulkumar1234/Scatch_Frontend",
            href: "https://scatch-frontend-chi.vercel.app",
            tech: ["MERN", "Tailwind CSS"],
            type: "Full Stack",
        },
        {
            title: "Code Reviewer",
            description: "AI-powered code review tool",
            image: "/assets/code-review.png",
            github: "https://github.com/ahulkumar1234/CodeSage-Frontend",
            href: "https://code-sage-frontend-two.vercel.app",
            tech: ["MERN", "Tailwind CSS", "Gemini API"],
            type: "Full Stack",
        },
        {
            title: "AI Job Tracker",
            description: "AI-powered Job tracker",
            image: "/assets/img.png",
            github: "https://github.com/ahulkumar1234/AI-Job-Tracker?tab=readme-ov-file",
            href: "https://ai-job-tracker-gilt.vercel.app",
            tech: ["MERN", "Gemini API", "LangChain"],
            type: "Full Stack",
        },
        {
            title: "E-Notes",
            description: "Note-taking web app",
            image: "/assets/note-app.png",
            github: "https://github.com/ahulkumar1234/PocketNotes-Cuvette-React",
            href: "https://pocket-notes-cuvette-react.vercel.app",
            tech: ["React", "Tailwind CSS"],
            type: "Frontend",
        },
    ];

    return (

        <section className="flex flex-col md:flex-col items-center justify-center md:items-start gap-8 w-full max-w-5xl mx-auto mt-28">
            <p className="text-xl text-center md:text-lg font-medium pt-3 w-full md:max-w-42">Projects</p>
            <div className="flex flex-wrap justify-center items-center gap-4 m-auto">
                {projects.map((project) => (
                    <div key={project.title} className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl">
                        <img
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />
                        <div className="p-4">
                            <h3 className="text-base font-medium">
                                {project.title}
                                <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs rounded-full px-2 py-1">
                                    {project.type}
                                </span>
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {project.description}
                            </p>
                            <div className="tech flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="links flex justify-start p-4 gap-3">
                            <Link
                                to={project.href}
                                target="blank"
                                className="bg-indigo-500 py-1 px-2 text-white hover:bg-indigo-600 rounded transition-all ease-in-out duration-150 text-sm"
                            >
                                Live Demo
                            </Link>

                            <Link
                                to={project.github}
                                target="blank"
                                className="bg-gray-800 py-1 px-2 text-white hover:bg-gray-600 rounded transition-all ease-in-out duration-150 text-sm"
                            >
                                Code
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}