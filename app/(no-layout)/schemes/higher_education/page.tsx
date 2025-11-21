import axios from "axios";

export default function Page(){
    const getData=async()=>{
        const Fdata=await axios.get("http://localhost:3000/schemes/higher_education/api");
        console.log(Fdata.data);
    }

    return(
        <>
            {getData()}
            <h1>higher Education Schemes </h1>
        </>
        
    )
}