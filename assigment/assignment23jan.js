//patterns



var S = "";
for(var i = 1; i <= 5; i++) { 
       
        for(var j = 1; j <= i; j++) { 
          S += i;
        }
        S += "\n"; // Used for New line
     }
     console.log(S);


/* 
Pattern 1:-
1
22
333
4444
55555 
*/

   
  var n = 4;
  var s = "";
  for(i=1; i<=n; i++) 
  {
      for(j=1; j<=n-i; j++)       {
          s += " ";
      }
      for(k=1; k<=2*i-1; k++) 
      {
          s += "*";

      }
      s += "\n";
      
  }
  console.log(s);

  /*  Pattern 3:-
   
    *
   ***
  *****
 *******     */  
