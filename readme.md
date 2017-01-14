##Administrator Manager
For managining the website content, most of the web based applications have backend Control Panel / Dashboard / Adminstrator account.
The Admin Panel is used to CRUD website content. This Admin Panel can have one or more users.

**Administrator Manager** is an Angular JS based PHP/MySQL application which is used to *Create - Read - Update - Delete* Admin panel users.  

[Live Demo](http://git.amolwankhede.com/admin-ng)

####Built using Angular JS and PHP/MySQL

**Features**

0. Administrator Login
0. Forget Password
0. Admin User Statistics
0. Add User
0. Update User
0. Delete User
0. View All Users
0. View each User details
0. View Profile 
0. Update Profile
0. Logout

**Further Improvements**

* RESTful services
* Singleton Pattern
* Role manager - Laravel AngularJS Application
* Add new Status and Role
* Restrict Page access based on user Role
* Material Design
* Update validation

**Known Bug**
* Email, Role, Status `has-error` class not applied when the input is touched 
* If there are no Roles or Status in database, add user error will occur - a fix for this will be add new Role and Status as select option
* Menu will show same name even if the name changed in updated profile.

#Credits

[Bootstrap](http://getbootstrap.com/) is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

[AngularJS](https://angularjs.org/) — Superheroic JavaScript MVW Framework

[jQuery](https://jquery.com/) The Write Less, Do More, JavaScript Library.

[toastr](https://github.com/CodeSeven/toastr) is a Javascript library for non-blocking notifications.

[dirPagination](https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination) is a Boostrap based Pagination Directive.

[Angular Loading Bar](https://chieffancypants.github.io/angular-loading-bar/) is an automatic loading bar using angular interceptors.

[Bootstrap components](https://angular-ui.github.io/bootstrap/) written in pure AngularJS by the AngularUI Team

[Font Awesome](http://fontawesome.io/) gives you scalable vector icons that can instantly be customized

[Mockaroo](https://www.mockaroo.com/) allows you to quickly and easily to download large amounts of randomly generated test data based on your own specs