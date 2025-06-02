const getSumBtn = document.createElement("button");
    getSumBtn.textContent = "Get Total Price";
    document.body.appendChild(getSumBtn);

    getSumBtn.addEventListener("click", function () {
      const tprice = document.querySelectorAll(".price");
      let total = 0;
      for (let price of tprice) {
        total += parseInt(price.innerText) || 0;
      }

      let ansDiv = document.getElementById("ans");
      if (!ansDiv) {
        ansDiv = document.createElement("div");
        ansDiv.id = "ans";
        document.body.appendChild(ansDiv);
      }
      ansDiv.textContent = `Total Price = ${total}`;
    });