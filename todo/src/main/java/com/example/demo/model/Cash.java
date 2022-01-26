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
public class Cash {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String paym_name;
	
	@Column
	private String description;
	
	@Column
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dueDate;
	
	@Column
	private BigDecimal value;
	
	
	@Column
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate recordDate;
	
	@Column
	private Boolean status;
	
	@Column
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate paidDate;
	
	@PrePersist
	public void beforeSave() {
		setRecordDate(LocalDate.now());
		
	}
	

}


 