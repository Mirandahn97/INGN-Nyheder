import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { client } from "../../utils/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import style from './Card.module.scss'
import { useParams } from "react-router";

export function Card() {
    const [nyhedsData, setNyhedsData] = useState()


    // her bruger jeg useParams, som henter data fra URL'en
    const category = useParams()

    //Fetcher data fra contentfull og sorterer efter category hvis der er en, ellers sætter den bare dataen til det den henter. 
    //toLowerCase gør så den ikke er case sencetive
    //Hjælp fra Frederik!!!
    useEffect(() => {
        client
            .getEntries({ content_type: 'ingnNyheder' })
            .then((response) => {
                if (category.category) {
                    response.items && setNyhedsData(response.items.filter((article) => article.fields.kategori.toLowerCase() === category.category));
                } else {
                    setNyhedsData(response.items)
                }
            })
            .catch((err) => console.log(err))

            // Rerenderer hvis category updateres/ændres
    }, [category])



    console.log(category.category)



    console.log(nyhedsData)
    // console.log(nyhedsData && nyhedsData[0].fields.overskrift.content[0].content[0].value);


    return (
        <div className={style.container}>
            {nyhedsData && nyhedsData.map((element, index) => {
                const date = new Date(element.fields.dato)
                const textTeaser = element.fields.brdtext.substring(0, 100) + '...';
                return (
                    <div className={style[`item-${index}`]}>
                        <div>
                        <div className={style.overskrift}>{documentToReactComponents(element.fields.overskrift)}</div>
                        <p className={style.brødText}>{textTeaser}</p>
                        <div className={style.felxDiv}>
                            <p className={style.dato}>{date.toLocaleDateString("da-DK")}</p>
                            <p className={style.skrevetAf}>{element.fields.skrevetAf}</p>
                        </div>
                        <NavLink state={{ from: element }} to={`/nyheder/${element.sys.id}`}>Læs mere</NavLink>
                        </div>
                        <div className={style.imgWrapper}>
                        <img className={style.billede} src={element.fields.billede.fields.file.url}></img>
                    </div>
                    </div>

                )
            })
            }
        </div>
    )
}