var g2 = {
    "data": [
        {
            "mode": "markers",
            "name": "Male",
            "type": "bar",
            "hoverlabel": {
                "namelength": -1,
                "bordercolor": "white",
            },
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
            "name": "Female",
            "type": "bar",
            "hoverlabel": {
                "namelength": -1,
                "bordercolor": "white",
            },
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
            "range": [ -0.5, 8.5 ],
            "title": {
                "text": "Age"
            },
            "autorange": true
        },
        "yaxis": {
            "type": "linear",
            "range": [ 0, 42 ],
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

            },
            "layout": {
                "font": {
                    "color": "#2a3f5f"
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
