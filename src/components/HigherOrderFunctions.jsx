import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
renderItems = () => {
    const data = this.state.userData;
    return data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
};
renderItemsBasedUserType = () => {
    let data = this.state.userData.filter(function(item) {
      return item.user_type == ("Designer");
    })
    return data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
}
renderItemsStartsWithJ = () => {
    let data = this.state.userData.filter(function(item) {
      return item.name[0] == "J";
    })
    return data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
               <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
}

renderItemsOnAge = () => {
    let data = this.state.userData.filter(function(item) {
      return item.age > 28 && item.age <= 50;
    })
    return data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
}

renderItemsOnTotExperience = () => {
    let data = this.state.userData.filter(function(item) {
        return item.user_type == ("Designer");
      })
      return data.reduce(function(initial,num){
        return initial+num.years;
},0);
}

render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <ul>{this.renderItems()} </ul>
        </div>
        <h2>Display based on userType</h2>
       <div className="display-box">
        <ul>{this.renderItemsBasedUserType()} </ul> 
    </div>
    <h2>Filter all data starting with J</h2>
       <div className="display-box">
        <ul>{this.renderItemsStartsWithJ()} </ul> 
    </div>
    <h2>Filter all data based on age greater than 28 and less than equal to 50</h2>
       <div className="display-box">
        <ul>{this.renderItemsOnAge()} </ul> 
    </div>
    <h2>Find the total years of Designers</h2>
       <div className="display-box">
        <ul>{this.renderItemsOnTotExperience()} </ul> 
    </div>
      </React.Fragment>
     );
};
}
