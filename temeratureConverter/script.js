const calculateTemp = () => {
  const tempNumber = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrnheight = Math.round((cel * 9) / 5 + 32);
    return fahrnheight;
  };

  const fahToCel = (fah) => {
    let celcius = Math.round((fah - 32) * 5/ 9) ;
    return celcius;
  };
  let result;
  if (valueTemp == "cel") {
    result = celToFah(tempNumber);
    document.getElementById("resultContainer").innerHTML = `${result} Fahrenheight `;
  } else {
    result = fahToCel(tempNumber);
    document.getElementById(
      "resultContainer"
    ).innerHTML = `${result} Celcius`;
  }
};
