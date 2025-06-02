const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const tprice = document.querySelectorAll(".price");

const getSum = () => {
	let fp=0;

  for(let price of tprice){
  fp += parseInt(price.innerText);
  }
  const displayPrice = document.createElement("div");
  displayPrice.append(`Total Price = ${fp}`);
  document.body.appendChild(displayPrice);
  
  
};

getSumBtn.addEventListener("click", getSum);

