package com.example.finformation.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finformation.LigneCMD;
import com.example.finformation.service.LigneCMDService;

@RestController
@RequestMapping("/lignes")
public class LigneCMDController {
    @Autowired
    private LigneCMDService ligneCMDService;

    @GetMapping
    public List<LigneCMD> getAllLigneCMDs() {
        return ligneCMDService.getAllLigneCMDs();
    }

    @GetMapping("/{id}")
    public LigneCMD getLigneCMDById(@PathVariable Long id) {
        return ligneCMDService.getLigneCMDById(id);
    }

    @PostMapping
    public LigneCMD createLigneCMD(@RequestBody LigneCMD ligneCMD) {
        return ligneCMDService.createLigneCMD(ligneCMD);
    }

    @PutMapping("/{id}")
    public LigneCMD updateLigneCMD(@PathVariable Long id, @RequestBody LigneCMD ligneCMD) {
        return ligneCMDService.updateLigneCMD(id, ligneCMD);
    }

    @DeleteMapping("/{id}")
    public void deleteLigneCMD(@PathVariable Long id) {
        ligneCMDService.deleteLigneCMD(id);
    }
}

