export const dynamic = 'force-dynamic';
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
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Case Study based Question for Maths</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">Case Study based Question for Science</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">Class 10th English Question Bank</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">English Language and Literature Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">Hindi Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">Information Technology Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">Mathematics Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">Science Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>
                    <dt className="font-bold">Social Science Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox">https://drive.google.com/drive/folders/1xH98_v18bgZpsB3KJ2BCR1PzVa9l_eox</a></span></dd>

                </dl>
            </>
        }
        {
            slug==="studynotes" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Study Notes</h1>
                <p className="ml-10 text-2xl font-medium m-5 font-[poppins]">Biology, Chemistry, Physics and Maths for class 6th to 10th</p>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Class 6th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1UcX_btNVWQWB79cJ-xvpOzfalTvAOwUl">https://drive.google.com/drive/folders/1UcX_btNVWQWB79cJ-xvpOzfalTvAOwUl</a></span></dd>
                    
                    <dt className="font-bold">Class 7th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1XipoP5Iermq0P6l31rUkfSRylmh7jRGg">https://drive.google.com/drive/folders/1XipoP5Iermq0P6l31rUkfSRylmh7jRGg</a></span></dd>
                    
                    <dt className="font-bold">Class 8th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1CKGpP_fU3LtO3IFFCWa6d_45ENTY7y5O">https://drive.google.com/drive/folders/1CKGpP_fU3LtO3IFFCWa6d_45ENTY7y5O</a></span></dd>
                    
                    <dt className="font-bold">Class 9th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1pE9Gydhm7X8P7Rap25FjKd329NNyGcL0">https://drive.google.com/drive/folders/1pE9Gydhm7X8P7Rap25FjKd329NNyGcL0</a></span></dd>
                    
                    <dt className="font-bold">Class 10th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1Z6OechiY4Nzw9y8vvJ7zuV9qcAn-WCsI">https://drive.google.com/drive/folders/1Z6OechiY4Nzw9y8vvJ7zuV9qcAn-WCsI</a></span></dd>
                </dl>
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
                <p className="ml-10 text-2xl font-medium m-5 font-[poppins]">Biology, Chemistry, Physics for class 10th</p>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Class 10th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1JV-u2tDAFZYtZN99LDiLCgKNlNEo_M_-">https://drive.google.com/drive/folders/1JV-u2tDAFZYtZN99LDiLCgKNlNEo_M_-</a></span></dd>
                </dl>

                <p className="ml-10 text-2xl font-medium m-5 font-[poppins]">Laws of Motion Momentum for Class 11th</p>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Class 11th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1N_ORb6JtV7ph7qzgmHzshRzDNC7ufQL3">https://drive.google.com/drive/folders/1N_ORb6JtV7ph7qzgmHzshRzDNC7ufQL3</a></span></dd>
                </dl>
            </>
        }
        
    </div>
  );
}