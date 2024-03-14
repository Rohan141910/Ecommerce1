function Signup()
{
    return(
        <div className="centre">
            <h1>Signup</h1>
            <form className="form-tag">
                <input type="text" placeholder="First Name" required></input>
                <input type="text" placeholder="Last  Name" required></input>
                <input type="email" placeholder="Email" required></input>
                <input type="text" placeholder="Password" required></input>
                <input type="password" placeholder="Re-Password" required></input>
                <button className="submit-button" type="submit">Submit</button>
                
            </form>
            <div className="login-with">
                <button className="btn ggl">Login With Email</button>
                <button className="btn call">Login With Phone no</button>
            </div>
        </div>
    )
}
export default Signup