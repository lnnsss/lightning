import s from "./../Header.module.css";

export const HeaderLogo = () => {
    return (
        <Link href="/" className={s.header_logo}>
            &#9733;-&#9733;
        </Link>
    );
}
