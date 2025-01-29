// this comp discussed the multiple ways using which we can implement memoization in class based components in comparsion to useMemo hook in function based comp

import React, { Component, PureComponent } from 'react'
import memoize from "lodash/memoize"
export default class Extras extends Component {
    cache={}
    //first way to memoize 
    computeExpensiveValue = memoize((value) => {
        console.log("Computing....");
        let compu = value*100;
        return compu
    })

    //2md way to meoize the function 
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value
        //if true is returned then UI is going to be rnedered , if false isreturned UI is not re-rendered
    }

    //3rd ways
    computeExpensiveValue2 = memoize((value) => {
        if(this.cache[value] != undefined){
            return this.cache[value]
        }
        console.log("Computing....");
        let compu = value*100;
        this.cache[value] = compu
        return compu
    })

    //4th way  -> pure comp peforms a shallow comparison of props and states to prevent uncessary renders
    // class Extras extends PureComponent{
    //     render(){

    //     }
    // }

  render() {
    return (
      <div>
        <h2>Mmeoized Vlaue : {this.computeExpensiveValue(this.props.value)}</h2>
      </div>
    )
  }
}
