import React from 'react';
import axios from 'axios';

export default class UsuariosLista extends React.Component {

  state = {
    usuarios: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8080/usuarios`)
      .then(res => {
        const usuarios = res.data;
        this.setState({ usuarios });
      })
  }

  render() {
    return (
      <ul>
        { this.state.usuarios.map(usuario =>
          <React.Fragment>
            <li>{usuario.id}</li>
            <li>{usuario.nome}</li>
            <li>{usuario.cpf}</li>
            <li>{usuario.telefone}</li>
          </React.Fragment>)}
      </ul>
    )
  }
}