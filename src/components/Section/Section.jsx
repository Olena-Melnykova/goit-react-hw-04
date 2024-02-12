import { Component } from "react";
import PropTypes from "prop-types";
import { Title } from "./Section.styled";

export default class Section extends Component {
    render() {
        const {title, children} = this.props;
        return (
            <div>
                <Title>
                    {title}
                </Title>
                {children}
            </div>
        )
    }
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
}