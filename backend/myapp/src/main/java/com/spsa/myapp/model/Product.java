package com.spsa.myapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Product {
    private String id;
    private String sku;
    private String name;
    private String brandName;
    private String mainImage;

    private BigDecimal price;

    private String stockStatus;

    private String colour;

    private String description;



}
