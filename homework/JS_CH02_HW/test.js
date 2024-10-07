const totalFood = () => {
  const bCost = 1.00;
      const fCost = 2.00;
      const sCost = 2.50;

      const burgers = document.getElementById("burgers").value;
      const fries = document.getElementById("fries").value;
      const sodas = document.getElementById("sodas").value;

      var total = 0.00;
      total += (parseInt(burgers) * bCost);
      total += (parseInt(fries) * fCost);
      total += (parseInt(sodas) * sCost);

      const totalString = 'Your total is: ${total}';
      document.getElementById("total").innerHTML = totalString;
};

totalFood()