import React from "react";
import Form from "./components/form";
import TextCard from "./components/text card";
import "./home.css";
import { connect } from "react-redux";

const Home = ({ordenedTextPronouns, ordenedText, text}) => {
  return (
    <div className="home__pageContainer">
      <div className="home__firstContainer">
        <div className="textOne__div">
          <p className="textOne__content">
            Essa ferramenta permite a transformação do texto escrito para um
            recorte poético que, a partir, da ordenação das palavras em ordem
            alfabética surgere um olhar novo sobre o texto.
          </p>
          <p className="textOne__content">
            Mais do que a ordenação das palavras, essa ferramenta junta as
            pralavras adiante das preposições como 'da', 'do', 'com', 'por' para
            dar um sentido mais coeso a ordenação do texto.
          </p>
        </div>
        <Form />
      </div>
      <div className="home__secondContainer"> 
        {text &&
        <TextCard className="home__thirdContainer" title="Texto original" text={text} row="1"/>
        }
        {ordenedTextPronouns &&
        <TextCard className="home__thirdContainer" title="Texto ornedado com as preposições ajuntadas" text={ordenedTextPronouns} row="2" />
        }
        {ordenedText &&
        <TextCard className="home__thirdContainer" title="Texto ornedado" text={ordenedText} row="3"/>
        }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ordenedTextPronouns: state.text.ordenedTextPronouns,
    ordenedText: state.text.ordenedText,
    text: state.text.text
  }
};

export default connect(mapStateToProps, null)(Home);
