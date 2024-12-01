// class in js
// class is like mold for real objects
// constructor call before kuch
class Human {
    constructor(name,lifespan,gender,color,weight,height){
        this.name = name
        this.lifespan = lifespan
        this.gender = gender
        this.color = color
        this.weight = weight
        this.height = height

    }
    walking(){
        return `${this.name} is walking at speed of 25km/h`
    }
    running(){
        return`${this.name} is running at speed of 50km/h`
    }
    sleeping(){
        return`${this.name} is sleeping since 9 hours`
    }
    eating(){
        return`${this.name} is eating at speed of light`
    }
}
class Superhuman extends Human {
    constructor(name,lifespan,gender,color,weight,height,health){
    super(name,lifespan,gender,color,weight,height,health)
        this.health = health;
    
}
}
let Aditya = new Human("Aditya",105,"male","bright",75,"6'2");
let Aditya1 = new Superhuman("shaktiman",5000,"Ladka","Kallu",200,"7'9","infinite")
console.log(Aditya1);
console.log(Aditya1.walking());

