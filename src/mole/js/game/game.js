class Game {
    constructor(element,count) {
        this._element = element;
        this.onclickelement();
        this.addHoles(count);
        this.startMove(count);
    }
    onclickelement(){
        this._element.addEventListener('click',(e)=>{
            if (e.target.classList.value.includes('goblin')){
                this.success()
            }
            else {
                this.fail()
            }
        })
    }
    addHoles(count) {
        for (let i = 0; i < count*count; i++) {
            const item = document.createElement('div');
            item.classList.add('hole');
            this._element.insertAdjacentElement('afterBegin',item)
        }

    }
    startMove(count) {
        setInterval(() =>{
            const number = Math.round(Math.random() * count*count)
            const items = document.querySelectorAll('.hole')
            const goblin = document.querySelector('.goblin')
            if (goblin !== null) {
                goblin.classList.remove('goblin')
            }
            items[number].classList.add('goblin')
        },1000)
    }
    success() {
        const item = document.querySelector('.success')
        item.textContent=Number(item.textContent)+1
    }
    fail() {
        const item = document.querySelector('.fail')
        item.textContent =Number(item.textContent)+1
        if (item.textContent>=5) {
           alert('Проигрышь') 
           this.reset()
        }
    }
    reset(){
        document.querySelector('.success').textContent = 0;
        document.querySelector('.fail').textContent = 0;
    }
}