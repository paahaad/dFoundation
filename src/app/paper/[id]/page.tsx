import React from "react";

function page({ params: { id } }: { params: { id: string } }) {
  console.log(`/pdfjs/web/viewer.html?file=/papers/.pdf`, id);
  return (
    <div className="flex justify-around gap-0 h-[91vh]">
      <div className="w-[64%] border">
        <iframe
          src={`/pdfjs/web/viewer.html?file=/papers/${id}.pdf`}
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="w-1/4 border"></div>
    </div>
  );
}

export default page;
