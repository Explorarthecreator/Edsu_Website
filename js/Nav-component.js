class Navigatione extends HTMLElement{
    connectedCallBack(){
        this.innerHTML = `
            <nav>
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
                <button>
                    <a href="" class="green">
                        Sign In
                    </a>
                </button>
                <button>
                    <a href="" class="blue">
                        LMS
                    </a>
                </button>
            </nav>
        `
    }
}

customElements.define('Navigaton',Navigatione);

class Newsletter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="newsletter">
                <div class="newsletter-container">
                    <div class="newsletter-text">
                        <h1>Don't miss our weekly updates about academics information!</h1>
                    </div>
                    <div class="email">
                        <form action="#">
                            <div class="newsletter-input">
                                <input type="email" name="" id="" placeholder="Enter your email address">
                                <button>SUBSCRIBE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('app-newsletter', Newsletter);