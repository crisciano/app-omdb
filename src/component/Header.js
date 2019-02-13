import React, {Component} from 'react'

class Header extends Component{
	render(){
		return(
			<header className=""> 
	          <div className="container"> 
	            <div className="row">
	              <h1 className="title">{this.props.title} </h1>
	            </div>
	          </div>
	        </header> 
		)
	}
}

export default Header