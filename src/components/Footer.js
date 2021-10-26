const Footer = (props) => {
    //inline style for footer nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "10px",
        width: "100%",
        margin: "auto",
        backgroundColor: "rgb(30, 181, 192)"
      };
    return (
        <>
        <nav style={navStyle}>
            <a target="#" href="https://github.com/Nellie7190/portfolio-frontend">GitHub</a>
            <a target="#" href="https://www.linkedin.com/in/chanel-bosch-nyc/">linkedIn</a>
            </nav>
        </>
    )
};

export default Footer;