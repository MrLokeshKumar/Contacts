import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class Timer extends Component {
    state={
        time:'',
        date:''
    }
    componentDidMount(){
        // this.intervalID = setInterval(() => this.renderDate(),1000);
        this.renderDate();
    }
    renderDate=()=>{
        setInterval( () => {
          let Time = new Date().toLocaleString()
          var date = new Date().getDate(); 
          var month = new Date().getMonth() + 1; 
          var year = new Date().getFullYear(); 
          var hours = new Date().getHours(); 
          var min = new Date().getMinutes(); 
          var sec = new Date().getSeconds(); 
          let DATE =  date + '/' + month + '/' + year 
          let TIME =  hours + ':' + min + ':' + sec
          this.setState({date:DATE ,time:TIME})
        },1000)
      }
    
    
    render() {
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