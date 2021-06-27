import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from "./ListItems";
import {library}from '@fortawesome/fontawesome-svg-core';
import {faTrash, faUserGraduate}from'@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends Component{
  userData;
  constructor(props){
    super(props);
    this.state={
      items:JSON.parse(localStorage.getItem('texte')),
      currentItem:{
        text:'',
        key:''
        
      }
     
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }
handleInput(event){
  this.setState({
    currentItem:{
      text:event.target.value,
      key:Date.now()
    }
  })
}
addItem(event){
  event.preventDefault();
  const newItem=this.state.currentItem;
  console.log(newItem);
  if(newItem.text!==""){
    const newItems=[...this.state.items,newItem];
    this.setState({
      items:newItems,currentItem:{
        text:'',
        key:''
      }
      
    })
  }
}
deleteItem(key){
  const filteredItems = this.state.items.filter(item=>item.key!==key);
this.setState({
  items:filteredItems
})
}


setUpdate(text,key){
  const items = this.state.items;
  items.map(item=>{
    if(item.key===key){
      item.text=text;
    }
  })
  this.setState({
    items:items
  })
}





componentDidMount(){
 this.userData=JSON.parse(localStorage.getItem('texte'))

 if (localStorage.getItem('texte')){
   this.setState({
     text:this.userData.text,
     key:this.userData.key
   })
 }else{
  this.setState({
    text:"",
    key:""
  })
  
 }
}
componentWillUpdate(nextProps,nextState){
  localStorage.setItem('texte',JSON.stringify(nextState.items))
  
}

  render(){
    return(
      
      <div className="App">
      
        <header>
         <form id="to-do-form" onSubmit={this.addItem}>
      
           <input type="text" placeholder="Enter text"
           value={this.state.currentItem.text} 
       
           onChange={this.handleInput}/>
             <button type="submit">Add</button>  
          </form>
        </header>
        <ListItems items={this.state.items}
        deleteItem={this.deleteItem}
        setUpdate={this.setUpdate}
        ></ListItems>
        <footer>😃Don't Be Zozo😃</footer>
      </div>
    )
  }
}

export default App;
