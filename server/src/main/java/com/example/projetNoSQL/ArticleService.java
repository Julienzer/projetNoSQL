package com.example.projetNoSQL;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    private MongoTemplate mongoTemplate;

    public List<Article> getAllArticle(){
        return articleRepository.findAll();
    }

    public Optional<Article> getOneArticle(ObjectId id){
        return articleRepository.findById(id);
    }

    public Article createArticle(Article article){
        return articleRepository.save(article);
    }

    public void deleteArticle(ObjectId id){
        articleRepository.deleteById(id);
    }
}
