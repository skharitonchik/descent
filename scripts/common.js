class Common {
    constructor(wrapper) {
        this.wrapper = wrapper
    }

    drawMenu() {
        this.wrapper.insertAdjacentHTML('afterbegin', `   
         <header>
                <nav>
                    <ul>
                        <li><a href="companies.html">Company</a></li>
                        <li><a href="monsters.html">Monsters</a></li>
                        <li><a href="lieutenants.html">Lieutenants</a></li>
                        <li><a href="companies.html">Overlord</a></li>
                        <li><a href="companies.html">Heroes</a></li>
                    </ul>
                </nav>
         </header>`)
    }
}