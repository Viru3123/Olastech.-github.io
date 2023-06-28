var num = 0;          
document.getElementById("rr").innerHTML = num;
num++;
function counter(){
 
document.getElementById("rr").innerHTML = num;
num++;
}

<!--  to resst the value back to zero -->
function resetValue() {
document.getElementById("rr").innerHTML = 0;


}

/*let count = 1; */
function counter() { 
document.getElementById("rr").innerHTML = num; 
num += 1; 
} 
function resetValue() { 
document.getElementById("rr").innerHTML = num - 1; document.getElementById("rr").innerHTML = 0; 
num = 1; 
}

