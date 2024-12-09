const user= {
    name: 'ehmuedah',
    age: 26,
    sem: 'Fullstack Developer(sem-2)'
}

function EhmueProfile(){
    return(
        <>
            <h1>{"My name is "+user.name}</h1>
            <p>{"Age is "+user.age}</p>
            <p>{"Current class is "+user.sem}</p>
        </>
    )
}
export default EhmueProfile