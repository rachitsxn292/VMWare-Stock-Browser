import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import './style.css';
import { Dropdown } from 'react-bootstrap';

class View extends React.Component{
    constructor(props){
        super(props)
        {
            this.state={
                data:[],
                show: "",
                moreData:[],
                filterList:"",
                display:"All"

            }
        }
    }
    
    componentDidMount(){
        const {email} = this.state;
        axios.get('http://localhost:3001/viewStocks', {params: {email}})
        .then(res => {
            this.setState({
                data: this.state.data.concat(res.data)
            })
        });
    }

    filterData(e){
        var filterVariable = e.target.innerHTML;
        this.setState({
            display: filterVariable
        })
        axios.get('http://localhost:3001/viewStocks', {params: {filterVariable}})
        .then(res => {
            this.setState({
                data: (res.data)
            })
        
        });
        
    }

    viewData(e){
       this.setState({
        show: e.target.innerHTML  
    })

    var key = this.state.show;
    axios.get('http://localhost:3001/viewMoreData', {params: {key}})
    .then(res => {
        this.setState({
            moreData: (res.data)
        })
    
    });
}

    deleteData(index){
        var data = [...this.state.data];
        data.splice(index, 1);
        this.setState({data});
    }
    render() {
        let more = this.state.moreData.map(more=>{
            return(
                <div className="moreDetails">
                    <div class="right"> 
                        <p><b>Symbol:</b>{more.Symbol}</p>
                        <p><b>Market Capital:</b>{more.Cap}</p>
                    </div>
                    <div class="left"> 
                        <p><b>Name:</b> {more.Name}</p>
                        <p><b>Tag:</b>: {more.Tag}</p>
                    </div>
                </div>     

            )
        })
        var dropdown = new Array();
        let details = this.state.data.map(stock => {
            dropdown.push(stock.Tag);
            return(
                <tr key={stock.Symbol}>
                    <td><a href="#" onClick={this.viewData.bind(this)}>{stock.Symbol}</a></td>
                    <td>{stock.LastPrice}</td>
                    <td>{stock.Tag}</td>
                    <button class="btn" onClick={this.deleteData.bind(this)}><i class="fa fa-close"></i></button>
                </tr>
           
            )
        })
        var setData = [...new Set(dropdown)]
        setData.push("All");
        var dropdownMenu = setData.map(stock => {
            return(
                <Dropdown.Item ><a href="#" onClick={this.filterData.bind(this)}>{stock}</a></Dropdown.Item>
            )    
        })

        return (

            <div>
               <div className="Dropdown">
                <h6>Tag Filter:</h6>
                <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {this.state.display}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {dropdownMenu} 
                        </Dropdown.Menu>
                    </Dropdown><br/><br/><br/>
               </div>
                <div id="viewStocks">
                        <table  className="View Stocks" border="1|1">
                            <thead>
                                <tr>
                                    <th>Symbol</th>
                                    <th>Last Price</th>
                                    <th>Tag</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details}
                            </tbody>
                        </table><br/>
                        <p><i>**Double Click on Symbol Link to view more details.</i></p>
                        <p><i>***To add more records in the table redirect to:  "http://localhost:3000/add."</i></p>
                        <h1>Stock Details</h1>
                        {more}
                </div>
            </div>
        );
    }
}

export default View;