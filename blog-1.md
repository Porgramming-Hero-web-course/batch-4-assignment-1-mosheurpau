# Two of the most powerful features of TypeScript are union and intersection types. 

## 1. Union Types

Union types allow us to define a variable that can hold one of several different types. 
For example, We could define a variable that can hold a string or a number:


**Example:**

```
let PhoneNumber: string | number;
PhoneNumber = "07756543321"; 
PhoneNumber = 07756543321;  
```



## 2. Intersection Types

Intersection types allow us to define a variable that must have the properties of two or more different types. 
For example, we could define a variable that must have the properties of both a FrontEndDeveloper interface and an BackEndDeveloper interface become a FullStackDeveloper.

**Example:**

```
interface FrontEndDeveloper {
  javascript: boolean;
}

interface BackEndDeveloper {
  nodeJS: boolean;
  database: boolean;
}

type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

const webDeveloper: FullStackDeveloper = {
  javascript: true,
  nodeJS: true,
  database: true,
};
```