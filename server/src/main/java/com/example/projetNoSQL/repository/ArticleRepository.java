package com.example.projetNoSQL.repository;


import com.example.projetNoSQL.domain.ArticleEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface ArticleRepository  extends CrudRepository<ArticleEntity, Integer> {
}
