package com.softplan.backend.controllers;

import com.softplan.backend.mappings.PathMappings;
import com.softplan.backend.models.Processo;
import com.softplan.backend.services.ProcessoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProcessosController {
    ProcessoService _processoService;

    @Autowired
    private ProcessosController(ProcessoService processoService){
        _processoService = processoService;
    }

    @GetMapping(PathMappings.PROCESSOS)
    List<Processo> getProcessos(){
        return _processoService.getProcessos();
    }

    @PostMapping(PathMappings.PROCESSOS)
    boolean createProcessos(@RequestBody Processo usuario){
        _processoService.add(usuario);
        return true;
    }

    @PutMapping(PathMappings.PROCESSOS)
    @PatchMapping(PathMappings.PROCESSOS)
    boolean updateProcessos(@RequestBody Processo usuario){
        _processoService.update(usuario);
        return true;
    }

    @DeleteMapping(PathMappings.PROCESSOS_DELETE)
    boolean deleteProcessos(@PathVariable int id){
        _processoService.delete(id);
        return true;
    }
}
