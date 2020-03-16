// $flow


import * as R from "ramda";
import { faCarCrash, faHandPaper } from "@fortawesome/free-solid-svg-icons";

export const getReportIcon = R.cond([
    [
        R.equals("accident"),
        () => faCarCrash
    ],
    [
        R.equals("traffic stop"),
        () => faHandPaper
    ],
    [
        R.T,
        () => faHandPaper
    ]
]);