package com.softplan.backend.services;

import com.softplan.backend.models.Processo;
import com.softplan.backend.models.Usuario;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

@Service
public class ProcessoService {
    private int lastId = 0;
    private List<Processo> processos = new ArrayList();

    public List<Processo> getProcessos(){
        return processos;
    }

    public void add(Processo processo){
        lastId++;
        processo.setId(lastId);
        processos.add(processo);
    }

    public void update(Processo processo){
        ListIterator<Processo> listIterator = processos.listIterator();
        while (listIterator.hasNext()){
            Processo u = listIterator.next();
            if(u.getId() == processo.getId()){
                listIterator.set(processo);
                break;
            }
        }
    }

    public void delete(int id){
        ListIterator<Processo> listIterator = processos.listIterator();
        while (listIterator.hasNext()){
            Processo u = listIterator.next();
            if(u.getId() == id){
                listIterator.remove();
                break;
            }
        }
    }
}
