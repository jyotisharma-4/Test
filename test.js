const event={
    name:"birthday party",
    guestlist:['jyoti','sheetal'],
    //ES6 method def.
    printguestlist(){
        console.log('guest list '+this.name)
        this.guestlist.forEach((guest)=>{
        console.log(guest+' is attending '+this.name)
        })
    }
}
event.printguestlist();
