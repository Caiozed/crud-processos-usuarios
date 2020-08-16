package com.softplan.backend.models;

import lombok.Data;

import java.util.List;

@Data
public class Processo {
    int id;
    String nome;
    List<Integer> usuarios;
    boolean parecer;
}
