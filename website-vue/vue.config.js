// vue.config.js

module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "artifactName": "richard-kneale-portfolio.exe",
                "win": {
                    "target": [
                        {
                            "target": "nsis",
                            "arch": [
                                "x64"
                            ]
                        }
                    ]
                }
            }
        }
    }
}