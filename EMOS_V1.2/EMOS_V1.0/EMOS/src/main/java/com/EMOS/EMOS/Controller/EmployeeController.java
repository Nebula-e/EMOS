package com.EMOS.EMOS.Controller;
import java.util.ArrayList;

import com.EMOS.EMOS.Model.Employee;
import com.EMOS.EMOS.Repository.EmployeeRepository;
import jakarta.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;


    // getAllEmployees
    @GetMapping("/employees")
    public ArrayList<Employee> getAllEmployees(){
        return (ArrayList<Employee>) employeeRepository.findAll();
    }
}
