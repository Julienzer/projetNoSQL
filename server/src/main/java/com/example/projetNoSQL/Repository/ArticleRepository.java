package com.example.projetNoSQL.Repository;


import com.example.projetNoSQL.dao.Article;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ArticleRepository  extends MongoRepository<Article, ObjectId> {

    Optional<Article> findOneByNom(String nom);
}
