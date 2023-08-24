import './index.css'
const Navbar =()=>{
return(
    <div className='navbar'>
        <h2 className='logo'>Foodie</h2>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Offer</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">About</a></li>
        </ul>
        <h4>Login</h4>
        <button>Sign up</button>
    </div>
)

}
export default Navbar