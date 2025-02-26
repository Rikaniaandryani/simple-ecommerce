import { Component } from "react";

class Counter extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }

        console.log("constructor")
    }

    componentDidMount(): void {
        this.setState({count: 10})
        console.log('did mount')
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("did update", prevProps)
        if(this.state.count === 10) {
            this.setState({count: 0})
        }
    }
    render() {
        return <>
        <div className="flex justify-center ">
            <h1>{this.state.count}</h1>
            <button className="p-3" onClick={() => this.setState({count: this.state.count+1})}>+</button>
            {console.log("rednder DOM")}
        </div>
           
        </>
    }
}

export default Counter;