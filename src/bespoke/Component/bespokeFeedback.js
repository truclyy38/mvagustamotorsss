import React, {Component} from 'react'

const listCountry=[
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", 
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", 
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", 
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", 
    "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", 
    "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", 
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
    "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", 
    "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", 
    "Jamaica", "Japan", "Jordan", 
    "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan",
    "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", 
    "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", 
    "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", 
    "Oman", 
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", 
    "Qatar", 
    "Reunion", "Romania", "Russian Federation", "Rwanda", 
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", 
    "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", 
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", 
    "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", 
    "Wallis and Futuna Islands", "Western Sahara", 
    "Yemen", "Yugoslavia", 
    "Zambia", "Zimbabwe"
]

export default class Feedback extends Component{
    render(){
        return(
            <>
            <div className="area-feedback">
                <form>
                    <div className="title-input">GET IN TOUCH</div>
                    <div className="area-input">
                        <input className="inputText" id="inputText-firstName" type="text" required></input>
                        <label for="inputText-firstName">First Name</label>
                    </div>
                    <div className="area-input">
                        <input  className="inputText" id="inputText-lastName" type="text" required></input>
                        <label for="inputText-lastName">Last Name</label>
                    </div>
                    <div className="area-input">
                        <input  className="inputText" id="inputText-email" type="email" required></input>
                        <label for="inputText-email">Email</label>
                    </div>
                    <div className="area-input">
                        <input className="inputText" list="browsers" name="browser" id="browser" required></input>
                        <label for="browser">Country</label>
                        <datalist id="browsers">
                           {listCountry.map((country) => <option value={country}></option>)}
                        </datalist>
                    </div>  
                    <div className="area-input">
                        <input className="inputText" id="inputText-zipCode" type="text" required></input>
                        <label for="inputText-zipCode">Zip Code</label>
                    </div>
                    <div className="area-input area-input-cb">
                        <input className="input-cb-pri" id="input-cb-pri" type="checkbox"></input>
                        <label for="input-cb-pri">I agree to the <a href="#">Privacy Notice</a>*</label>
                    </div>
                    <div className="area-input area-input-cb">
                        <input className="input-cb-pro" id="input-cb-pro" type="checkbox"></input>
                        <label for="input-cb-pro">I agree to the Processing for marketing purposes</label>
                    </div>
                    <div className="area-input">
                        <button id="button-submit" type="submit">
                            <div className="button-submit">SUBMIT</div>
                        </button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}