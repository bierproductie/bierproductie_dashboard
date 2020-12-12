export { 
    recipe,
}

console.log("Loading recipe module!");

class recipe {
    constructor(name, maxSpeed, recommenedSpeed, optionName){
        if(optionName === undefined) {
            optionName = name;
        }

        this.name = name;
        this.dSpeed = document.getElementById("speed");
        this.maxSpeed = maxSpeed;
        this.recommenedSpeed = recommenedSpeed;

        const list = document.getElementById("recipe-list");

        this.li = document.createElement("li");
        this.li.classList.add("recipe-el");
        this.li.addEventListener("click", () => {
            this.updateView();
        });


        // Create top with the name
        const pTop = document.createElement("p");
        pTop.innerText = optionName.toUpperCase();
        pTop.classList.add("recipe-top");

        this.li.appendChild(pTop);


        // Create bottom div
        const div = document.createElement("div");
        div.classList.add("recipe-bottom");
        const pLeft = document.createElement("p");
        pLeft.innerText = "MAX SPEED: "+maxSpeed;
        pLeft.classList.add("recipe-left");
        div.appendChild(pLeft);
        let pRight = document.createElement("p");
        pRight.innerText = "RECOMMEND SPEED: "+recommenedSpeed;
        pRight.classList.add("recipe-right");
        div.appendChild(pRight);

        this.li.appendChild(div);

        list.appendChild(this.li);
    }

    updateView(){
        this.dSpeed.placeholder = "Recommend: "+this.recommenedSpeed;
        this.dSpeed.max = this.maxSpeed;

        //Markeding with html
        let remove = document.getElementsByClassName('marked');
        if (remove.length > 0){
            remove[0].classList.remove("marked");
        }
        this.li.classList.add("marked");
    }
}
