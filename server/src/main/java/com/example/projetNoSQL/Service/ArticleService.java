package com.example.projetNoSQL.Service;

import com.example.projetNoSQL.dao.Article;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;

public interface ArticleService {
    List<Article> getAllArticle();

    Optional<Article> getOneArticleByNom(String nom);

    Article createArticle(Article article);

    void deleteArticle(ObjectId id);
}
