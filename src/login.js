import Google from "../img/google.png"
import Facebook from "../img/Facebook.png"
import Github from "../img/Github.png"

const login = () => {
    const google = () => {
        window.open("http://localhost:3000/auth/google", "_self")
    }
    return ( <
        div >
        <
        h1 className = "loginTitle" > Ieslt intelligent < /h1> <
        div className = " wrapper" >
        <
        div className = "left" >
        <
        div className = "loginButton Fb" >
        <
        img scr = { Facebook }
        alt = ""
        className = "icon" / >
        Facebook <
        /div> <
        div className = " loginButton GG" >
        <
        img scr = { Google }
        alt = ""
        className = "icon" / >
        Google <
        /div> < /
        div > <
        div claaName = "right" >
        <
        input type = "text"
        paceholder = "Ussername" / >
        <
        input type = "text"
        placeholder = "password" / >
        <
        button claaName = "submit" > Login < /button> </div >
        <
        /div>  <
        /div>
    );
};
export default login;