module.exports = {
    externals: [{
        "@angular/compiler": {
            "path": "https://cdn.jsdelivr.net/npm/@angular/compiler@10.1.4/bundles/compiler.umd.min.js",
            "globalName": "@angular/compiler"
        },
        "@angular/common": {
            "path": "https://cdn.jsdelivr.net/npm/@angular/common@10.1.4/bundles/common.umd.min.js",
            "globalName": "@angular/common"
        },
        "@angular/router": {
            "path": "https://cdn.jsdelivr.net/npm/@angular/router@10.1.4/bundles/router.umd.min.js",
            "globalName": "@angular/router"
        },
        "rxjs":{
            "path":"https://unpkg.com/rxjs@6.6.0/bundles/rxjs.umd.min.js",
            "globalName":"rxjs"
        },
        "@angular/core": {
            "path:": "https://unpkg.com/@angular/core@10.1.4/bundles/core.umd.min.js",
            "globalName": "@angular/core"
        },
        // "@angular/platform-browser":{
        //     "path":"https://cdn.jsdelivr.net/npm/@angular/platform-browser@10.1.4/bundles/platform-browser.umd.js",
        //     "globalName":"@angular/platform-browser"
        // },
        // "@angular/platform-browser-dynamic":{
        //     "path":"https://cdn.jsdelivr.net/npm/@angular/platform-browser-dynamic@10.1.4/bundles/platform-browser-dynamic.umd.js",
        //     "globalName":"@angular/platform-browser-dynamic"
        // },
        // "tslib":{
        //     "path":"https://cdnjs.cloudflare.com/ajax/libs/tslib/2.0.0/tslib.min.js",
        //     "globalName":"tslib"
        // },
        // "@angular/animations":{
        //     "path":"https://cdn.jsdelivr.net/npm/@angular/animations@10.1.4/bundles/animations.umd.js",
        //     "globalName":"@angular/animations"
        // },
    }]
}