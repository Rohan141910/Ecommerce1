
function Contact()
{
    return(
        <div className="container">
  <div style="text-align:center">
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row"></div>
    <div class="column">
      <img src="map.jpg" style="width:100%"></img>
    </div>
    <div class="column">
      <form></form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">India</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <input type="submit" value="Submit"></input>
      
    </div>
  </div>
    )
}
export default Contact;