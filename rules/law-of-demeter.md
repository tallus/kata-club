the Law of Demeter for functions requires that a method m of an object O may only invoke the methods of the following kinds of objects:[2]

- O itself
- m's parameters
- Any objects created/instantiated within m
- O's direct component objects
- A global variable, accessible by O, in the scope of m
