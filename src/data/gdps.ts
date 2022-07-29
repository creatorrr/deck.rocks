// data/gdps.ts

import _ from "lodash";

const raw_us_states_data = {
  states: [
    "California",
    "Texas",
    "New York",
    "Florida",
    "Illinois",
    "Pennsylvania",
    "Ohio",
    "Georgia",
    "New Jersey",
    "Washington",
    "North Carolina",
    "Massachusetts",
    "Virginia",
    "Michigan",
    "Maryland",
    "Colorado",
    "Indiana",
    "Tennessee",
    "Minnesota",
    "Arizona",
    "Wisconsin",
    "Missouri",
    "Connecticut",
    "South Carolina",
    "Oregon",
    "Louisiana",
    "Alabama",
    "Kentucky",
    "Utah",
    "Iowa",
    "Oklahoma",
    "Nevada",
    "Kansas",
    "Washington",
    "Nebraska",
    "Arkansas",
    "Mississippi",
    "New Mexico",
    "New Hampshire",
    "Idaho",
    "Hawaii",
    "West Virginia",
    "Delaware",
    "Maine",
    "Rhode Island",
    "North Dakota",
    "South Dakota",
    "Montana",
    "Alaska",
    "Wyoming",
    "Vermont",
  ],
  gdps: [
    3007187.7, 1775587.8, 1724759.1, 1106035.5, 858366.9, 771897.9, 677561.2,
    622627.8, 618579.3, 604253.8, 589829, 582476.8, 549535.8, 515119.9,
    410674.7, 382584.7, 375336.7, 369574.3, 373739.3, 373719, 337714, 329367.2,
    276422.9, 244881.7, 243776.8, 235437.4, 226896.5, 212539.6, 197561.9,
    194267.6, 188056.6, 170943.8, 175141.8, 144554.8, 133439, 130750.7,
    113845.7, 98472.1, 87621, 83821.6, 82884.6, 75855, 75786.5, 69271.8,
    60556.3, 54854.2, 54789.4, 51508.8, 49820, 36323.5, 33435,
  ],
};

export const us_states = _(raw_us_states_data.states)
  .zip(raw_us_states_data.gdps)
  .fromPairs()
  .value();

export const countries = {
  Tuvalu: 39.73,
  "Marshall Islands": 204.17,
  Dominica: 496.7,
  Seychelles: 1497.9,
  Bhutan: 2842.1,
  Maldives: 4865.54,
  Monaco: 7185.6,
  Fiji: 9106.4,
  "El Salvador": 26286.12,
  Nepal: 42413.23,
  Ecuador: 108398.01,
  Luxembourg: 152091.32,
  Singapore: 379071.88,
  Israel: 520700.28,
  Switzerland: 750360.19,
  "South Korea": 1801408.43,
  Italy: 2190214.19,
  Japan: 5391041.37,
};

export default {
  ...us_states,
  ...countries,
};
