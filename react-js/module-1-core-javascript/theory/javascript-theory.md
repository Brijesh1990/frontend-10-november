# what is javascript ?
**definition**
A javascript is a client side scripting language that can be load on user browsers and local machine that called javascript.

**advantages of javascript**

1. javascript is client side scripting language
2. javascript is a light weight client side scripting language 
3. javascript is save with .js extension
4. javascript fast load content 
5. javascript used as programming language
6. javascript used to load client side validation | loader | block browsers
7. javascript used to add some events 
8. javascript is used as both pop and oops based language
9. javascript is open source language 
10. javascript support cross plateform (support all OS) 
11. javascript is case-senstive language 
**examples :**
```
document.getElementId();  

```

12. javascript called inside of <head> and <body> tag both using <script> tag

**examples to call in head**

```
<head>
<script>
alert('hi i am javascript')
window.location='https://www.tops-int.com'
</script>
</head>

``` 

**examples to call in body**

```
<body>
<script>
alert('hi i am javascript')
window.location='https://www.tops-int.com'
</script>
</body>

``` 

13. javascript called as a external javascript 

**external js**

**main.js**
```
alert('hi i am brijesh and i purchased shoes from flipkart')
window.location='https://www.flipkart.com/urbanbox-sneakers-men/p/itmb3e2c6aa2ae94?pid=SHOH4V84BG4JDXZH&lid=LSTSHOH4V84BG4JDXZHXABZJQ&marketplace=FLIPKART&q=shoes+for+men&store=osp%2Fcil&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_na&fm=search-autosuggest&iid=60e9e513-d90f-4641-bb74-931ca54ac990.SHOH4V84BG4JDXZH.SEARCH&ppt=sp&ppn=sp&ssid=s7m8630fow0000001769608654120&qH=9b802224ae37096b';
```
**external-javascript.html**
```
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>external javascript</title>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link rel='stylesheet' type='text/css' media='screen' href='main.css'>
<!-- <script src="js/main.js"></script> -->
</head>
<body>
<!-- called external javascript in body -->
<script src="js/main.js"></script>
</body>
</html>

```
## javascript output method 
   javascript provides some inbuild method to print your content on browsers or webpages using javascript.

   **list of output method in javascript**

   1. alert()
   2. confirm()
   3. prompt()
   4. document.write()
   5. console.log()
   6. document.writeln()
   7. window.print()
   8. document.getElementByID()


   **examples of all output methods in javascript**

   **alert**
   ```
   alert('hi my name is Brijesh')
   ```
   
   **confirm**
   ```
     if(confirm('are you sure to Logout ?'))
     {
     alert('logout successfully')
     }
      else 
     {
      alert('your are press cancelled for logout')
     }
   ```
   
   **prompt**
   ```
    var name=prompt("Enter your name :")
    alert("my name is :"+name)
   ```
   **document.write() or  document.writeln()**
   ```
    document.write("My name is Brijesh");
    document.writeln("My name is Brijesh");
   
   ```