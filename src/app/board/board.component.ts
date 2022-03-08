import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  alveusBoard = [
    {
      title: "New Animal Quest",
      imgSrc: "../../assets/board/alveus/animalQuest.png",
      imgAltText: "Animal quest banner",
      clicked: false
    },
    {
      title: "Jalapeno Complaining About Being Fed",
      imgSrc: "../../assets/board/alveus/jalapenoFood.png",
      imgAltText: "Jalapeno next to grain",
      clicked: false
    },
    {
      title: "Flooded the Water Bucket",
      imgSrc: "../../assets/board/alveus/waterBucket.png",
      imgAltText: "Water bucket",
      clicked: false
    },
    {
      title: "Stompy Eating Another Animal's Food",
      imgSrc: "../../assets/board/alveus/stompyEatAceroFood.png",
      imgAltText: "Stompy eating acero's food",
      clicked: false
    },
    {
      title: "New Ambassador",
      imgSrc: "../../assets/board/alveus/pogU.png",
      imgAltText: "PogU emote",
      clicked: false
    },
    {
      title: "P.O. Box Opening Time",
      imgSrc: "../../assets/board/alveus/POBox.png",
      imgAltText: "Maya doing a P.O. box opening stream",
      clicked: false
    },
    {
      title: "Guessed Weight of Produce Correctly",
      imgSrc: "../../assets/board/alveus/weighProduce.png",
      imgAltText: "Maya weighing produce",
      clicked: false
    },
    {
      title: "Siren Voice Line Practice",
      imgSrc: "../../assets/board/alveus/sirenVoiceLine.png",
      imgAltText: "Siren",
      clicked: false
    },
    {
      title: "Acero Being Clingy",
      imgSrc: "../../assets/board/alveus/aceroClingy.png",
      imgAltText: "Maya petting acero",
      clicked: false
    },
    {
      title: "Quail Butchering Time",
      imgSrc: "../../assets/board/alveus/quailButchering.png",
      imgAltText: "Maya butching quail",
      clicked: false
    },
    {
      title: "Maya Talks About Her Dirt Degree",
      imgSrc: "../../assets/board/alveus/mayaDegree.png",
      imgAltText: "Diploma next to a pile of dirt",
      clicked: false
    },
    {
      title: "Georgie Eats a Cricket on his First Try",
      imgSrc: "../../assets/board/alveus/georgieCricket.png",
      imgAltText: "Georgie the Bullfrog",
      clicked: false
    },
    {
      title: "Maya says \"I am the executive director of this organizaiton\"",
      imgSrc: "../../assets/board/alveus/feelsDankMan.png",
      imgAltText: "FeelsDankMan emote",
      clicked: false
    },
    {
      title: "Stream Lag",
      imgSrc: "../../assets/board/alveus/pepoTrip.png",
      imgAltText: "PepoTrip emote",
      clicked: false
    },
    {
      title: "Stompy Bites Maya",
      imgSrc: "../../assets/board/alveus/stompyBite.png",
      imgAltText: "stompyWeird emote",
      clicked: false
    },
    {
      title: "Stompy Bath Time",
      imgSrc: "../../assets/board/alveus/stompyBath.png",
      imgAltText: "Stompy taking a bath",
      clicked: false
    },
    {
      title: "Acero Tries to Dump his Grain",
      imgSrc: "../../assets/board/alveus/aceroGrain.png",
      imgAltText: "Acero eating in his grain bucket",
      clicked: false
    },
    {
      title: "Maya Eats Animal Grain",
      imgSrc: "../../assets/board/alveus/mayaEatGrain.png",
      imgAltText: "Animal Grain",
      clicked: false
    },
    {
      title: "Maya Being Self-Conscious Around Contractors",
      imgSrc: "../../assets/board/alveus/mayaShy.png",
      imgAltText: "PepoShy emote",
      clicked: false
    },
    {
      title: "Acero Blanket Time",
      imgSrc: "../../assets/board/alveus/aceroBlanket.png",
      imgAltText: "Acero wearing his blanket",
      clicked: false
    },
    {
      title: "Nugget Steals Oliver's Treats",
      imgSrc: "../../assets/board/alveus/nuggetSteal.png",
      imgAltText: "Nugget and Oliver",
      clicked: false
    },
    {
      title: "Mouse Skinning Time",
      imgSrc: "../../assets/board/alveus/mouseSkinning.png",
      imgAltText: "Maya skinning a mouse",
      clicked: false
    },
    {
      title: "\"Alexa, Play Pop Smoke\"",
      imgSrc: "../../assets/board/alveus/popSmoke.png",
      imgAltText: "Pop Smoke next to an Amazon Alexa",
      clicked: false
    },
    {
      title: "Bettle Getting in Maya's Way",
      imgSrc: "../../assets/board/alveus/bettleAnnoying.png",
      imgAltText: "Bettle the goat",
      clicked: false
    },
    {
      title: "Poop Scooping Time",
      imgSrc: "../../assets/board/alveus/poopScooping.png",
      imgAltText: "Maya Scooping Poop",
      clicked: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
