var t2 = {
    "data": [
        {
            "mode": "markers",
            "type": "table",
            "columnwidth": [10, 10, 10],
            "cells": {
                "align": "center",
                "font": {
                    "family": "Oxygen Mono",
                    "size": 12
                },
                "format": [
                    "",
                    " >4.1f",
                    " >4.1f",
                ],
                "values": [
                    [
                        "0-1",
                        "2-5",
                        "6-10",
                        "11-15",
                        "16-20",
                        "21-40",
                        "41-60",
                        "61-80",
                        "80+"
                    ],
                    [
                        "8.2",
                        "14.0",
                        "12.1",
                        "7.8",
                        "7.2",
                        "12.1",
                        "13.7",
                        "20.5",
                        "39.6"
                    ],
                    [
                        "8.9",
                        "14.7",
                        "11.2",
                        "7.1",
                        "7.2",
                        "11.8",
                        "12.9",
                        "20.5",
                        "37.8"
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
                "line": {
                    "width": 2
                },
                "values": [
                    "Age",
                    "Male",
                    "Female"
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
            "text": "1854 Cholera Fatalities in Napels"
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
                                    "#FCE0E7" // female
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
                "hovermode": "closest",
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
