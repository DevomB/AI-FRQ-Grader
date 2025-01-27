import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { marked } from "marked";

const getHTMLFromMarkdown = (markdown) => {
    if (!markdown) {
        return "<p>No content available</p>";
    }
    return marked(markdown);
};

const ResultPage = () => {
    const router = useRouter();
    const { response } = router.query; // Access the response query parameter
    const responseAsString = Array.isArray(response) ? response[0] : response;

    const [characters, setCharacters] = useState([]);

    // Break text into characters (including spaces)
    useEffect(() => {
        const text = "Design In Development";
        setCharacters(text.split(""));
    }, []);

    return (
        <div className="bg-gray-700 min-h-screen flex flex-col justify-between text-white">
            {/* Content Section */}
            <div>
                <h1 className="text-9xl font-serif font-bold pb-6 bg-gradient-to-r from-yellow-600 to-purple-600 text-transparent bg-clip-text drop-shadow-lg transition transform hover:scale-105 text-center">
                    Results Page
                </h1>
                <div
                    style={{ paddingLeft: "10px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
                    dangerouslySetInnerHTML={{ __html: getHTMLFromMarkdown(responseAsString) }}
                ></div>
            </div>

            {/* Animated Bottom Bar */}
            <div className="ticker-wrapper">
                <div className="ticker">
                    {characters.map((char, index) => (
                        <span
                            key={index}
                            className="ticker-char"
                            style={{ animationDelay: `${index * 0.2}s` }} // Stagger animation
                        >
                            {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .ticker-wrapper {
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    background: linear-gradient(to right, #007bff, #6a0dad);
                    color: white;
                    font-size: 2rem;
                    font-weight: bold;
                    overflow: hidden;
                    height: 3rem;
                }

                .ticker {
                    display: flex;
                    white-space: nowrap;
                    animation: scroll 20s linear infinite; /* Move the whole ticker */
                }

                /* Move the entire ticker from right to left */
                @keyframes scroll {
                    from {
                        transform: translateX(100%);
                    }
                    to {
                        transform: translateX(-100%);
                    }
                }

                /* Fade out letters one by one */
                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default ResultPage;
