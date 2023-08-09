import React from "react";

function Content() {
    return <div className="textPlusImage">
        <div >
            <div className="black-buttons">
                <button className="black-btns"><i class="	fa fa-comment" ></i> VIA SUPPORT CHAT</button>
                <button className="black-btns">
                    <i class="fa fa-phone "></i> VIA CALL
                </button>
            </div>
            <button className="special-btn"> VIA EMAIL FORM</button>
            <div>
                <form>
                    <label for="fname">First name:</label><br />
                    <input type="text" id="fname" name="fname" /><br />
                    <label for="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" /><br />
                    <label for="text">Text:</label><br />
                    <textarea id="textarea"></textarea>
                </form>
            </div>
            <button className="submit-btn">SUBMIT</button>
        </div>
        <div>
            <img src="./images/contact-us.png" alt="Contact Us Image" />
        </div>
    </div>;
}

export default Content;