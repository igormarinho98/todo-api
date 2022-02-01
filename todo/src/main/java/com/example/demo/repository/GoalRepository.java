package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Goals;

public interface GoalRepository extends JpaRepository<Goals, Long>{

}
