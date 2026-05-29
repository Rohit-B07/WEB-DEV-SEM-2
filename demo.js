function Studentlist(){
    const students = ["Rahul","Amit","Neha"]
    return(
        <ul>
            {students.map((s,index)=>(
                <li key ={index}>
                    {s}
                </li>
            ))}
        </ul>
    )
}