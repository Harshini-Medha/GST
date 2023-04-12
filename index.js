// function Calculator(event) {
//   const mul = document.getElementById("num1").value;
//   const mul2 = document.getElementById("num2").value;
//   const res = Number(mul) * Number(mul2);
//   console.log(res);
// }

// function Calculator(event) {
//   event.preventDefault();
//   const mul = document.getElementById("firstno").value;
//   const mul2 = document.getElementById("twoId").value;
//   const res = Number(mul) * Number(mul2);
//    document.getElementById("H3").innerText=res;

// }
 const newVal = prompt('enter the value')

alert(newVal)
function GST() {
  const n1 = Number(document.getElementById("sal").value);
  const n2 = Number(document.getElementById("tax").value);
  const tx = n1 / 100;
  const dcet = tx * n2;
  const res = (n1) + ( dcet );

  document.getElementById("H3").innerText =" The Total Price Including GST " + res;

  console.log(res);
}
