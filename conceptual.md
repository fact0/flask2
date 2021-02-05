### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
    RESTful routing describes a kind of structure and standard for creating API routes. If an API uses RESTful routing best practices you can expect many of its end points to be similar to another api that is also using it.

- What is a resource?
    A resource can describe one end point of an API that can commonly be accessed using an HTML GET request. The returned json based on your query is usually what the resource is referring to specifically.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
    When using a JSON API if you were to render the forms using server side code, you might run into issues returning the nessecary CSRF token, as well as cross origin rendering problems that will make your requests fail.

- What does idempotent mean? Which HTTP verbs are idempotent?
    refers to http verbs that when sent will have the same effect each time when using the same data. GET,PUT,PATCH,DELETE

- What is the difference between PUT and PATCH?
    PUT replaces an entire entry of data, PATCH modifies a part of it.

- What is one way encryption?
    Refers to hashing a password so that it can not be reversed without knowing the password and correct algorithm used to hash it.

- What is the purpose of a `salt` when hashing a password?
    adds complexity to a password before hashing it

- What is the purpose of the Bcrypt module?
    easier and better security way to implement password hashing for saved passwords/user authentication

- What is the difference between authorization and authentication?
    authorization checks if the user has correct privileges when viewing/using aspects of a web/app etc., authentication is checking the actually user credentials against saved password hash.  