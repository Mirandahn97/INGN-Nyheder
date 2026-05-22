import style from './Nav.module.scss'
import user from '../../assets/user.svg'
import bars from '../../assets/bars.svg'
import { NavLink } from "react-router"

export function Nav() {

    function toggleModal() {
        const modalDiv = document.getElementById('navModal')
        modalDiv.classList.toggle(style.modalHidden)
    }

    return (
        <>
            <nav className={style.navStyle}>
                <h4> <NavLink to={'/'} >INGN</NavLink></h4>
                <ul>
                    <span>|</span>
                    <li>
                        {/*/kategorier/...' føre hen til den ønskede side  */}
                        <NavLink to='/kategorier/teknologi'>TEKNOLOGI</NavLink>
                    </li>
                    <span>|</span>
                    <li>
                        <NavLink to='/kategorier/sport'>SPORT</NavLink>
                    </li>
                    <span>|</span>
                    <li>
                        <NavLink to='/kategorier/kultur'>KULTUR</NavLink>
                    </li>
                    <span>|</span>
                    <li>
                        <NavLink to='/kategorier/sundhed'>SUNDHED</NavLink>
                    </li>
                    <span>|</span>
                    <li>
                        <NavLink to='/kategorier/økonomi'>ØKONOMI</NavLink>
                    </li>
                    <span>|</span>
                    <li>
                        <NavLink to='/kategorier/rejser'>REJSER</NavLink>
                    </li>
                    <span>|</span>
                    <li>
                        <NavLink to='/kategorier/uddannelse'>UDDANNELSE</NavLink>
                    </li>
                    <span>|</span>
                </ul>
                <div>
                    <img src={user} alt="" />
                    <img onClick={toggleModal} src={bars} alt="" />
                </div>

                <div onClick={toggleModal} id='navModal' className={`${style.navModal} ${style.modalHidden}`}>
                    <ul onClick={(e) => e.stopPropagation()}>
                        <li>
                            <NavLink onClick={toggleModal} to='/kategorier/teknologi'>TEKNOLOGI</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleModal} to='/kategorier/sport'>SPORT</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleModal} to='/kategorier/kultur'>KULTUR</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleModal} to='/kategorier/sundhed'>SUNDHED</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleModal} to='/kategorier/økonomi'>ØKONOMI</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleModal} to='/kategorier/rejser'>REJSER</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={toggleModal} to='/kategorier/uddannelse'>UDDANNELSER</NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}