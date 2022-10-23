class Navigatione extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <nav class="nav">
                <div class="logo">
                    <img src="images/nav/logo 1.png" alt="">
                    <h3>
                        Edo State <br> University Uzairue
                    </h3>
                </div>
                <ul>
                    <li >
                        <a href="" class="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Programs
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Activity
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Students
                        </a>
                    </li>
                </ul>
                <button class="button">
                    <a href="" class="green">
                        Sign In
                    </a>
                </button>
                <button class="button">
                    <a href="" class="blue">
                        LMS
                    </a>
                </button>
            </nav>
        `
    }
}

customElements.define('app-navigaton',Navigatione);

