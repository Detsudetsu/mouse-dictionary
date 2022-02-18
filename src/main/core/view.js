/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import dom from "../lib/dom";
import template from "../lib/template";

const STYLES_SCROLL = "border-radius: 5px 0px 0px 5px;";
const STYLES_NORMAL = "border-radius: 5px 5px 5px 5px;";
const STYLES_BOTTOM = "border-radius: 5px 5px 0px 0px;";

const createDialogElement = (settings) => {
  // const systemStyles = settings.scroll === "scroll" ? STYLES_SCROLL : STYLES_NORMAL;
  const systemStyles = STYLES_BOTTOM;

  const html = template.render(settings.dialogTemplate, {
    systemStyles,
    backgroundColor: settings.backgroundColor,
    width: settings.width,
    height: settings.height,
    scroll: settings.scroll,
  });
  const dialog = dom.create(html);
  dom.applyStyles(dialog, settings.normalDialogStyles);
  return dialog;
};

const create = (settings) => {
  const dialog = createDialogElement(settings);

  const newDiv = document.createElement("div");
  newDiv.style.top = "5px";
  // newDiv.style.backgroundColor = "aliceblue";
  const handleBar = document.createElement("div");
  handleBar.style.backgroundColor = "whitesmoke";
  handleBar.style.padding = "3px";
  handleBar.style.margin = "10px 45%";
  handleBar.style.borderRadius = "5px";
  newDiv.appendChild(handleBar);
  const header = document.createElement("div");
  header.style.textAlign = "center";
  header.style.marginBottom = "5px";
  header.style.fontFamily = "sans-serif";
  header.style.fontVariantCaps = "all-petite-caps";
  header.style.fontWeight = "bold";
  header.textContent = "Tap Dictionary";
  newDiv.appendChild(header);
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
  @keyframes standby {
    from {
      height: 50vh
    }
  
    to {
      height: 15vh;
    }
  }`, styleSheet.cssRules.length);
  styleSheet.insertRule(`
  @keyframes slide {
    from {
      height: 15vh;
    }
  
    to {
      height: 50vh;
    }
  }`, styleSheet.cssRules.length);
  styleSheet.insertRule(`
  .standby {
    animation: .2s ease 0s forwards standby !important;
  }`, styleSheet.cssRules.length);
  styleSheet.insertRule(`
  .slide {
    animation: .2s ease 0s forwards slide !important;
  }`, styleSheet.cssRules.length);
  newDiv.addEventListener("touchstart", e => {
    if (dialog.classList.contains("slide")) {
      dialog.classList.replace("slide", "standby");
    } else {
      dialog.classList.replace("standby", "slide");
    }
    // prevent an element beneath the handle bar from being tapped
    // not to tap an unintentional link or word
    e.preventDefault();
  });
  dialog.classList.add("slide")
  dialog.appendChild(newDiv);
  

  const content = dom.create(settings.contentWrapperTemplate);
  dialog.appendChild(content);
  return { dialog, content };
};

export default { create };
