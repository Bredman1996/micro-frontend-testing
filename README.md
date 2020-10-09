# micro-frontend-testing
Repo for learning and experimenting with micro frontends. 

# Getting started
1. Clone the Repo
2. Run:
   - npm run start in the child-one directory
   - npm run start in the container directory
   - npm run start in the styleguide directory

# Adding more child apps
1. Create your child application using create-single-spa in the root directory
2. Add a json file to the assets folder with a mapping to your main.js file
   - Should be something like { "main":"main.js" } 
2. Update the startup.js file in the container app with a new object in the apps array  
   - name is the name of the app  
   - activeWhen is the base url path for when this child app should be loaded  
   - url is the base url for the app.  
   - bundleMapsUrl is the full url for the json file created in step 2  
   - mainBundleName is the name of the main bundle, this should be left blank as it will be populated later in the startup.js script  
3. Update routes in the container app to have a route that catches the child apps routes

# Startup.js
This file iterates through the list of apps specified in the apps array, and will get the json specified in the bundleMapsUrl property of the app. This allows for publishing bundles with unique hash names without requiring a release of the container app. Once it has gotten all of the app mainjs bundle names and added them to the appinfo object, it will iterate thorugh the array again, this time creating an "imports" oobject. This is used to setup the SystemJS import map overrides. Once we have appended the import map overrides to the head of the dom, it will import single-spa, register all the apps specified with single-spa and then start single-spa. 

# The Styleguide
The styleguide application is intended to be an example of sharing components between different applications. These components are defined and registered in the styleguide application, and then imported and utilized in the required application. 
