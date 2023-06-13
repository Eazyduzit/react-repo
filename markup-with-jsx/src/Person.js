const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: "skyblue",
        color: "white"
    }
}

export default function Person(){
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todos..</h1>
            <img 
              className="avatar"
              src="https://i.imgur.com/7vQD0fPs.jpg"
              alt="Gregorio"
            />
            <ol>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ol>
        </div>
    )
}