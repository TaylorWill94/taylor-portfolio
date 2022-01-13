import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="home">
            Taylor Williams
            <p>Software Engineer</p>
            <Link to='/portfolio'><button>Enter</button></Link>
        </main>
    )
}

export default Home