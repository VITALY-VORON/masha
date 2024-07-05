import i1 from "../assets/Rectangle10.png"
import i2 from "../assets/Rectangle11.png"
import "./styles.css"

const About = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "space-around"
        }}>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 20
            }}>
                <h1>Обо мне</h1>
                <img src={i1} alt="" />
            </div>
            <span>
                Меня зовут Мария, я
                <p>контент фотограф, </p>
                <p>снимаю на iPhone и </p>
                <p>профессиональную </p>
                <p>камеру, создаю </p>
                <p>продающие визуалы, </p>
                <p>которые увеличивают </p>
                <p>прибыль клиентов </p>
                <p>работаю в сферах</p>
                <p>fashion, home, nutrition </p>
                <p>& media</p>
            </span>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 20
            }}>
                <img src={i2} alt="" />
                <button>Мои работы</button>
            </div>
        </div>
    );
}

export default About;