import React, {Component} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class Search extends Component{
	render(){
		return(
			<nav className="navbar navbar-light bg-light mb-3 mt-3" id="search">
	          <div className="container">
	            <div className="row">
	              <form className="form-inline d-flex w-100" onSubmit={this.props.onSubmit} method="post">
	                <div className="input-group d-flex w-100">
	                  <div className="input-group-prepend p-2 d-flex  h-100 align-items-center">
	                    <span className="input-group-text" id="basic-addon1">
	                      <FontAwesomeIcon icon="search" />
	                    </span>
	                  </div>
	                  <input type="text" value={this.props.value} onChange={this.props.onChange} className="form-control" placeholder="Pesquisar"></input>
	                </div>

	                <button className="btn btn-padrao-grande" type="submit">APLICAR</button>
	              </form>
	            </div>
	          </div>
	        </nav>
        )
	}
}

export default Search
