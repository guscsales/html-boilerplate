# html-boilerplate

This is the repository for initialize simple projects.


### How do I get set up? ###

* Get the project
```
git clone https://github.com/hebsix/html-boilerplate
```

* Install node package module and run:
```
npm install
``` 

### Configure Xampp ###

#### Windows

Open the ***"C:\xampp\apache\conf\extra\httpd-vhosts.conf"*** and add:

```
<VirtualHost *:300??>
    DocumentRoot "C:\xampp\htdocs\your_site"
    ServerName localhost:300??
</VirtualHost>
```

Then open the ***"C:\xampp\apache\conf\httpd.conf"***, search by (CTRL + F) "Listen 80" and add:

```
Listen 300??
```

Completed the steps above you might start the Xampp and run on ***"http://localhost:300??"***.