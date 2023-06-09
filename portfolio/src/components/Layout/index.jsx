import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.scss';
import NavBarTest from '../NavarTest';

const Layout = () => {
    return (
        <div className='App'>
            <NavBarTest/>
            <div className='page'>

                <span className='tags top-tags'>&lt;body&gt;</span>

                <Outlet/>

                <span className='tags bottom-tags'>&lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>

            </div>

        </div>
    )
}

export default Layout