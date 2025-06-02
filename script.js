const button = document.getElementById("calculate");
    const ans = document.getElementById("ans");

    button.addEventListener("click", function () {
      const prices = document.querySelectorAll(".price");
      let total = 0;
      for (let cell of prices) {
        const value = parseInt(cell.innerText) || 0;
        total += value;
      }
      ans.textContent = `Total Price = ${total}`;
    });