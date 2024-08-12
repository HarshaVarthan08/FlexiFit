package com.backend.flexifit.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.backend.flexifit.Model.Products;

import java.util.List;

@Repository
public interface ProductsRepository extends JpaRepository<Products, Long> {

    @Query(value = "SELECT * FROM Products WHERE cat_name = :catName", nativeQuery = true)
    List<Products> findByCatName(String catName);
}
