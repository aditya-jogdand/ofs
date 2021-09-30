package com.project.ofs.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "sub_category")
public class SubCategory {

	@Id
	@GeneratedValue
	@Column(name = "sub_category_id")
	private int subCategoryId;
	
	@Column(name = "sub_category_name")
	private String subCategoryName;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Category category;
	
	@OneToMany(mappedBy = "subCategory")
	List<Product> products;

	public SubCategory(int subCategoryId, String subCategoryName, Category category) {
		this.subCategoryId = subCategoryId;
		this.subCategoryName = subCategoryName;
		this.category = category;
	}
	
	
}
