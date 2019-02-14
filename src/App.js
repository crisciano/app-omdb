import React, { Component } from 'react';
// import './App.css';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Header from './component/Header.js'
import Search from './component/Search.js'

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      filmes: [{Title: '', Year: '', Genre: '' }],
      details: [{ Poster: '',Title: '',  Plot: '', Genre: '', Year: '', Director: '' }],
      question: '',
      show: false,
    };
    this.urlApi = 'http://www.omdbapi.com/';
    this.apiKey = '7d290f8e';
    this.searchApi = this.searchApi.bind(this);
    this.handlerQuestion = this.handlerQuestion.bind(this);
    this.modal = this.modal.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }
  
  componentDidMount(){
    this.queryApi("Batman");
  }

  // cria uma nova consulta baseada no texto do input
  searchApi(event){
    event.preventDefault();
    this.queryApi(this.state.question);
  }

  // faz a request para a api
  queryApi(query){
    fetch(`${this.urlApi}?s=${query}&apikey=${this.apiKey}&plot=full`)
      .then(res=> res.json())
      .then(result=>{ 
        if (result.Response === "True") {
        // console.log(result);
          this.setState({
            isLoaded: true,
            filmes: result.Search,
            // loading: false
          })
        }else{
          this.setState({
            isLoaded: true,
            filmes: [{Title: ' - ', Year: ' - ', Genre: ' - ' }]
          })
        }
      })
      .catch(error =>{ 
        console.log('error is', error)
        return this.state.filmes;
      });
  }

  // pega os details do filme
  queryDetails(key){
    fetch(`${this.urlApi}?i=${key}&apikey=${this.apiKey}&plot=full`)
      .then(res=>res.json())
      .then(result=>{ 
          this.setState({
            isLoaded: true,
            details: result,
            // loading: false
          })
      })
      .catch(error => console.log('error is', error));
  }

  // escreve o texto no input
  handlerQuestion(event){
    this.setState({ question: event.target.value });
  }

  // Open modal
  modal(key, event){
    event.preventDefault();
    // console.log(key);
    this.queryDetails(key);
    this.setState({ show: true });
  }

  // close modal
  handleClose() {
    this.setState({ show: false, details: [] });
    // this.setState({ destails: [{}] });
  }


  render() {
    return (
      <div className="App">

        <Header title="Filmes" />

        <Search onSubmit={this.searchApi} value={this.state.question} onChange={this.handlerQuestion} />

        <section>
          <div className="container"> 
            <div className="row">
              <table className="table table-striped" id="table">
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Ano</th>
                  <th scope="col">Genero</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.filmes.map((filme, index)=>
                  <tr key={index}>
                    <td>
                    <a href="#modal" onClick={(e)=>this.modal(filme.imdbID, e)}> 
                      {filme.Title}
                    </a>
                    </td>
                    <td>{filme.Year}</td>
                    <td>{filme.Genre}</td>
                  </tr>
                )
              }
              </tbody>
            </table>
            </div>
          </div>
        </section> 

        <Modal show={this.state.show} size="lg" onHide={this.handleClose}>
          <Modal.Body>
            <Container>
              <Row className="d-flex align-items-center">
                <Col xs={12} md={5} className="p-0">
                  <img src={this.state.details.Poster} className="img-fluid" alt={this.state.details.Title}/>
                </Col>
                <Col xs={12} md={7}>
                  <h3> {this.state.details.Title} </h3>
                  <p> {this.state.details.Plot} </p>
                  <p className='mb-0'> <b>Ano: </b> {this.state.details.Year}  </p>
                  <p className='mb-0'> <b>Genero: </b> {this.state.details.Genre}  </p>
                  <p className='mb-0'> <b>Direção: </b> {this.state.details.Director}  </p>
                  <p> <b>Prêmios: </b> {this.state.details.Awards}  </p>
                  <Button className="btn-padrao float-right" variant="secondary" onClick={this.handleClose}> OK </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
