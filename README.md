NodeWebkit Application
===

Base to create your nodewekit application.
With grunt task for compilation to an executable application.

The sample application use RequireJS && the require node method !!

Basics
---

###Main folder (NodeWebkit)

A main folder with grunt task for compiling your app to an '.exe'/'.app'/...
```
grunt build
```

Go to build folder > releases > [app_name] > [platforme] > [app_name]

Modify compilation : go to -> grunt_tasks > 'nodewebkit.js'

###App folder

You have another npm packages declaration
It's separated from the 'Main folder'

Grunt tasks dedicated to my application
```
grunt buildApp
```

How to use
---

For this sample you to run your fav CLI,
Type:
```
npm install
cd app
npm install
bower install
grunt buildApp
cd ..
grunt build
```

And Go to build folder > releases > nodeapp > win > nodeapp > nodeapp.exe