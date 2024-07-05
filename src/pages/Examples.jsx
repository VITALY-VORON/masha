import i1 from "../assets/Rectangle 13.png"
import i2 from "../assets/Rectangle 14.png"
import i3 from "../assets/Rectangle 15.png"
import i4 from "../assets/Rectangle 16.png"
import i5 from "../assets/Rectangle 17.png"

const Examples = () => {
    return ( 
        <div style={{
            padding: 20,
            paddingTop: 0,
            display: "flex",
            flexDirection: "column",
            gap: 12
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <img src={i1} alt="photo" />
                <img src={i2} alt="photo" />
                <img src={i3} alt="photo" />
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <img src={i4} alt="photo" />
                <img src={i5} alt="photo" />
            </div>
        </div>
     );
}
 
export default Examples;