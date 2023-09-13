import { LogOutButton, Logo } from "../components/Icons"


const Navbar = () => {
    return (
        <div >
            <header>
                <nav className='fixed top-0 w-full h-[50px] shadow-inner bg-primary' style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                    <div className="absolute top-[10px] left-[30px]">
                        <a href='/home' className="cursor-pointer">
                            <Logo className="w-11 h-[30px] fill-primary" />
                        </a>
                    </div>
                    <div className="absolute top-3 xs:left-[305px] right-2">
                        <a href="/login" className="cursor-pointer">
                            <LogOutButton className="w-[25px] h-[26px] fill-primary" />
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
