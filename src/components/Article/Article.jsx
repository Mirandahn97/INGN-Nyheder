import style from './Article.module.scss';
import { useLocation } from "react-router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export function Article({ article }) {
    const location = useLocation()
    const { state } = location

    console.log(state.from)

    const date = new Date(state.from.fields.dato)

    return (
        <div className={style.container}>
            <div>
                <div className={style.overskrift}>{documentToReactComponents(state.from.fields.overskrift)}</div>
                <p className={style.brødText}>{state.from.fields.brdtext}</p>
                <div className={style.felxDiv}>
                    <p className={style.dato}>{date.toLocaleDateString("da-DK")}</p>
                    <p className={style.skrevetAf}>{state.from.fields.skrevetAf}</p>
                </div>
                <img className={style.billede} src={state.from.fields.billede.fields.file.url} alt="" />
            </div>
        </div>
    )
}