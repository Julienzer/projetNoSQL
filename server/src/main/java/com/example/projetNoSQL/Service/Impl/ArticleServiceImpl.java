package com.example.projetNoSQL.Service.Impl;

import com.example.projetNoSQL.Repository.ArticleRepository;
import com.example.projetNoSQL.Service.ArticleService;
import com.example.projetNoSQL.dao.Article;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementation de {@link ArticleService}
 */
@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepository articleRepository;


    public List<Article> getAllArticle(){
        return articleRepository.findAll();
    }

    public Optional<Article> getOneArticleByNom(String nom){
        return articleRepository.findOneByNom(nom);
    }

    public Article createArticle(Article article){
        return articleRepository.save(article);
    }

    public void deleteArticle(ObjectId id){
        articleRepository.deleteById(id);
    }
}
