import React, { Component } from 'react';

class EventInputClass extends Component {
    state = {
        message: '',
        username: '',
    }
    handleChange = (e) => {
        this.setState({
            // message: e.target.value

            [e.target.name]: e.target.value    // input이 여러개일 때 name으로 접근
        })
    }
    handelClick = () => {
        console.log(`메세지는 ${this.state.message}이고 유저네임은 ${this.state.username}입니다.`)
        this.setState({
            message:'',
            username: '',
        })
    }
    // 키를 누르면 실행되는 함수
    handelKeyPress = (e) => {
        console.log(e);
        if(e.key === "Enter") {
            this.handelClick();
        }
    }
    render() {    // render 안에 들어가는건 JSX 구문 여 밖에는 그냥 JS
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} onKeyPress={this.handelKeyPress}/>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} onKeyPress={this.handelKeyPress}/>
                <button onClick={this.handelClick}>확인</button>
            </div>
        );
    }
}

export default EventInputClass;