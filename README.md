Measure a time difference ⌛️

You will have to create an interceptor to display the execution time of a query. To do this, you will have to work with date formats in Javascript.

You will need:

     A service with a method for doing a get
         You can use your own node server or this public API

     A component (app.component.ts for example) which calls your service's method

     The interceptor that you will have written

Validation criteria ✅

     The console should display the target URL of the HTTP request
     Once the server responds, the console should display the total time it took for the query to execute.