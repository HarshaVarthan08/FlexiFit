package com.backend.flexifit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.backend.flexifit.Model.Products;
import com.backend.flexifit.Services.ProductsService;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductsController {

    @Autowired
    private ProductsService productsService;

    @GetMapping
    public List<Products> getAllProducts() {
        return productsService.getAllProducts();
    }

    @GetMapping("/category/{catName}")
    public List<Products> getProductsByCatName(@PathVariable String catName) {
        return productsService.getProductsByCatName(catName);
    }

    @PostMapping
    public Products createProduct(
            @RequestParam("prodName") String prodName,
            @RequestParam("catName") String catName,
            @RequestParam("price") Double price,
            @RequestParam("rating") int rating,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        return productsService.saveProduct(prodName, catName, price, rating, image);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productsService.deleteProduct(id);
    }
}
