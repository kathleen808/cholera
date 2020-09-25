var g3 = {
    "data": [
        {
            "mode": "markers",
            "name": "Male",
            "type": "bar",
            "marker": {
                "color": "#28EBB5" // mynote: male color
            },
            "hoverlabel": {
                "namelength": 0,
                "bordercolor": "white",
                "font": {
                    "color": "#143938",
                }
            },
            "hovertemplate": "Age: %{x}<br>Male Population: %{y}",
            "x": [
                "0-9",
                "10-19",
                "20-29",
                "30-39",
                "40-49",
                "50-59",
                "60-69",
                "70-79",
                "80+"
            ],
            "y": [
                "2075391",
                "1711664",
                "1395091",
                "1073914",
                "810979",
                "560534",
                "351893",
                "166194",
                "40772"
            ],
            "orientation": "v"
        },
        {
            "name": "Female",
            "type": "bar",
            "hoverlabel": {
                "namelength": 0,
                "bordercolor": "white",
                "font": {
                    "color": "white",
                }
            },
            "hovertemplate": "Age: %{x}<br>Female Population: %{y}",
            "x": [
                "0-9",
                "10-19",
                "20-29",
                "30-39",
                "40-49",
                "50-59",
                "60-69",
                "70-79",
                "80+"
            ],
            "y": [
                "2065096",
                "1711627",
                "1542876",
                "1140383",
                "845260",
                "592970",
                "399019",
                "199326",
                "55704"
            ],
            "marker": {
                "color": "#EB345D" // mynote: female color
            },
            "hoverinfo": "y+name",
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
                "family": "Oxygen"
            },
            "text": "1851 UK Census Data"
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
            "range": [ 0, 2184622.15 ],
            "title": {
                "text": "Number of Responses"
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
                ]
            },
            "layout": {
                "font": {
                    "color": "#2a3f5f"
                },
                "legend": {
                    "x": 1,
                    "y": 0.8
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
