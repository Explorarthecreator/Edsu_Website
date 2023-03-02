class Navigatione extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <nav class="nav-desktop">
                <a href="index.html">
                    <div class="logo">
                        <img src="images/nav/logo 1.png" alt="">
                        <h3>
                            Edo State <br> University Uzairue
                        </h3>
                    </div>
                </a>
                <ul>
                    <li >
                        <a href="index.html" class="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="about.html">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="program.html">
                            Programs
                        </a>
                    </li>
                    <li>
                        <a href="activity.html">
                            Activity
                        </a>
                    </li>
                    <li>
                        <a href="contact-us.html">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="news.html">
                            News
                        </a>
                    </li>
                </ul>
                <button class="button">
                    <a href="#" class="green">
                        Sign In
                    </a>
                </button>
                <button class="button">
                    <a href="#" class="blue">
                        LMS
                    </a>
                </button>
            </nav>

            <nav class="nav-mobile">
                <div class="first-nav">
                    <a href="index.html">
                        <div class="logo">
                            <img src="images/nav/logo 1.png" alt="">
                            <h3>
                                Edo State <br> University Uzairue
                            </h3>
                        </div>
                    </a>
                    <button class="button">
                        <a href="#" class="green">
                            Sign In
                        </a>
                    </button>
                    <button class="button">
                        <a href="#" class="blue">
                            LMS
                        </a>
                    </button>
                </div>
                <ul>
                    <li >
                        <a href="index.html" class="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="about.html">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="program.html">
                            Programs
                        </a>
                    </li>
                    <li>
                        <a href="activity.html">
                            Activity
                        </a>
                    </li>
                    <li>
                        <a href="contact-us.html">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="news.html">
                            News
                        </a>
                    </li>
                </ul>
            </nav>
        `
    }
}

customElements.define('app-navigaton',Navigatione);

