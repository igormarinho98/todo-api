package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Goals;
import com.example.demo.repository.GoalRepository;

@RestController
@RequestMapping("/api/goal")
@CrossOrigin("http://localhost:4200")
public class GoalController {
	
	@Autowired
	private GoalRepository gRepository;
	
	public Goals save(@RequestBody Goals goal) {
		return gRepository.save(goal);
	}
	
	@GetMapping
	public List<Goals> getAll() {
		return gRepository.findAll();
	}
	
	@GetMapping("{id}")
	public Goals getById(@PathVariable Long id) {
		return gRepository
				.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}
	
	
	@DeleteMapping("{id}")
	@CrossOrigin("http://localhost:4200")
	public void delete(@PathVariable Long id) {
		gRepository.deleteById(id);
	}
	
	@PatchMapping("{id}/upd")
	@CrossOrigin("http://localhost:4200")
	public Goals statusUpdate(@PathVariable Long id) {
		return gRepository.findById(id).map(goal -> {
			goal.setStatus("Em andamento");
			gRepository.save(goal);
			return goal;
		}).orElse(null);
	}
	
	
	
	
	

}






