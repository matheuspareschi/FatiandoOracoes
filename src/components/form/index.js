import React, { useEffect, useState } from "react";
import "./form.css";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { Creators as textActions } from "../../app/actions/text";

const Form = ({ addOrdenedTextPronouns, addOrdenedText, addText, ereaseAll }) => {
  const pronouns = [
    "de",
    "da",
    "do",
    "e",
    "a",
    "o",
    "os",
    "em",
    "na",
    "no",
    "uma",
    "nos",
    "um",
    "das",
    "dos",
    "as",
    "nas",
    "os",
    "com",
    "como",
    "por",
    "pelo",
    "pelos",
    "pela",
    "pelas",
    "é",
    "à",
    "dum",
    "num",
    "numa",
    "duma",
    "duns",
    "nuns",
    "nele",
    "numas",
    "dumas",
    "dele",
    "nela",
    "dela",
    "delas",
    "neles",
    "deles",
    "nelas",
    "deste",
    "neste",
    "neste",
    "disto",
    "nisto",
    "disso",
    "nesse",
    "desse",
    "nisso",
    "áquele",
    "praquele",
    "aquilo",
    "naquele",
    "daquele",
    "praquilo",
    "aquele",
    "daquilo",
    "naquilo",
  ];
  const [text, setText] = useState("");
  const [textArray, setArrayText] = useState("");

  useEffect(() => {
    tranformingText() 
  }, [text])

  // Transforming text into an array.
  const tranformingText = () => {
    const arrayTextWithoutTab = text.split("\n");
    const textWithoutTab = arrayTextWithoutTab.toString();
    const arrayTextSplited = cleaningArray(textWithoutTab.split(/[, " ]/));
    const textLowkey = arrayTextSplited.map((w) => {
      return w.toLowerCase();
    });
    setArrayText(textLowkey);
  };

  // Ordering the array.
  async function orderingText() {
    tranformingText();
    const filteredArray = await cleaningArray(textArray);
    // Ordering array.
    const orderedArray = filteredArray.sort((a, b) => a.localeCompare(b));
    // Calling redux.
    addOrdenedText(orderedArray);
    addText(text);
  }

  // Ordering the array merging the pronouns with the posterior word.
  const orderingTextWithPronouns = () => {
    tranformingText();
    const pronounsArray = [];
    // Filtering the pronouns;
    textArray.map((word, index) => {
      pronouns.map((p) => {
        if (p === word) {
          pronounsArray.push(word + " " + textArray[index + 1]);
        }
      });
    });
    // Filtering the words thar don't come before pronouns;
    const textWithoutPronouns = [];
    textWithoutPronouns.push(
      ...textArray.filter((word, index) => {
        if (
          word === "de" ||
          word === "da" ||
          word === "do" ||
          word === "e" ||
          word === "a" ||
          word === "o" ||
          word === "os" ||
          word === "em" ||
          word === "na" ||
          word === "no" ||
          word === "uma" ||
          word === "nos" ||
          word === "um" ||
          word === "das" ||
          word === "dos" ||
          word === "as" ||
          word === "nas" ||
          word === "os" ||
          word === "com" ||
          word === "como" ||
          word === "por" ||
          word === "pelo" ||
          word === "pelos" ||
          word === "pela" ||
          word === "pelas" ||
          word === "é" ||
          word === "à" ||
          word === "dum" ||
          word === "num" ||
          word === "numa" ||
          word === "duma" ||
          word === "duns" ||
          word === "nuns" ||
          word === "nele" ||
          word === "numas" ||
          word === "dumas" ||
          word === "dele" ||
          word === "nela" ||
          word === "dela" ||
          word === "delas" ||
          word === "neles" ||
          word === "deles" ||
          word === "nelas" ||
          word === "deste" ||
          word === "neste" ||
          word === "neste" ||
          word === "disto" ||
          word === "nisto" ||
          word === "disso" ||
          word === "nesse" ||
          word === "desse" ||
          word === "nisso" ||
          word === "áquele" ||
          word === "praquele" ||
          word === "aquilo" ||
          word === "naquele" ||
          word === "daquele" ||
          word === "praquilo" ||
          word === "aquele" ||
          word === "daquilo" ||
          word === "naquilo"
        ) {
          return null;
        } else if (
          textArray[index - 1] === "de" ||
          textArray[index - 1] === "da" ||
          textArray[index - 1] === "do" ||
          textArray[index - 1] === "e" ||
          textArray[index - 1] === "a" ||
          textArray[index - 1] === "o" ||
          textArray[index - 1] === "os" ||
          textArray[index - 1] === "em" ||
          textArray[index - 1] === "na" ||
          textArray[index - 1] === "no" ||
          textArray[index - 1] === "uma" ||
          textArray[index - 1] === "nos" ||
          textArray[index - 1] === "um" ||
          textArray[index - 1] === "das" ||
          textArray[index - 1] === "dos" ||
          textArray[index - 1] === "as" ||
          textArray[index - 1] === "nas" ||
          textArray[index - 1] === "os" ||
          textArray[index - 1] === "com" ||
          textArray[index - 1] === "como" ||
          textArray[index - 1] === "por" ||
          textArray[index - 1] === "pelo" ||
          textArray[index - 1] === "pelos" ||
          textArray[index - 1] === "pela" ||
          textArray[index - 1] === "pelas" ||
          textArray[index - 1] === "é" ||
          textArray[index - 1] === "à" ||
          textArray[index - 1] === "dum" ||
          textArray[index - 1] === "num" ||
          textArray[index - 1] === "numa" ||
          textArray[index - 1] === "duma" ||
          textArray[index - 1] === "duns" ||
          textArray[index - 1] === "nuns" ||
          textArray[index - 1] === "nele" ||
          textArray[index - 1] === "numas" ||
          textArray[index - 1] === "dumas" ||
          textArray[index - 1] === "dele" ||
          textArray[index - 1] === "nela" ||
          textArray[index - 1] === "dela" ||
          textArray[index - 1] === "delas" ||
          textArray[index - 1] === "neles" ||
          textArray[index - 1] === "deles" ||
          textArray[index - 1] === "nelas" ||
          textArray[index - 1] === "deste" ||
          textArray[index - 1] === "neste" ||
          textArray[index - 1] === "neste" ||
          textArray[index - 1] === "disto" ||
          textArray[index - 1] === "nisto" ||
          textArray[index - 1] === "disso" ||
          textArray[index - 1] === "nesse" ||
          textArray[index - 1] === "desse" ||
          textArray[index - 1] === "nisso" ||
          textArray[index - 1] === "áquele" ||
          textArray[index - 1] === "praquele" ||
          textArray[index - 1] === "aquilo" ||
          textArray[index - 1] === "naquele" ||
          textArray[index - 1] === "daquele" ||
          textArray[index - 1] === "praquilo" ||
          textArray[index - 1] === "aquele" ||
          textArray[index - 1] === "daquilo" ||
          textArray[index - 1] === "naquilo"
        ) {
          return null;
        } else {
          return word;
        }
      })
    );
    // Mergin the two arrays.
    const filteredArray = [];
    filteredArray.push(...textWithoutPronouns);
    filteredArray.push(...pronounsArray);
    // Ordering array.
    const orderedArray = filteredArray.sort((a, b) => a.localeCompare(b));
    // Calling redux.
    addOrdenedTextPronouns(orderedArray);
    addText(text);
  };

  // Taking away everything that isnt text.
  const cleaningArray = (array) => {
    const cleaningText = /([\w0-9êçãõâõÊÃÕÇÔéÊ])/;
    const cleanedText = array.map((word) => {
      if (cleaningText.test(word)) {
        return word;
      }
    });
    const cleanedArray = cleanedText.filter((elem) => {
      return elem !== undefined;
    });
    return cleanedArray;
  };

  return (
    <div className="form__container">
      <textarea
        className="form__inputText"
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o texto para ordenação"
      ></textarea>
      <div className="form__optionsContainer">
        <button
          className="form__button"
          onClick={() => {
            tranformingText();
            orderingText();
          }}
        >
          Ordenar sem juntar os pronomes
        </button>
        <button
          className="form__button"
          onClick={() => {
            tranformingText();
            orderingTextWithPronouns();
          }}
        >
          Ordenar juntando os pronomes
        </button>
        <button className="delete__button" onClick={() => {ereaseAll()}}>
          Apagar
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(textActions, dispatch);

export default connect(null, mapDispatchToProps)(Form);
