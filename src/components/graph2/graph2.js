// @flow

import React from "react";
import "./graph2.css";
import { ResponsiveHeatMap } from "@nivo/heatmap";


const data = [
    {
        "country": "AD",
        "hot dog": 56,
        "hot dogColor": "hsl(318, 70%, 50%)",
        "burger": 100,
        "burgerColor": "hsl(204, 70%, 50%)",
        "sandwich": 56,
        "sandwichColor": "hsl(194, 70%, 50%)",
        "kebab": 80,
        "kebabColor": "hsl(269, 70%, 50%)",
        "fries": 49,
        "friesColor": "hsl(62, 70%, 50%)",
        "donut": 31,
        "donutColor": "hsl(89, 70%, 50%)",
        "junk": 91,
        "junkColor": "hsl(279, 70%, 50%)",
        "sushi": 69,
        "sushiColor": "hsl(290, 70%, 50%)",
        "ramen": 58,
        "ramenColor": "hsl(284, 70%, 50%)",
        "curry": 30,
        "curryColor": "hsl(346, 70%, 50%)",
        "udon": 41,
        "udonColor": "hsl(333, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 58,
        "hot dogColor": "hsl(115, 70%, 50%)",
        "burger": 11,
        "burgerColor": "hsl(204, 70%, 50%)",
        "sandwich": 20,
        "sandwichColor": "hsl(21, 70%, 50%)",
        "kebab": 68,
        "kebabColor": "hsl(147, 70%, 50%)",
        "fries": 47,
        "friesColor": "hsl(281, 70%, 50%)",
        "donut": 74,
        "donutColor": "hsl(233, 70%, 50%)",
        "junk": 10,
        "junkColor": "hsl(71, 70%, 50%)",
        "sushi": 18,
        "sushiColor": "hsl(246, 70%, 50%)",
        "ramen": 26,
        "ramenColor": "hsl(161, 70%, 50%)",
        "curry": 62,
        "curryColor": "hsl(199, 70%, 50%)",
        "udon": 56,
        "udonColor": "hsl(53, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 10,
        "hot dogColor": "hsl(253, 70%, 50%)",
        "burger": 11,
        "burgerColor": "hsl(187, 70%, 50%)",
        "sandwich": 25,
        "sandwichColor": "hsl(115, 70%, 50%)",
        "kebab": 43,
        "kebabColor": "hsl(179, 70%, 50%)",
        "fries": 71,
        "friesColor": "hsl(301, 70%, 50%)",
        "donut": 2,
        "donutColor": "hsl(98, 70%, 50%)",
        "junk": 8,
        "junkColor": "hsl(185, 70%, 50%)",
        "sushi": 63,
        "sushiColor": "hsl(288, 70%, 50%)",
        "ramen": 81,
        "ramenColor": "hsl(274, 70%, 50%)",
        "curry": 79,
        "curryColor": "hsl(160, 70%, 50%)",
        "udon": 64,
        "udonColor": "hsl(200, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 62,
        "hot dogColor": "hsl(197, 70%, 50%)",
        "burger": 4,
        "burgerColor": "hsl(342, 70%, 50%)",
        "sandwich": 55,
        "sandwichColor": "hsl(54, 70%, 50%)",
        "kebab": 45,
        "kebabColor": "hsl(129, 70%, 50%)",
        "fries": 26,
        "friesColor": "hsl(300, 70%, 50%)",
        "donut": 41,
        "donutColor": "hsl(147, 70%, 50%)",
        "junk": 49,
        "junkColor": "hsl(174, 70%, 50%)",
        "sushi": 1,
        "sushiColor": "hsl(27, 70%, 50%)",
        "ramen": 81,
        "ramenColor": "hsl(243, 70%, 50%)",
        "curry": 39,
        "curryColor": "hsl(48, 70%, 50%)",
        "udon": 88,
        "udonColor": "hsl(59, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 32,
        "hot dogColor": "hsl(318, 70%, 50%)",
        "burger": 66,
        "burgerColor": "hsl(72, 70%, 50%)",
        "sandwich": 80,
        "sandwichColor": "hsl(297, 70%, 50%)",
        "kebab": 50,
        "kebabColor": "hsl(105, 70%, 50%)",
        "fries": 29,
        "friesColor": "hsl(147, 70%, 50%)",
        "donut": 14,
        "donutColor": "hsl(286, 70%, 50%)",
        "junk": 21,
        "junkColor": "hsl(101, 70%, 50%)",
        "sushi": 95,
        "sushiColor": "hsl(36, 70%, 50%)",
        "ramen": 79,
        "ramenColor": "hsl(169, 70%, 50%)",
        "curry": 89,
        "curryColor": "hsl(29, 70%, 50%)",
        "udon": 41,
        "udonColor": "hsl(31, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 99,
        "hot dogColor": "hsl(185, 70%, 50%)",
        "burger": 40,
        "burgerColor": "hsl(247, 70%, 50%)",
        "sandwich": 100,
        "sandwichColor": "hsl(336, 70%, 50%)",
        "kebab": 6,
        "kebabColor": "hsl(159, 70%, 50%)",
        "fries": 87,
        "friesColor": "hsl(136, 70%, 50%)",
        "donut": 95,
        "donutColor": "hsl(335, 70%, 50%)",
        "junk": 33,
        "junkColor": "hsl(17, 70%, 50%)",
        "sushi": 97,
        "sushiColor": "hsl(108, 70%, 50%)",
        "ramen": 27,
        "ramenColor": "hsl(275, 70%, 50%)",
        "curry": 17,
        "curryColor": "hsl(295, 70%, 50%)",
        "udon": 69,
        "udonColor": "hsl(359, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 74,
        "hot dogColor": "hsl(347, 70%, 50%)",
        "burger": 68,
        "burgerColor": "hsl(36, 70%, 50%)",
        "sandwich": 9,
        "sandwichColor": "hsl(203, 70%, 50%)",
        "kebab": 64,
        "kebabColor": "hsl(274, 70%, 50%)",
        "fries": 81,
        "friesColor": "hsl(200, 70%, 50%)",
        "donut": 19,
        "donutColor": "hsl(277, 70%, 50%)",
        "junk": 74,
        "junkColor": "hsl(141, 70%, 50%)",
        "sushi": 1,
        "sushiColor": "hsl(226, 70%, 50%)",
        "ramen": 73,
        "ramenColor": "hsl(190, 70%, 50%)",
        "curry": 5,
        "curryColor": "hsl(213, 70%, 50%)",
        "udon": 90,
        "udonColor": "hsl(269, 70%, 50%)"
    },
    {
        "country": "AO",
        "hot dog": 37,
        "hot dogColor": "hsl(55, 70%, 50%)",
        "burger": 5,
        "burgerColor": "hsl(20, 70%, 50%)",
        "sandwich": 88,
        "sandwichColor": "hsl(247, 70%, 50%)",
        "kebab": 66,
        "kebabColor": "hsl(250, 70%, 50%)",
        "fries": 68,
        "friesColor": "hsl(11, 70%, 50%)",
        "donut": 4,
        "donutColor": "hsl(1, 70%, 50%)",
        "junk": 73,
        "junkColor": "hsl(71, 70%, 50%)",
        "sushi": 48,
        "sushiColor": "hsl(46, 70%, 50%)",
        "ramen": 92,
        "ramenColor": "hsl(243, 70%, 50%)",
        "curry": 15,
        "curryColor": "hsl(156, 70%, 50%)",
        "udon": 41,
        "udonColor": "hsl(276, 70%, 50%)"
    },
    {
        "country": "AQ",
        "hot dog": 83,
        "hot dogColor": "hsl(229, 70%, 50%)",
        "burger": 2,
        "burgerColor": "hsl(116, 70%, 50%)",
        "sandwich": 84,
        "sandwichColor": "hsl(97, 70%, 50%)",
        "kebab": 65,
        "kebabColor": "hsl(262, 70%, 50%)",
        "fries": 34,
        "friesColor": "hsl(107, 70%, 50%)",
        "donut": 21,
        "donutColor": "hsl(187, 70%, 50%)",
        "junk": 35,
        "junkColor": "hsl(15, 70%, 50%)",
        "sushi": 88,
        "sushiColor": "hsl(311, 70%, 50%)",
        "ramen": 40,
        "ramenColor": "hsl(240, 70%, 50%)",
        "curry": 19,
        "curryColor": "hsl(18, 70%, 50%)",
        "udon": 93,
        "udonColor": "hsl(316, 70%, 50%)"
    }
];

export const Graph2 = () => (
        <ResponsiveHeatMap
            data={ data }
            keys={ [
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut",
                "junk",
                "sushi",
                "ramen",
                "curry",
                "udon"
            ] }
            indexBy="country"
            margin={ { top: 10, right: 10, bottom: 10, left: 10 } }
            forceSquare={ true }
            axisTop={ { orient: "top", tickSize: 5, tickPadding: 5, tickRotation: -90, legend: "", legendOffset: 36 } }
            axisRight={ null }
            axisBottom={ null }
            axisLeft={ {
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: -40
            } }
            cellOpacity={ 1 }
            cellBorderColor={ { from: "color", modifiers: [["darker", 0.4]] } }
            labelTextColor={ { from: "color", modifiers: [["darker", 1.8]] } }
            defs={ [
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(0, 0, 0, 0.1)",
                    rotation: -45,
                    lineWidth: 4,
                    spacing: 7
                }
            ] }
            fill={ [{ id: "lines" }] }
            animate={ true }
            motionStiffness={ 80 }
            motionDamping={ 9 }
            hoverTarget="cell"
            cellHoverOthersOpacity={ 0.25 }
        />
);