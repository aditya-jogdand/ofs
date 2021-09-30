package com.project.ofs.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "category")
public class Category {

	@Id
	@Column(name = "category_id")
	@GeneratedValue
	private int categoryId;

	@Column(name = "category_name")
	private String categoryName;
	
	@OneToMany(mappedBy = "category")
	List<SubCategory> subCategories;

	public Category(int categoryId, String category_name) {
		this.categoryId = categoryId;
		this.categoryName = category_name;
	}
	
	

}
