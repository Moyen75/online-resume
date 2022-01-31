import React from 'react';
import SkillBar from 'react-skillbars'

const Skills = () => {
    const skill = [
        {
            "type": "HTML5",
            "level": 90,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        },
        {
            "type": "CSS3",
            "level": 85,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        },
        {
            "type": "Javascript",
            "level": 75,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        }
        ,
        {
            "type": "React",
            "level": 85,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        },
        {
            "type": "Node js",
            "level": 75,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        },
        {
            "type": "Express.js",
            "level": 80,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        },
        {
            "type": "Firebase",
            "level": 60,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        },
        {
            "type": "Mongodb",
            "level": 80,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        },
        {
            "type": "Material Ui",
            "level": 85,
            "color": {
                "bar": "#3498db",
                "title": {
                    "background": "#2980b9"
                }
            }
        }
    ];
    const colors = {
        "bar": "#3498db"
    }
    return (
        <div>
            <SkillBar skills={skill} colors={colors}></SkillBar>
        </div>
    );
};

export default Skills;