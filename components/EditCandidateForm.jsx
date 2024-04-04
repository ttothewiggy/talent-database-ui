export default function EditCandidateForm() 
{
    return <form className="flex flex-col gap-3" action="">
    <input 
    type="text"
    className="border border-slate-500 px-8 py-2"
    placeholder="Candidate Name" />

    <input 
    type="text"
    className="border border-slate-500 px-8 py-2"
    placeholder="Candidate Title" />

    <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Edit Candidate</button>
    </form>
}