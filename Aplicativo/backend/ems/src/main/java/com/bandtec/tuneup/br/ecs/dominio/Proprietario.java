package com.bandtec.tuneup.br.ecs.dominio;


import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class Proprietario extends Cliente {

    @NotNull
    private int nivelAcesso;


    public int getNivelAcesso() {
        return nivelAcesso;
    }

    public void setNivelAcesso(int nivelAcesso) {
        this.nivelAcesso = nivelAcesso;
    }
}
