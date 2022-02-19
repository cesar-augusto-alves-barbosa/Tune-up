package com.bandtec.tuneup.br.ecs.dominio;

import javax.persistence.*;
import javax.validation.constraints.Future;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import java.time.LocalDate;

@Entity(name = "OrdemDeServico")
public class OrdemServico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer fkClienteordem;

    private Integer fkVeiculoOrdem;

    @NotNull
    @PastOrPresent
    private LocalDate dtEmissao;

    @NotNull
    @FutureOrPresent
    private LocalDate dtEstimada;

    @NotNull
    private String statusServico;

    @NotNull
    private Double precoTotal;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDate getDtEmissao() {
        return dtEmissao;
    }

    public void setDtEmissao(LocalDate dtEmissao) {
        this.dtEmissao = dtEmissao;
    }

    public LocalDate getDtEstimada() {
        return dtEstimada;
    }

    public void setDtEstimada(LocalDate dtEstimada) {
        this.dtEstimada = dtEstimada;
    }

    public String getStatusServico() {
        return statusServico;
    }

    public void setStatusServico(String statusServico) {
        this.statusServico = statusServico;
    }

    public Double getPrecoTotal() {
        return precoTotal;
    }

    public void setPrecoTotal(Double precoTotal) {
        this.precoTotal = precoTotal;
    }

    public Integer getFkClienteordem() {
        return fkClienteordem;
    }

    public void setFkClienteordem(Integer fkClienteordem) {
        this.fkClienteordem = fkClienteordem;
    }

    public Integer getFkVeiculoOrdem() {
        return fkVeiculoOrdem;
    }

    public void setFkVeiculoOrdem(Integer fkVeiculoOrdem) {
        this.fkVeiculoOrdem = fkVeiculoOrdem;
    }
}
