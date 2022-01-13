import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <main className='contact'>
            <Link to='/portfolio'><button className='home-btn'>Portfolio</button></Link>
            <header className='contact-header'>Contact</header>
            <a href='https://www.linkedin.com/in/taylor-williams-a0683795/' alt='Linkedin profile'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' width='50' alt='Linkedin Icon' />
            </a>
            <a href='https://github.com/TaylorWill94' alt='GitHub profile'>
            <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' width='50' alt='GitHub' />
            </a>
        </main>
    )
}

export default Contact