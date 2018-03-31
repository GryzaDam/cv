import * as React from "react";
import { NavButton } from "./NavButton";

export class Nav extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div>Adam Gryz</div>
                    <img src="https://scontent-ort2-1.cdninstagram.com/vp/7b1a35efdf06b9bccbc3c4bbd95b562d/5B47CCD1/t51.2885-19/10903418_1613024832259468_1284124279_a.jpg" />
                </div>
                <div>
                    <div>GitHub</div>
                    <div>LinkedIn</div>
                    <div>Pobierz CV</div>
                </div>
                <div>
                    <NavButton text="Umiejętności" />
                    <NavButton text="Projekty" />
                    <NavButton text="Doświadczenie" />
                    <NavButton text="Edukacja" />
                </div>
            </div>
        );
    }
}