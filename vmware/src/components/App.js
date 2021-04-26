import React from 'react';
import axios from 'axios';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            symbol:'',
            name:'',
            last_price:'',
            tag:'',
            cap:''
        }
    }

    createSymbol = (event) =>
    {
        this.setState({
            symbol:event.target.value
        })
    }
    createName = (event) =>
    {
        this.setState({
            name:event.target.value
        })
    }
    createlastPrice = (event) =>
    {
        this.setState({
            last_price:event.target.value
        })
    }
    createTag = (event) =>
    {
        this.setState({
            tag:event.target.value
        })
    }
    createCap = (event) =>
    {
        this.setState({
            cap:event.target.value
        })
    }

    submitData = (event) =>
    {
        
        axios.post('http://localhost:3001/submitData', {
            symbol: this.state.symbol,
            name: this.state.name,
            last_price: this.state.last_price,
            tag: this.state.tag,
            cap: this.state.cap

        })
        .then(response=>{
                if(response.data === true)
                {
                    console.log("Data Submitted");
                }

    });
    } 
    render() {
        return (
            <div class="inputBox">
                <div id="createAssign">
                <h2>Stock Creation</h2>
                <div >
                        <input type="text"  class="form-control" name="createSymbol" value={this.state.symbol} onChange={this.createSymbol.bind(this)} placeholder="Enter Symbol" />
                </div>
                <br/>
                <div >
                        <input type="text" class="form-control"  name="createName" value={this.state.name} onChange={this.createName.bind(this)} placeholder="Enter Name" />
                </div>
                <br/>
                <div >
                        <input type="text" class="form-control" name="createLastPrice" value={this.state.last_price} onChange={this.createlastPrice.bind(this)} placeholder="Enter Last Price" />
                </div>
                <br/>
                <div>
                        <input type="text" class="form-control" name="createTag" value={this.state.tag} onChange={this.createTag.bind(this)}  placeholder="Enter Tag Name"/>
                </div>
                <br/>
                <div>
                        <input type="text" class="form-control" name="createCap" value={this.state.cap} onChange={this.createCap.bind(this)}  placeholder="Enter Market Capital"/>
                </div>
                <br/>
                <div>
                        <button type="submit" class="btn btn-success"  onClick={this.submitData.bind(this)} >Create Stock</button>
                </div>

                </div>
            </div>
        );
    }
}

export default App;