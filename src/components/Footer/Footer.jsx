import style from './Footer.module.scss';

export function Footer() {

    return (
        <div className={style.footerStyle}>
            <div>
                <p>Adresse:</p>
                <p>Intet nyt er godt nyt ApS</p>
                <p>Kattevej 199</p>
                <p>9876</p>
                <p>Øster axolot</p>
            </div>
            <div>
                <p>Links:</p>
                <p>vikanweb.dk</p>
                <p>overpådenandenside.dk</p>
                <p>retsinformation.dk</p>
                <p>nogetmednews.dk</p>
            </div>
            <div>
                <p>Politik:</p>
                <p>Privatslivsploitik</p>
                <p>Cookiepolitik</p>
                <p>Købsinformation</p>
                <p>Delingspolitik</p>
            </div>
        </div>
    )
}