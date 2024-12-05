import * as h from './hiddenImplementation.mjs';
import {alertIfPasswordsDontMatch, checkValidity, createDietPreferenceCheckboxes, showAllergyInput} from "./hiddenImplementation.mjs";

const FORM = document.getElementById("register-form");
const CONFIRM_PASSWORD_INPUT = document.getElementById("confirm-password-input");
const SUBMIT = document.getElementById('submit-btn');

document.addEventListener("DOMContentLoaded", () =>
{

   h.hideAllergyInput();
   h.hideSuccessMessage();
   h.createGenderRadioButtons();
   h.createDietPreferenceCheckboxes();
   h.fillSessionPreferenceSelections();

   console.log(FORM.elements);

   CONFIRM_PASSWORD_INPUT.addEventListener('keyup', () =>
   {
      h.alertIfPasswordsDontMatch();
   });

   let allergyCheckbox = document.getElementById("Allergy");

   allergyCheckbox.addEventListener('change', () =>
   {
      h.showAllergyInput(allergyCheckbox);


   });

   document.getElementById("submit-btn").addEventListener("submit", (e) =>
   {
      e.preventDefault();
      console.log("Form Submitted")
      //Success message?
   });

   window.addEventListener("keydown", (e) =>
   {
      if(e.key === "Enter")
      {
         e.preventDefault();
         FORM.submit();
      }
      else if(e.key==="Delete")
      {
         e.preventDefault();
         FORM.reset();
      }
   });

   document.getElementById("reset-btn").addEventListener("click", () =>
   {
      FORM.reset();
   });

   document.getElementById('age-input').addEventListener("input", (e) =>
   {
      const output = document.getElementById("age-container");

      output.textContent = e.target.valueAsNumber;

      if(e.target.valueAsNumber < 18)
      {
         e.target.setCustomValidity("User is too young");
         e.target.classList.add("invalid");
         e.target.classList.remove("valid")
      }
      else
      {
         e.target.setCustomValidity('');
         e.target.classList.add('valid');
         e.target.classList.remove('invalid');
      }
   });

   FORM.addEventListener("submit", (e) =>
   {
      e.preventDefault();

      let sessionElement = document.getElementById("")

      alert("Success");
   });

   document.getElementById("name-input").addEventListener('change', (e) =>
   {
      const nameElement = document.getElementById("name-feedback");
      h.checkValidity(e.target, nameElement)
      if(nameElement.validity.valid === false)
      {
         nameElement.textContent = "Name cannot be less than 4 characters";//TODO I don't know why this isn't working
         // Todo Before adding these event listeners, everything worked fine, I had alerts, now they won't work
      }
   });

   document.getElementById("email-input").addEventListener('change', (e) =>
   {
      const emailElement = document.getElementById("email-feedback");
      h.checkValidity(e.target, emailElement)
   });

   document.getElementById("create-password-input").addEventListener('change', (e) =>
   {
      const createPasswordElement = document.getElementById("password-feedback");
      h.checkValidity(e.target, createPasswordElement)
   });

   document.getElementById("confirm-password-input").addEventListener('change', (e) =>
   {
      const confPasswordElement = document.getElementById("confirm-password-feedback");
      h.checkValidity(e.target, confPasswordElement)
   });
   document.getElementById("session-preference-dropdown").addEventListener("select", (e) =>
   {
      const selectElement = document.getElementById("session-preference-dropdown-feedback");
      h.checkValidity(e.target.checked, selectElement);

   });





});