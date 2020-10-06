let appUrls =
  [
    {
      "appName": "child-one",
      "activeWhen":"/child-one",
      "appUrl": "http://localhost:4201/",
      "bundleMapsUrl":"http://localhost:4201/assets/bundle-maps.json",
      "mainBundleName": ""
    }
  ];

let appLoadPromises = [];

appUrls.forEach((appInfo) => {
  appLoadPromises.push(new Promise((resolve, reject) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `${appInfo.bundleMapsUrl}`);
    xmlHttp.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
    xmlHttp.setRequestHeader('cache-control', 'max-age=0');
    xmlHttp.setRequestHeader('expires', '0');
    xmlHttp.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
    xmlHttp.setRequestHeader('pragma', 'no-cache');
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let bundleMaps = JSON.parse(xmlHttp.responseText);
        console.log(bundleMaps.main);
        appInfo.mainBundleName = bundleMaps.main;
        resolve();
      }
    };
  }))
})

let importmaps = {
  "imports":{

  }
}

Promise.all(appLoadPromises).then(() => {
  appUrls.forEach(e => {
    importmaps.imports[e.appName] = `${e.appUrl}/${e.mainBundleName}`;
  });
  let script = document.createElement('script');
  script.type = "systemjs-importmap";
  script.text = JSON.stringify(importmaps);
  document.head.appendChild(script);
  System.import('single-spa').then((singleSpa) => {
    const { registerApplication, start } = singleSpa;
    appUrls.forEach( (e) => {
      registerApplication({
        name: e.appName,
        app: () => System.import(e.appName),
        activeWhen: e.activeWhen
      });
    });
    start();
  });
});