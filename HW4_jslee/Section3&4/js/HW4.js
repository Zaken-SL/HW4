/*
int var; int l =m.length();
ont sum= 0;
int export

d2bcode(){
    String b="";
    ans ="";
    PUT GET INPUT CODE HERE
    int value = mess.nextInt();
    while(value >=1){
        b=+ StorageManager.valueof(value%2);
        value = (int)value/2;
    }
    %****
[;;make it one]


    }
}
b2d()
String m = mess.nextLine();
int sum = 0;
int exp = l-1;
for(int i=0; i<l;i++){
    v = Character.getNumbericValue(m.charAt(i));
    sum=+v*Math.pow(2,exp);

}
*/


 function clear() {
	 document.getElementById("d2b").value="";
	 document.getElementById("b2d").value="";
	 focus();
 }

 function focus() {
	 document.getElementById('d2b').focus();
 }

 // Binary to Decimal in JS
 function b2d() {
	 var sum = 0,
	     tmp = 0,
	     b = 1;
     // var ui = Array.from(document.getElementById('b2d').value.toString());
	 var ui = document.getElementById('b2d').value.toString();
	 if (!isNaN(ui)) {
		 ui = Array.from(ui);
		 for (let a=0; a < ui.length; a++) {
			 sum += parseInt(ui[a]) * Math.pow(2, ui.length - b);
			 b+=1;
			}
		document.getElementById('display1').innerHTML = "Your Decimal value is: " + "&nbsp;&nbsp;&nbsp;&nbsp;" + sum.toString();
	 } else {
		 alert("not number.");
	 }
 }

 // Decimal to Binary in JS
 function d2b() {
	 var v = Array(), b = 0, r = 0, m = "";
	 // var a = parseInt(document.getElementById('d2b').value);
	 var a = document.getElementById('d2b').value;

	 if ( !isNaN(a)) {
		 a = parseInt(a);
		 while (a >= 1) {
			 b = a / 2;
			 r = Math.floor(a % 2);
			 // v.push(r.toString());
			 m+=r.toString();
			 a = b;
		}
		// v.reverse();
		m = m.split("").reverse().join("");
		document.getElementById('display2').innerHTML = "Your Binary value is: " + "&nbsp;&nbsp;&nbsp;&nbsp;" + m;

	} else {
		alert("Not a number.")
	}
 }
