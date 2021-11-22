import EYE_ICON from "./assets/eye-icon.png";
import EYE_ICON_HIDE from "./assets/eye-icon-hide.png";
import contact_form_image from "./assets/01contactForm.png";
import debt_free_calculator_image from "./assets/02debtFreeCalculator.png";
import random_movies_image from "./assets/03randomMovies.png";
import registration_form_image from "./assets/04registrationForm.png";
import survey_form_image from "./assets/05surveyForm.png";

export const EYE_ICONS = {
  SHOW: EYE_ICON,
  HIDE: EYE_ICON_HIDE,
};

export const PASSWORD_RULES = `
Password must be 8-20 characters, including at least one capital letter, at least one small letter,
one number and one special character -!@#$%^&*()_+
`;

export const accounts = ["a@a.com", "b@b.com", "c@c.com"];

export const items = [
  {
    id: 1,
    title: "Contact Form",
    desc: "Contact form for family and friends",
    price: 25,
    image: contact_form_image,
    quantity: 2,
  },
  {
    id: 2,
    title: "Debt Free Calculator",
    desc: "Interest and Capital calculator",
    price: 55,
    image: debt_free_calculator_image,
    quantity: 3,
  },
  {
    id: 3,
    title: "Random Movies API",
    desc: "Get random movies",
    price: 30,
    image: random_movies_image,
    quantity: 4,
  },
  {
    id: 4,
    title: "Registration Form",
    desc: "Registration form for your web page",
    price: 25,
    image: registration_form_image,
    quantity: 5,
  },
  {
    id: 5,
    title: "Survey Form",
    desc: "Survey form for your employees",
    price: 25,
    image: survey_form_image,
    quantity: 1,
  },
];

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
