package com.softplan.backend.models;

import lombok.Data;

@Data
public class Usuario {
    int id;
    String nome;
    String status;
    public Usuario(){

    }

    public Usuario(int id, String nome, String status) {
        this.id = id;
        this.nome = nome;
        this.status = status;
    }
}
