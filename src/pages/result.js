import React from 'react';
import { useRouter } from 'next/router';

const ResultPage = () => {
    const router = useRouter();
    const { response } = router.query; // Access the response query parameter

    return (
        <div className="flex flex-col items-center bg-gradient-to-br from-white to-purple-100 min-h-screen">
            <h1 className="text-4xl font-bold mt-10">Result Page</h1>
            <p className="mt-4">This is the result page.</p>
            {response && (
                <div className="mt-4 p-4 bg-white rounded shadow">
                    <h2 className="text-2xl font-semibold">Response:</h2>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default ResultPage;