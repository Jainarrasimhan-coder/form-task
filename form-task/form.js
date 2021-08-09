function submit() {
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var food = document.getElementById("food").value;
    var gender = document.getElementById("gender").value;
    var state = document.getElementById("state").value;

    if (name === "" || country === "" || address === "" || pincode === "" || food === "" || gender === "" || state === "") {
        alert("Please fill out all the fields!!")
    } else {

        document.getElementById("summa").innerText = name;
        document.getElementById("1").innerText = state;
        document.getElementById("countries").innerText = country;
        document.getElementById("addresses").innerText = address;
        document.getElementById("genders").innerText = gender;
        document.getElementById("pincodes").innerText = pincode;
        document.getElementById("foods").innerText = food;

        document.getElementById("name").value = "";
        document.getElementById("country").value = "";
        document.getElementById("address").value = "";
        document.getElementById("pincode").value = "";
        document.getElementById("food").value = "";
        document.getElementById("gender").value = "";
        document.getElementById("state").value = "";
    }
}