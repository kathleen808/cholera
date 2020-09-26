var g6 = {
    "data": [
        {
            "mode": "markers",
            "type": "pie",
            "rotation": -90,
            "hoverlabel": {
                "namelength": [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            },
            "hovertemplate": "<b>Age %{label}</b><br>%{percent}",
            "texttemplate": "<b>%{label}</b><br>%{percent}",
            "textfont": {
                "size": 14,
            },
            "direction": "clockwise",
            "labels": [
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
            "values": [
                "2065096",
                "1711627",
                "1542876",
                "1140383",
                "845260",
                "592970",
                "399019",
                "199326",
                "55704"
            ]
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
            "text": "1851 UK Female Age Distribution"
        },
        "legend": {
            "x": 0.875,
            "y": 0.8,
            // "traceorder": "reversed",
        },
        "margin": {
            "b": 50,
            "l": 30,
            "r": 50,
            "t": 80,
            "pad": 0
        },
        "autosize": true,
        "template": {
            "data": { },
            "layout": {
                "font": {
                    "color": "#2a3f5f"
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
        },
        "piecolorway": [
            "#FFDDD3",
            "#FFB4AB",
            "#FF8586",
            "#FC6173",
            "#F73E68",
            "#CA2E76",
            "#9A2075",
            "#681463",
            "#300935"
        ]
    },
    "frames": []
}
