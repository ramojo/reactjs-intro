import { useState } from 'react';


function Header ({ title }) {
    return <h1>{title ? title: 'Default Title'}</h1>; // Using ternary operators. This allows for more flexibility s it accounts for when a title is not passed as well
    }

export default function HomePage() {
    const [likes, setLikes] = useState(0);
    const names = ['Jane Wanjiku', 'John Kamau', 'Peter Otieno']
    
    function handleClick() {
            setLikes(likes + 1)
            console.log('Increment when clicked')
    }
    return (
        <div>
            <Header title = "ReactJS Introduction" /> 
            <Header title='Interesting!' />
            <Header />
            <ul>
                {               
                    names.map(name => <li key={name}>{name}</li>)
                }
            </ul>

            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
        