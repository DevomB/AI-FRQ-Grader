{/* File Upload 1 */}
<div>
<div
    className="flex flex-col justify-center items-center border-2 border-dashed border-blue-900 rounded-lg p-6 bg-blue-100 hover:bg-blue-50 transition shadow-sm relative"
>
    <input
        type="file"
        id="fileUpload1"
        className="absolute opacity-0 w-full h-full cursor-pointer"
    />
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-700 hover:scale-110 transition"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10l9-9m0 0l9 9m-9-9v16"
        />
    </svg>
    <p className="mt-2 text-blue-900 font-bold text-lg">Upload DBQ Documents</p>
    <p className="mt-1 text-gray-500 text-sm">Supports PDF, DOCX, TXT</p>
</div>
</div>

{/* File Upload 2 */}
<div>
<div
    className="flex flex-col justify-center items-center border-2 border-dashed border-yellow-700 rounded-lg p-6 bg-yellow-50 hover:bg-white transition shadow-sm relative"
>
    <input
        type="file"
        id="fileUpload2"
        className="absolute opacity-0 w-full h-full cursor-pointer"
    />
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-600 hover:scale-110 transition"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10l9-9m0 0l9 9m-9-9v16"
        />
    </svg>
    <p className="mt-2 text-yellow-700 font-bold text-lg">Upload Your Response</p>
    <p className="mt-1 text-gray-500 text-sm">Supports PDF, DOCX, TXT</p>
</div>
</div>
