import React from 'react';

const LearningPage = () => {
    return (
    <div className="bg-[#f9f9fa] min-h-screen p-8">
        <h1 className="text-blue-600 text-4xl font-bold mb-8">LEARNING</h1>

        <div className="flex flex-col lg:flex-row items-start">
        {/* Left Section: Learning Info */}
        <div className="lg:w-2/3 pr-8">
            <h2 className="text-3xl font-bold mb-6">
            Start your journey to learn <span className="text-green-600">Kenyan Sign Language</span>
            </h2>

            <p className="mb-6">
            Dive into an immersive learning experience with <strong>SignBonga</strong>. Our platform is designed to help you learn 
            at your own pace. Whether you're a beginner or looking to polish your skills, we offer structured lessons that are easy 
            to follow and understand. From basic hand signs to advanced communication techniques, 
            we cover it all.
            </p>

            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Course Modules</h3>
                <ul className="list-disc ml-6">
                <li className="mb-2">Basic Hand Signs</li>
                <li className="mb-2">Common Phrases</li>
                <li className="mb-2">Everyday Conversations</li>
                <li className="mb-2">Advanced Techniques</li>
                <li>Custom Learning Paths for Tutors and Learners</li>
                </ul>
            </div>

            <p className="mb-6">
                Each module is designed with interactivity in mind, featuring quizzes, real-life examples, and video tutorials. 
                Track your progress and receive feedback in real-time, helping you stay motivated and focused on your learning.
            </p>
            </div>

            {/* Right Section: Images */}
            <div className="lg:w-1/3 flex justify-end">
            <img src="./KesignLang.jpeg" alt="Kenya Sign" className="lg:w-64 w-1/3 h-auto mb-6" />
            <img src="./learn.jpeg" alt="learning-signs" className="lg:w-64 w-1/3 h-auto mb-6" />
            </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to start learning?</h3>
            <p className="mb-6">
            Sign up today and join thousands of learners on a journey to better communication.
            </p>
            <a href="/sign-up" className="bg-green-700 text-white px-6 py-2 rounded-full transition-transform duration-300 transform hover:-translate-y-2">
            Get Started
            </a>
        </div>
        </div>
    );
    };

    export default LearningPage;
