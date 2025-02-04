// import { z } from "zod";
// const schema = z.object({
//     name: z.string(),
//     age: z.number(),
//     email: z.string().email(),
//   })
  
// function ExZod(){
    
//       const data = {
//         name: 'Bruce Wayne',
//         age: 22,
//         email: 'batman@gotham.com'
//       };
//       try {
//         schema.parse(data)
//         document.write('Data is valid')
//       } catch (error) {
//         document.write('Validation failed:', error)
//       }

//     return(
//         <>
            
//         </>
//     )
// }
// export default ExZod;
import { z } from "zod";

const User = z.object({
  username: z.string(),
});
function ExZod(){
User.parse({ username: 1235 });
}
export default ExZod;

// extract the inferred type
// type User = z.infer<typeof User>;
// { username: string }