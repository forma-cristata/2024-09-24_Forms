export {hideAllergyInput, hideSuccessMessage, alertIfPasswordsDontMatch, createGenderRadioButtons, createDietPreferenceCheckboxes, showAllergyInput, fillSessionPreferenceSelections, checkValidity};

const GENDER_OPTIONS = ["Female", "Male", "Non-binary", "Prefer not to say"];
const DIETARY_RESTRICTION_OPTIONS = ["Vegan", "Vegetarian", "Pescatarian", "Gluten-Free", "Allergy"]; //TODO allergy pop up if allergy selected
const SESSION_PREFERENCE_OPTIONS = ["Morning", "Afternoon", "Full Day"];
const SESSION_FIELD = document.getElementById("session-preference-dropdown");
function miscFormatting()
{
}
function hideAllergyInput()
{
    document.querySelector("#dietary-preferences-field label").style.display = "hidden";
    document.getElementById("dietary-preferences-allergy-input").style.display = "hidden";
}

function hideSuccessMessage()
{
    const successMessage = document.getElementById("success-message-field");
    successMessage.style.display = "none";
}



function alertIfPasswordsDontMatch()
{
    const setPassword = document.getElementById("create-password-input");
    const confirmPassword = document.getElementById("confirm-password-input");

    if(setPassword.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    }
    else{
        confirmPassword.setCustomValidity("");
    }
}

function createGenderRadioButtons()
{
    const genderField = document.getElementById("gender-field")



    for(let i = 0; i < GENDER_OPTIONS.length; i++)
    {
        let d = document.createElement("div");
        d.className = "form-check";
        genderField.appendChild(d);

        let rb = document.createElement("input");
        rb.type = "radio";
        rb.name = "gender-radios"
        rb.className = "form-check-input";
        rb.id=`gender-radio-${i}`;
        rb.value = `${GENDER_OPTIONS[i]}`;
        rb.required = true;
        rb.id = GENDER_OPTIONS[i];

        let lr = document.createElement("label");
        lr.for = `gender-radio-${i}`;
        lr.class="form-check-label"
        
        lr.innerText = GENDER_OPTIONS[i];

        d.appendChild(rb);
        d.appendChild(lr);
        d.appendChild(document.createElement("br"));
    }

    document.querySelector("#gender-field p").style.marginBottom = "0.2rem";
    document.querySelector("#gender-field p").style.marginTop = "1rem";
    genderField.style.marginBottom = "1rem";
}

function createDietPreferenceCheckboxes()
{
    const dietaryPreferencesField = document.getElementById("d-p-checkboxes-field")

    let p = document.createElement("div")
    dietaryPreferencesField.appendChild(p);

    for(let i = 0; i < DIETARY_RESTRICTION_OPTIONS.length; i++)
    {
        let cb = document.createElement("input");
        cb.type = "checkbox";
        cb.className ="form-check-input"
        cb.id = DIETARY_RESTRICTION_OPTIONS[i];

        let lc = document.createElement("label");
        lc.for = DIETARY_RESTRICTION_OPTIONS[i];
        lc.className ="form-check-label";
        lc.innerText = DIETARY_RESTRICTION_OPTIONS[i];

        p.appendChild(cb);
        p.appendChild(lc);
        p.appendChild(document.createElement("br"));
    }

    document.querySelector("#dietary-preferences-field p").style.marginBottom = "0.2rem";
    document.querySelector("#dietary-preferences-field p").style.marginTop = "1rem";
    dietaryPreferencesField.style.marginBottom = "1rem";


}

function showAllergyInput(el)
{

    if(el.checked)
    {
        document.querySelector("#dietary-preferences-field label").style.display = "inline";
        document.getElementById("dietary-preferences-allergy-input").style.display = "block";

        document.getElementById("dietary-preferences-allergy-input").style.marginBottom = "1rem";
        document.getElementById("dietary-preferences-allergy-input").required = true;

    }
}

function fillSessionPreferenceSelections()
{
    for(let i = 0; i < SESSION_PREFERENCE_OPTIONS.length; i++)
    {
        let option = new Option(`${SESSION_PREFERENCE_OPTIONS[i]}`);
        option.value = `${i}`;
        SESSION_FIELD.options.add(option);
    }
}

function checkValidity(element, feedbackElement)
{
    if(element.validity.valid)
    {
        feedbackElement.classList.add('valid');
        feedbackElement.classList.remove("invalid");
    }
    else
    {
        feedbackElement.classList.add("invalid");
        feedbackElement.classList.remove("valid");
    }
}

