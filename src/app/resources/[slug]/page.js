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
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/17zDonKyg0KGQ1YjCKMSX52FlxXXC2OSj">https://drive.google.com/drive/folders/17zDonKyg0KGQ1YjCKMSX52FlxXXC2OSj</a></span></dd>
                    <dt className="font-bold">Physics for class 12th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1O_dMw-pZsJ74kk2l_WmdtAzLGgt7JjSA">https://drive.google.com/drive/folders/1O_dMw-pZsJ74kk2l_WmdtAzLGgt7JjSA</a></span></dd>
                </dl>
            </>
        }
        {
            slug==="samplepapers" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Sample Papers</h1>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Case Study based Question for Maths</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">Case Study based Question for Science</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">Class 10th English Question Bank</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">English Language and Literature Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">Hindi Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">Information Technology Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">Mathematics Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">Science Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>
                    <dt className="font-bold">Social Science Sample Papers</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy">https://drive.google.com/drive/folders/1HBbNQSfvEuINWPZEEbReVkLHzcV56hYy</a></span></dd>

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
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/17iLsWprlwvcBNoeyYAhqT6nuE4R_NyyM">https://drive.google.com/drive/folders/17iLsWprlwvcBNoeyYAhqT6nuE4R_NyyM</a></span></dd>
                    
                    <dt className="font-bold">Class 7th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1OeOWu44FddEz1LoJU6bRzW_VlTFGAlmw">https://drive.google.com/drive/folders/1OeOWu44FddEz1LoJU6bRzW_VlTFGAlmw</a></span></dd>
                    
                    <dt className="font-bold">Class 8th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1A0jp4I46CzMZTZGuIHLCUySunhtJItMP">https://drive.google.com/drive/folders/1A0jp4I46CzMZTZGuIHLCUySunhtJItMP</a></span></dd>
                    
                    <dt className="font-bold">Class 9th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1Eyr3K-69Of7wet_DZLDU78qFlTB0ZAqA">https://drive.google.com/drive/folders/1Eyr3K-69Of7wet_DZLDU78qFlTB0ZAqA</a></span></dd>
                    
                    <dt className="font-bold">Class 10th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1MMcPQb_wKHZXLotult1QB6On1WGqLKzx">https://drive.google.com/drive/folders/1MMcPQb_wKHZXLotult1QB6On1WGqLKzx</a></span></dd>
                </dl>
            </>
        }
        {
            slug==="notesandformulas" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Notes and Formulas Sheet</h1>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Physics formula Sheet</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1Ft-VLtXixaWoo7JCV4H57HSCMHKZ3INo">https://drive.google.com/drive/folders/1Ft-VLtXixaWoo7JCV4H57HSCMHKZ3INo</a></span></dd>
                </dl>

                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Trigonometry formula sheet</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1Ft-VLtXixaWoo7JCV4H57HSCMHKZ3INo">https://drive.google.com/drive/folders/1Ft-VLtXixaWoo7JCV4H57HSCMHKZ3INo</a></span></dd>
                </dl>
            </>
        }
        {
            slug==="assignments" && 
            <>
                <h1 className="text-center text-3xl font-extrabold m-5 font-[poppins]">Assignments and Worksheet</h1>
                <p className="ml-10 text-2xl font-medium m-5 font-[poppins]">Biology, Chemistry, Physics for class 10th</p>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Class 10th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1DFGkR3zfnAvA8qCUaBEN1TTSe0-7-uhI">https://drive.google.com/drive/folders/1DFGkR3zfnAvA8qCUaBEN1TTSe0-7-uhI</a></span></dd>
                </dl>

                <p className="ml-10 text-2xl font-medium m-5 font-[poppins]">Laws of Motion Momentum for Class 11th</p>
                <dl className="m-10 font-[poppins] text-lg leading-8">
                    <dt className="font-bold">Class 11th</dt>
                    <dd>&nbsp;&nbsp;&nbsp;&nbsp;<span>Click here 👉 </span><span><a className="text-blue-800" href="https://drive.google.com/drive/folders/1eamJVqKdfPD7lHQn8CIZpNXdLd-Tejxh">https://drive.google.com/drive/folders/1eamJVqKdfPD7lHQn8CIZpNXdLd-Tejxh</a></span></dd>
                </dl>
            </>
        }
        
    </div>
  );
}