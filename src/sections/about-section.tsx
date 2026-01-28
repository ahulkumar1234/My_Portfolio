import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5 text-center md:text-left">
                <p>
                    I am a MERN Stack Developer focused on building scalable, high-performance web applications using MongoDB, Express.js, React, and Node.js. I enjoy developing clean architectures, writing maintainable code, and delivering seamless user experiences from frontend to backend.
                </p>
                <p className="mt-5">
                    I also bring prior corporate experience in business development and sales roles, which has strengthened my understanding of real-world business requirements, client communication, and project delivery. This combination allows me to build technically sound solutions that align with business goals.
                </p>

            </div>
        </Section>
    );
}