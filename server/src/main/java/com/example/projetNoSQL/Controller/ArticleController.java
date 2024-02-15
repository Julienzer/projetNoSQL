package com.example.projetNoSQL.Controller;

import com.example.projetNoSQL.Service.Impl.ArticleServiceImpl;
import com.example.projetNoSQL.dao.Article;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@EnableCaching
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ArticleController {

    @Autowired
    private ArticleServiceImpl articleService;

    @GetMapping("/article")
    public ResponseEntity<List<Article>> getAllArticle(){
        return new ResponseEntity<>(articleService.getAllArticle(), HttpStatus.OK);
    }

    //@Cacheable(value = "Article", key = "#nom")
    @GetMapping("/article/{nom}")
    public  ResponseEntity<Optional<Article>> getOneArticle(@PathVariable String nom){
        return new ResponseEntity<>(articleService.getOneArticleByNom(nom), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Article> createArticle(@RequestBody Article article) {
        return new ResponseEntity<>(articleService.createArticle(article), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteArticle(@PathVariable ObjectId id) {
        articleService.deleteArticle(id);
    }
}


