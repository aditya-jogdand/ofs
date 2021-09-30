package com.project.ofs.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.ofs.models.Product;
import com.project.ofs.security.services.ProductService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	public ResponseEntity<List<Product>> findAllProducts(){
		return ResponseEntity.status(HttpStatus.OK).body(productService.findAll());
	}
	
	@GetMapping("/product/{name}")
	public ResponseEntity<Product> findById(@PathVariable String name){
		return ResponseEntity.status(HttpStatus.OK).body(productService.findProduct(name));
	}
	
	@PostMapping("/product/{id}/{subId}")
	public ResponseEntity<String> createProduct(@PathVariable int id,@PathVariable int subId, @RequestBody Product product){
		return ResponseEntity.status(HttpStatus.OK).body(productService.addProduct(id, subId, product));
	}
	
	@PutMapping("/product/{id}/{subId}")
	public ResponseEntity<String> updateProduct(@PathVariable int id,@PathVariable int subId, @RequestBody Product product){
		return ResponseEntity.status(HttpStatus.OK).body(productService.updateProduct(id, subId, product));
	}
	
	@DeleteMapping("/product/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable int id){
		return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProduct(id));
	}
	
	
}
