var g2 = {
    "data": [
        {
            "meta": {
                "columnNames": {
                    "x": "age",
                    "y": "male"
                }
            },
            "mode": "markers",
            "name": "Male",
            "type": "bar",
            "xsrc": "kdy3:20:9d9d76",
            "x": [
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
            "ysrc": "kdy3:20:884325",
            "y": [
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
            "marker": {
                "color": "#28EBB5" // mynote: male color
            },
            "orientation": "v"
        },
        {
            "meta": {
                "columnNames": {
                    "x": "age",
                    "y": "female"
                }
            },
            "name": "Female",
            "type": "bar",
            "xsrc": "kdy3:20:9d9d76",
            "x": [
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
            "ysrc": "kdy3:20:3e66a8",
            "y": [
                "8.9",
                "14.7",
                "11.2",
                "7.1",
                "7.2",
                "11.8",
                "12.9",
                "20.5",
                "37.8"
            ],
            "marker": {
                "color": "#EB345D" // mynote: female color
            },
            "orientation": "v"
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
        "xaxis": {
            "type": "category",
            "range": [
                -0.5,
                8.5
            ],
            "title": {
                "text": "Age"
            },
            "autorange": true
        },
        "yaxis": {
            "type": "linear",
            "range": [
                0,
                41.684210526315795
            ],
            "title": {
                "text": "Deaths"
            },
            "autorange": true
        },
        "autosize": true,
        "template": {
            "data": {
                "bar": [
                    {
                        "type": "bar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "table": [
                    {
                        "type": "table",
                        "cells": {
                            "fill": {
                                "color": "#EBF0F8"
                            },
                            "line": {
                                "color": "white"
                            }
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
                ],
                "carpet": [
                    {
                        "type": "carpet",
                        "aaxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        },
                        "baxis": {
                            "gridcolor": "#C8D4E3",
                            "linecolor": "#C8D4E3",
                            "endlinecolor": "#2a3f5f",
                            "minorgridcolor": "#C8D4E3",
                            "startlinecolor": "#2a3f5f"
                        }
                    }
                ],
                "mesh3d": [
                    {
                        "type": "mesh3d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "contour": [
                    {
                        "type": "contour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "heatmap": [
                    {
                        "type": "heatmap",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatter": [
                    {
                        "type": "scatter",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "surface": [
                    {
                        "type": "surface",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "heatmapgl": [
                    {
                        "type": "heatmapgl",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "histogram": [
                    {
                        "type": "histogram",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "parcoords": [
                    {
                        "line": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        },
                        "type": "parcoords"
                    }
                ],
                "scatter3d": [
                    {
                        "type": "scatter3d",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattergl": [
                    {
                        "type": "scattergl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "choropleth": [
                    {
                        "type": "choropleth",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattergeo": [
                    {
                        "type": "scattergeo",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2d": [
                    {
                        "type": "histogram2d",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ],
                "scatterpolar": [
                    {
                        "type": "scatterpolar",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "contourcarpet": [
                    {
                        "type": "contourcarpet",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        }
                    }
                ],
                "scattercarpet": [
                    {
                        "type": "scattercarpet",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scattermapbox": [
                    {
                        "type": "scattermapbox",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterpolargl": [
                    {
                        "type": "scatterpolargl",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "scatterternary": [
                    {
                        "type": "scatterternary",
                        "marker": {
                            "colorbar": {
                                "ticks": "",
                                "outlinewidth": 0
                            }
                        }
                    }
                ],
                "histogram2dcontour": [
                    {
                        "type": "histogram2dcontour",
                        "colorbar": {
                            "ticks": "",
                            "outlinewidth": 0
                        },
                        "autocolorscale": true
                    }
                ]
            },
            "layout": {
                "geo": {
                    "bgcolor": "white",
                    "showland": true,
                    "lakecolor": "white",
                    "landcolor": "white",
                    "showlakes": true,
                    "subunitcolor": "#C8D4E3"
                },
                "font": {
                    "color": "#2a3f5f"
                },
                "polar": {
                    "bgcolor": "white",
                    "radialaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    },
                    "angularaxis": {
                        "ticks": "",
                        "gridcolor": "#EBF0F8",
                        "linecolor": "#EBF0F8"
                    }
                },
                "scene": {
                    "xaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "yaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    },
                    "zaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "gridwidth": 2,
                        "linecolor": "#EBF0F8",
                        "zerolinecolor": "#EBF0F8",
                        "showbackground": true,
                        "backgroundcolor": "white"
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "ticks": "",
                    "gridcolor": "#EBF0F8",
                    "linecolor": "#EBF0F8",
                    "automargin": true,
                    "zerolinecolor": "#EBF0F8",
                    "zerolinewidth": 2
                },
                "ternary": {
                    "aaxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "baxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "caxis": {
                        "ticks": "",
                        "gridcolor": "#DFE8F3",
                        "linecolor": "#A2B1C6"
                    },
                    "bgcolor": "white"
                },
                "colorway": [
                    "#636efa",
                    "#EF553B",
                    "#00cc96",
                    "#ab63fa",
                    "#19d3f3",
                    "#e763fa",
                    "#fecb52",
                    "#ffa15a",
                    "#ff6692",
                    "#b6e880"
                ],
                "hovermode": "closest",
                "colorscale": {
                    "diverging": [
                        [
                            0,
                            "#8e0152"
                        ],
                        [
                            0.1,
                            "#c51b7d"
                        ],
                        [
                            0.2,
                            "#de77ae"
                        ],
                        [
                            0.3,
                            "#f1b6da"
                        ],
                        [
                            0.4,
                            "#fde0ef"
                        ],
                        [
                            0.5,
                            "#f7f7f7"
                        ],
                        [
                            0.6,
                            "#e6f5d0"
                        ],
                        [
                            0.7,
                            "#b8e186"
                        ],
                        [
                            0.8,
                            "#7fbc41"
                        ],
                        [
                            0.9,
                            "#4d9221"
                        ],
                        [
                            1,
                            "#276419"
                        ]
                    ],
                    "sequential": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ],
                    "sequentialminus": [
                        [
                            0,
                            "#0508b8"
                        ],
                        [
                            0.0893854748603352,
                            "#1910d8"
                        ],
                        [
                            0.1787709497206704,
                            "#3c19f0"
                        ],
                        [
                            0.2681564245810056,
                            "#6b1cfb"
                        ],
                        [
                            0.3575418994413408,
                            "#981cfd"
                        ],
                        [
                            0.44692737430167595,
                            "#bf1cfd"
                        ],
                        [
                            0.5363128491620112,
                            "#dd2bfd"
                        ],
                        [
                            0.6256983240223464,
                            "#f246fe"
                        ],
                        [
                            0.7150837988826816,
                            "#fc67fd"
                        ],
                        [
                            0.8044692737430168,
                            "#fe88fc"
                        ],
                        [
                            0.8938547486033519,
                            "#fea5fd"
                        ],
                        [
                            0.9832402234636871,
                            "#febefe"
                        ],
                        [
                            1,
                            "#fec3fe"
                        ]
                    ]
                },
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
