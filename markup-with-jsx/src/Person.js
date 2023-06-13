const baseUrl = "https://i.imgur.com/"
const person = {
    name: "Gregorio Y. Zara",
    imageId: "7vQD0fP",
    imageSize: "s",
    // imageFile: ".jpg",
    theme: {
        backgroundColor: "skyblue",
        color: "white",
        border: "1px solid black"
    }
}

export default function Person(){
    return(
        <div style={person.theme}>
            <h1>{person.name}'s Todos..</h1>
            <img 
              className="avatar"
              src={baseUrl + person.imageId + person.imageSize + ".jpg"}
              alt={person.name}
            />
            <ol>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ol>
        </div>
    )
}