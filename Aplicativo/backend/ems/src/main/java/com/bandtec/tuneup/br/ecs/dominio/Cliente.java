package com.bandtec.tuneup.br.ecs.dominio;

import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.time.LocalDate;

@MappedSuperclass
public abstract class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public static Integer sessao = null;

    @NotBlank
    @Size(min = 10, max = 50)
    private String nome;

    @Past
    @NotNull
    @Column(name = "dataNasc")
    private LocalDate dataNasc;

    @Email
    @NotBlank
    @Column(unique = true)
    private String email;

    @NotNull
//    @Pattern(regexp = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})")//fita do insert cliente carlos dando erro se altera senha
    private String telefone;

    @Size(min = 8, max = 20)
    @NotNull
    private String senha;

    @CPF
    @NotNull
    @Column(length = 11, unique = true)
    private String cpf;

    private Boolean logado = false;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public LocalDate getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(LocalDate dataNasc) {
        this.dataNasc = dataNasc;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Boolean getLogado() {
        return logado;
    }

    public void setLogado(Boolean logado) {
        this.logado = logado;
    }
}