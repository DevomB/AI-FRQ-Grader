import React from 'react';
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

    return (
        <main
            style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
            dangerouslySetInnerHTML={{ __html: getHTMLFromMarkdown(responseAsString) }}
        />
    );
};

export default ResultPage;