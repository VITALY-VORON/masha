import i1 from "../assets/Rectangle6.png"
import i2 from "../assets/Rectangle7.png"
import i3 from "../assets/Rectangle3.png"
import i4 from "../assets/Rectangle8.png"
import i5 from "../assets/Rectangle9.png"

const Photo = () => {
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
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <img src={i3} alt="photo" />
                <img src={i4} alt="photo" />
                <img src={i5} alt="photo" />
            </div>
        </div>
    );
}

export default Photo;