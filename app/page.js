import LikeButton from './like-button';


function Header({ title }) {
    return <h1>{title ? title: 'Default Title'}</h1>; // Using ternary operators. This allows for more flexibility s it accounts for when a title is not passed as well
    }

export default function HomePage() {
    const names = ['Jane Wanjiku', 'John Kamau', 'Peter Otieno']
    
    
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

           <LikeButton />
        </div>
    );
}
        