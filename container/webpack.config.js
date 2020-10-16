// module.exports = {
//     externals: {
//         "@angular/core":"System.import('@angular/core')",
//         "@angular/common":"System.import('@angular/common')",
//         "@angular/platform-browser":"System.import('@angular/platform-browser')",
//         "@angular/router":"System.import('@angular/router')"
//     }
// }

// [
//     function(context, request, callback){
//         if(/^@angular/.test(request)){
//             console.log(request);
//             return callback(null, `System.import('${request}')`);
//         }
//         callback();
//     }
// ]