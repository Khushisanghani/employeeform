// learning...........

import { useState } from "react"

let filterout = Search.filter((employee) => {
    return employee.name.toLowerCase().includes(employee)
}
)





const [sort,setsort] = useState('asc');


const sorting = (col) =>{
    if(sort === 'asc'){
        const sorted = [...employee].sort((a,b)=> a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
        setemployee(sorted);
    setsort('desc')
    }
    


    if(sort === 'desc'){
        const sorted = [...employee].sort((a,b)=> a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
        setemployee(sorted);
    setsort('asc')
    }
    setemployee(sorted);
    setsort('asc')
}
