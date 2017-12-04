package in.clouthink.dass.boilerplate.cors.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TodolistController {

    @RequestMapping(value = "/todolist", method = RequestMethod.GET)
    public List<String> getTodolist() {
        return Arrays.asList("Add Angular 2 frontend example", "Add React frontend example", "Add more doc");
    }

}
