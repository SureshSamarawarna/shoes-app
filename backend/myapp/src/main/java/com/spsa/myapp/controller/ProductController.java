package com.spsa.myapp.controller;

import com.spsa.myapp.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ProductController {

    private static final List<Product> prod= new ArrayList<>();

    @PostMapping("/products")
    public Boolean saveProducts(@RequestBody Product products){
        prod.add(products);
        System.out.println(products.toString());
        return true;
    }

    @GetMapping("/products")
    public ResponseEntity<Product> getAllProducts(){
        Product product = prod.get(0);
        System.out.println(product.toString());

        return ResponseEntity.ok(product);
    }

}
