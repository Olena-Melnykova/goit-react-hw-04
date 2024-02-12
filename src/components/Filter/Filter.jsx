// import { Component } from "react";
// import { nanoid } from "nanoid";
// import {Input, Label, FormStyled} from '../Form/Form.styled'


// export default class Filter extends Component {
//     filterId = nanoid();

//     render() {
//         const {value, onChange} = this.props;
//         return (
//             <FormStyled>
//             <Label htmlFor="">
//                 Find contacts by name:
//             </Label>
//                 <Input
//                     id={this.filterId}   
//                     type="text"
//                     name="filter"
//                     value={value}
//                     onChange={onChange}
//                     />
//             </FormStyled>
//         )
//     }
// }

import { Component } from "react";
import { nanoid } from "nanoid";
import {Input, Label, FormStyled} from '../Form/Form.styled'

export default class Filter extends Component {
    filterId = nanoid(); 

    render() {
        const {value, onChange} = this.props;
        return (
            <FormStyled>
                <Label htmlFor={this.filterId}> 
                    Find contacts by name:
                </Label>
                <Input
                    id={this.filterId} 
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                />
            </FormStyled>
        )
    }
}