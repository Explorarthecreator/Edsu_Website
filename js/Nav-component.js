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
                    <li id="show">
                        <a href="contact-us.html" >
                            Admissions
                        </a>
                        <div class="dropdown-content">
                            <button href="#" class="main-contents undergraduate">
                                UnderGraduate
                                <div class="dropdown-content1">
                                    <a href="#">Admission Details</a>
                                    <a href="#">School Fees</a>
                                    <a href="#">Accomodation Details</a>
                                    <a href="#">Admission Requirement</a>
                                    <a href="#">Register & Apply</a>
                                    <a href="#">Transfer Admission</a>
                                </div>
                            </button>
                            <button href="#" class="main-contents conversion">
                                Conversion Programme
                                <div class="dropdown-content2">
                                    <a href="#">Register & Apply</a>
                                    <a href="#">Login</a>
                                </div>
                            </button>
                            <button class="main-contents post-graduate">
                                Post Graduate
                                <div class="dropdown-content3">
                                    <a href="#">Register & Apply</a>
                                    <a href="#">Login</a>
                                </div>
                            </button>
                        </div>
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
                        Library
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
                            Library
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

