package com.backend.flexifit.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.backend.flexifit.Model.Products;
import com.backend.flexifit.Repository.ProductsRepository;

import java.io.IOException;
import java.util.List;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public List<Products> getProductsByCatName(String catName) {
        return productsRepository.findByCatName(catName);
    }

    public Products saveProduct(String prodName, String catName, Double price, int rating, MultipartFile image) {
        Products product = new Products();
        product.setProdName(prodName);
        product.setCatName(catName);
        product.setPrice(price);
        product.setRating(rating);

        if (image != null && !image.isEmpty()) {
            try {
                product.setImage(image.getBytes());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return productsRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productsRepository.deleteById(id);
    }
    
    public List<Products> getAllProducts() {
        return productsRepository.findAll();
    }
}
