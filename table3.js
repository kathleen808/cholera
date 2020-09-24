var t3 = {
    "data": [
        {
            "mode": "markers",
            "type": "table",
            "columnwidth": [60, 100, 100, 100],
            "cells": {
                "align": [
                  "right", "right", "right", "right"
                ],
                "values": [
                    [
                        "0-9",
                        "10-19",
                        "20-29",
                        "30-39",
                        "40-49",
                        "50-59",
                        "60-69",
                        "70-79",
                        "80+",
                        "All"
                    ],
                    [
                        " 2,075,391 ",
                        " 1,711,664 ",
                        " 1,395,091 ",
                        " 1,073,914 ",
                        " 810,979 ",
                        " 560,534 ",
                        " 351,893 ",
                        " 166,194 ",
                        " 40,772 ",
                        " 8,186,432 "
                    ],
                    [
                        " 2,065,096 ",
                        " 1,711,627 ",
                        " 1,542,876 ",
                        " 1,140,383 ",
                        " 845,260 ",
                        " 592,970 ",
                        " 399,019 ",
                        " 199,326 ",
                        " 55,704 ",
                        " 8,552,261 "
                    ],
                    [
                        " 4,140,487 ",
                        " 3,423,291 ",
                        " 2,937,967 ",
                        " 2,214,297 ",
                        " 1,656,239 ",
                        " 1,153,504 ",
                        " 750,912 ",
                        " 365,520 ",
                        " 96,476 ",
                        " 16,738,693 "
                    ]
                ]
            },
            "header": {
                "fill": {
                    "color": "#989BA0"
                },
                "font": {
                  "color": "white"
                },
                "values": [
                    "Age",
                    "Male",
                    "Female",
                    "Total"
                ]
            }
        }
    ],
    "layout": {
        "font": {
            "family": "Assistant"
        },
        "title": {
            "x": 0.5,
            "font": {
                "size": 18,
                "family": "Oxygen"
            },
            "text": "1851 UK Census Data"
        },
        "xaxis": {
            "range": [ -1, 6 ],
            "autorange": true
        },
        "yaxis": {
            "range": [ -1, 4 ],
            "autorange": true
        },
        "autosize": true,
        "template": {
            "data": {
                "table": [
                    {
                        "type": "table",
                        "cells": {
                            "fill": {
                              "color": [ // mynote: cell color
                                "#F0F4FA", // age
                                "#DEFCF4", // male
                                "#FCE0E7", // female
                                "#F0F4FA"  // total
                              ]
                            },
                            "line": {
                                "color": "white"
                            },
                            "height": "25"
                        },
                        "header": {
                            "fill": {
                                "color": "#C8D4E3"
                            },
                            "line": {
                                "color": "white"
                            }
                        }
                    }
                ]
            },
            "layout": {
                "font": {
                    "color": "#2a3f5f"
                },
                "margin": { //mynote: padding
                    "b": 30,
                    "l": 80,
                    "r": 80,
                    "t": 80,
                    "pad": 0
                },
                "colorscale": { },
                "plot_bgcolor": "white",
                "paper_bgcolor": "white",
                "shapedefaults": {
                    "line": {
                        "width": 0
                    },
                    "opacity": 0.4,
                    "fillcolor": "#506784"
                },
                "annotationdefaults": {
                    "arrowhead": 0,
                    "arrowcolor": "#506784",
                    "arrowwidth": 1
                }
            },
            "themeRef": "PLOTLY_WHITE"
        }
    },
    "frames": []
}
