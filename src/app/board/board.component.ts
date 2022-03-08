import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  alveusBoard = [
    {
      imgSrc: "../../assets/board/alveus/animalQuest.png",
      imgAltText: "Animal quest banner",
      title: "New Animal Quest"
    },
    {
      imgSrc: "../../assets/board/alveus/jalapenoFood.png",
      imgAltText: "Jalapeno next to grain",
      title: "Jalapeno Complaining About Being Fed"
    },
    {
      imgSrc: "../../assets/board/alveus/waterBucket.png",
      imgAltText: "Water bucket",
      title: "Flooded the Water Bucket"
    },
    {
      imgSrc: "../../assets/board/alveus/stompyEatAceroFood.png",
      imgAltText: "Stompy eating acero's food",
      title: "Stompy Eating Another Animal's Food"
    },
    {
      imgSrc: "../../assets/board/alveus/pogU.png",
      imgAltText: "PogU emote",
      title: "New Ambassador"
    },
    {
      imgSrc: "../../assets/board/alveus/POBox.png",
      imgAltText: "Maya doing a P.O. box opening stream",
      title: "P.O. Box Opening Time"
    },
    {
      imgSrc: "../../assets/board/alveus/weighProduce.png",
      imgAltText: "Maya weighing produce",
      title: "Guessed Weight of Produce Correctly"
    },
    {
      imgSrc: "../../assets/board/alveus/sirenVoiceLine.png",
      imgAltText: "Siren",
      title: "Siren Voice Line Practice"
    },
    {
      imgSrc: "../../assets/board/alveus/aceroClingy.png",
      imgAltText: "Maya petting acero",
      title: "Acero Being Clingy"
    },
    {
      imgSrc: "../../assets/board/alveus/quailButchering.png",
      imgAltText: "Maya butching quail",
      title: "Quail Butchering Time"
    },
    {
      imgSrc: "../../assets/board/alveus/mayaDegree.png",
      imgAltText: "Diploma next to a pile of dirt",
      title: "Maya Talks About Her Dirt Degree"
    },
    {
      imgSrc: "../../assets/board/alveus/georgieCricket.png",
      imgAltText: "Georgie the Bullfrog",
      title: "Georgie Eats a Cricket on his First Try"
    },
    {
      imgSrc: "../../assets/board/alveus/feelsDankMan.png",
      imgAltText: "FeelsDankMan emote",
      title: "Maya says \"I am the executive director of this organizaiton\""
    },
    {
      imgSrc: "../../assets/board/alveus/pepoTrip.png",
      imgAltText: "PepoTrip emote",
      title: "Stream Lag"
    },
    {
      imgSrc: "../../assets/board/alveus/stompyBite.png",
      imgAltText: "stompyWeird emote",
      title: "Stompy Bites Maya"
    },
    {
      imgSrc: "../../assets/board/alveus/stompyBath.png",
      imgAltText: "Stompy taking a bath",
      title: "Stompy Bath Time"
    },
    {
      imgSrc: "../../assets/board/alveus/aceroGrain.png",
      imgAltText: "Acero eating in his grain bucket",
      title: "Acero Tries to Dump his Grain"
    },
    {
      imgSrc: "../../assets/board/alveus/mayaEatGrain.png",
      imgAltText: "Animal Grain",
      title: "Maya Eats Animal Grain"
    },
    {
      imgSrc: "../../assets/board/alveus/mayaShy.png",
      imgAltText: "PepoShy emote",
      title: "Maya Being Self-Conscious Around Contractors"
    },
    {
      imgSrc: "../../assets/board/alveus/aceroBlanket.png",
      imgAltText: "Acero wearing his blanket",
      title: "Acero Blanket Time"
    },
    {
      imgSrc: "../../assets/board/alveus/nuggetSteal.png",
      imgAltText: "Nugget and Oliver",
      title: "Nugget Steals Oliver's Treats"
    },
    {
      imgSrc: "../../assets/board/alveus/mouseSkinning.png",
      imgAltText: "Maya skinning a mouse",
      title: "Mouse Skinning Time"
    },
    {
      imgSrc: "../../assets/board/alveus/popSmoke.png",
      imgAltText: "Pop Smoke next to an Amazon Alexa",
      title: "\"Alexa, Play Pop Smoke\""
    },
    {
      imgSrc: "../../assets/board/alveus/bettleAnnoying.png",
      imgAltText: "Bettle the goat",
      title: "Bettle Getting in Maya's Way"
    },
    {
      imgSrc: "../../assets/board/alveus/poopScooping.png",
      imgAltText: "Maya Scooping Poop",
      title: "Poop Scooping Time"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
