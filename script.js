const cardGrid = document.querySelector(".cardGrid");
const cardTemplate = document.querySelector(".TemplateCard");

const data = [
  {
    id: 1,
    link: "./images/diet.jpg",
    heading: "Diet",
    about:
      "without having a proper intake of food and required vitamins and proteins ,whats the use of exercise;how is your body going to take all the stress caused by the exercises.\nso maintaining a proper diet is very important when you want to be fit and should try to reduce CRAVINGS on junk food.the following Youtube video gives an example of how one can maintain the diet",
  },
  {
    id: 2,
    link: "./images/equipments.jpg",
    heading: "Equipments",
    about:
      "Whats the use of learning a car when u dont have a car?\nIn the same way equipments plays a major role in keeping the body fit.\ni dont say one cant do exercises without having equipments , but having perfect equipments makes it more efficient",
  },
  {
    id: 3,
    link: "./images/daily-routine.jpg",
    heading: "Daily Routine",
    about:
      "Lunges. Challenging your balance is an essential part of a well-rounded exercise routine. ...\nPushups, Drop and give me 20!\nSquats\nStanding overhead dumbbell presses\nDumbbell rows\nSingle-leg deadlifts\nBurpees\nSide planks ",
  },
  {
    id: 4,
    link: "./images/pexels-julia-larson-6456237.jpeg",
    heading: "Trainer",
    about:
      "nothing can be achieved without having some one to guide us!!\n none can think everything can be acheived all by self efforts ; But who is going to share the experiences and guide past all the difficulties that are on the way....\na Teacher is the person who helps us to cross the bridge and help us suceed;\nthe same way here we need a trainer to help with the exercises and help decide what is more good.",
  },
];

const makeCardGrid = (data) => {
  const card = cardTemplate.content.cloneNode(true);
  const heading = card.querySelector("h2");
  heading.innerText = data.heading;
  const imgInfo = card.querySelector(".imageInfo");
  imgInfo.innerText = data.about;
  const imgUrl = card.querySelector(".imageCard");
  imgUrl.src = data.link;
  cardGrid.append(card);
};

data.forEach((data) => {
  makeCardGrid(data);
});
console.log(data);
