@1.1.0
* **Fixed:** When used with Bootstrap, CSS fade animation class name was conflicting with some of Bootstrap class names. 

(Reported by Hasim Yerli - https://github.com/hasimyerli)

----- 

@1.2.0
* **Changed:** JavaScript event listener improvements.

----- 

@1.3.0
* **Added:** The "**plainText**" options added to "**Notiflix Notify**" and "**Notiflix Confirm**" modules.  

(The "**plainText**" options can be set as "**false**" to use HTML allowed contents. Default values are "**true**" and not allowed HTML)

----- 

@1.4.0
* **Changed:** Code Review.

----- 

@1.5.0
* **Fixed:** When the "useGoogleFont" option set as "false"; the "fontFamily" option was being ineffective. 

----- 

@1.6.0
* **Changed:** Code Review.

* **Added:** All modules can be used even if they didn't initialized. The first call will initialize the module once. (With default settings.)

----- 

@1.7.0
* **Added:** An optional callback function can be used with Deny Button in "Notiflix Confirm" module. Recommended by Sinan Keskin (https://github.com/sinankeskin)

----- 

@1.7.1
* **Changed:** Character encoding UTF-8 without BOM.

----- 