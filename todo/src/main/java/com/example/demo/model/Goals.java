package com.example.demo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter 
@Setter
public class Goals {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String username;
	
	@Column
	private String deadline;
	
	@Column
	private String term;

	@Column
	private BigDecimal moneyGoal;
	
	@Column
	private String name;
	
	@Column
	private String description;
	
	@Column
	private String level;
	
	@Column
	private String status;
	
	@Column
	private String lifeArea;
	
	@Column
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate createdDate;
	
	@PrePersist
	public void beforeSave() {
		setCreatedDate(LocalDate.now());
	}
	
}
