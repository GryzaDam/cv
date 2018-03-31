import * as React from "react";
import { Bio } from "./Bio";
import { Nav } from "./Nav";

export class FrontPage extends React.Component {

    render() {
        return (
            <div>
                <Nav />
                <Bio />
            </div>
        );
    }
}