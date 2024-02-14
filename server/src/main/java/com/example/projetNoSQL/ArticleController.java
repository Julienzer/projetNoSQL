package com.example.projetNoSQL;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ArticleController {

    private final Logger logger = LoggerFactory.getLogger(ArticleController.class);

    @Autowired
    private ArticleService articleService;

    @GetMapping("/article")
    public ResponseEntity<List<Article>> getAllArticle(){
        return new ResponseEntity<List<Article>>(articleService.getAllArticle(), HttpStatus.OK);
    }

    @GetMapping("/article/{id}")
    public  ResponseEntity<Optional<Article>> getOneArticle(@PathVariable ObjectId id){
        return new ResponseEntity<Optional<Article>>(articleService.getOneArticle(id), HttpStatus.OK);
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


