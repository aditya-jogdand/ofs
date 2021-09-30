package com.project.ofs.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.ofs.models.Category;
import com.project.ofs.security.services.CategoryService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/categories")
	public ResponseEntity<List<Category>> findAllCategories(){
		return ResponseEntity.status(HttpStatus.OK).body(categoryService.getCategories());
	}
	
	@GetMapping("/category/{name}")
	public ResponseEntity<Category> findCategory(@PathVariable String name){
		Category c = null;
		c = categoryService.findByName(name);
		if(c!= null) {
			return ResponseEntity.status(HttpStatus.OK).body(c);
		}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
	
	@PostMapping("/category/{categoryname}")
	public ResponseEntity<Category> addCategory(@PathVariable String categoryname){
		return ResponseEntity.status(HttpStatus.CREATED).body(categoryService.addCategory(categoryname));
	}
	
	@PutMapping("/category/{categoryname}")
	public ResponseEntity<Boolean> updateCategory(@PathVariable String categoryname){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(categoryService.updateCategory(categoryname));
	}

}
