const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const opinionBox1 = document.querySelector('.carousel__opinions--js1');
const opinionBox2 = document.querySelector('.carousel__opinions--js2');
const opinionBox3 = document.querySelector('.carousel__opinions--js3');

let counter = 1;
const opinionBox = [];
class Opinion {
    constructor(name, stars, description) {
      this.name = name;
      this.stars = stars;
      this.description = description;
    }
  }

const opinion = [
    new Opinion("Janusz", 5, "Bardzo polecamy zajęcia z Panią Patrycją! Profesjonalnie, ze świetnym kontaktem z Dzieciakami."),
    new Opinion("Krystyna", 5, "Polecamy Lingua Academy! Pani Julia zawsze świetnie angażuje dzieci w lekcje, wychodzą zawsze zadowoleni i uśmiechnięci, nigdy znudzeni!"),
    new Opinion("Joanna", 5, "Hania jest bardzo zadowolona z zajęć, mówi, że Pani Julia jest bardzo miła i wszystko dobrze tłumaczy."),
    new Opinion("Grzegorz", 5, "Moje córki uwielbiają Panią Julię, jest bardzo miła, punktualna, zawsze przygotowana do zajęć."),
    new Opinion("Amelia", 5, "Serdecznie polecam!!! Od 5 lat moje dzieci najpierw córka teraz syn uczęszcza na zajęcia. Matura zdana na niemal 100 procent. "),
];

function insertOpinion(el) {
    opinionBox1.innerHTML = `
        <h3>${opinion[el].name}</h3>
        <p>${opinion[el].description}</p>
        <p>${opinion[el].stars}</p>
    `;
    opinionBox2.innerHTML = `
        <h3>${opinion[el+1].name}</h3>
        <p>${opinion[el+1].description}</p>
        <p>${opinion[el+1].stars}</p>
    `;
    opinionBox3.innerHTML = `
        <h3>${opinion[el+2].name}</h3>
        <p>${opinion[el+2].description}</p>
        <p>${opinion[el+2].stars}</p>
    `;
}

insertOpinion(counter);


nextButton.addEventListener('click', e => {
    if (counter < 2) {
        counter++;
        insertOpinion(counter)
    }
})

prevButton.addEventListener('click', e => {
    if (counter > 0) {
        counter--;
        insertOpinion(counter)
    }
})

