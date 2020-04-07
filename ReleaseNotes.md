@2.1.3
* **Changed:** Code Review.

----- 

@2.1.2
* **Fixed:** Document Object Model definition fixes.
* **Changed:** Code Review.

----- 

@2.1.1
* **Fixed:** Document Object Model definition fixes.
* **Changed:** Code Review.

----- 

@2.1.0
* **Added:** Universal Module Definition.

----- 

@2.0.0

#### Notiflix `v2` is ready to use. 

This version includes a new module name as `Block`. 

`Notiflix.Block.*` module can be used to block or unblock elements to prevents users actions during the process (AJAX etc.) without locking the browser or the other elements. 

* **Added:** The `Block` module added to `Notiflix`. 

* **Added:** The `clickToClose` option added to the `Notiflix.Notify.*` module. Default is `false`. This option can be set as `true` to remove each notification without waiting for it to be automatically removed when it has been clicked. (Recommended by [Mustafa Sadedil](https://github.com/sadedil))

* **Changed:** Code Review.

----- 
----- 
----- 
----- 
----- 

@1.9.1
* **Changed:** Code Review.

----- 

@1.9.0
* **Changed:** Code Review.

----- 

@1.8.0
* **Added:** The "showOnlyTheLastOne" option added to the "Notiflix Notify" module. (Recommended by [Ori Granot](https://github.com/origranot))

(Default is "false". This option can be set as "true" to show only the last notification.)

----- 

@1.7.2
* **Added:** Unminified package published.

----- 

@1.7.1
* **Changed:** Character encoding UTF-8 without BOM.

----- 

@1.7.0
* **Added:** An optional callback function can be used with Deny Button in "Notiflix Confirm" module. (Recommended by [Sinan Keskin](https://github.com/sinankeskin))

----- 

@1.6.0
* **Changed:** Code Review.

* **Added:** All modules can be used even if they didn't initialized. The first call will initialize the module once. (With default settings.)

----- 

@1.5.0
* **Fixed:** When the "useGoogleFont" option set as "false"; the "fontFamily" option was being ineffective. 

----- 

@1.4.0
* **Changed:** Code Review.

----- 

@1.3.0
* **Added:** The "**plainText**" options added to "**Notiflix Notify**" and "**Notiflix Confirm**" modules.  

(The "**plainText**" options can be set as "**false**" to use HTML allowed contents. Default values are "**true**" and not allowed HTML)

----- 

@1.2.0
* **Changed:** JavaScript event listener improvements.

----- 

@1.1.0
* **Fixed:** When used with Bootstrap, CSS fade animation class name was conflicting with some of Bootstrap class names. (Reported by [Hasim Yerli](https://github.com/hasimyerli))

----- 