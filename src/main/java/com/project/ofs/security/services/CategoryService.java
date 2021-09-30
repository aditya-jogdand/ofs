package com.project.ofs.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.ofs.models.Category;
import com.project.ofs.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;

	public List<Category> getCategories() {
		List<Category> result = categoryRepository.findAll();
		return result;
	}

	public Category addCategory(String name) {
		Category c = new Category();
		c.setCategoryName(name);
		return categoryRepository.save(c);
	}
	
	public Category findByName(String name) {
		Optional<Category> temp =  categoryRepository.findByCategoryName(name);
		if(temp.isEmpty())
			return null;
		return temp.get();
		
	}

	public boolean updateCategory(String name) {
		Optional<Category> temp = categoryRepository.findByCategoryName(name);
		if (temp.isPresent()) {
			temp.get().setCategoryName(name);
			categoryRepository.save(temp.get());
			return true;
		}
		else
			return false;
	}

	public boolean deleteCategory(String name) {
		Optional<Category> temp = categoryRepository.findByCategoryName(name);
		if (temp.isPresent()) {
			categoryRepository.delete(temp.get());
			return true;
		} else
			return false;
	}

}
