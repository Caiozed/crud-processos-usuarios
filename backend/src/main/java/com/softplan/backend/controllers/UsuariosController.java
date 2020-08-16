package com.softplan.backend.controllers;

import com.softplan.backend.mappings.PathMappings;
import com.softplan.backend.models.Usuario;
import com.softplan.backend.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuariosController {
    UsuarioService _usuarioService;

    @Autowired
    private UsuariosController(UsuarioService usuarioService){
        _usuarioService = usuarioService;
    }

    @GetMapping(PathMappings.USUARIOS)
    List<Usuario> getUsuarios(){
        return _usuarioService.getUsuarios();
    }

    @PostMapping(PathMappings.USUARIOS)
    boolean createUsuario(@RequestBody Usuario usuario){
        _usuarioService.add(usuario);
        return true;
    }

    @PutMapping(PathMappings.USUARIOS)
    @PatchMapping(PathMappings.USUARIOS)
    boolean updateUsuarios(@RequestBody Usuario usuario){
        _usuarioService.update(usuario);
        return true;
    }

    @DeleteMapping(PathMappings.USUARIO_DELETE)
    boolean deleteUsuario(@PathVariable int id){
        _usuarioService.delete(id);
        return true;
    }
}
