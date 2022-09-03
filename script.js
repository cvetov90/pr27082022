"use strict";
document.addEventListener("DOMContentLoaded", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();
  let div = document.getElementById("person_info");

  function showUser(userData) {
    Object.entries(userData).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return showUser(value);
      } else {
        return (div.innerText += `${key} : ${value} \n`);
      }
    });
  }

  showUser(json);
});
