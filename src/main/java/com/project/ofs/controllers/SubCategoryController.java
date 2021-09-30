package com.project.ofs.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.ofs.models.Product;
import com.project.ofs.models.SubCategory;
import com.project.ofs.security.services.SubCategoryService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class SubCategoryController {
	
	@Autowired
	private SubCategoryService subCategoryService;
	
	@GetMapping("/categories/{id}/subcategories")
	public ResponseEntity<List<SubCategory>> findAllSubCategories(@PathVariable int id){
		return ResponseEntity.status(HttpStatus.OK).body(subCategoryService.findAllSubCategories(id));
	}
	
	@PostMapping("categories/{id}/subcategories")
	public ResponseEntity<String> addSubCategory(@PathVariable int id, @RequestBody SubCategory subcategory){
		return ResponseEntity.status(HttpStatus.CREATED).body(subCategoryService.createSubCategory(id,subcategory));
	}
	
	@GetMapping("/categories/{id}/{subId}/products")
	public ResponseEntity<List<Product>> addSubCategory(@PathVariable int id, @PathVariable int subId){
		return ResponseEntity.status(HttpStatus.CREATED).body(subCategoryService.getSubCategory(id,subId));
	}

	
	
}
