/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

export default {
  shortWordLength: 2,
  cutShortWordDescription: 30,
  parseWordsLimit: 8,
  lookupWithCapitalized: false,
  initialPosition: "right",
  scroll: "scroll",
  skipPdfConfirmation: false,
  pdfUrl: "",
  backgroundColor: "#ffffff",
  headFontColor: "#000088",
  descFontColor: "#101010",
  headFontSize: "medium",
  descFontSize: "small",

  width: 350,
  height: 300,

  replaceRules: [
    {
      search: "(■.+|◆.+)",
      replace: '<span style="{{cssReset}};color:#008000;font-size:100%;">$1</span>',
    },
    {
      search: "({.+?}|\\[.+?\\]|\\(.+?\\))",
      replace: '<span style="{{cssReset}};color:#008000;font-size:100%;">$1</span>',
    },
    {
      search: "(【.+?】|《.+?》|〈.+?〉|〔.+?〕)",
      replace: '<span style="{{cssReset}};color:#008000;font-size:100%;">$1</span>',
    },
    {
      search: "\\n|\\\\n",
      replace: "<br/>",
    },
  ],

  normalDialogStyles: `{
  "opacity": 1,
  "zIndex": 2147483647
}`,

  movingDialogStyles: `{
  "opacity": 0.6
}`,

  hiddenDialogStyles: `{
  "opacity": 0.0,
  "zIndex": -1
}`,

  contentWrapperTemplate: `<div style="margin:0;padding:10px;border:0;vertical-align:baseline;text-align:left;overflow-y:scroll;height:calc(100% - 60px);" class="td-nolookup">
</div>`,

  dialogTemplate: `<div class="notranslate"
     style="all:initial;
            {{systemStyles}}
            width: 100%;
            height: {{height}}px;
            position: fixed;
            overflow-x: hidden;
            overflow-y: hidden;
            bottom: 0px;
            margin: auto;
            background-color: {{backgroundColor}};
            z-index: 2147483646;
            padding: 0px;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);">
</div>`,

  contentTemplate: `<div style="{{cssReset}};font-family:'hiragino kaku gothic pro', meiryo, sans-serif;" class="td-nolookup">
  {{#words}}
    {{^isShort}}
      <span style="{{cssReset}};font-size:{{headFontSize}};color:{{headFontColor}};font-weight:bold;">
        <a href="https://www.google.com/search?q=define+{{head}}" target="_blank" style="text-decoration:none;color:{{headFontColor}}">{{head}}</a>
      </span>
      <br/>
      <span style="{{cssReset}};font-size:{{descFontSize}};color:{{descFontColor}};">
        {{{desc}}}
      </span>
    {{/isShort}}
    {{#isShort}}
      <span style="{{cssReset}};font-size:{{headFontSize}};color:{{headFontColor}};font-weight:bold;">
        <a href="https://www.google.com/search?q=define+{{head}}" target="_blank" style="text-decoration:none;color:{{headFontColor}}">{{head}}</a>
      </span>
      <span style="{{cssReset}};color:#505050;font-size:x-small;">
        {{shortDesc}}
      </span>
    {{/isShort}}
    <br/>
    <span style="display: flex; justify-content: space-between; margin-top: 10px" class="td-nolookup">
      <a href="https://dictionary.cambridge.org/dictionary/english/{{head}}" target="_blank" style="text-decoration:none;color:{{headFontColor}}" class="td-nolookup">🧡</a>
      <a href="https://www.lexico.com/definition/{{head}}" target="_blank" style="text-decoration:none;color:{{headFontColor}}" class="td-nolookup">💚</a>
      <a href="http://www.freecollocation.com/search?word={{head}}" target="_blank" style="text-decoration:none;" class="td-nolookup">🍪</a>
      <a href="https://www.thesaurus.com/browse/{{head}}" target="_blank" style="text-decoration:none;" class="td-nolookup">🍩</a>
      <a href="https://skell.sketchengine.eu/#result?lang=en&f=concordance&query={{head}}" target="_blank" style="text-decoration:none;" class="td-nolookup">🍮</a>
      <a href="https://www.etymonline.com/word/{{head}}" target="_blank" style="text-decoration:none;" class="td-nolookup">🌊</a>
      <a href="https://www.google.com/search?q={{head}}&hl=en&tbm=isch" target="_blank" style="text-decoration:none;" class="td-nolookup">📷</a>
      <span style="cursor:pointer;" data-md-pronunciation="{{head}}" class="td-nolookup">🔊</span>
    </span>
    <hr style="border:0;border-top:1px solid #E0E0E0;margin:10px 0;height:1px;width:100%;" />
  {{/words}}
</div>`,
};
