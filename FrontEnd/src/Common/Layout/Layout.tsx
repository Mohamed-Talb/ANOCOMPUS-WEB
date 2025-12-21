import MainMenu from '../../Gobalshared/MainMenu/Mainmenu'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <MainMenu />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
