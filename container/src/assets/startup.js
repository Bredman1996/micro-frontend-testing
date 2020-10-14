
let apps =
  [
    {
      "name": "styleguide",
      "activeWhen": "/",
      "url": "http://localhost:4202/",
      "bundleMapsUrl": "http://localhost:4202/assets/bundle-maps.json",
      "mainBundleName": ""
    },
    {
      "name": "child-one",
      "activeWhen": "/child-one",
      "url": "http://localhost:4201/",
      "bundleMapsUrl": "http://localhost:4201/assets/bundle-maps.json",
      "mainBundleName": ""
    },
  ];

let appLoadPromises = [];

apps.forEach((appInfo) => {
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
        appInfo.mainBundleName = bundleMaps.main;
        resolve();
      }
    };
  }))
});

let importmaps = {
  "imports": {

  }
}

Promise.all(appLoadPromises).then(() => {
  apps.forEach(app => {
    importmaps.imports[app.name] = `${app.url}/${app.mainBundleName}`;
  });
  let script = document.createElement('script');
  script.type = "systemjs-importmap";
  script.text = JSON.stringify(importmaps);
  document.head.appendChild(script);
  System.import('single-spa').then((singleSpa) => {
    const { registerApplication, start } = singleSpa;
    apps.forEach((app) => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.name),
        activeWhen: app.activeWhen
      });
    });

    start();
  });
});
