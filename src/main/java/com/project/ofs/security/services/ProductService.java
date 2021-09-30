package com.project.ofs.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ofs.models.Category;
import com.project.ofs.models.Product;
import com.project.ofs.models.SubCategory;
import com.project.ofs.repository.CategoryRepository;
import com.project.ofs.repository.ProductRepository;
import com.project.ofs.repository.SubCategoryRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	SubCategoryRepository subCategoryRepository;

	public List<Product> findAll() {
		List<Product> result = productRepository.findAll();
		return result;
	}

	public Product findProduct(String name) {
		Optional<Product> p = productRepository.findByProductName(name);
		if (p.isEmpty())
			return null;
		return p.get();
	}

	public String addProduct(int id, int subId, Product p) {
		Optional<Category> cat = categoryRepository.findById(id);
		if (cat.isPresent()) {
			Optional<SubCategory> sub = subCategoryRepository.findById(subId);
			if (sub.isPresent()) {
				SubCategory subCategory = sub.get();
				p.setSubCategory(subCategory);
				productRepository.save(p);
				return "Product Added Successfully";
			}
		}
		return "Product not added";
	}

	public String updateProduct(int id, int subId, Product p) {
		Optional<Category> cat = categoryRepository.findById(id);
		if (cat.isPresent()) {
			Optional<SubCategory> sub = subCategoryRepository.findById(subId);
			if (sub.isPresent()) {
				Optional<Product> temp = productRepository.findById(p.getProductId());
				if (temp.isPresent()) {
					temp.get().setPrice(p.getPrice());
					temp.get().setProductDesc(p.getProductDesc());
					temp.get().setProductName(p.getProductName());
					productRepository.save(temp.get());
					return "Product Updated Successfully";
				}
			}
		}
		return "Product not updated";
	}

	public String deleteProduct(int id) {
		Optional<Product> p = productRepository.findById(id);
		if (p.isPresent()) {
			String name = p.get().getProductName() + p.get().getProductDesc();
  			productRepository.delete(p.get());
			return "Product " + name + " deleted";
		}
		return "Product not Deleted";
	}

}
