package com.bandtec.tuneup.br.ecs.dominio;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class EnvioEmail {

    @NotBlank
    @NotNull
    private String texto ;

    @NotBlank
    @NotNull
    private String para;

    @NotBlank
    @NotNull
    private String assunto;

    @NotBlank
    @NotNull
    private LocalDate data;

    @NotBlank
    @NotNull
    private String horario;

    public EnvioEmail(String texto, String para, String assunto, LocalDate data, String horario) {
        this.texto = texto;
        this.para = para;
        this.assunto = assunto;
        this.data = data;
        this.horario = horario;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public String getPara() {
        return para;
    }

    public void setPara(String para) {
        this.para = para;
    }

    public String getAssunto() {
        return assunto;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }
}
