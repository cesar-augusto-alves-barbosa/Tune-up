import React from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8080/`
})

export default class PersonList extends React.Component {
    state = {
        nome: '',
        cpf: '',
        dataNasc: '',
        email: '',
        senha: '',
        telefone: '',
    }

    handleChange = event => {
        this.setState({ nome: event.target.value });
        this.setState({ cpf: event.target.value });
        this.setState({ dataNasc: event.target.value });
        this.setState({ email: event.target.value });
        this.setState({ senha: event.target.value });
        this.setState({ telefone: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            nome: this.state.nome,
            cpf: this.state.cpf,
            dataNasc: this.state.dataNasc,
            email: this.state.email,
            senha: this.state.senha,
            telefone: this.state.telefone
        };

        api.post(`/usuarios`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nome:
            <input type="text" name="nome" onChange={this.handleChange} />
                    </label>
                    <label>
                        Cpf:
            <input type="text" name="cpf" onChange={this.handleChange} />
                    </label>
                    <label>
                        Data de nascimento:
            <input type="date" value="2017-06-01" name="dataNasc" onChange={this.handleChange} />
                    </label>
                    <label>
                        E-mail:
            <input type="text" name="email" onChange={this.handleChange} />
                    </label>
                    <label>
                        senha:
            <input type="text" name="senha" onChange={this.handleChange} />
                    </label>
                    <label>
                        Telefone:
            <input type="text" name="telefone" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}