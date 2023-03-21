// var junaid = prompt("Enter your Year of Birth");
//     var a = new Date();
//         var b = a.getTime();
//             var c = new Date(junaid);
//                 var d = c.getTime();
//                     var javaid = b - d;
//                         var res = javaid / (1000 * 60 * 60 * 24 * 365);
//                             document.write("Enter your Age" | + Math.floor (res))
// var junaid = prompt("Enter Your Year of Birth");
//     var a = new Date();
//         var b = a.getTime();
//             var c = new Date(junaid);
//                 var d = c.getTime();
//                     var javaid = b - d;
//                         var res = javaid / (1000*60*60*24*365);
//                             document.write("Enter your Age" | + Math.floor (res))

// var moiz = prompt("Enter your Year of Birth");
//     var a = new Date();
//         var b = a.getTime();
//             var c = new Date(moiz);
//                 var d = c.getTime();
//                     var shahid = b - d;
//                         var result = shahid / (1000*60*60*24*365);
//                             document.write("Enter Your Age" | + Math.floor (result))

// var userInput = prompt("Enter your City Name");
// var arr = ["Karachi","Lahore","Islamabad","Quetta"]
// var flagVar = false
// for(i=0; i<arr.length; i++){
//     if(userInput === arr[i]){
//         flagVar = true
//         alert("Han bhai mil gya")
//         break;
//     }
// }
// if(flagVar === false){
//     alert("Bhai nhi mila")
// }

// var userInput = prompt("Enter your city Name")
//     var arr = ["karachi","lahore","islamabad","peshawar"]
//         var arr2 = No
//             for(i=0; i<arr.length; i++)
//             {
//                 if(userInput === arr[i])
//                 {
//                     arr2 = No
//                         alert("Han bhai mil gaya")
//                             break;
//                 }
//             }
//                                 if(arr2 === Yes)
//                                 {
//                                     alert("Bhai nhi mila")
//                                 }

// var userInput = +prompt("Enter your Number")
// var userInp = +prompt("Enter your last Number")
// for(i=1; i<=userInp; i++){
//     document.write("<center>",userInput," x ",i, " = ",userInput*i,"<br>","</center>")
// }

var userInput = +prompt("Enter your First Number");
    var userInp = +prompt("Enter your Last Number");
        for(i=1; i<=userInp; i++)
        {
            document.write("<center>",userInput + " x " + i + " = " + userInput*i + "<br>","</center>")
        }