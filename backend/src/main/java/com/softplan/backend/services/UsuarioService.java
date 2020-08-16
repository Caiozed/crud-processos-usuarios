package com.softplan.backend.services;

import com.softplan.backend.models.Usuario;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UsuarioService {
    private int lastId = 3;
    private List<Usuario> usuarios = new ArrayList();
    UsuarioService(){
        usuarios.add(new Usuario(1, "teste1", "Admin"));
        usuarios.add(new Usuario(2, "teste2", "Triador"));
        usuarios.add(new Usuario(3, "teste3", "Finalizador"));
    }

    public List<Usuario> getUsuarios(){
        return usuarios;
    }

    public void add(Usuario usuario){
        lastId++;
        usuario.setId(lastId);
        usuarios.add(usuario);
    }

    public void update(Usuario usuario){
        ListIterator<Usuario> listIterator = usuarios.listIterator();
        while (listIterator.hasNext()){
            Usuario u = listIterator.next();
            if(u.getId() == usuario.getId()){
                listIterator.set(usuario);
                break;
            }
        }
    }

    public void delete(int id){
        ListIterator<Usuario> listIterator = usuarios.listIterator();
        while (listIterator.hasNext()){
            Usuario u = listIterator.next();
            if(u.getId() == id){
                listIterator.remove();
                break;
            }
        }
    }
}
