package com.project.ofs.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ofs.models.Category;
import com.project.ofs.models.Product;
import com.project.ofs.models.SubCategory;
import com.project.ofs.repository.CategoryRepository;
import com.project.ofs.repository.SubCategoryRepository;

@Service
public class SubCategoryService {

	@Autowired
	private SubCategoryRepository categoryRepository;

	@Autowired
	private CategoryRepository categoryRepository2;

	public List<SubCategory> findAllSubCategories(int id) {
		Optional<Category> category = categoryRepository2.findById(id);
		if (category.isPresent()) {
			return category.get().getSubCategories();
		}
		return null;
	}

	public String createSubCategory(int id, SubCategory subCategory) {
		Optional<Category> temp = categoryRepository2.findById(id);
		if (temp.isPresent()) {
			Category cat = temp.get();
			subCategory.setCategory(cat);
			categoryRepository.save(subCategory);
			return "Subcategory added successfully";
		}
		return "Subcategory not added";
	}

	public List<Product> getSubCategory(int id, int subId) {
		Optional<Category> cat = categoryRepository2.findById(id);
		if (cat.isPresent()) {
			Optional<SubCategory> sub = categoryRepository.findById(subId);
			if (sub.isPresent()) {
				return sub.get().getProducts();
			}
		}
		return null;
	}

}
