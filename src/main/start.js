/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import launch from "./core/launch";
import "./core/slideinout.css"

const main = async () => {
  console.time("launch");
  await launch();
  console.timeEnd("launch");
};

main();
