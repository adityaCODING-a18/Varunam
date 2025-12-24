import Navbar from "@/app/Component/Navbar";

export default async function Page({ params }) {
  const { slug } = await params;
  return (
    <div id="main-container" className="bg-[#D4FFFD] w-screen h-screen overflow-x-hidden m-0 p-0 text-black">
        <Navbar />
        {
            slug==="previousyearquestions" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Previous Year Questions</h1>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Science and Maths for class 10th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1zcFkvVzXwyDkskNuw1syVhPCAA3tQds1">https://drive.google.com/drive/folders/1zcFkvVzXwyDkskNuw1syVhPCAA3tQds1</a></span></dd>
                    <dt className="font-bold">Physics for class 12th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1nlhT8PLSmNw4KyDifsU2giH0MyKfsJB1">https://drive.google.com/drive/folders/1nlhT8PLSmNw4KyDifsU2giH0MyKfsJB1</a></span></dd>
                </dl>
            </>
        }
        {
            slug==="samplepapers" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Sample Papers</h1>
            </>
        }
        {
            slug==="studynotes" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Study Notes</h1>
            </>
        }
        {
            slug==="notesandformulas" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Notes and Formulas Sheet</h1>
            </>
        }
        {
            slug==="assignments" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Assignments and Worksheet</h1>
            </>
        }
        
    </div>
  );
}