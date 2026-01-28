import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
           image: "/assets/selfemp_logo.jpg",
            title: "Freelance Web Developer",
            company: "Self-Employed",
            location: "Remote",
            start: "April 2025",
            end: "May 2025",
            description: [
                "Designed and developed responsive websites using HTML, CSS, and JavaScript.",
                "Delivered client-focused projects including portfolio and business websites with high usability and performance.",
            ],
        },
        {
            image: "/assets/icici.png",
            title: "Business Development Manager",
            company: "ICICI Bank",
            location: "JAMSHEDPUR",
            start: "Dec 2023",
            end: "May 2024",
            description: [
                "Drove sales growth by acquiring new clients, managing customer relationships, and achieving business targets.",
                "Conducted client meetings, product presentations, and cross-selling while ensuring high customer satisfaction.",
            ],
        },

        {
            image: "/assets/streamDigital.jpg",
            title: "VSR",
            company: "Stream Digital Services",
            location: "Remote",
            start: "Aug 2021",
            end: "Aug 2023",
            description: [
                "Managed digital campaigns and online promotions to improve brand visibility and lead generation.",
                "Worked on social media, content optimization, and performance tracking to achieve marketing goals.",
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={35}
                                        height={35}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}