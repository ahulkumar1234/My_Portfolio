import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Education">
            <div className="w-full border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/kolhan.logo.png"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-6.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Bachelor of Science in Physics
                            </h3>
                            <div>Kolhan University, Chaibasa</div>
                        </div>
                    </div>
                    <div>Sep 2019 - May 2022</div>
                </div>
                <p className="mt-6 text-gray-500">A significant part of the education involves practical experience through labs and projects, which are designed to enhance problem-solving skills</p>
            </div>

              <div className="w-full border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                            <img
                                src="/assets/JGI-logo.png"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-6.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800">
                                Masters of computer Application
                            </h3>
                            <div>Arka Jain University </div>
                        </div>
                    </div>
                    <div>May 2024 - Present</div>
                </div>
                <p className="mt-6 text-gray-500">Currently pursuing MCA with a focus on programming, software development, and practical project-based learning.</p>
            </div>
        </Section>
    );
}