function switch_number(){
    var number_one = parseInt(document.getElementById("first-number").value);
    var number_two = parseInt(document.getElementById("second-number").value);
    document.getElementById("first-number").value = number_two;
    document.getElementById("second-number").value = number_one;
}

function add(){
    var number_one = parseInt(document.getElementById("first-number").value);
    var number_two = parseInt(document.getElementById("second-number").value);
    var result = number_one + number_two;
    document.getElementById("result").innerHTML = "Hasil: " + result;
}

function substract(){
    var number_one = parseInt(document.getElementById("first-number").value);
    var number_two = parseInt(document.getElementById("second-number").value);
    var result = number_one - number_two;
    document.getElementById("result").innerHTML = "Hasil: " + result;
}

function multiple(){
    var number_one = parseInt(document.getElementById("first-number").value);
    var number_two = parseInt(document.getElementById("second-number").value);
    var result = number_one * number_two;
    document.getElementById("result").innerHTML = "Hasil: " + result;
}

function divide(){
    var number_one = parseInt(document.getElementById("first-number").value);
    var number_two = parseInt(document.getElementById("second-number").value);
    var result = number_one / number_two;
    document.getElementById("result").innerHTML = "Hasil: " + result;
}