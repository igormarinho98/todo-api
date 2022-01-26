package com.example.demo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.AuthRepository;

@RestController
@RequestMapping("/api/login")
@CrossOrigin("http://localhost:4200")
public class AuthController {
	
	@Autowired
	private AuthRepository repositoryA;
	
	@GetMapping
	public void start() {
		
	}
	
	@GetMapping("{id}")
	public Object getById(@PathVariable Long id) {
		return repositoryA
				.findById(id);
	}
		

}
