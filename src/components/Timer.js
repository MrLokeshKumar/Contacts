import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'    
export default class Timer extends Component {
    state={
        time:'',
        date:''
    }
    componentDidMount(){
        this.renderDate();
    }
    renderDate=()=>{
        setInterval( () => {
          //let Time = new Date().toLocaleString() //this will fetch the both date and time
          let date =  new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear() 
          let time =  new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
          this.setState({date,time})
        },1000)
      }
    
    
    render() {
        console.log('timer rerendering')
        const {time,date} =styles;
        return (
            <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={time}>{this.state.time}</Text>
                    <Text style={date}>{this.state.date}</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    time:{
        fontSize:50,
        fontFamily:'bold',
        color:'tomato'
    },
    date:{
        fontSize:20,
        fontFamily:'bold',
        color:'black'
    }
});