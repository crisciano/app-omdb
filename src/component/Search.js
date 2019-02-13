import React, {Component} from 'react'

class Search extends Component{
	render(){
		return(
			<nav className="navbar navbar-light bg-light">
	          <div className="container">
	            <div className="row">
	              <form className="form-inline" onSubmit={this.props.onSubmit} method="post">
	                <div className="input-group">
	                  <div className="input-group-prepend p-2">
	                    <span className="input-group-text" id="basic-addon1">
	                      <i ></i>
	                    </span>
	                  </div>
	                  <input type="text" value={this.props.value} onChange={this.props.onChange} className="form-control" placeholder="Pesquisar"></input>
	                </div>

	                <button className="btn btn-padrao my-2 my-sm-0" type="submit">APLICAR</button>
	              </form>
	            </div>
	          </div>
	        </nav>
        )
	}
}

export default Search
