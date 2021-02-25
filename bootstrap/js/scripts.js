function validateDate() {
    var date;
    date = Number(document.getElementById("date").value);
    if (date < 1 || date >= 32) {
        alert("Invalid Date!");
        return false;
    }   else if (date >=1 || date <= 31) {
        alert("Looks Good");
        return false;
    }

};

function validateMonth() {
    var month;
    month = document.getElementById("month").value;

    if (month <= 0 || month > 12) {
        alert("Invalid Month");
        return false;
    } else if (month > 0 || date <= 12) {
        alert("Looks Good!");
        return false;
    }

};

function dayBorn() {
    var dayofWeek;
    var d;
    var year = document.getElementById("year").value;
    var centuryDigits = year.slice(0,2);
    var yearDigits = year.substr(-2);
    var month = document.getElementById("month").value;
    var day   = document.getElementById("date").value;
    d = parseInt((((centuryDigits / 4) - 2 * centuryDigits - 1) + ((5 * yearDigits / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    dayofWeek = d;
    document.getElementById("dayweek").value=d;

    return dayofWeek;

};

function akanName() {

    var year = document.getElementById("year").value;
    var gender;
    var dayofWeek = dayBorn();
    var ghanaName;
console.log(dayofWeek);
    ghanaName = document.getElementById("gender").value;

    switch(ghanaName){

        case("male"):

        switch(dayofWeek){

                 case 1:
                  alert("Your Akan Name is Kwasi");
                break;

                 case 2:
                  alert("Your Akan Name is Kwado");
                break;

                 case 3:
                  alert("Your Akan Name is Kwabena");
                break;
                
                 case 4:
                  alert("Your Akan Name is Kwaku");
                break;
                
                 case 5:
                  alert("Your Akan Name is Yaw");
                break;
                
                 case 6:
                  alert("Your Akan Name is Kofi");
                break;
                
                 case 7:
                  alert("Your Akan Name is Kwame");
                break;

        }

        break;
        case("female"):

        switch(dayofWeek){

                 case 1:
                  alert("Your Akan Name is Akosua");
                break;

                 case 2:
                  alert("Your Akan Name is Adwoa");
                break;

                 case 3:
                  alert("Your Akan Name is Abenaa");
                break;
                
                 case 4:
                  alert("Your Akan Name is Akua");
                break;
                
                 case 5:
                  alert("Your Akan Name is Yaa");
                break;
                
                 case 6:
                  alert("Your Akan Name is Afua");
                break;
                
                 case 7:
                  alert("Your Akan Name is Ama");
                break;
    }

    break;
}
};