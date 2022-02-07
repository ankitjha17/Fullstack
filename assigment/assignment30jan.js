//Print Patterns- 1


m=5;
var num ="";

for(i=1; i<=m; i++){
    for(j=5; j>=i; j--){
        num += j;
    }
    
   
    num += "\n";
}
console.log(num);

/* 
    54321
    5432
    543
    54
    5
*/



n=5;
var s="";
for (i = 1; i <= n; i++) 
   {
      for (j = i; j >= 1; j--) {
              s += j;
             }
               s +="\n";
          }
          console.log(s);

          
/* Pattern 2:- 
1
21
321
4321
54321     */

