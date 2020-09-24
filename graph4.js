var g4 = {
    "data": [
        {
            "mode": "markers",
            "type": "pie",
            "hoverlabel": {
              "namelength": -1,
              "bordercolor": "white",
            },
            "marker": {
                "line": {
                    "color": "rgb(255, 255, 255)",
                    "width": 1
                }
            },
            "rotation": 60,
            "textinfo": "label+value+percent",
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
            "#EB345D", // mynote: female color
            "#28EBB5"  // mynote: male color
        ]
    },
    "frames": []
}
