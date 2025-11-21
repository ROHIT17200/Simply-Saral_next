import axios from "axios";

export default function Page(){
    const getData=async()=>{
        const Fdata=await axios.get("http://localhost:3000/schemes/secondary_education/api");
        console.log(Fdata.data);
    }

    return(
        <>
            {getData()}
            <h1>Secondary Education Schemes </h1>
        </>
        
    )
}