import i1 from "../assets/Rectangle 18.png"
import i2 from "../assets/Rectangle 19.png"
import i3 from "../assets/Rectangle 20.png"
import i4 from "../assets/Rectangle 21.png"

const Coast = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 50
        }}>
            <div style={{
                display: 'flex',
                justifyContent: "space-around",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20
                }}>
                    <img src={i1} alt="" />
                    <span>
                        Личная
                        <p>фотосессия на </p>
                        <p>весь день-30.000р./на </p>
                        <p>3 часа-7.000р.</p>
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20
                }}>
                    <img src={i2} alt="" />
                    <span>
                        Личная
                        <p>фотосессия на </p>
                        <p>весь день-30.000р./на </p>
                        <p>3 часа-7.000р.</p>
                    </span>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "space-around"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20
                }}>
                    <img src={i3} alt="" />
                    <span>
                        Личная
                        <p>фотосессия на </p>
                        <p>весь день-30.000р./на </p>
                        <p>3 часа-7.000р.</p>
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20
                }}>
                    <img src={i4} alt="" />
                    <span>
                        Личная
                        <p>фотосессия на </p>
                        <p>весь день-30.000р./на </p>
                        <p>3 часа-7.000р.</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Coast;