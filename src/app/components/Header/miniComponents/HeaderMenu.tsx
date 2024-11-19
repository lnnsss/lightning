import s from "./../Header.module.css";

export const HeaderMenu = ({ children }) => {
    return (
        <nav className={`${s.header_menu} ${burgerActive && s.active}`}>
            <ul className={s.header_list}>
                <HeaderLink href="/catalog">Каталог</HeaderLink>
                <HeaderLink href="/reviews">Отзывы</HeaderLink>
                <HeaderLink href="/about">О нас</HeaderLink>
            </ul>
        </nav>
    );
}

const HeaderLink = ({href, children}) => {
    return (
        <li>
            <Link href={href} className={s.header_link}>
                {children}
            </Link>
        </li>
    );
}