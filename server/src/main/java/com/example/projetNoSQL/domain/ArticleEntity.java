package com.example.projetNoSQL.domain;

public class ArticleEntity {

    String Nom;
    String Description;
    Float Prix;
    Integer Stock;

    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Float getPrix() {
        return Prix;
    }

    public void setPrix(Float prix) {
        Prix = prix;
    }

    public Integer getStock() {
        return Stock;
    }

    public void setStock(Integer stock) {
        Stock = stock;
    }
}
