var employeeDetails = [
  {
    name: "Ravi Kumar",
    role: "Senior Software Dev",
    mobile: "+91 1234567890",
    manager: "Ravi Kumar",
    office: "banglore",
    join_date: "12 April 21",
  },
];

var buttonsList = document.querySelectorAll("#buttonContainer button");
var parentcontainer = document.querySelector(".parentcontainer");
var formcontainer = document.querySelector(".formcontainer");
var submitbutton = document.querySelector("#submitbutton");
var myform = document.querySelector("#myform");

function storedata(object) {
  let Strdata = JSON.stringify(object);
  localStorage.setItem("emplist", Strdata);
}

function getData() {
  let obj = JSON.parse(localStorage.getItem("emplist"));
  if (obj != null) {
    employeeDetails = obj;
  }
}

submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  let emp = {
    name: myform.name.value,
    role: myform.role.value,
    mobile: myform.mobile.value,
    manager: myform.manager.value,
    office: myform.office.value,
    join_date: myform.joindate.value,
  };
  myform.reset();
  employeeDetails.push(emp);
  storedata(employeeDetails);
  AddEmployee(employeeDetails);
});

function AddEmployee(datalist) {
  if (datalist.length != parentcontainer.children.length) {
    parentcontainer.innerHTML = "";
    datalist.forEach((employee) => {
      let divempdetails = document.createElement("div");
      let subcontainer1 = document.createElement("div");
      let subcontainer2 = document.createElement("div");

      let h1 = document.createElement("h4");
      let h2 = document.createElement("h4");
      let h3 = document.createElement("h4");
      let h4 = document.createElement("h4");
      let h5 = document.createElement("h4");
      let h6 = document.createElement("h4");

      h1.innerHTML = "Name : " + employee.name;
      h2.innerHTML = "Role : " + employee.role;
      h3.innerHTML = "Mobile : " + employee.mobile;
      h4.innerHTML = "Manager : " + employee.manager;
      h5.innerHTML = "Office : " + employee.office;
      h6.innerHTML = "Joinning-Date : " + employee.join_date;

      let items = [h1, h2, h3, h4, h5, h6];

      divempdetails.classList = "empdetailscontainer";
      subcontainer1.classList = "sub-container";
      subcontainer2.classList = "sub-container";

      items.forEach((h, index) => {
        h.classList = "items";
        if (index <= 2) {
          subcontainer1.appendChild(h);
        } else {
          subcontainer2.appendChild(h);
        }
      });

      divempdetails.appendChild(subcontainer1);
      divempdetails.appendChild(subcontainer2);
      parentcontainer.appendChild(divempdetails);
    });
  }
}

function tabpanel(index) {
  // reset button
  buttonsList.forEach((button) => {
    button.style.color = "";
    button.style.backgroundColor = "";
  });
  buttonsList[index].style.color = "white";
  buttonsList[index].style.backgroundColor = "rgb(26, 168, 224)";

  if (index == 0) {
    formcontainer.style.display = "none";
    parentcontainer.style.display = "block";
  } else if (index == 1) {
    parentcontainer.style.display = "none";
    formcontainer.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getData();
  tabpanel(0);
  AddEmployee(employeeDetails);
});

document.addEventListener("close", () => {
  localStorage.removeItem("emplist");
});
