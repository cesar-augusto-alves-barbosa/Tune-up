package com.bandtec.tuneup.br.ecs.dominio;


import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Oficina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull
    private String nome;

    @NotNull
    private String razaoSocial;

    @NotNull
    private String ie;

    @CNPJ
    @NotNull
    private String cnpj;

    @NotNull
    private String cep;

    @NotNull
    private String rua;

    @NotNull
    private String bairro;

    @NotNull
    private Integer numero;

    @NotNull
    private String complemento;

    @NotNull
    private String telefone;

    @NotNull
    private String email;

    private String hrFunc;

    @NotNull
    private Integer fkPrope;

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

    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getIe() {
        return ie;
    }

    public void setIe(String ie) {
        this.ie = ie;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHrFunc() {
        return hrFunc;
    }

    public void setHrFunc(String hrFunc) {
        this.hrFunc = hrFunc;
    }

    public Integer getFkPrope() {
        return fkPrope;
    }

    public void setFkPrope(Integer fkPrope) {
        this.fkPrope = fkPrope;
    }
}
