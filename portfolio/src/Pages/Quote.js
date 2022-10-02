import quote from "./resources/quote.png";

const Quote = (props) => {
    

    return (
        <div style={{ display: "block", width: "100%", margin:"2rem 0", padding:".5rem" }}>
        <span
            style={{
                display: "inline-flex",
            }}
        >
            <img
                src={quote}
                alt="quotation"
                style={{
                    width: "3rem",
                    height: "2.5rem",
                    
                }}
            ></img>
            <em style={{marginLeft:".5rem"}}> 
                {props.quote}
            </em>
        </span>
    </div>
    );
};

export default Quote;
