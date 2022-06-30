// rcc
import React, { Component } from 'react';

class RefInput extends Component {
    // ref생성
    abc = React.createRef();
    handleFocus = () => {
        this.abc.current.focus();
        console.log(this.abc.current.value);
    }
    render() {
        return (
            <div>
                <input ref={this.abc} onChange = {this.handleFocus}/>
            </div>
        );
    }
}

export default RefInput;