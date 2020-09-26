var t3 = {
    "data": [
        {
            "mode": "markers",
            "type": "table",
            "columnwidth": [60, 100, 100, 100],
            "cells": {
                "align": "center",
                "font": {
                    "family": "Oxygen Mono",
                    "size": 12
                },
                "format": [
                    "",
                    "·>9,f",
                    "·>9,f",
                    "·>9,f",
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
                        "2075391",
                        "1711664",
                        "1395091",
                        "1073914",
                        "810979",
                        "560534",
                        "351893",
                        "166194",
                        "40772",
                        "8186432"
                    ],
                    [
                        "2065096",
                        "1711627",
                        "1542876",
                        "1140383",
                        "845260",
                        "592970",
                        "399019",
                        "199326",
                        "55704",
                        "8552261"
                    ],
                    [
                        "4140487",
                        "3423291",
                        "2937967",
                        "2214297",
                        "1656239",
                        "1153504",
                        "750912",
                        "365520",
                        "96476",
                        "16738693"
                    ]
                ]
            },
            "header": {
                "fill": {
                    "color": "#989BA0"
                },
                "font": {
                    "color": "white",
                    "family": "Assistant",
                    "size": 15,
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
                    "l": 50,
                    "r": 50,
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
