package Cloud_Vandana.org;

import java.util.*;

//Employee class 
class Employee {
 private int id;
 private String name;
 private double salary;

 // Constructor to initialize Employee object
 public Employee(int id, String name, double salary) {
     this.id = id;
     this.name = name;
     this.salary = salary;
 }

 // Method to display employee details
 public void displayDetails() {
     System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
 }
}

//Main class 
public class EmployeeManagementSystem {
 public static void main(String[] args) {
     // Creating a list to store Employee objects
     List<Employee> employees = new ArrayList<>();

     // Adding Employee objects to the list
     employees.add(new Employee(101, "Mayur", 20000));
     employees.add(new Employee(102, "Ram", 10000));
     employees.add(new Employee(103, "Sita", 80000));

     // Displaying employee details
     System.out.println("Employee Details:");
     for (Employee emp : employees) {
         emp.displayDetails();
     }
 }
}

