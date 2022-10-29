import React from "react"

class Content extends React.Component {

    static get colors() {
        return {
            BLUE_COLOR: "blue",
            GREEN_COLOR: "green",
            WHITE_COLOR: "white",
            BLACK_COLOR: "black"
        }
    }

    change_line_colors(e){
        if (e.target.style.backgroundColor === Content.colors.BLUE_COLOR) {
            e.target.style.color = Content.colors.BLACK_COLOR;
            e.target.style.backgroundColor = Content.colors.GREEN_COLOR;
        } else {
            e.target.style.color = Content.colors.WHITE_COLOR;
            e.target.style.backgroundColor = Content.colors.BLUE_COLOR;
        }
    };

    render() {
        return <div>
            <p>Місце народження: 21 березня 2002 року, м.Володимир.</p>
            <p onClick={(e) => { console.log(e); this.change_line_colors(e) }} >Освіта: ЗОШ №2, м.Володимир;
                <br/><br/>&emsp;&emsp;&emsp;НТУУ "КПІ", м.Київ.
            </p>

            <p onClick={(e) => this.change_line_colors(e)} >Хоббі</p>
            <ul>
                <li>Футбол</li>
                <li>Бокс</li>
                <li>Музика</li>
            </ul>

            <p>Фільми</p>
            <ol>
                <li>Interstellar 2014</li>
                <li>Inception 2010</li>
                <li>Godfather (1972, 1974, 1990)</li>
            </ol>

            <p>
                Володи́мир (у 1944—2021 роках — Володимир-Волинський) — місто в Україні,
                центр Володимир-Волинської міської громади та Володимирського району Волинської області.
                Станом на 1 серпня 2012 року в місті проживає 38,6 тис. осіб.
                Автотраса Н22 сполучає місто з обласним центром — Луцьком і залізниця сполучає з залізничним центром області — Ковелем.
            </p>
        </div>
    };
}
export default Content;