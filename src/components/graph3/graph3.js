// @flow

import React from "react";
import "./graph3.css";
import { ResponsiveLine } from "@nivo/line";


const data = [
    {
        "id": "japan",
        "color": "hsl(324, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 69
            },
            {
                "x": "helicopter",
                "y": 123
            },
            {
                "x": "boat",
                "y": 285
            },
            {
                "x": "train",
                "y": 158
            },
            {
                "x": "subway",
                "y": 26
            },
            {
                "x": "bus",
                "y": 70
            },
            {
                "x": "car",
                "y": 118
            },
            {
                "x": "moto",
                "y": 121
            },
            {
                "x": "bicycle",
                "y": 195
            },
            {
                "x": "horse",
                "y": 82
            },
            {
                "x": "skateboard",
                "y": 204
            },
            {
                "x": "others",
                "y": 217
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(4, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 98
            },
            {
                "x": "helicopter",
                "y": 297
            },
            {
                "x": "boat",
                "y": 182
            },
            {
                "x": "train",
                "y": 246
            },
            {
                "x": "subway",
                "y": 246
            },
            {
                "x": "bus",
                "y": 26
            },
            {
                "x": "car",
                "y": 60
            },
            {
                "x": "moto",
                "y": 229
            },
            {
                "x": "bicycle",
                "y": 127
            },
            {
                "x": "horse",
                "y": 90
            },
            {
                "x": "skateboard",
                "y": 165
            },
            {
                "x": "others",
                "y": 112
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(300, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 267
            },
            {
                "x": "helicopter",
                "y": 254
            },
            {
                "x": "boat",
                "y": 261
            },
            {
                "x": "train",
                "y": 227
            },
            {
                "x": "subway",
                "y": 103
            },
            {
                "x": "bus",
                "y": 104
            },
            {
                "x": "car",
                "y": 96
            },
            {
                "x": "moto",
                "y": 223
            },
            {
                "x": "bicycle",
                "y": 73
            },
            {
                "x": "horse",
                "y": 284
            },
            {
                "x": "skateboard",
                "y": 268
            },
            {
                "x": "others",
                "y": 238
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(286, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 83
            },
            {
                "x": "helicopter",
                "y": 254
            },
            {
                "x": "boat",
                "y": 297
            },
            {
                "x": "train",
                "y": 225
            },
            {
                "x": "subway",
                "y": 260
            },
            {
                "x": "bus",
                "y": 60
            },
            {
                "x": "car",
                "y": 225
            },
            {
                "x": "moto",
                "y": 56
            },
            {
                "x": "bicycle",
                "y": 197
            },
            {
                "x": "horse",
                "y": 263
            },
            {
                "x": "skateboard",
                "y": 29
            },
            {
                "x": "others",
                "y": 137
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(281, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 83
            },
            {
                "x": "helicopter",
                "y": 110
            },
            {
                "x": "boat",
                "y": 110
            },
            {
                "x": "train",
                "y": 60
            },
            {
                "x": "subway",
                "y": 148
            },
            {
                "x": "bus",
                "y": 228
            },
            {
                "x": "car",
                "y": 12
            },
            {
                "x": "moto",
                "y": 6
            },
            {
                "x": "bicycle",
                "y": 187
            },
            {
                "x": "horse",
                "y": 150
            },
            {
                "x": "skateboard",
                "y": 222
            },
            {
                "x": "others",
                "y": 77
            }
        ]
    }
];

export const Graph3 = () => (
    <ResponsiveLine
        data={ data }
        margin={ { top: 50, right: 110, bottom: 50, left: 60 } }
        xScale={ { type: "point" } }
        yScale={ { type: "linear", min: "auto", max: "auto", stacked: true, reverse: false } }
        axisTop={ null }
        axisRight={ null }
        axisBottom={ {
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle"
        } }
        axisLeft={ {
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle"
        } }
        colors={ { scheme: "nivo" } }
        pointSize={ 10 }
        pointColor={ { theme: "background" } }
        pointBorderWidth={ 2 }
        pointBorderColor={ { from: "serieColor" } }
        pointLabel="y"
        pointLabelYOffset={ -12 }
        useMesh={ true }
        legends={ [
            {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ] }
    />
);