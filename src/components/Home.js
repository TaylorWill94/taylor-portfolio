import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="home">
            Taylor Williams
            <p>Software Engineer</p>
            <Link to='/portfolio'><button className='enter-btn'>Enter</button></Link>
        </main>
    )
}

export default Home