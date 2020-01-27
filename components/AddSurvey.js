import React, { useState, useEffect } from "react";

import styled from "styled-components";
import useInput from "./hooks/useInput";

import OneChoice from "./survey/make/OneChoice";
import MultyChoice from "./survey/make/MultyChoice";
import Step from "./survey/make/Step";
function GridChoice({ index, writeSurvey, data }) {
  return <></>;
}

function ShortAnswer({ index, writeSurvey, data }) {
  return <></>;
}

export { MultyChoice, GridChoice, OneChoice, ShortAnswer, Step };
