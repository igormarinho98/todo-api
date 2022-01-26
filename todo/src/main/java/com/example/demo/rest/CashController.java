package com.example.demo.rest;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Cash;
import com.example.demo.repository.CashRepository;

@RestController
@RequestMapping("/api/cash")
@CrossOrigin("http://localhost:4200")
public class CashController {
	
	@Autowired
	private CashRepository cRepository;
	
	@PostMapping
	public Cash save(@RequestBody Cash cash) {
		return cRepository.save(cash);
	}
	
	@GetMapping
	public List<Cash> getAll() {
		
		return cRepository.findAll();
		
	}
	
	@DeleteMapping("{id}")
	@CrossOrigin("http://localhost:4200")
	public void delete(@PathVariable Long id) {
		cRepository.deleteById(id);
	}
	
	@PatchMapping("{id}/paid")
	public Cash markAsPaid(@PathVariable Long id) {
		return cRepository.findById(id).map(cash -> {	
			cash.setStatus(true);
			cash.setPaidDate(LocalDate.now());
			cRepository.save(cash); 
			return cash;
		}).orElse(null);
	
	}
}
