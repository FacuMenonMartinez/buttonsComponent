import ButtonComponent from "./Buttons";
import 'material-symbols';
import "./app.css"

const App = () => {

    return (

        <section>
            <header>
                <h1 className="title">Buttons</h1>
            </header>
            <main className="buttonsContainer">
                <ButtonComponent typeButton={"Default"} />
                <ButtonComponent typeButton={"Disabled"} />
                <ButtonComponent typeButton={"Hovered"} />
                <ButtonComponent typeButton={"Focus"} />
                <ButtonComponent typeButton={"No Shadow"} />
                <ButtonComponent typeButton={"Icon Left"} iconType={"shopping_cart"} alignIcon={'Left'} />
                <ButtonComponent typeButton={"Icon Left"} iconType={"local_mall"} alignIcon={'Left'} />
                <ButtonComponent typeButton={"Icon Left"} iconType={"remove_shopping_cart"} alignIcon={'Left'} />
                <ButtonComponent typeButton={"Icon Right"} iconType={"shopping_cart"} alignIcon={'Right'} />
                <ButtonComponent typeButton={"Icon Right"} iconType={"local_mall"} alignIcon={'Right'} />
                <ButtonComponent typeButton={"Icon Right"} iconType={"add_shopping_cart"} alignIcon={'Right'} />
                <ButtonComponent typeButton={"Big"} />
                <ButtonComponent typeButton={"Medium"} />
                <ButtonComponent typeButton={"Small"} />
                <ButtonComponent typeButton={"Red"} />
                <ButtonComponent typeButton={"Green"} />
                <ButtonComponent typeButton={"Blue"} />
                <ButtonComponent typeButton={"Pink"} />
                <ButtonComponent typeButton={"White"} />
                <ButtonComponent typeButton={"Dark"} />
            </main>
            <footer>
                <h4>Created by <a href="https://devchallenges.io/portfolio/FacuMenonMartinez">Facu Menon Martinez</a> -devChallenges.io</h4>
            </footer>
        </section>


    )
}

export default App;