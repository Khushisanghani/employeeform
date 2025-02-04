import { useEffect, useState } from "react";
import { z } from "zod";
const mySchema = z.string().min(5, { message: "Must be 5 or more characters long" });
function Form() {
    // creating a schema for strings
    const [name, setname] = useState('');

    const validate = () => {
        try {
            const fnm = mySchema.parse(name);
            console.log(fnm);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        validate();
    }, [])


    return (
        <>
            <form>
                <label>Name :</label>
                <input type="text" onChange={(e)=>setname(e.target.value)}/>
                <span>{mySchema.message.error}</span>
                <input type="submit" value="submit"/>
            </form>
        </>
    )
}
export default Form;