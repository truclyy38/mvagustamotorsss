export const SignUpToStayForm = () =>{
    return (
      <>
        <div className="su-ts-lout">
          <form>
            <h3>SIGN UP TO STAY UPDATED</h3>
            <div className="form-group">
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="form-group">
              <label for="Country">
                <select>
                  <option>RUSH</option>
                  <option>BRUTALE</option>
                  <option>DRAGSTER</option>
                  <option>F3</option>
                  <option>SUPERVELOCE</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label for="TypeMotor">
                <select>
                  <option>Vietnam</option>
                  <option>Italia</option>
                  <option>Australia</option>
                  <option>America</option>
                  <option>England</option>
                </select>
              </label>
            </div>
            <div className="form-group fg-cb">
              <input type="checkbox" name="accept-privacy" required></input>
              <span>
                I agree to the <a href>Privacy Notice</a> *
              </span>
            </div>
            <div className="form-group fg-cb">
              <input type="checkbox" name="accept-prMarketing" required></input>
              <span>I agree to the Processing for marketing purpose</span>
            </div>
            <div className="form-group submit-re-bt">
              <button type="submit">
                <span>SUBMIT</span>
              </button>
            </div>
          </form>
        </div>
      </>
    );
}