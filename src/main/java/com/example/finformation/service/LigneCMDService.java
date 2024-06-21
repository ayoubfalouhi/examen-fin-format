package com.example.finformation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finformation.LigneCMD;
import com.example.finformation.repository.LigneCMDRepository;

@Service
public class LigneCMDService {
    @Autowired
    private LigneCMDRepository ligneCMDRepository;

    public List<LigneCMD> getAllLigneCMDs() {
        return ligneCMDRepository.findAll();
    }

    public LigneCMD getLigneCMDById(Long id) {
        return ligneCMDRepository.findById(id).orElse(null);
    }

    public LigneCMD createLigneCMD(LigneCMD ligneCMD) {
        return ligneCMDRepository.save(ligneCMD);
    }

    public LigneCMD updateLigneCMD(Long id, LigneCMD ligneCMD) {
        ligneCMD.setIdLigneCMD(id);
        return ligneCMDRepository.save(ligneCMD);
    }

    public void deleteLigneCMD(Long id) {
        ligneCMDRepository.deleteById(id);
    }
}

