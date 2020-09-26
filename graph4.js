var g4 = {
    "data": [
        {
            "mode": "markers",
            "type": "pie",
            "rotation": 60,
            "hoverlabel": {
                "namelength": [ 0, 0 ],
                "bordercolor": "white",
                "font": {
                    "color": [
                        "#143938",
                        "white"
                    ],
                }
            },
            "hovertemplate": "<b>%{label}</b><br>%{value}<br>%{percent}",
            "texttemplate": "<b>%{label}</b><br>%{value}<br>%{percent}",
            "textfont": {
                "size": 14,
            },
            "direction": "clockwise",
            "labels": [
                "Male",
                "Female"
            ],
            "values": [
                "8186432",
                "8552261"
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
            "text": "1851 UK Population Gender Distribution"
        },
        "showlegend": false,
        "legend": {
            "x": 0.85,
            "y": 0.95
        },
        "margin": {
            "b": 50,
            "l": 50,
            "r": 50,
            "t": 80,
            "pad": 0
        },
        "autosize": true,
        "template": {
            "data": { },
            "layout": {
                "font": {
                    "color": "#143938",
                    "size": 12,
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
            "#EB345D", // mynote: female color
            "#28EBB5"  // mynote: male color
        ]
    },
    "frames": []
}
